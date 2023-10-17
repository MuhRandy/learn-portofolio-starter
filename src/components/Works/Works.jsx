import './Works.css'
import Upwork from '../../assets/img/Upwork.png'
import Fiverr from '../../assets/img/Fiverr.png'
import Amazon from '../../assets/img/Amazon.png'
import Shopify from '../../assets/img/Shopify.png'
import Facebook from '../../assets/img/Facebook.png'

const Works = () => {
    return ( 
    <div className="works">
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Quaerat nulla totam, beatae ratione quam soluta error? Nihil, harum?
                <br />
                Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing.
                <br />
                Lorem, ipsum dolor.
            </span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>

                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div> 
    );
}
 
export default Works;