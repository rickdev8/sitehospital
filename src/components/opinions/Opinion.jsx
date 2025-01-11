import './opinion.css'

import people1 from '../../assets/images/people.webp'
import people2 from '../../assets/images/people2.webp'
import people3 from '../../assets/images/people3.avif'

const Opinion = () => {

    const peoples = [
        {
            imgurl :  people3,
            name: "Andrea Andy, 24",
            opinion: `"I had a great experience as this clinic. The doctors were
            knowledgable and caring"`
            

        },
        {
            imgurl : people2,
            name: "Ricky Reiynold, 27",
            opinion: `"The clinic provided a comfortable and welcoming atmosphere"`

        },
        {
            imgurl : people1,
            name: "Gralish David, 42",
            opinion: '"The treatments i received at this clinic were effective."'
        }
    ]

    return (
        <div id='comments' className='container-opinions'>
            <div className='title-opinion'>
                <h1>What People Say</h1>
            </div>
            <div className='opinions-divs'>
                {peoples.map(people => (
                    <div  className='div-opinion'>
                        <img src={ people.imgurl }></img>
                        <h3> { people.name } </h3>
                        <p> { people.opinion } </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Opinion