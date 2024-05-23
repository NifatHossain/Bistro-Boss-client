
import SectionTitle from "./SectionTitle";
import img from '../assets/featured.jpg'
// import 'FeatureBg.css'
const FeaturedItem = () => {
    return (
        <div className="py-20 my-7 bg-fixed bg-center bg-cover text-white bg-no-repeat bg-[url('https://i.ibb.co/CWpqT3F/pottery-Class3.jpg')]">
            <SectionTitle subHeading={'Check it out'} heading={'OUR FEATURED MENU'} ></SectionTitle>
            <div className="flex px-48 gap-5">
                <img className="w-[400px]" src={img} alt="" />
                <div className="space-y-2">
                    <p className="text-xl">March 20, 2023</p>
                    <p className="text-xl">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline font-semibold">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;