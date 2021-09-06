import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

const ContactsScreen = () => {
    return (
        <View style={styles.wholeView}>
            <Text>contacts</Text>
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


export default ContactsScreen;