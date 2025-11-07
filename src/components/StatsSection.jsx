import characterBgPattern from "../assets/images/pattern-character-count.svg"
import wordBgPattern from "../assets/images/pattern-word-count.svg"
import sentenceBgPattern from "../assets/images/pattern-sentence-count.svg"
import { useText } from "../context/TextContext"


const StatsSection = () => {
  const {characterCount, wordCount, sentenceCount} = useText()
  
  const STATS_CONFIG = [
    {title: 'Total Characters', image: characterBgPattern, value: characterCount, bgColor: '#d3a0fa'},
    {title: 'Word Count', image: wordBgPattern, value: wordCount, bgColor: '#ff9f00'},
    {title: 'Sentence Count', image: sentenceBgPattern, value: sentenceCount, bgColor: '#fe8159'},
  ]

  return (
    <div className="w-full mt-8">
      <ul className="flex justify-between w-full gap-4">
        {
          STATS_CONFIG.map((stat,ind) => (
            <li key={ind}
              className={`border rounded-xl w-full px-6 py-4 text-left text-neutral-900 bg-no-repeat bg-[115%_center] bg-contain`}
              style={{
                backgroundImage: `url("${stat.image}")`,
                backgroundColor: stat.bgColor,
              }}
            >
              <p className="text-7xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg">{stat.title}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default StatsSection
