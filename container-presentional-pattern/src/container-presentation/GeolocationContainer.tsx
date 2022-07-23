import { useState, useEffect } from 'react'
import Geolocation from './Geolocation'

//using container-presentation pattern
// this is the Container component
const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number>(0)
  const [longitude, setLongitude] = useState<number>(0)

  const handleSuccess = ({
    coords: {
      latitude,
      longitude
    }
  }: { coords: { latitude: number; longitude: number } }) => {
    setLatitude(latitude);
    setLongitude(longitude)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess)
    }
  }, [])

  if (latitude === 0) return <p>Loading</p>
  return <Geolocation latitude={latitude} longitude={longitude} />
}

export default GeolocationContainer