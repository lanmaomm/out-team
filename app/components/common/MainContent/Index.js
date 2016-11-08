import React from 'react';
import './Index.scss';

const MainContent = function(props) {
  return (
    <div className="page-wrapper">
      {props.children}
    </div>
  );
}

export default MainContent;
