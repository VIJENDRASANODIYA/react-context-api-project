import myContext from "./myContext";
import { useContext } from "react";


function Contect(){
    const { isDark } = useContext(myContext);

    return (
        <div style={{
            backgroundColor: `${isDark ? "black" : "white"}`,
            color: `${isDark ? "lightgreen" : "black"}`,
          }}>
            <h1>hello this is Contect js</h1>
        </div>
    )
}
export default Contect