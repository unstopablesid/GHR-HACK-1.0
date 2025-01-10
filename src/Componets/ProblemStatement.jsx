import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules
import "swiper/css"; // Swiper core styles
import "swiper/swiper-bundle.css";
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import "../Styles/Slider.css"; // Add custom styles here

const Slider = () => {
    const slides = [
        {
          id: 1,
          content: "Locked Content\nWill be revealed soon!! 😊",
        },
        {
          id: 2,
          content: "Locked Content\nWill be revealed soon!! 😊",
        },
        {
          id: 3,
          content: "Locked Content\nWill be revealed soon!! 😊",
        },
        {
          id: 1,
          content: "Locked Content\nWill be revealed soon!! 😊",
        },
        {
          id: 2,
          content: "Locked Content\nWill be revealed soon!! 😊",
        },
        {
          id: 3,
          content: "Locked Content\nWill be revealed soon!! 😊",
        },
      ];
    
      return (
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "2rem 0" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              // Adjust slides per view for different screen sizes
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            style={{
              paddingBottom: "50px", // Space for pagination dots
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "250px", background: "#3a3a3a", color: "#fff", borderRadius: "10px", padding: "20px" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
                  <div style={{ textAlign: "center", fontSize: "1.2rem", whiteSpace: "pre-wrap", color: "#f9a3c7" }}>
                    {slide.content}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
export default Slider;
