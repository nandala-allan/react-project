import { Router } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import Profile from './components/Profile.jsx';

import './App.css'

function App() {

  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);

  return (

    <div>
      
      <div className='search'>
     <FontAwesomeIcon icon={faGithub} className='octo-cat'/>
  
        <form 
        onSubmit={e => {
          e.preventDefault();
          Router.push({
            pathname: '/Profile',
            query: { id: username },
          });
        }}>
      <label htmlFor="username">Find Github User Profile</label>
        <input type="text" name="username"  onChange={handleChange}
          value={username}/>
      </form>
    </div>
    </div>
    
  )
}

export default App
