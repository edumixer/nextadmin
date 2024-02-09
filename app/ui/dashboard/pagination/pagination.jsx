import styles from './pagination.module.css';
const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Voltar</button>
      <button className={styles.button}>Próximo</button>
    </div>
  );
}

export default Pagination;