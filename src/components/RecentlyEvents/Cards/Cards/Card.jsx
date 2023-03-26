import './Card.scss'
import image2 from '../../../../images/recent1.png'
import image3 from '../../../../images/recent2.png'
import image4 from '../../../../images/recent3.png'
import image5 from '../../../../images/recent4.png'


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
            <img src={cards[props.index].url}/>
            <div className='card-textDescription'>
                <h3>{cards[props.index].event}</h3>
                <p>{cards[props.index].description}</p>
                <a>{cards[props.index].link}</a>
            </div>
        </div>
    )
}