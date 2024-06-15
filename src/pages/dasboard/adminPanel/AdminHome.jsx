import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch,data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // ,{  headers: {'authorization':localStorage.getItem('access-token')}}  -->used after 'users' in line 14
      const data = await axiosSecure.get("/users");4
      return data.data;
    },
  });
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
        
            axiosSecure.delete(`/deleteuser/${id}`)
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
    const handleMakeAdmin=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: `${id} will become admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Promote user!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/makeadmin/${id}`)
                .then(result=>{
                    if(result.data.modifiedCount>0){
                        refetch()
                        Swal.fire({
                        title: "Success!",
                        text: "User has been promoted to admin",
                        icon: "success"
                        });
                    }
                })
            }
          });
    }
  return (
    <div>
      <div>
        <h1 className="text-2xl ml-4">Total Users:{users.length} </h1>
        <div className="ml-4 overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-orange-400 ">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map((user,idx)=><tr key={user._id}>
                    <th>{idx+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{ user?.role==='admin'? <button className="btn bg-orange-100 btn-lg"><GrUserAdmin className="text-2xl" /> </button>:
                        <button onClick={()=>handleMakeAdmin(user._id)} className="btn bg-orange-100 btn-lg"><FaUsers className="text-2xl"></FaUsers> </button>}</td>
                    <td><button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-red-500 text-2xl" /> </button></td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
