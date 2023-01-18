
import { useSelector} from 'react-redux';


function Contect(){
    const changeThemeApp=useSelector((state)=>state.darkReducer)


    return (
        <div style={{backgroundColor: `${changeThemeApp ? "black" : "white"}`,
        color: `${changeThemeApp ? "white" : "black"}`,
           
          }}>
            <h1>hello this is Contect js</h1>
            <p>   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam inventore
      fuga ex animi. Corrupti harum, quibusdam possimus placeat officiis
      doloremque et laudantium vero quisquam facere optio recusandae dolorum
      sunt soluta quas omnis minima. Quidem itaque aliquid amet cupiditate
      dignissimos consequuntur ducimus officiis temporibus odio. Quae impedit
      aperiam dolor asperiores accusamus, quasi est temporibus neque? Libero
      eius voluptas nihil eum at, facere officiis! Nesciunt, doloremque
      laboriosam. Unde cum reiciendis dolorum inventore natus earum excepturi
      quis dicta optio temporibus ex minima suscipit veniam numquam sint, ipsa
      distinctio ullam. Harum optio quas ea illum vero placeat ullam, expedita
      rem quaerat minima quo voluptatem.</p>
        </div>
    )
}
export default Contect