import './facilities.css'

import labo1 from '../../assets/images/facility1.jpg'
import labo2 from '../../assets/images/facility2.jpg'

const Facilities = () => {
    return (
        <div id='facilities' className='facilities-container'>
            <div className='facilities-title'>
                <h1>Our Facilities</h1>
            </div>
            <div className='facilities-divs'>
                <div className='facilities-text'>
                    <h2>Clinical facilities are the backbone of modern healthcare systems</h2>

                    <p>Providing essential resources for the diagnosis, treatment, and
                        management of various medical conditions. These facilities encompass
                        a wide range of settings, from hospitals and clinics to diagnostic
                        laboratories and rehabilitation centers. In this article, we will explore
                        the vital role that clinical facilities play in delivering high-quality
                        healthcare and improving patient outcomes
                    </p>
                    <div className='facilities-button'>
                        <button>Find Out More</button>
                    </div>

                </div>
                <div className='facilities-img'>
                    <img className='imagem1' src={labo2} loading='lazy'></img>
                    <img className='imagem2' src={labo1} loading='lazy'></img>
                </div>
            </div>
        </div>
    )
}


export default Facilities