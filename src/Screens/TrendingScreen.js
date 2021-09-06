import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const TrendingScreen = () => {
    return (
        <View style={styles.wholeView}>
            <Text>Trending Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default TrendingScreen;