import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './App.css'

function App() {


  return (
    <div className='search'>
    <FontAwesomeIcon icon={faGithub} className='octo-cat'/>
  
      <form>
      <label htmlFor="username">Find Github User Profile</label>
        <input type="text" name="username"/>
      </form>
    </div>
  )
}

export default App
