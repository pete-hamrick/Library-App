import { Link } from 'react-router-dom'
import logo from '../../assets/kick-off.png'
import { signOutUser } from '../../services/users'
import './Header.css'

function Header({ user, setCurrentUser }) {
  return (
    <header>
      <section>
        <aside>
          <Link to="/">
            <img src={logo} alt="App logo" />
          </Link>
        </aside>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/players">Players</Link>
            </li>
            <li>
              {user ? (
                <button type="button" onClick={() => signOutUser() && setCurrentUser(null)}>
                  Sign Out
                </button>
              ) : (
                <Link to="/sign-in">Sign In</Link>
              )}
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header
