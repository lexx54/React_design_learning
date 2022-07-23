import { FC } from 'react'

type Props = {
  latitude: number
  longitude: number
}

//using container-presentation pattern
// this is the presentation component
const Geolocation: FC<Props> = ({ latitude, longitude }) => (
  <div>
    <h1>Geolocation</h1>
    <div>latitude: {latitude}</div>
    <div>longitude: {longitude}</div>
  </div>
)

export default Geolocation;