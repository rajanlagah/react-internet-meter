import React from 'react' 


const Alert = ({txtMainHeading,customClassName,txtSubHeading,alertStyles}) => {
    return (
        <div className={`${alertStyles.alertDangerContainer} ${customClassName}`}>
            <span className={alertStyles.alertDangerHeading}>{txtMainHeading}</span>
            <span className={alertStyles.alertDangerInfo}>{txtSubHeading}</span>
        </div>
    )
}


export {
    Alert
}