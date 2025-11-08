import './App.css'
import Header from './components/Header'
import LetterDensity from './components/LetterDensity'
import StatsSection from './components/StatsSection'
import TextSection from './components/TextSection'

function App() {
  return (
    <>
    <div className='min-h-[100vh] w-full'>
      <Header />

      <main className='flex flex-col items-center w-full'>
        <div className='max-w-lg'>
          <h1 className='text-6xl/16 font-bold'>Analyze your text in real-time.</h1>
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
