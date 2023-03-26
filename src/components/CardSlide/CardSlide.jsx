import styles from './cardSlide.module.scss'

export default function CardSlider(props) {
  const { images, descriptions } = props
  return (
    <div className={styles.carrossel}>
      {images.map((image, index) => (
        <div className={styles.slide} key={index}>
          <img src={image} alt={`Imagem ${index}`} />
          <p className={styles.description}>{descriptions[index]}</p>
        </div>
      ))}
    </div>
  )
}
