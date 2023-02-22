import React from 'react';

const utils = () => {
  let newID;
  function* createId(starter) {
    let i = starter || 1;
    while (true) {
      yield ++i;
    }
  }
  newID = createId();
  const getNewID = (starter) => {
    if (starter) {
      newID = createId(starter);
    }
    return () => newID.next().value;
  };
  return {
    getNewID,
  };
};
export default utils();
