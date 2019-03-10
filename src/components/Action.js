import React from 'react';

const Action = (props) =>  (
  <div>
  {/* disabled = true i.e. !empty array*/}
  <button className='big-button'
    onClick={props.handlePicK}
    disabled={!props.hasOptions}
  >
    What Should I Do?
  </button>
  </div>
);


export default Action;