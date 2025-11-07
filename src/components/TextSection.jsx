import { useState } from "react"
import { useText } from "../context/TextContext"

const TextSection = () => {
  const {text, setText, isExcludeSpace, setIsExcludeSpace, characterCount, wordCount} = useText()
  const [charLimit, setCharLimit] = useState({state: false, value: 14})
  const warning = charLimit.state && characterCount > charLimit.value
  const readingTIme = Math.ceil(wordCount / 200)

  return (
    <div className='w-full mt-12'>
      <textarea
        placeholder='Start typing here... (or paste your text)'
        className='w-full h-50 border resize-none text-xl/8 p-5 rounded-xl'
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      {/* Exceed Character Limit */}
      {warning && (
        <div>
          <span>You Exceeded character Limit</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center mt-2 h-10">

          {/* Exclude Spaces */}
          <div className="mr-8">
            <label htmlFor="exclude" className="flex items-center">
              <input 
                type="checkbox" 
                id="exclude" 
                className="mr-3 appearance-none w-4 h-4 rounded-sm checked:bg-neutral-500 border cursor-pointer"
                checked={isExcludeSpace}
                onChange={() => setIsExcludeSpace(prev => !prev)}
              />
              <span className="select-none">Exclude Spaces</span>
            </label>
          </div>

          {/* Set Character Limit */}
          <div className="flex">
            <label htmlFor="char_limit" className="flex items-center mr-4">
              <input 
                type="checkbox" 
                id="char_limit" 
                className="mr-3 appearance-none w-4 h-4 rounded-sm checked:bg-neutral-500 border cursor-pointer"
                checked={charLimit.state}
                onChange={() => setCharLimit(prev => ({ ...prev, state: !prev.state}))}
              />
              <span className="select-none">Set Character Limit</span>
            </label>
            {charLimit.state && (
              <input
                type="number"
                className="border text-center py-1 w-15 rounded-sm"
                value={charLimit.value}
                onChange={e => setCharLimit(prev => ({...prev, value: e.target.value}))}
              />
            )}
          </div>
        </div>

        {/* Reading Time */}
        <div>
          <span>Approx. Reading Time: {readingTIme > 0 ? "<" : ""}{readingTIme} {readingTIme > 1 ? "minutes" : "minute"}</span>
        </div>
      </div>
    </div>
  )
}

export default TextSection
