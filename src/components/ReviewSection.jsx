import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ReviewSection = () => {
  const [ reviews, setReviews ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allreviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-8">
      <SectionTitle className='mb-5'
        subHeading={"What out Customers Say"}
        heading={"Testimonial"}
      ></SectionTitle>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            reviews.map(review=><SwiperSlide key={review._id} review={review}>
                <div className="text-center flex flex-col items-center mx-16">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                    <p>{review.details}</p>
                    <p className="text-orange-400 text-3xl mb-9">{review.name}</p>

                </div>
                </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
