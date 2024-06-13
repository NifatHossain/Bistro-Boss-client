
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";



const Cart = () => {
    const [carts,refetch] = useCart()
    const axiosSecure=useAxiosSecure()
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
                axiosSecure.delete(`/deletecart/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        refetch();
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                    }
                })
            }
          });
    }
    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <h2 className="text-3xl">TOTAL ORDERS: {carts.length}</h2>
                <h2 className="text-3xl">TOTAL PRICE: {carts.reduce((sum,item)=>sum+item.price ,0)}</h2>
                <button className="btn btn-primary">pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {carts.map((item,idx)=><tr key={item._id}>
        <th>
          {idx+1}
        </th>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
        </td>
        <td>{item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-red-500 text-2xl" /> </button>
        </th>
      </tr>)}
      
      
      
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default Cart;