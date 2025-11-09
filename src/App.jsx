import './App.css'
import Header from './components/Header'
import LetterDensity from './components/LetterDensity'
import StatsSection from './components/StatsSection'
import TextSection from './components/TextSection'

function App() {
  return (
    <>
    <div className='w-full min-w-[320px] px-5 sm:px-[2rem]'>
      <Header />
      <main className='flex flex-col items-center w-full'>
        <div className='max-w-lg'>
          <h1 className='text-4xl/10 sm:text-6xl/16 font-bold'>Analyze your text in real-time.</h1>
        </div>
        <TextSection />
        <StatsSection />
        <LetterDensity />
      </main>
    </div>
    </>
  )
}

export default App
