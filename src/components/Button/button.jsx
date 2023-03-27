import styles from './button.module.scss'

export default function Button(props) {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>{props.textButton}</button>
    </div>
  )
}
