import './services.css'
import { FaShield } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiSoapExperiment } from "react-icons/gi";
import { RiHeartPulseFill } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { PiCalendarCheckFill } from "react-icons/pi";


const Services = () => {
    return (

        <div id='services' className="services-container">
            <div className="services-title">
                <h1 className="title">Outer Services</h1>
            </div>
            <div className='services-containers'>
                <div className="service">
                    <div className='icon'><FaShield /></div>
                    <div className='text'>
                        <h3>Vaccine</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><FaHeart /></div>
                    <div className='text'>
                        <h3>Clinic</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><FaHandHoldingHeart /></div>
                    <div className='text'>
                        <h3>Self Care</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><GiSoapExperiment /></div>
                    <div className='text'>
                        <h3>Laboratory</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><RiHeartPulseFill /></div>
                    <div className='text'>
                        <h3>Treatment</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><MdOutlinePets /></div>
                    <div className='text'>
                        <h3>Pet Health</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><FaEye /></div>
                    <div className='text'>
                        <h3>Symptoms</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
                <div className="service">
                    <div className='icon'><PiCalendarCheckFill /></div>
                    <div className='text'>
                        <h3>Check Up</h3>
                        <p>Lorem ipsum matkasse vir. Monogedade bevis</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Services