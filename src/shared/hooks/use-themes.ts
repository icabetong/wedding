import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const current = (localStorage.getItem('theme') ?? 'light') as Theme
      setTheme(current)
    }
  }, [])

  const handleChange = (newTheme: Theme) => {
    const root = window.document.documentElement

    root.classList.remove(theme)
    root.classList.add(newTheme)

    setTheme(newTheme)
    if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme)
  }

  return { change: handleChange, theme }
}
