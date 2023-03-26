import { Link } from 'react-router-dom';
import Button from '../../components/Button/button';
import CardSlide from '../../components/CardSlide/CardSlide';
import { RecentlyEvents } from '../../components/RecentlyEvents/Cards/RecentlyEvents';
import styles from './home.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import image from "../../images/festa.png"
import image1 from "../../images/festa4.png"
import image2 from "../../images/festa2.png"
import image3 from "../../images/festa3.png"
import image4 from "../../images/festa5.png"


const images = [image, image1, image2, image3, image4];
const descriptions = ['Balada', 'Acampamento', 'Festa', 'Cultura', 'Esporte'];



export default function Home() {
    return (
        <>
            <section>
                <a href="">Sou Fornecedor</a>
                <hr />
                <h1>Destaques</h1>
                <CardSlide images={images} descriptions={descriptions}/>
                <hr/>
                <section>
                    <div className={styles.div_container}>
                        <h3>Criação de Roteiro</h3>
                        <p>O roteiro é onde você pode definir o seu cronograma de acordo com o horário dos eventos e atrações. Fique à vontade para criar o dia ideal ao filtrar o que é a sua cara!</p>
                        <Link to="/login"><Button textButton="Criar Roteiro"/></Link>
                    </div>
                </section>
            </section>
            <RecentlyEvents/>
        </>
    );
}