import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    wholeView: {
        flex: 1
    },
    boxWholeView: (dimension) => ({
        height: dimension,
        width: dimension,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: dimension / 5,
        overflow: 'hidden'
    }),
    eachViewContiner: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    eachBoxView: (color, dimension) => ({
        height:dimension,
        width:dimension,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color? color: null
    }),
    tabLabel: {
        fontSize: 22,
        color: 'black'
    },
    transparentView: {
        backgroundColor: 'transparent'
    },
    blackSheetOverlay: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    eachTabComponentView: {
        width: Dimensions.get('window').width
    }

})

export default styles;