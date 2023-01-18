
import { useSelector} from 'react-redux';

function Service(){
  const changeThemeApp=useSelector((state)=>state.darkReducer)

    return (
        <div style={{
          backgroundColor: `${changeThemeApp ? "black" : "white"}`,
          color: `${changeThemeApp ? "white" : "black"}`,
        }}>
            
         <h1>Our service is not available</h1>
           <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
      veniam id, dolorum libero ullam accusantium quidem impedit? Sint, dicta
      fuga consequatur cumque minus culpa nisi quia beatae voluptatum autem
      rerum quae commodi quo quisquam ipsam id quaerat aut similique! Expedita?</p>
        </div>
    )
}
export default Service