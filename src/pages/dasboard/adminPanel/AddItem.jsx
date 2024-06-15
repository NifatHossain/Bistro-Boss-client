import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const imageHostingKey = import.meta.env.VITE_imageHostingKey
const imageHostingApi= `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic=useAxiosPublic()
  const onSubmit = async(data) =>{
    console.log(data);
    const imageFile= {image:data.image[0]}
    const result= await axiosPublic.post(imageHostingApi,imageFile,{
        headers:{
            "Content-Type": 'multipart/form-data'
        }
    })
    console.log(result.data.data.display_url)
  } 
  console.log(errors);
  
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-6">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className='p-2 border-2' placeholder="name" {...register} />
          <div className='flex gap-4'>
            <select className='border-2 p-2 flex-1' {...register("category", { required: true })}>
                <option value="Dessert">Dessert</option>
                <option value="Soup">Soup</option>
                <option value="Pizza">Pizza</option>
                <option value="Salad">Salad</option>
                <option value="Drinks">Drinks</option>
            </select>
            <input
                type="number"
                className='p-2 border-2 flex-1'
                placeholder="price"
                {...register("price", { required: true })}
            />
          </div>
          <textarea className='border-2' placeholder='Enter Recipe' {...register("recipe", {})} />
          <input type="file" {...register("image",{required:true})} className="file-input w-full max-w-xs" />

          <input type="submit" className='btn' />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
