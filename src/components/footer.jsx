import { useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowIcon, DownloadIcon } from "../assets/svg"

const Footer = () => {
  const footer = useRef()
  const location = useLocation()

  return (
    <footer className="mt-5 py-5 container " ref={footer}>
      <div className="d-flex flex-column flex-md-row mb-4">
        <div>
          <h6 className="footer-heading">SAY HELLO</h6>
          <p>kotakdhaval01@gmail.com</p>
        </div>
        <ul className="ms-o ps-0 my-4 my-md-0 ms-md-5 ps-md-5">
          <h6 className="footer-heading">Navigate</h6>
          <li className="mb-2">
            <Link
              to="/portfolio"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              home
              <ArrowIcon
                className={`arrow-icon ${
                  location.pathname === "/portfolio" && "hidden"
                }`}
              />
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/projects"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              projects
              <ArrowIcon
                className={`arrow-icon ${
                  location.pathname === "/projects" && "hidden"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <span className="divider mb-4"></span>
      <span>© Dhaval Kotak 2023</span>

      <a
        href="https://drive.google.com/file/d/1SXkef4-gb8r6Mbd1mnxM-EUKA0gPc2Vn/view?usp=sharing"
        rel="noopener noreferrer"
        className="ms-2"
      >
        {" "}
        Resumé <DownloadIcon />{" "}
      </a>
    </footer>
  )
}

export default Footer
