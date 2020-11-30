import React from 'react';

const Timer = ({timeLeft}) => {
  const timeLeftLength = Object.keys(timeLeft).length;

  return (
    <div id="timer" className="timer">     
      <div className="timer__body">
        {timeLeftLength !== 0 && (
          <>
          <div className="timer-cell timer-cell_type_day">
            <span className="timer-cell__value">{timeLeft.days} </span><br />
            <span>days</span>
          </div>
          <div className="timer-cell">
            <span className="timer-cell__value">{timeLeft.hours} </span><br />
            <span>hours</span>
          </div>
          <div className="timer-cell">
            <span className="timer-cell__value">{timeLeft.minutes} </span><br />
            <span>minutes</span>
          </div>
          <div className="timer-cell">
            <span className="timer-cell__value">{timeLeft.seconds} </span><br />
            <span>seconds</span>
          </div>
          </>
        )}
        {timeLeftLength === 0 && (<p>The countdown is finished!</p>)}        
      </div>     
    </div>
  );
};

export default Timer;