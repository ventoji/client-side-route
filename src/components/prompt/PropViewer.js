import React from 'react';

const PropViewer = ({match,...rest}) => {
    console.log(match)
    console.log(rest)
          return(
              <h1>{match.path}</h1>
          )  ;
};

export default PropViewer;

