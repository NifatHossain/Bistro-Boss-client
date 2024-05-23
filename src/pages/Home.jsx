import CategorySlider from "../components/CategorySlider";
import FeaturedItem from "../components/FeaturedItem";
import PopularMenu from "../components/PopularMenu";
import ReviewSection from "../components/ReviewSection";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CategorySlider></CategorySlider>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;