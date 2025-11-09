import { useState } from "react"
import { useText } from "../context/TextContext"

const LetterDensity = () => {
  const {letterDensity} = useText()
  const [showMore, setShowMore] = useState(false)
  const displayCount = showMore ? letterDensity.length : 5

  return (
    <div className="w-full text-left mt-10">
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary-text)]">Letter Density</h2>

      {!letterDensity.length 
        ? <span className="text-[var(--color-secondary-text)]">No characters found. Start typing to see letter density.</span>
        : (
          <div className="w-full">
            <div className="mb-4 w-full space-y-2">
              {
                letterDensity.slice(0, displayCount).map(({letter, count, percent}) => (
                  <div key={letter} className="flex justify-between items-center w-full">
                    <span className="uppercase w-5 text-[var(--color-primary-text)]">{letter}</span>

                    {/* Progress bar */}
                    <div className="w-full h-3 rounded-full bg-[var(--bg-progress-bar)] mx-8 sm:mx-12 overflow-hidden">
                      <div className={`h-full bg-[#d3a0fa] transition-all duration-300 ease-out`} style={{width: `${percent}%`}}></div>
                    </div>

                    <div className="w-20 text-right text-[var(--color-primary-text)]">
                      <span className="mr-2">{count}</span>
                      <span className="whitespace-nowrap">({percent.toFixed(0)}%)</span>
                    </div>
                  </div>
                ))
              }
            </div>

            {letterDensity.length > 5 && (
              <button 
                className="cursor-pointer text-[var(--color-secondary-text)]"
                onClick={() => setShowMore(prev => !prev)}
                >
                {`${showMore ? "See Less" : "See More"}`}
              </button>
            )}
          </div>
        )
      }

    </div>
  )
}

export default LetterDensity
