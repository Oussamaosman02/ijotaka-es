import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hacemos webs</h1>
      <h2>Las mejores webs.</h2>
      <div className={styles.seccion}>
        <div className={styles.articulo}>
          <h2>Expertos en:</h2>
          <hr />
          <ul>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>NextJs</span>
            </li>
            <li>
              <span>Vanilla Js</span>
            </li>
            <li>
              <span>JQuery</span>
            </li>
            <li>
              <span>ThreeJs</span>
            </li>
            <li>
              <span className={styles.gold}>SEO</span>
            </li>
          </ul>
        </div>
        <div className={styles.articulo}>
          <h2>¿Por qué no usamos CMS?</h2>
          <h4>WordPress | Drupal | Joomla...</h4>
          <hr />
          <ul>
            <li>
              <span>Riesgos de seguridad</span>
              <p>
                Las plantillas son más propensas a recibir ataques por parte de
                hackers
              </p>
            </li>
            <li>
              <span>Diseño limitado</span>
              <p>
                Las plantillas no son customizables 100%, solo algunas partes de
                ellas
              </p>
            </li>
            <li>
              <span>Problemas de carga</span>
              <p>Siempre serán más pesadas y menos optimizadas</p>
            </li>
            <li>
              <span>Poco profesional</span>
              <p>
                Cualquier persona tiene acceso a exactamente las mismas
                plantillas que tú
              </p>
            </li>
            <li>
              <span>Recursos muy limitados</span>
              <p>
                Hay funcionalidades o procesos que un CMS no puede gestionar sin
                escribir código
              </p>
            </li>
            <li>
              <span className={styles.gold}>Más duro de posicionar</span>
              <p>
                Están mucho menos optimizados y sus tiempos de carga son menos
                controlables
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.articulo}>
          <h2>¿Que ofrecemos?</h2>
          <hr />
          <ul>
            <li>
              <span>Personalización 100%</span>
            </li>
            <li>
              <span>Estrategia SEO eficaz</span>
            </li>
            <li>
              <span>+90 en LightHouse</span>
            </li>
            <li>
              <span>Dominio con certificado SSL</span>
            </li>
            <li>
              <span className={styles.gold}>Renderizado en Servidor</span>
            </li>
          </ul>
        </div>
      </div>
      <section className={styles.info}>
        <h2>
          Nuestro <span className={styles.gold}>SEO</span>
        </h2>
        <article>
          <span>Datos Estructurados</span>
          <p>
            Json/ld es un formato json estructurado fácil de escribir para las
            personas y muy <i>intuitivo</i> para el google-bot, que revisa las
            páginas web a indexar.
            <br />
            Esto hace que la página sea fácilmente indexable, además cabe la
            posibilidad de salir en carruseles de medios que aparecen en ciertas
            búsquedas: recetas, dispositivos que se venden, etc
          </p>
        </article>
        <article>
          <span>Validación por el estándar</span>
          <p>
            W3C es un consorcio internacional que da recomendaciones y
            estándares.Es el más prestigioso a nivel de web y uno de los más
            antiguos.Dicta a nivel de estructura recomendaciones sobre buenas
            prácticas, y es en estas en las que se basa google para determinar
            que tan <i>limpia</i> o bien estructurada esta tu web.Aunque esto no
            es muy relevante a la hora del SEO, consideramos que estos detalles
            son los que,a la hora de la verdad, suman.
          </p>
        </article>
        <article>
          <span>SSR</span>
          <p>
            SSR o Server Side Rendering significa renderizado del lado del
            servidor.Esto está a la orden del día en cuanto a rapidez(solo por
            detrás de archivos estáticos). Esto pasa porque al entrar en el
            sitio, se hace la petición al servidor y este genera estáticos, que
            como hemos dicho, es lo más rápido que existe.Esto también ayuda al
            <i> crawler</i> o google-bot a rastrear nuestro sitio de una pasada,
            ya que si fuera javascript puro, daría dos vueltas y perdería
            puntuación la página
          </p>
        </article>
        <article>
          <span className={styles.gold}>La TÉCNICA</span>
          <p>
            También contamos con el mayor secreto SEO, la técnica infalible para
            posicionar lo más alto posible las páginas de nuestros clientes:
            <span className={styles.gold}>
              el usuario primero, luego el crawler
            </span>
            Sería tontería hacerlo de otra forma, ya que prima la sensación e
            impresión que se lleve el usuario que la del bot de google.Si lo
            ponemos en conceptos más terrenales se entendería mejor: ¿Tratarías
            bien solo al crítico de comida que viene a tu restarante y dejarías
            de lado el servicio a los clientes? No, los tratarías igual a todos,
            solo que al crítico le darías un trato un poco más favorable y eso
            conseguimos con los puntos antes mencionados(en especial con los
            datos estructurados)
          </p>
        </article>
      </section>
    </div>
  );
}
