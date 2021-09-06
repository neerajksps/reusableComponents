import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const FollowerScreen = () => {
    return (
        <View style={styles.wholeView}>
            <Text>Follower Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1,
        backgroundColor: '#00FF00',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default FollowerScreen;