import { useTheme } from '../context/ThemeContext'
import logo_dark from '.././assets/images/logo-dark-theme.svg'
import logo_light from '.././assets/images/logo-light-theme.svg'
import sun from '.././assets/images/icon-sun.svg'
import moon from '.././assets/images/icon-moon.svg'

const Header = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className="flex justify-between items-center w-full mb-15">
      <div>
        <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" />
      </div>
      <button className='bg-neutral-700 p-2.5 rounded-md'
        onClick={toggleTheme}
      >
        <img src={theme === 'light' ? sun : moon} alt="Theme" />
      </button>
    </div>
  )
}

export default Header
