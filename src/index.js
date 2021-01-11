import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { Alert } from './components'

export const ReactInternetSpeedMeter = ({ 
  txtMainHeading="Opps..." ,
  outputType="alert",
  customClassName,
  pingInterval=4000,
  thresholdUnit='megabyte',
  threshold=7,
  txtSubHeading="Diconnected from internet",
  callbackFunctionOnNetworkDown=()=>console.log("No callback")
}) => {

  const [ isNetworkDown,setisNetworkDown ] = useState(false)
  // const imageAddr = "https://drive.google.com/file/d/1-ywHEBYBxZy6VWs7IpcROgrDwGL-au9e/view?usp=sharing"; 
  var imageAddr = "https://res.cloudinary.com/dcwxsms2l/image/upload/v1610376487/pexels-ivan-samkov-6291574_bzqgps.jpg"; 

  const downloadSize = 1781287; //bytes

  window.addEventListener('offline', ()=> setisNetworkDown(true));
  window.addEventListener('online', ()=> setisNetworkDown(false));
  
  useEffect(()=> {
    const interval = window.setInterval(MeasureConnectionSpeed, pingInterval);
    return () => window.clearInterval(interval)

  },[])


  

  const MeasureConnectionSpeed = () => {
      var startTime, endTime;
      var download = new Image();
      startTime = (new Date()).getTime();

      var cacheBuster = "?nnn=" + startTime;
      download.src = imageAddr + cacheBuster;

      download.onload = function () {
          endTime = (new Date()).getTime();
          console.log('here')
          showResults(startTime , endTime);
      }
      
      download.onerror = function (err, msg) {
          console.log('err',err)
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
    if( thresholdUnit === 'byte'){
      if(speedBps < threshold){
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedBps)
      }else {
        setisNetworkDown(false)
      }
    }
    else if( thresholdUnit === 'kilobyte'){
      if(speedKbps < threshold){
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedKbps)
      }else {
        setisNetworkDown(false)
      }
    }
    else if( thresholdUnit === 'megabyte'){
      if(speedMbps < threshold){
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedMbps)
      }else {
        setisNetworkDown(false)
      }
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
  return <div>online</div>
}
