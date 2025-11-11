import { useState } from "react"
import { useText } from "../context/TextContext"
import infoIcon from "../assets/images/icon-info.svg"

const TextSection = () => {
  const {text, setText, isExcludeSpace, setIsExcludeSpace, characterCount, wordCount} = useText()
  const [charLimit, setCharLimit] = useState({state: false, value: 14})
  const warning = charLimit.state && characterCount > charLimit.value
  const readingTIme = Math.ceil(wordCount / 200)

  return (
    <div className='w-full mt-12'>
      <textarea
        placeholder='Start typing here... (or paste your text)'
        className='w-full h-50 border-[2px] outline-none border-[var(--text-area-border)] hover:bg-[var(--text-area-border)] focus:border-[#d3a0fa] focus:shadow-[0_0_10px_0_#d3a0fa] resize-none text-xl/8 text-[var(--color-text-area)] bg-[var(--bg-text-area)] p-5 rounded-xl'
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      {/* Exceed Character Limit */}
      {warning && (
        <div className="w-full flex items-center gap-2 mt-2">
          <img src={infoIcon} alt="Info" className="h-4" />
          <span className="text-[#fe8159] text-left block w-full">You Exceeded character Limit</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3">

          {/* Exclude Spaces */}
          <div className="mr-8">
            <label htmlFor="exclude" className="flex items-center">
              <input 
                type="checkbox" 
                id="exclude" 
                className="mr-3 appearance-none w-4 h-4 checked:bg-[url('src/assets/images/icon-check.svg')] checked:bg-[#d3a0fa] bg-no-repeat bg-center bg-contain rounded-sm border border-[var(--color-secondary-text)] checked:border-[#d3a0fa] cursor-pointer"
                checked={isExcludeSpace}
                onChange={() => setIsExcludeSpace(prev => !prev)}
              />
              <span className="select-none text-[var(--color-secondary-text)]">Exclude Spaces</span>
            </label>
          </div>

          {/* Set Character Limit */}
          <div className="flex h-8">
            <label htmlFor="char_limit" className="flex items-center mr-4">
              <input 
                type="checkbox" 
                id="char_limit" 
                className="mr-3 appearance-none w-4 h-4 checked:bg-[url('src/assets/images/icon-check.svg')] checked:bg-[#d3a0fa] bg-no-repeat bg-center bg-contain rounded-sm border border-[var(--color-secondary-text)] checked:border-[#d3a0fa] cursor-pointer"
                checked={charLimit.state}
                onChange={() => setCharLimit(prev => ({ ...prev, state: !prev.state}))}
              />
              <span className="select-none text-[var(--color-secondary-text)]">Set Character Limit</span>
            </label>
            {charLimit.state && (
              <input
                type="number"
                className="border border-[var(--color-secondary-text)] text-[var(--color-secondary-text)] text-center py-1 w-15 rounded-sm"
                value={charLimit.value}
                onChange={e => setCharLimit(prev => ({...prev, value: e.target.value}))}
              />
            )}
          </div>
        </div>

        {/* Reading Time */}
        <div className="flex">
          <span className="text-[var(--color-secondary-text)]">Approx. Reading Time: {readingTIme > 0 ? "<" : ""}{readingTIme} {readingTIme > 1 ? "minutes" : "minute"}</span>
        </div>
      </div>
    </div>
  )
}

export default TextSection
