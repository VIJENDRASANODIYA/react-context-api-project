// import Navbar from "./Navbar"
import myContext from "./myContext";
// import react from "react";
import { useContext } from "react";


function Home(){
    const { isDark } = useContext(myContext);
    return (
        <div  style={{
            backgroundColor: `${isDark ? "black" : "white"}`,
            color: `${isDark ? "lightgreen" : "black"}`,
          }}>
            
            
           <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
      veniam id, dolorum libero ullam accusantium quidem impedit? Sint, dicta
      fuga consequatur cumque minus culpa nisi quia beatae voluptatum autem
      rerum quae commodi quo quisquam ipsam id quaerat aut similique! Expedita?</p>
        </div>
    )
}
export default Home