import React from 'react';
import { withRouter } from 'react-router-dom';



function About(props) {
    const handleButtonClick = () => {
      props.history.push('/details/profil');
      console.log(props)
    }
  
    return (
      <div>
        <h1>About Page</h1>
        <button onClick={handleButtonClick}>About</button>
      </div>
    );
  }
  
  export default withRouter(About);
  