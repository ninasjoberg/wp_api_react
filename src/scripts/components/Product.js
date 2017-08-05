import styles from './product.scss';


export default class Product extends React.Component {
    render() {
        const {
            title,
            image,
            description
        } = this.props;
        
        return (
            <div className={styles.root}>
                <img className={styles.productimg} src={image.url} alt=""/>
                <h2> {title}</h2>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
        );
    }
}

