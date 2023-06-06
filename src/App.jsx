/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'
import BadSearch from './components/BadSearch'

function App() {
 
  const randomId=getRandomNumber(126)
  const [idLocation, setIdLocation] = useState(randomId)

  const url=`https://rickandmortyapi.com/api/location/${idLocation}`

  const [location ,getApiLocation, hasError]=useFetch(url)
  useEffect(() => {
    getApiLocation()
  }, [url])
  
  return (
    <div className='app'>
      <div className='imgRandM'>
       <img src="../public/bGRick.png " alt="rick and morty" className='imgHeader' />
      </div>
      <FormSearch setIdLocation={setIdLocation}/>
     {
      hasError ? 
      <div className='badSearchContainer'>
      <BadSearch/>
      </div> :
      (
        <>
        <div className='locationInfoContainer'>
        <LocationInfo 
        location={location}
        />
        </div>
        <div className='residentContainer'>
          {location?.residents.map(url=>(
            <ResidentCard 
            url={url}
            key={url}
            />
          ))}
        </div>
        </>
      )
     }
    </div>
  )
}

export default App
