import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'

const ThemeMode = () => {
  const [ theme, setTheme] = useLocalStorage('theme','dark');

  function handleToggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme)
  return (
    <div className='light-dark-mode'  dark-theme={theme}>
      <div className='container'>
        <p>Hello, World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default ThemeMode