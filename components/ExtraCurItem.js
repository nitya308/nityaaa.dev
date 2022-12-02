import styles from '../styles/extracurriculars.module.css';

export default function ExtraCurItem({ item }) {
  return (
    <div className={styles.item} style={{ backgroundColor: item.color }}>
      <img src={item.img} className={styles.itemImage}></img>
      <div className={styles.itemTitle}>{item.title}</div>
      <div className={styles.itemDescription}>{item.description}</div>
    </ div>
  );
}