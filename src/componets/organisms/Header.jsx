import { useState } from "react"
import Menu from "../molecules/Menu"
import { HeaderTitle } from "../molecules/Title"

const Header = () => {
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <header>
            <HeaderTitle />
            <Menu 
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            />
        </header>
    )
}
export default Header
