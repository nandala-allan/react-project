import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Header() {
    return (
        <header>
            <FontAwesomeIcon icon={faGithub} className='header-octo-cat' />
            <nav>
                <ul>
                    <li>
                        <Link className="nav-link" to={'/'}>Search profile<FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                    </li>
                </ul>
            </nav>
      </header>
    )
}


export default Header