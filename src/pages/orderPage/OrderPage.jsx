import Cover from "../../components/Cover";
import orderImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import ItemCard from "../../components/ItemCard";
import { useParams } from "react-router-dom";
const OrderPage = () => {
    const categories=['dessert','pizza','salad','soup','drinks']
    const {category}=useParams()
    const initialIndex= categories.indexOf(category)
    const [idx,setIndex]=useState(initialIndex)

    return (
        <div>
            <Cover img={orderImg} title={"OUR SHOP"} subTitle={"Order your desired food now"}></Cover>
            <div className="max-w-5xl mx-auto mt-5">
            <Tabs defaultIndex={idx} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><ItemCard requiredItem={'dessert'}></ItemCard></TabPanel>
                <TabPanel><ItemCard requiredItem={'pizza'}></ItemCard></TabPanel>
                <TabPanel><ItemCard requiredItem={'salad'}></ItemCard></TabPanel>
                <TabPanel><ItemCard requiredItem={'soup'}></ItemCard></TabPanel>
                <TabPanel><ItemCard requiredItem={'drinks'}></ItemCard></TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default OrderPage;