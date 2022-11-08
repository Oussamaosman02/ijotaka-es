import styles from '../styles/made.module.css';

export default function Made() {
  return (
    <div className={styles.container} >
      <h1>Páginas hechas por nosotros</h1>
      <ul >
        <li>
          <a href="https://tonyashoes.creal.store" target="_blank" rel="noopener noreferrer">
          <iframe src="https://tonyashoes.creal.store" >
            </iframe>
          </a>
        </li>
        <li>
          <a href="https://creal.store" target="_blank" rel="noopener noreferrer">
            <iframe src="https://creal.store" >
            </iframe>
          </a>
        </li>
        <li>
          <a href="https://tonias.creal.store" target="_blank" rel="noopener noreferrer">
          <iframe src="https://tonias.creal.store" >
            </iframe>
          </a>
        </li>
      </ul>
    </div>
  );
}
