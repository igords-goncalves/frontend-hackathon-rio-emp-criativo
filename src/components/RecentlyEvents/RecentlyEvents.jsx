import './RecentlyEvents.scss'
import { Cards,cards } from './cards/Cards'


export function RecentlyEvents() {
      

    return(
        <div className='recentlyEvents'>
            <h2>Próximos Eventos</h2>
            <nav>
                <ul>
                    <li>Horário</li>
                    <li>Dia</li>
                    <li>Classificação</li>
                    <li>Preço</li>
                </ul>
            </nav>

            {cards.map((card,index) => (
                
                <div key={index} className='rececentlyEvents-list'>
                    <Cards index = {index} />
                </div>
                   
            ))}
        </div>
    )
}