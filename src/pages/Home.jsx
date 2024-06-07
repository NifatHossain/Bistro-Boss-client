import { Helmet } from "react-helmet";
import CategorySlider from "../components/CategorySlider";
import PopularMenu from "../components/PopularMenu";
import ReviewSection from "../components/ReviewSection";
import Slider from "../components/Slider";
import FeaturedItem from "../components/folder/FeaturedItem";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Slider></Slider>
      <CategorySlider></CategorySlider>
      <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'}></SectionTitle>
      <PopularMenu itemType={'popular'}></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
