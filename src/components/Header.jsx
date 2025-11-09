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
      <button className='bg-[var(--bg-theme)] p-2 sm:p-2.5 rounded-md cursor-pointer'
        onClick={toggleTheme}
      >
        <img src={theme === 'light' ? moon : sun} alt="Theme" 
          className='h-5'
        />
      </button>
    </div>
  )
}

export default Header
