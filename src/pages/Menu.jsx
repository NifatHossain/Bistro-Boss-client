import Cover from "../components/Cover";
import menuImage from "../assets/menu/banner3.jpg"
import PopularMenu from "../components/PopularMenu";
import dessertsImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import SectionTitle from "../components/SectionTitle";


const Menu = () => {
    return (
        <div className="flex flex-col gap-5">
            <Cover img={menuImage} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
            <SectionTitle heading={'Todays Offer'} subHeading={'dont miss it'}></SectionTitle>
            <PopularMenu itemType={'offered'}></PopularMenu>
            <Cover img={dessertsImg} title={'DESSERTS'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu itemType={'dessert'}></PopularMenu>
            <Cover img={pizzaImg} title={'PIZZA'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu itemType={'pizza'}></PopularMenu>
            <Cover img={saladImg} title={'SALADS'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu itemType={'salad'}></PopularMenu>
        </div>
    );
};

export default Menu;