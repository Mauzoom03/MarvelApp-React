import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
    <header className="header">
    <div className="background"/>
    <div className="li-container">
      <Link className="link" to = '/'>Home</Link>
      <Link className="link" to = '/login'>Log In</Link>
      <Link className="link" to = '/register'>Register</Link>
      <Link className="link" to = '/profile'>Profile</Link>
      <Link className="link" to = '/list'>Marvel Movies</Link>
    </div>
    </header>
    </>
  )
}

export default Menu;
