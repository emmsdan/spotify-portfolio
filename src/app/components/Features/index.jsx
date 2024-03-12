
import { features } from "./data"
import styles from './style.module.css'
export const Features = () => {

    return <section className={styles.features}>
        <h3 className={styles.title}>The power of Premium</h3>

        <div className={styles.list}>
            {
            features.map((feature) => <FeatureItem 
                title={feature.title}
                image={feature.image}
                description={feature.description}
             />
             )
             }
        </div>
    </section>
}

const FeatureItem = (feature) => {
    return (<div className={styles.item}>
        <img src={feature.image} />
        <div>
            <h5 className={styles.title}>{feature.title}</h5>
            <p className={styles.description}>{feature.description}</p>
        </div>
    </div>)
}