import CardSlide from '../../components/CardSlide/CardSlide'
import styles from './telaCircuito.module.scss'
import image from "../../images/conheca1.png"
import image1 from "../../images/conheca2.png"
import image2 from "../../images/conheca3.png"
import image3 from "../../images/conheca4.png"
import image4 from "../../images/conheca5.png"
import image5 from "../../images/conheca6.png"

const images = [image, image1, image2, image3, image4, image5];
const descriptions = ['Cultura', 'Relax', 'Turista', 'Balada', 'Romântico', 'Música'];

export default function TelaCircuito() {
    return(
        <div>
            <h1>Circuitos</h1>
            <hr/>
            <h3>Conheça os circuitos</h3>
            <CardSlide images={images} descriptions={descriptions}/>
        </div>
    )
}