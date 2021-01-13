import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { Alert } from './components'

export const ReactInternetSpeedMeter = ({ 
  txtMainHeading="Opps..." ,
  outputType="alert",
  customClassName,
  pingInterval=30000,
  thresholdUnit='megabyte',
  threshold=7,
  txtSubHeading="Diconnected from internet",
  imageUrl="https://res.cloudinary.com/dcwxsms2l/image/upload/v1610376487/pexels-ivan-samkov-6291574_bzqgps.jpg",
  downloadSize="1781287", //bytes
  callbackFunctionOnNetworkDown=()=>console.log("No callback on Network Down"),
  callbackFunctionOnNetworkTest=()=>console.log("No callback On Network test"),
  
}) => {

  const [ isNetworkDown,setisNetworkDown ] = useState(false)
  let intervalFun

  window.addEventListener('offline', ()=> setisNetworkDown(true));
  window.addEventListener('online', ()=> setisNetworkDown(false));
  
  const startInterval = () => {
    return window.setInterval(MeasureConnectionSpeed, pingInterval);
  }

  useEffect(()=> {
    intervalFun = startInterval()
    return () => window.clearInterval(intervalFun)
  },[])


  

  const MeasureConnectionSpeed = () => {
      var startTime, endTime;
      var download = new Image();
      startTime = (new Date()).getTime();

      var cacheBuster = "?nnn=" + startTime;
      download.src = imageUrl + cacheBuster;

      download.onload = function (d) {
          endTime = (new Date()).getTime();
          showResults(startTime , endTime);
      }
      
      download.onerror = function (err, msg) {
          console.log('err',err)
          window.clearInterval(intervalFun)

      }
  }

  const showResults = (startTime , endTime) => {
      const duration = (endTime - startTime) / 1000;

      const bitsLoaded = downloadSize * 8;
      const speedBps = (bitsLoaded / duration).toFixed(2);
      const speedKbps = (speedBps / 1024).toFixed(2);
      const speedMbps = (speedKbps / 1024).toFixed(2);
  
      setNetworStatus(speedBps,speedKbps,speedMbps)
  }

  const setNetworStatus = (speedBps,speedKbps,speedMbps) => {
    console.log("HERE",speedMbps)
    if( thresholdUnit === 'byte'){
      if(speedBps < threshold){
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedBps)
      }else {
        setisNetworkDown(false)
      }
      callbackFunctionOnNetworkTest(speedBps)
    }
    else if( thresholdUnit === 'kilobyte'){
      if(speedKbps < threshold){
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedKbps)
      }else {
        setisNetworkDown(false)
      }
      callbackFunctionOnNetworkTest(speedKbps)

    }
    else if( thresholdUnit === 'megabyte'){
      if(speedMbps < threshold){
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedMbps)
      }else {
        setisNetworkDown(false)
      }
      callbackFunctionOnNetworkTest(speedMbps)

    }
    else {
      console.log('Invalid thresholdUnit')
    }
  }

  if(isNetworkDown){
    if(outputType == 'alert'){
      return <Alert
                alertStyles={styles} 
                txtMainHeading={txtMainHeading} 
                txtSubHeading={txtSubHeading } />
    }

    return <div>Available <b>outputType</b> are alert, model and we got <b>{outputType}</b></div>
  }
  return <div/>
}
