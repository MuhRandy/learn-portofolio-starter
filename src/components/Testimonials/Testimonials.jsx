import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../assets/img/profile1.jpg";
import profilePic2 from "../../assets/img/profile2.jpg";
import profilePic3 from "../../assets/img/profile3.jpg";
import profilePic4 from "../../assets/img/profile4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor veritatis voluptates debitis quo aliquam necessitatibus totam consequatur, deserunt sit nihil nobis odio eos facere?",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum corrupti exercitationem iste nisi, dolores nesciunt maiores veniam officia voluptatibus excepturi repellat explicabo sint sit et ut, asperiores corporis inventore. Quas ex aliquam ratione reiciendis, qui distinctio officia.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae atque cum eveniet minus, dolorem sed ab ipsum nemo corrupti non nulla vel ea maxime neque sequi at dolorum? In recusandae magnam voluptatem quasi nobis suscipit tempore eius fugit? Ipsam id eius voluptates, odit nesciunt voluptate placeat adipisci unde labore.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae atque cum eveniet minus, dolorem sed ab ipsum nemo corrupti non nulla vel ea maxime neque sequi at dolorum? In recusandae magnam voluptatem quasi nobis suscipit tempore eius fugit? Ipsam id eius voluptates, odit nesciunt voluptate placeat adipisci unde labore.",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
