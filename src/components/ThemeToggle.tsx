import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  id?: string;
  showLabel?: boolean;
  className?: string;
}

export function ThemeToggle({
  id = 'theme-toggle-btn',
  showLabel = false,
  className = '',
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center rounded-full transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-amber-400 ${
        showLabel
          ? 'px-3.5 py-2 gap-2 text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 shadow-sm'
          : 'p-2 w-9 h-9 bg-slate-800/80 hover:bg-slate-750 text-slate-200 border border-slate-700/80 shadow-sm hover:text-amber-400'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-sky-500" />
        )}
      </motion.div>

      {showLabel && (
        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      )}
    </button>
  );
}
