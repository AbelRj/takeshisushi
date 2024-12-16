import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";

const App = () => {
    return (  
        <>
        <Header />
        <div className="pt-16 max-w-256 m-auto">
            <Outlet />
            </div>
        </>
    );
}
 
export default App;