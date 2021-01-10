import React, { useState } from 'react'
import styles from './styles.module.css'

import { Alert } from './components'

export const ReactInternetSpeedMeter = ({ 
  txtMainHeading="Opps..." ,
  outputType="alert",
  customClassName,
  txtSubHeading="Diconnected from internet" }) => {

  const [ isOffline,setisOffline ] = useState(false)

  window.addEventListener('offline', ()=> setisOffline(true));
  window.addEventListener('online', ()=> setisOffline(false));

  if(isOffline){
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
