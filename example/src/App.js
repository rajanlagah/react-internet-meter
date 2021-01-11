import React from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-speed-meter'
import 'react-internet-speed-meter/dist/index.css'

const App = () => {
  return <ReactInternetSpeedMeter  
              txtSubHeading="Internet is too slow"
              outputType="alert"
              customClassName={null}
              txtMainHeading="Opps..." 
              pingInterval="4000" // sec
              thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
              threshold="7" 
              callbackFunctionOnNetworkDown={(speed)=>console.log(`Speed is less that threshold ${speed}`)}
            />
}

export default App
