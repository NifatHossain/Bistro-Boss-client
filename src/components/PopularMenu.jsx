import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItemCard from "./MenuItemCard";


const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(
        ()=>{
            fetch('../../public/menu.json')
            .then(res=>res.json())
            .then(data=>{
                const items= data.filter(item=>item.category==='popular');
                setMenu(items);
            })
        }
        ,[])
    return (
        <div className="my-4">
            <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid grid-cols-2 gap-x-6">
                {
                    menu.map(item=><MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;