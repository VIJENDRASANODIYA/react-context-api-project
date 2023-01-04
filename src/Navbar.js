
import { Link } from "react-router-dom"
import myContext from "./myContext"
import { useContext } from "react"
function Navbar() {
    
    const { isDark, setIsDark } = useContext(myContext);
  const handleClick = () => {
    setIsDark(!isDark);
  };

   
    return (
        <div>
            <div //onClick={() => setTheme(!theme)}
                className={`navbar navbar-expand-lg navbar-${
                    !isDark ? "light" : "dark"
                  } bg-${!isDark ? "light" : "dark"}`}
                style={{
                    backgroundColor:  !isDark ? "black" : "white",
                    color:  !isDark ? "white" : "black"
               }}
                >
                
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/Contect">Contect</Link></li>
                <li><Link to="/Service">Service</Link></li>
                <button onClick={handleClick}>Toggle_button</button>
            </div>


        </div>
    )
}
export default Navbar