import BtnMenu from "../atoms/BtnMenu";
import iconoMenu from "../../assets/icons/menu.png"
import iconoClose from "../../assets/icons/close.png"


const Menu = ({openMenu, setOpenMenu}) => {
    const menuItems = ["Home","Nosotros", "Comida Peruana", "Sushi", "Ubicación","Carrito"];

const handleClick = () => {

    setOpenMenu(!openMenu); // Cambiar el estado
  };
    return (
        <nav>
             <button className="btn-icon-menu" onClick={handleClick}>
                <img  className="icon-menu" src={openMenu ? iconoClose : iconoMenu} alt="" />
            </button>
            <ul className={`menu-items ${openMenu ? "visible" : "hidden"}`}>
                {menuItems.map((item, index) => (
                    <BtnMenu key={index} label={item} 
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    claseMenu="btn-menu" openMenu ={openMenu} setOpenMenu = {setOpenMenu}/>
                ))}
            </ul>
        </nav>
    );
};

export default Menu
