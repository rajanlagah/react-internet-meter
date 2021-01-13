# react-internet-meter

> Notify on internet speed changes

>> In later version default image will be removed. It is recommended to give address of image on your server/s. As it will give you more usefull and reliable values.

[![NPM](https://img.shields.io/npm/v/react-internet-meter.svg)](https://www.npmjs.com/package/react-internet-meter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## How it work ?
![untitled-project_MBDXODJs_itmf](https://user-images.githubusercontent.com/20952569/104233887-a1113400-5478-11eb-8706-5fe07a6058d4.gif)


## Install

```
npm  install --save react-internet-meter
```

## Usage

```jsx
import React from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-meter'
import 'react-internet-speed-meter/dist/index.css'

const App = () => {
       <ReactInternetSpeedMeter  
            txtSubHeading="Internet is too slow"
            outputType="alert"
            customClassName={null}
            txtMainHeading="Opps..." 
            pingInterval={4000} // milliseconds 
            thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
            threshold={100}
            imageUrl="https://res.cloudinary.com/dcwxsms2l/image/upload/v1610376487/pexels-ivan-samkov-6291574_bzqgps.jpg"
            downloadSize="1781287"  //bytes
            callbackFunctionOnNetworkDown={(speed)=>console.log(`Internet speed is down ${speed}`)}
            callbackFunctionOnNetworkTest={(speed)=>setwifiSpeed(speed)}
          />
}

export default App

```
| Parameter                     	| Type      	| Options                               	|
|-------------------------------	|-----------	|---------------------------------------	|
| txtSubHeading                 	| string    	| any string you want                   	|
| outputType                    	| string    	| "alert"/"modal"/"empty"               	|
| customClassName               	| string    	| css class you want                    	|
| txtMainHeading                	| string    	| any string you want                   	|
| pingInterval                  	| integer   	| time in milliseconds                  	|
| thresholdUnit                 	| string    	| "byte"/"kilobyte"/"megabyte"          	|
| threshold                     	| Integer   	| Minimum required value                	|
| callbackFunctionOnNetworkDown 	| function  	| Function that run on network down     	|
| callbackFunctionOnNetworkTest 	| function  	| Function that run after network check 	|
| imageUrl                       	| string     	| dummy image url      	                  |
| callbackFunctionOnNetworkTest 	| string  	  | image size                            	|

## License

MIT © [rajanlagah](https://github.com/rajanlagah)

## Medium post 
[alert-when-internet-speed-go-below-threshold](https://rajanlagah.medium.com/alert-when-internet-speed-go-below-threshold-80c7a9aa93f5)

### Note
Dont forget to give *star* to this repo on github... 
