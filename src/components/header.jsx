import { useContext } from "react"
import { Link } from "react-router-dom"
import { MoonIcon, SunIcon } from "../assets/svg"
import Logo from "../assets/image/profile.png"
import { ThemeContext } from "../helpers/context"
import MobileHeader from "./mobile-header"
import Nav from "./nav"

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <>
      <header
        className={` position-fixed container-fluid top-0 start-0 end-0 `}
        id="top-bar"
      >
        <div className="row py-3 pc-header px-3  ">
          <Link to="/portfolio" className="col-3 logo-container">
            <img src={Logo} alt="" width={60} />
          </Link>

          <div className="col-9 d-flex align-items-center justify-content-end">
            <div className="row d-flex align-items-center justify-content-end ">
              <div className="col-7">
                <Nav
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                />
              </div>
              <button className="col-2 d-flex align-items-center me-4 cursor">
                {theme === "light" ? (
                  <MoonIcon
                    onClick={() => {
                      toggleTheme()
                    }}
                  />
                ) : (
                  <SunIcon
                    onClick={() => {
                      toggleTheme()
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <MobileHeader className={`menu-container `} />
      </header>
    </>
  )
}

export default Header
