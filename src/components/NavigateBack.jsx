import { Link } from "react-router-dom"
import { BackArrowIcon } from "../assets/svg"

const NavigateBack = ({ backRoute }) => {
  return (
    <Link to={backRoute} className=" text-dark no-underline ">
      <BackArrowIcon className="change-bg mb-4" />
    </Link>
  )
}

export default NavigateBack
