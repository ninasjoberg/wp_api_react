import styles from './product.scss';


export default class Product extends React.Component {
    render() {
        const {
            title,
            image,
            description
        } = this.props;
        
        return (
            <div>
                <h2> {title}</h2>
                <p className={styles.root}>
                    {description}
                </p>
                <img src={image.url} alt=""/>
            </div>
        );
    }
}

