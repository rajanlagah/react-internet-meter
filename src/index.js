import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { Alert } from './components'

export const ReactInternetSpeedMeter = ({
  txtMainHeading = 'Opps...',
  outputType = 'alert',
  customClassName,
  pingInterval = 30000,
  thresholdUnit = 'megabyte',
  threshold = 7,
  txtSubHeading = 'Diconnected from internet',
  imageUrl,
  downloadSize, //bytes
  callbackFunctionOnNetworkDown = () => console.log('No callback on Network Down'),
  callbackFunctionOnNetworkTest = () => console.log('No callback On Network test'),
  callbackFunctionOnError = () => console.log('error in downloading image')
}) => {
  const [isNetworkDown, setisNetworkDown] = useState(false)
  let intervalFun

  window.addEventListener('offline', () => setisNetworkDown(true));
  window.addEventListener('online', () => setisNetworkDown(false));

  const startCalculating = () => {
    return window.setTimeout(MeasureConnectionSpeed, pingInterval);
  }

  useEffect(() => {
    intervalFun = startCalculating()
    return () => window.clearInterval(intervalFun)
  }, [])

  const MeasureConnectionSpeed = () => {
    var startTime, endTime;
    var download = new Image();
    startTime = (new Date()).getTime();

    var cacheBuster = '?nnn=' + startTime;
    download.src = imageUrl + cacheBuster;

    download.onload = function (d) {
      endTime = (new Date()).getTime();
      showResults(startTime, endTime);
    }

    download.onerror = function (err, msg) {
      console.log('err', err)
      callbackFunctionOnError(err)
      window.clearInterval(intervalFun)
    }
    startCalculating()
  }

  const showResults = (startTime, endTime) => {
    const duration = (endTime - startTime) / 1000;

    const bitsLoaded = downloadSize * 8;
    const speedBps = (bitsLoaded / duration).toFixed(2);
    const speedKbps = (speedBps / 1024).toFixed(2);
    const speedMbps = (speedKbps / 1024).toFixed(2);

    setNetworStatus(speedBps, speedKbps, speedMbps)
  }

  const setNetworStatus = (speedBps, speedKbps, speedMbps) => {
    if (thresholdUnit === 'byte') {
      if (speedBps < threshold) {
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedBps)
      } else {
        setisNetworkDown(false)
      }
      callbackFunctionOnNetworkTest(speedBps)
    }
    else if (thresholdUnit === 'kilobyte') {
      if (speedKbps < threshold) {
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedKbps)
      } else {
        setisNetworkDown(false)
      }
      callbackFunctionOnNetworkTest(speedKbps)

    }
    else if (thresholdUnit === 'megabyte') {
      if (speedMbps < threshold) {
        setisNetworkDown(true)
        callbackFunctionOnNetworkDown(speedMbps)
      } else {
        setisNetworkDown(false)
      }
      callbackFunctionOnNetworkTest(speedMbps)

    }
    else {
      console.log('Invalid thresholdUnit')
    }
  }

  if (isNetworkDown) {
    if (outputType === 'alert') {
      return <Alert
        alertStyles={styles}
        customClassName={customClassName}
        txtMainHeading={txtMainHeading}
        txtSubHeading={txtSubHeading} />
    }

    return <div />
  }
  return <div />
}
