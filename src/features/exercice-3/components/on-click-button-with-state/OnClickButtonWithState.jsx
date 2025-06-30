import * as React from 'react';
import { useState, } from 'react';

const OnClickButtonWithState = () => {
  const [
    numb,
    setNumb,
  ] = useState(0);

  const onClick = () => {
    console.log('onClick : deb : numb = ', numb);
    setNumb((prevNumb) => prevNumb + 1);
    console.log('onClick : fin : numb = ', numb);
  };

  return (
    <button onClick={onClick}>{numb}</button>
  );
};

export default OnClickButtonWithState;
