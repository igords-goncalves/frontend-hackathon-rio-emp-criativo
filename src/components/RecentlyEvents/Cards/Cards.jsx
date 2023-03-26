import './Cards.scss'
import image2 from '../../../img/image2.png'
import image3 from '../../../img/image3.png'
import image4 from '../../../img/image4.png'
import image5 from '../../../img/image5.png'

export const cards =[
    {
        event: 'Evento',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, est?',
        link:'Saiba mais',
        url:image2
    },
    {
        event: 'Evento',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, est?',
        link:'Saiba mais',
        url:image3
    },
    {
        event: 'Evento',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, est?',
        link:'Saiba mais',
        url:image4
    },
    {
        event: 'Evento',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, est?',
        link:'Saiba mais',
        url:image5
    },
] 
    
export function Cards(props) {
    
    return (
        <div className="card">
            <img src={cards[props.index].url} />
            <div className='card-textDescription'>
                <h3>{cards[props.index].event}</h3>
                <p>{cards[props.index].description}</p>
                <a>{cards[props.index].link}</a>
            </div>
        </div>
    )
}