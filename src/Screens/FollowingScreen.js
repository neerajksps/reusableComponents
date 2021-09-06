import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const FolloweingScreen = () => {
    return (
        <View style={styles.wholeView}>
            <Text>Following Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent:'center',
        alignItems: 'center'
    }
})


export default FolloweingScreen;