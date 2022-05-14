import { Link } from "react-router-dom"
import user from "../../images/blank-profile-picture.png"
import "./header.styles.scss"

const Header = () => {

  return(
    <div className="header">
      <Link to="/">
      <div className="logo">
MovieApp
      </div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default  Header