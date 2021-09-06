import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

const FollowersScreen = () => {
    return (
        <View style={styles.wholeView}>
            <Text>Follower screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1,
        backgroundColor: '#FFD580',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default FollowersScreen;