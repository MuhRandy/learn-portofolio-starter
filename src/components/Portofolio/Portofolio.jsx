import './Portofolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from '../../assets/img/Sidebar.png'
import Ecommerce from '../../assets/img/Ecommerce.png'
import HOC from '../../assets/img/HOC.png'
import MusicApp from '../../assets/img/MusicApp.png'

const Portofolio = () => {
    return (
        <div className="portofolio">

            {/* heading */}
            <span>Recent Projects</span>
            <span>Portofolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portofolio-slider'
            >
                <SwiperSlide><img src={Sidebar} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Ecommerce} alt="" /></SwiperSlide>
                <SwiperSlide><img src={MusicApp} alt="" /></SwiperSlide>
                <SwiperSlide><img src={HOC} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default Portofolio;