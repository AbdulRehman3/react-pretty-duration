import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const PrettyDuration = ({duration = 0, className, style}) => {

  const [durationText, setDurationText] = useState(null);

  useEffect(() => {
    if(duration < 1) {
      console.error("PrettyDuration Error:", "duration must be greater than 0");
      return;
    }

    const hour = Math.floor(duration/60);
    const min = (duration % 60);

    const readableDuration =  `${hour}hr ${min}min`;
    setDurationText(readableDuration);

  }, []);

  return (
    <span 
      className={className || null}
      style={style || null}
    >{durationText}</span>
  )
}

PrettyDuration.prototype = {
  duration: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

export default PrettyDuration;
