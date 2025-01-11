import './doctor.css'

import doctor1 from '../../assets/images/Dr Andrew.jpg'
import doctor2 from '../../assets/images/Dr Michelle.jpg'
import doctor3 from '../../assets/images/Dr Steve.jpg'

const Doctor = (props) => {

    const doctors = [
        { id: 1, imgurl: doctor1, name: 'Dr. Jhon White, 32', specialty: 'Cardiologist' },
        { id: 2, imgurl: doctor2, name: 'Dr. Sarah Gray, 40', specialty: 'Dermatologist' },
        { id: 3, imgurl: doctor3, name: 'Dr. James Johnson, 34', specialty: 'Orthopedist' }
    ];

    return (
        <div id='doctors' className="doctor-container">
            <div className="doctor-titles">
                <h1>Our Doctors</h1>
                <p>Teamwork and effective communication among doctor members is critical to
                    providing high quality patient care and ensuring positive health outcomes</p>
            </div>
            <div className='doctors'>
                {doctors.map(doctor => (
                    <div key={doctor.id} className='doctor'>
                        <img src={doctor.imgurl} loading='lazy'></img>
                        <h3> {doctor.name} </h3>
                        <p> {doctor.specialty} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Doctor