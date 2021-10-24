import { Link } from "react-router-dom";

function MainNav(){
return(
    <nav className='main_nav'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/categories'>Categories</Link></li>
              <li><Link to='/posts'>Posts</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
    </nav>
    )
}

export default MainNav;