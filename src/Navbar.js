
import { Link } from "react-router-dom"

import { useSelector,useDispatch } from 'react-redux';
import { ChangeDark } from "./action";
function Navbar() {

  const changeThemeApp=useSelector((state)=>state.darkReducer)
  const dispatch=useDispatch()
  


  return (
    <div style={{ backgroundColor: `${changeThemeApp ? "black" : "white"}`,
    color: `${changeThemeApp ? "white" : "black"}`,}}>
      <div>

        <li><Link to='/'>Home</Link></li>
        <li><Link to="/Contect">Contect</Link></li>
        <li><Link to="/Service">Service</Link></li>
        <button onClick={()=>dispatch(ChangeDark())}>Toggle_button</button>
      </div>


    </div>
  )
}
export default Navbar