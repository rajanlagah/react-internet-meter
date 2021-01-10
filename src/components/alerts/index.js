import React from 'react' 


const Alert = ({txtMainHeading,txtSubHeading,alertStyles,classname="alert-danger"}) => {
    return (
        <div className={alertStyles.alertDangerContainer}>
            <span className={alertStyles.alertDangerHeading}>{txtMainHeading}</span>
            <span className={alertStyles.alertDangerInfo}>{txtSubHeading}</span>
        </div>
    )
}


export {
    Alert
}