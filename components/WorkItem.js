import styles from '../styles/workitem.module.css';
import OnVisible from 'react-on-visible';

export default function WorkItem({ item, noline }) {
  return (
    <OnVisible visibleClassName={styles.visible} className={styles.workItem}>
      <div className={styles.workItemTitle}><b>{item.company}</b>, {item.location}</div>
      <div>{item.title} | <i className={styles.workItemInfo}>{item.dates} </i></div>
      <ul className={styles.workItemDescription}>
        {
          item.description.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
      {!noline && <hr></hr>}
    </ OnVisible>
  );
}