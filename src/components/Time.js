import React, { useState, useEffect } from 'react';

function Time() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        let utc = dateState.getTime() + (dateState.getTimezoneOffset() * 60000);
           setInterval(() => setDateState(new Date(utc + (3600000*8))), 30000);
    }, []);

 
  return (
    <div>
      {dateState.toLocaleString()} GMT +8
    </div>
  );
}

export default Time;
