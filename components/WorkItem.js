import styles from '../styles/workitem.module.css';

export default function WorkItem({ item }) {
  return (
    <div className={styles.workItem}>
      <div className={styles.workItemTitle}><b>{item.company}</b>, {item.location}</div>
      <div>{item.title} | <i className={styles.workItemInfo}>{item.dates} </i></div>
      <ul className={styles.workItemDescription}>
        {
          item.description.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
      <hr></hr>
    </ div>
  );
}