import React from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-speed-meter'
import 'react-internet-speed-meter/dist/index.css'

const App = () => {
  return <ReactInternetSpeedMeter 
            txtMainHeading="Error" 
            txtSubHeading="Internet not connected"
            outputType="alert"
            customClassName={null}
            />
}

export default App
