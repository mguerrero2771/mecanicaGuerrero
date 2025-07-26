import { useEffect, useRef, useState } from 'react';

interface UseScrollSoundOptions {
  audioUrl: string;
  throttleMs?: number;
  volume?: number;
  minScrollDelta?: number;
}

export const useScrollSound = ({
  audioUrl,
  throttleMs = 100,
  volume = 0.3,
  minScrollDelta = 50
}: UseScrollSoundOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastScrollY = useRef(0);
  const throttleTimer = useRef<NodeJS.Timeout | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Crear el elemento de audio
    audioRef.current = new Audio(audioUrl);
    audioRef.current.volume = volume;
    audioRef.current.preload = 'auto';

    // Función para reproducir el sonido
    const playSound = () => {
      if (audioRef.current && isEnabled) {
        // Reiniciar el audio si ya está reproduciéndose
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(console.error);
      }
    };

    // Función de scroll con throttle
    const handleScroll = () => {
      if (throttleTimer.current) return;

      throttleTimer.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

        // Solo reproducir si el scroll es significativo
        if (scrollDelta > minScrollDelta) {
          playSound();
        }

        lastScrollY.current = currentScrollY;
        throttleTimer.current = null;
      }, throttleMs);
    };

    // Agregar event listener
    if (isEnabled) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
      }
    };
  }, [audioUrl, throttleMs, volume, minScrollDelta, isEnabled]);

  // Función para habilitar/deshabilitar el sonido
  const toggleSound = () => setIsEnabled(!isEnabled);

  return {
    isEnabled,
    toggleSound,
    setIsEnabled
  };
};
