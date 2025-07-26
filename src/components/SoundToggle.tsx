import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SoundToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const SoundToggle = ({ isEnabled, onToggle }: SoundToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="fixed bottom-6 left-6 z-50 bg-card/80 backdrop-blur-sm border-neon-blue/30 hover:border-neon-blue/50 transition-all duration-300"
      title={isEnabled ? 'Desactivar sonido de motor' : 'Activar sonido de motor'}
    >
      {isEnabled ? (
        <Volume2 className="h-4 w-4 text-neon-blue" />
      ) : (
        <VolumeX className="h-4 w-4 text-muted-foreground" />
      )}
      <span className="ml-2 text-xs">
        {isEnabled ? 'Motor ON' : 'Motor OFF'}
      </span>
    </Button>
  );
};

export default SoundToggle;
