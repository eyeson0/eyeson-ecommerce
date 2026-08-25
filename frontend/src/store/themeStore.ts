import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  initTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light',
  setTheme: (theme) => {
    localStorage.setItem('eyeson-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    set({ theme })
  },
  toggleTheme: () => {
    const current = get().theme
    const next = current === 'light' ? 'dark' : 'light'
    get().setTheme(next)
  },
  initTheme: () => {
    const saved = localStorage.getItem('eyeson-theme') as Theme | null
    const theme = saved || 'light'
    document.documentElement.setAttribute('data-theme', theme)
    set({ theme })
  },
}))
