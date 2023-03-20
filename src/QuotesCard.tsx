import {useEffect, useState} from 'react'
import { quotess } from './getquotes'

import arrow from "../src/assets/arrow.png"
import twitter from "../src/assets/twitter-svgrepo-com.svg"
import whatsapp from "../src/assets/whatsapp-svgrepo-com.svg"
import axios, { AxiosError } from 'axios'
import { BeatLoader } from 'react-spinners'

export const QuotesCard = () => {

  const [quote, setQuote] = useState({
    quote: "GET QUOTES",
    author: "getQuotes",
    anime: "",
    date: "",
    eps: ""
  })

  const [loading, setLoading] = useState(true)

  const getQuote = async () => {
    setLoading(true)
  const data = quotess()
  if(data){
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }
  try{
    setQuote(prevState => ({
      ...prevState,
      quote: data.quotes.trim(),
      author: data.char_name,
      anime: data.anime,
      date: data.date,
      eps: data.episode
    }))
  }
  catch(error){
    const err = error
    console.log(error)  
  }
}
    
  useEffect(() => {
      getQuote()
    }, [])

    const nextQuote = () => {
      return getQuote()
    }
     const Time = { quote: quote}
    

const tweet = `https://twitter.com/intent/tweet?text=“${quote.quote}”%20-%20${quote.author}%0A(Quote%20from%20www.quotes.rzky.site)`
const WhatsappShare = `whatsapp://send?text=“${quote.quote}”%20-%20${quote.author}%0A(Quote%20from%20www.quotes.rzky.site)`
  return (
    <div className='m-auto h-auto flex flex-col gap-4'>
      <div className='relative bg-gray-200 w-4/5 sm:w-72 rounded-tr-lg rounded-bl-lg m-auto p-3 text-justify shadow-2xl'>
        <h1 className='absolute -left-3 md:-left-5 -top-4 md:-top-8 text-6xl md:text-8xl font-fredoka'>
          “
          </h1>
        {loading 
        ? 
        <div className='h-32 w-42 flex m-auto justify-center items-center'>
          <BeatLoader size={20} />
        </div>
         : 
         <div className='my-2 '>
          <p className='text-xl font-space italic px-3 '>
            {quote.quote}”
          </p>
          <h3 className='text-right text-lg font-bold my-3 mb-8 px-2 tracking-wider'>
            ~ {quote.author} - {quote.anime} - {quote.eps}
          </h3>
          <h4 className='text-left font-bold my-3 mb-8 px-2 tracking-wider'>
            ~ {quote.date}
          </h4>
        </div>
        }
        {!loading && 
        <button type='button' onClick={nextQuote} className='z-10 absolute right-2 bg-green-400 hover:bg-blue-200 hover:text-black text-white text-lg font-bold py-2 px-4 rounded-tr-large rounded-bl-large'>
          GET QUOTE
        </button>}
      </div>
      {!loading &&
      <div className='flex-col w-20 ml-auto my-4'>
        <img src={arrow} alt="spring arrow" className='h-20 m-auto rotateXX'/>
        <p className='font-pt italic text-white'>Click to generate <br /> new quote...</p>
      </div>
      }

      {!loading &&
      <div className='flex flex-col relative bottom-56 mx-4 gap-1'>
          <div className='flex gap-4 static '> 
            <a className="twitter-share-button" target="_blank" href={tweet}>
              <img src={twitter} alt="twitter logo svg" className='w-auto h-10 share--icon'/>
            </a>
            <a href={WhatsappShare} target="_blank">
              <img src={whatsapp} alt="whatsapp logo svg" className='w-auto h-10 share--icon'/>
            </a>
          </div>
          <div>
            <p className='font-pt italic text-white mx-5'>Share</p>
          </div>
      </div>
      }
    </div>
  )
}

