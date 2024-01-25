import './index.css'

const Header = props => {
  const {heading, cartItems} = props
  return (
    <nav className="nav-bar">
      <h1>{heading}</h1>
      <div className="header-container">
        <p>My Orders </p>
        <p>{cartItems}</p>
      </div>
    </nav>
  )
}
export default Header
