import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useMenu from "../hooks/useMenu";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const ItemCard = ({requiredItem}) => {
    const [menu]=useMenu()
    const {user}=useAuth()
    const location=useLocation()
    const navigate= useNavigate()
    const axiosSecure= useAxiosSecure()
    const [,refetch]=useCart()

    const handleBuyNow=(item)=>{
        if(user && user.email){
            // console.log(item)
            // console.log(user.email)
            const orderInfo={
                itemId: item._id,
                email:user.email,
                name:item.name,
                image:item.image,
                price:item.price
            }
            console.log(orderInfo)
            axiosSecure.post('/addtocart',orderInfo)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Added to cart",
                        icon: "success",
                      })
                      refetch();
                }
            })

        }else{
        Swal.fire({
            title: "You must login to order",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
            //   <Navigate to={'/login'} state={location.pathname}></Navigate>
            navigate('/login', {state:location.pathname})
            }
          });
        }
    }
    const reqItems= menu.filter(item=>item.category===requiredItem)
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                reqItems.map(item=><>
                    <div className="card card-compact  bg-base-100 mb-3 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <p className="bg-black text-white px-3 py-2 absolute top-3 right-4">${item.price}</p>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-center">
                            <button onClick={()=>handleBuyNow(item)} className="btn text-orange-400 bg-slate-100 border-0 border-b-4 border-orange-400 btn-outline font-semibold">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    </>

                )
            }
        </div>
    );
};

export default ItemCard;