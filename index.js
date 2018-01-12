
import { NativeModules } from 'react-native';

const { RNGoogleGeometry } = NativeModules;



const containsLocation  = async (point,polygon)=>{
    let isInLocation = await RNGoogleGeometry.containsLocation(point,polygon)
    if(isInLocation){
        return true
    }else{
        return false
    }
}

export default containsLocation;