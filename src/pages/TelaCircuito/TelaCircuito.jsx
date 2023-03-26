import CardSlide from '../../components/CardSlide/CardSlide'
// import Button from '../../components/Button/Button'
import styles from './telaCircuito.module.scss'
import image from '../../images/conheca1.png'
import image1 from '../../images/conheca2.png'
import image2 from '../../images/conheca3.png'
import image3 from '../../images/conheca4.png'
import image4 from '../../images/conheca5.png'
import image5 from '../../images/conheca6.png'
import Button from '../../components/Button/button'
import { Link } from 'react-router-dom'
import './telaCircuito.module.scss'

const images = [image, image1, image2, image3, image4, image5]
const descriptions = [
  'Cultura',
  'Relax',
  'Turista',
  'Balada',
  'Romântico',
  'Música',
]
const descriptions2 = [
  'Música',
  'Romântico',
  'Balada',
  'Turista',
  'Relax',
  'Cultura',
]
const images2 = [image5, image4, image3, image2, image1, image]

export default function TelaCircuito() {
  return (
    <div className={styles.div_container}>
      <div className={styles.top_nav}>
        <Link className={styles.top_nav_link} to='/'>
          Voltar
        </Link>
        <p>Rio de Janeiro, BR</p>

        <div></div>
      </div>

      <div className={styles.container}>
        <h1>Circuitos</h1>
      </div>

      <div className={styles.container}>
        <h3>Sugestões</h3>
      </div>

      <CardSlide images={images2} descriptions={descriptions2} />

      <div className={styles.container}>
        <h3>Circuito da Semana</h3>
      </div>

      <div>
        <img src={image3} alt={`Imagem`} />
        <p>Turista</p>
      </div>

      <div className={styles.container}>
        <h3>Conheça os circuitos</h3>
      </div>

      <CardSlide images={images} descriptions={descriptions} />

      <Link to='/filter'>
        <Button textButton='Criar Roteiro' />
      </Link>
    </div>
  )
}
