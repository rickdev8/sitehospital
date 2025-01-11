import './banner.css'
import imagem2 from '../../assets/images/imagem2.png'


const Banner = () => {
    return (
        <div id='home' className='banner-container'>
            <div className="banner-content">

                <div className="banner-heading">
                    <h2>Every good thing starts whith good health</h2>
                </div>

                <div className="banner-subheading">
                    <p>
                        We are here to serve people whith patient centered-care to deliver outstanding helathcare for
                        better lives.
                    </p>
                </div>

                <div className="banner-buttons">
                    <button className='banner-appointment-button'>Request appointment</button>
                    <button className='banner-learn-button'>Learn more</button>
                </div>

            </div>
            
            <div className="banner-graphic">
                <img src={imagem2} alt="ellipse" loading='lazy' />
             
            </div>

        </div>
    )
}

export default Banner