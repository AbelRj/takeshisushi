import { Link } from "react-router-dom"

const BtnMenu = ({ label,claseMenu, openMenu, setOpenMenu,to }) => {
    const handleClick= () =>{
        setOpenMenu(!openMenu); // Cambiar el estado
    }
return(
    <li className="menu-button">
    <Link className={claseMenu} 
    onClick={handleClick}
    to={to}>{label}
    </Link>

</li>
)
}

export default BtnMenu