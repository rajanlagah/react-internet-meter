# react-internet-speed-meter

> Notify on internet speed changes

[![NPM](https://img.shields.io/npm/v/react-internet-speed-meter.svg)](https://www.npmjs.com/package/react-internet-speed-meter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-internet-speed-meter
```

## Usage

```jsx
import React from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-speed-meter'
import 'react-internet-speed-meter/dist/index.css'

const App = () => {
      <ReactInternetSpeedMeter  
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

```

## License

MIT © [rajanlagah](https://github.com/rajanlagah)
