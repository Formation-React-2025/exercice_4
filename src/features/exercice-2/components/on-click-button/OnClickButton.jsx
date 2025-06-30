import * as React from 'react';

const OnClickButton = () => {

  let numb = 0;

  const onClick = () => {
    console.log('onClick : deb : numb = ', numb);
    numb = numb + 1;
    console.log('onClick : fin : numb = ', numb);
  };

  return (
    <button onClick={onClick}>{numb}</button>
  );
};

export default OnClickButton;
