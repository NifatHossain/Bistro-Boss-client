import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
    const{user}=useAuth(AuthContext)
    const axiosSecure= useAxiosSecure()
    const { refetch,data: cart=[] } = useQuery({
        queryKey: ['cart'],
        queryFn:async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
          },

    })
    return [cart,refetch]
};

export default useCart;