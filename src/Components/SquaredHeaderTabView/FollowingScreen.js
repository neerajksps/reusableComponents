import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

const FollowingScreen = () => {
    return (
        <View style={styles.wholeView}>
            <Text>Following</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1,
        backgroundColor: '#CBC3E3',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default FollowingScreen;