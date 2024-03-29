import React,{useState} from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-speed-meter'
import 'react-internet-speed-meter/dist/index.css'
import HomePage from './components/Home'

const App = () => {
  
  const [wifiSpeed,setwifiSpeed] = useState("Checking ... ")

  return (
      <div>
        <ReactInternetSpeedMeter  
            txtSubHeading="Internet is too slow"
            outputType="alert"
            customClassName={null}
            txtMainHeading="Opps..." 
            imageUrl="https://res.cloudinary.com/de8eknmis/image/upload/v1634730491/sample.jpg"
            downloadSize="117438" //bytes
            pingInterval="4000" // sec
            thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
            threshold={100}
            callbackFunctionOnNetworkDown={(speed)=>console.log(`Internet speed is down ${speed}`)}
            callbackFunctionOnError={(errMsg)=>console.log(errMsg)}
            callbackFunctionOnNetworkTest={(speed)=>setwifiSpeed(speed)}
          />
        <HomePage 
          wifiSpeed={wifiSpeed}
        />
    </div>
  )
}

export default App
