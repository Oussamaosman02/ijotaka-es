import Image from 'next/image';
import styles from '../styles/us.module.css';
export default function Us() {
  return (
    <div className={styles.cont}>
      <h1>
        Hola, estos <sup>no</sup>somos nosotros!
      </h1>
      <ul className={styles.container}>
        <li>
          <div>
            <Image
              src='/assets/image.jpeg'
              width={500}
              height={500}
              alt='Mike Ross'
              layout='responsive'
            />
          </div>
          <h3>Mike Ross</h3>
          <h4>Vice Presidente</h4>
        </li>
        <li>
          <div>
            <Image
              src='/assets/carmen.jpeg'
              width={500}
              height={500}
              alt='Carmen Muñoz'
              layout='responsive'
            />
          </div>
          <h3>Carmen Muñoz</h3>
          <h4>Co-Fundadora</h4>
        </li>
        <li>
          <div>
            <Image
              src='/assets/lebrusan.jpeg'
              width={500}
              height={500}
              alt='Lebrusan Muñoz'
              layout='responsive'
            />
          </div>
          <h3>Lebrusan Muñoz</h3>
          <h4>Co-Fundador</h4>
        </li>
        <li>
          <div>
            <Image
              src='/assets/ramon.jpeg'
              width={500}
              height={500}
              alt='Ramón García'
              layout='responsive'
            />
          </div>
          <h3>Ramón García</h3>
          <h4>Vice Presidente</h4>
        </li>
        <li>
          <div>
            <Image
              src='/assets/yolanda.jpeg'
              width={500}
              height={500}
              alt='Yolanda Zendal'
              layout='responsive'
            />
          </div>
          <h3>Yolanda Zendal</h3>
          <h4>Marketing</h4>
        </li>
      </ul>
      <p>
        Lebrusan, <span>el jefe</span>, es el que pica todo el código.
      </p>
      <p>
        Los demás nos limitamos a observarlo en silencio y a traerle comida.
      </p>
    </div>
  );
}
