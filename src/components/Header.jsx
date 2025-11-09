import { useTheme } from '../context/ThemeContext'
import logo_dark from '.././assets/images/logo-dark-theme.svg'
import logo_light from '.././assets/images/logo-light-theme.svg'
import sun from '.././assets/images/icon-sun.svg'
import moon from '.././assets/images/icon-moon.svg'

const Header = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className="flex justify-between items-center w-full mb-10 sm:mb-15">
      <div>
        <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" 
          className='h-8 sm:h-10'
        />
      </div>
      <button className='bg-neutral-700 p-2 sm:p-2.5 rounded-md'
        onClick={toggleTheme}
      >
        <img src={theme === 'light' ? sun : moon} alt="Theme" 
          className='h-4'
        />
      </button>
    </div>
  )
}

export default Header
