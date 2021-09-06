import {StyleSheet} from 'react-native';
import {scale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    wholeView: {
        height: scale(50),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    eachTabView: {
        height: scale(50),
        flex: 1 ,
        width: scale(103.5),
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconStyle: {
        tintColor: 'grey'
    },

    activeIconStyle: {
        tintColor: 'black'
    },  

    currentTabContainerWholeView: (color) => ({
        height: scale(50),
        top: scale(-10),
        width: scale(60),
        backgroundColor: color || 'red',
        borderBottomLeftRadius: scale(70),
        borderBottomRightRadius: scale(70),
    }),

    currentTabAnimatedView: {
        position: 'absolute'
    },

    upperLayerView: (color) => ({
        height: scale(20),
        backgroundColor: color || 'red'    
    }),

    currentTabContainerView: {
        height: scale(45),
        width: scale(45),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(24.5),
        position: 'absolute',
        top: scale(-15),
        left: scale(7),
    }
    
});

export default styles;