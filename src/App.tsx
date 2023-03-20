import React, { useEffect, useState } from "react"
import './App.css';
import { Footer } from './Footer';
import { QuotesCard } from './QuotesCard';
import { Header } from './Header';
import { BeatLoader, SyncLoader, ClockLoader  } from "react-spinners"


function App() {
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <div className='App-header'>
    {loading
      ? 
      <div className="items-center gap-4 flex flex-col justify-center border-3">
        <h2><ClockLoader /></h2>
        <p className="font-space italic text-2xl">getting Quotes...</p>
        <p className="font-space italic text-2xl">1.. 2.. 3</p>
      </div>
      
      :

      <div className="App-header">
        <Header />
        <QuotesCard />
        <Footer />
      </div>
    }
    </div>
  );
}

export default App;
