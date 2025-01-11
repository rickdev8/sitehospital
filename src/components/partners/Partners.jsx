import './partners.css'

import icon1 from '../../assets/images/partner1.png'
import icon2 from '../../assets/images/partner2.png'
import icon3 from '../../assets/images/partner3.png'
import icon4 from '../../assets/images/partner4.png'
import icon5 from '../../assets/images/partner5.png'


const Partners = () => {
    return (
        <div id='partners' className='container-partners'>
            <div className='partners-title'>
                <h1>Our Health Partners</h1>
            </div>
            <div className='text-partners'>
                <p>Research organizations that collaborate on medical research, healthcare innovation<br></br>
                 and the development of new medical tachnologies and treatments</p>
            </div>
            <div className='partners-icons'>
                <img src={icon1}></img>
                <img src={icon2}></img>
                <img src={icon3}></img>
                <img src={icon4}></img>
                <img src={icon5}></img>
            </div>
        </div>
    )
}

export default Partners