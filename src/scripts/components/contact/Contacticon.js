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
    if(icons[info.name]){ //bara om props.name stämmer överrens med något i min lista icons så kommer en icon skapas. 
         return icons[info.name];
    }
}


export default function Contacticon(props) {

    const icon = getIcon(props);

    if (icon && props.link){
        return(
            <a className={styles.icon} href={icon.link + props.link} target="blank">
                <div className={styles.root} style={{backgroundColor:icon.color}}>
                    <span className={`fa fa-${icon.icon} fa-2x`} aria-hidden="true"></span> 
                </div>
            </a>
        )
    }else {
        return null;
    }
}

