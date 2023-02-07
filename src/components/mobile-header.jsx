import { useState } from "react"
import { Link } from "react-router-dom"
import { CloseMenuIcon, MenuIcon } from "../assets/svg"
import Logo from "../assets/image/profile.png"
import Backdrop from "./backdrop"
import Menu from "./menu"
import { useContext } from "react"
import { MoonIcon, SunIcon } from "../assets/svg"
import { ThemeContext } from "../helpers/context"

const MobileHeader = props => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [menu, setMenu] = useState(false)

  const closeMenu = () => {
    setMenu(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className={props.className}>
      <Link to="/portfolio" className="col-3 logo-container p-2">
        <img src={Logo} alt="" width={40} />
      </Link>
      <div className="menu-btn">
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
        <button
          className="ms-2"
          onClick={() => {
            setMenu(!menu)
          }}
        >
          {menu ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
      </div>
      <Menu close={closeMenu} className={menu && "menu slide"} />
      <Backdrop onClick={closeMenu} className={menu && "backdrop slide"} />
    </div>
  )
}

export default MobileHeader
