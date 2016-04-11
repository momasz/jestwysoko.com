'use strict';

function idMaker () {
  return (value) => parseInt(value.replace('/videos/', ''));
}

export default [idMaker];