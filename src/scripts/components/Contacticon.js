import styles from './contacticon.scss';

const icons = {
    location: {
        icon: 'map-marker',
        color: '#B4CEB3',
        link: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB4O5Q98A1mVcliy2K2dfq46lZZNa7uiAc&q='
    },
    email: {
        icon: 'envelope',
        color: '#DB7F8E',
        link: 'mailto:'
    },
    instagram: {
        icon: 'instagram',
        color: '#546A76',
        link: ''
    },
    linkedin: {
        icon: 'linkedin',
        color: '#C49991',
        link: ''
    },
    facebook: {
        icon: 'facebook',
        color: '#DBD3C9',
        link: ''
    }     
}


function getIcon(info){
    console.log(info.name);
    if(icons[info.name]){ //bara om this.props.name stämmer överrens med npgot i min lista icons så kommer en icon skapas. 
         console.log(icons[info.name]);
         return icons[info.name];
    }
}


export default class Contacticon extends React.Component {
    render() {
        console.log(this.props);
        const icon = getIcon(this.props);
        console.log(icon);

        if (icon && this.props.link){
            return(
                <div className={styles.root} style={{backgroundColor:icon.color}}>
                    <a className={styles.icon} href={icon.link + this.props.link} target="blank">
                        <span className={`fa fa-${icon.icon} fa-4x`} aria-hidden="true"></span> 
                    </a>
                </div>
            )
        }else {
            return null;
        }
    }
}

