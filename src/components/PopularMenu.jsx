
import MenuItemCard from "./MenuItemCard";
import useMenu from "../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = ({itemType}) => {
    const [menu]= useMenu()
    const popular= menu.filter(item=>item.category===itemType)
    // const [menu,setMenu]=useState([])
    // useEffect(
    //     ()=>{
    //         fetch('../../public/menu.json')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             const items= data.filter(item=>item.category==='popular');
    //             setMenu(items);
    //         })
    //     }
    //     ,[])
    return (
        <div className="my-4">
            
            <div className="grid grid-cols-2 gap-x-6">
                {
                    popular.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${itemType}`}><button className="btn text-slate-500 border-0 border-b-4 btn-outline font-semibold">Buy Now</button></Link> 
            </div>
        </div>
    );
};

export default PopularMenu;