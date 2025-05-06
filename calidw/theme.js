/**
 * Cali Doors and Windows Theme Colors
 * 
 * This file serves as documentation for the website's color scheme and button styles.
 * Use these values when creating or updating components to maintain a consistent look.
 */

const theme = {
  colors: {
    // Primary brand colors
    primary: {
      light: 'red-500',
      default: 'red-600',
      dark: 'red-700',
      darker: 'red-800',
    },
    
    // Secondary colors
    secondary: {
      light: 'slate-100',
      default: 'slate-600',
      dark: 'slate-700',
      darker: 'slate-800',
      darkest: 'slate-900',
    },
    
    // Accent colors
    accent: {
      light: 'red-100',
      default: 'red-200',
    },
    
    // Utility colors
    utility: {
      success: 'green-500',
      error: 'red-600',
      warning: 'yellow-500',
      info: 'blue-500',
    }
  },
  
  gradients: {
    // Primary button gradient
    primaryButton: {
      default: 'bg-gradient-to-r from-red-800 to-red-700',
      hover: 'hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500',
    },
    
    // Header gradient
    header: 'bg-gradient-to-b from-slate-900 to-slate-800',
    
    // Hero overlay
    heroOverlay: 'bg-gradient-to-r from-black/60 via-black/40 to-black/20',
  },
  
  buttons: {
    // Primary button classes
    primary: 'rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold shadow-md hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-300',
    
    // Secondary/outline button
    secondary: 'rounded-full bg-white text-slate-700 border border-slate-300 font-semibold hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all duration-300',
    
    // Ghost/transparent button
    ghost: 'rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300',
  },
  
  badges: {
    // Content badges/pills
    default: 'inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium',
    primary: 'inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium',
    dark: 'inline-block px-4 py-1.5 rounded-full bg-slate-800/80 text-red-400 text-sm font-medium backdrop-blur-sm',
  }
};

// Usage example:
/* 
  // Button example using the theme
  <button className={`px-6 py-3 ${theme.buttons.primary}`}>
    Click Me
  </button>

  // Badge example
  <span className={theme.badges.primary}>
    New
  </span>
*/

export default theme; 