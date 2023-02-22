import React from 'react';

const utils = () => {
  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  return {
    uid,
  };
};

export default utils();
