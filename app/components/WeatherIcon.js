import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBolt, faCloud, faSun} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({weatherType}){
    switch(weatherType){
        case 'Clouds':
            return <FontAwesomeIcon icon = {faCloud}/>
        case 'Clear':
            return <FontAwesomeIcon icon ={faSun}/>
        case 'Haze':
            return <FontAwesomeIcon icon = {faBolt}/>
        default:
            return <FontAwesomeIcon  icon = {faCloud}/>;
    }
}