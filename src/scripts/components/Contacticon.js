import styles from './contacticon.scss';

const icons = {
    location: {
        icon: 'map-marker',
        color: '#B4CEB3'
    },
    email: {
        icon: 'envelope',
        color: '#DB7F8E'
    },
    instagram: {
        icon: 'instagram',
        color: '#546A76'
    },
    linkedin: {
        icon: 'linkedin',
        color: '#C49991'
    },
    facebook: {
        icon: 'facebook',
        color: '#DBD3C9'
    }     
}


function getIcon(name){
    if(icons[name]){
         return icons[name];
    }
}


export default class Contacticon extends React.Component {
    render() {
        const icon = getIcon(this.props.name);
        if (icon){
            return(
                <div className={styles.root} style={{backgroundColor:icon.color}}>
                    <span className={`fa fa-${icon.icon} fa-4x`} aria-hidden="true"></span> 
                </div>
            )
        }else {
            return null;
        }
    }
}

