import React from 'react'
import TravelCard from './components/TravelCard'
import Header from './components/Header'
import travelJournalData from './travelJournalData'
import './App.css'

function App() { 
  const travelData = travelJournalData.map(data => {
    return <TravelCard key={data.id} data={data}/>
  })
  return (
    <>
      <Header />
      {travelData}
    </>
  )
}

export default App
