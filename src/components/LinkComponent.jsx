import { Link } from "react-router-dom"

const LinkComponent = ({ route, text }) => {
  return (
    <li className="list-group-item">
      <Link to={route} className="  no-underline w-100 d-block">
        {text}
      </Link>
    </li>
  )
}

export default LinkComponent
