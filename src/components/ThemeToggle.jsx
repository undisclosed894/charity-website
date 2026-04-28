import { Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-muted hover:bg-accent border border-border"
      title={`Switch to ${theme === 'current' ? 'Professional' : 'Warm'} Theme`}
    >
      <Palette className="w-4 h-4" />
      <span className="hidden sm:inline">
        {theme === 'current' ? 'Warm' : 'Professional'}
      </span>
    </button>
  );
}