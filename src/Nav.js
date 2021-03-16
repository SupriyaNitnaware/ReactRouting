import React from 'react';
import {Link} from 'react-router-dom'

function Nav()
{

    const navStyle={
        color:'white'
    };

    return(
        <nav>
            <h3>React Routing</h3>
          <ul className="nav-links">
              <Link className="navstyle" to="/Home">
                <li>Home</li>
              </Link>
              <Link  className="navstyle" to="/About">
                <li>About</li>
              </Link>
              <Link  className="navstyle" to="/Gallery">
                <li>Gallery</li>
              </Link>
              <Link  className="navstyle" to="/Login">
                <li>Login</li>
              </Link>
          </ul>
        </nav>
    )
}

export default Nav;