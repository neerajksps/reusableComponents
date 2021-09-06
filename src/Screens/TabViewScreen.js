import React from 'react';
import { View, StyleSheet } from 'react-native';
import SquaredHeaderTabView from '../Components/SquaredHeaderTabView';
import ProfileScreen from '../Components/SquaredHeaderTabView/ProfileScreen';
import FollowingScreen from '../Components/SquaredHeaderTabView/FollowingScreen';
import FollowersScreen from '../Components/SquaredHeaderTabView/FollowersScreen';
import ContactsScreen from '../Components/SquaredHeaderTabView/ContactsScreen';

const TabViewScreen = () => {
    return (
        <View style={styles.wholeView}>
            <SquaredHeaderTabView 
                firstComponent={ProfileScreen}
                secondComponent={FollowersScreen}
                thirdComponent={ContactsScreen}
                fourthComponent={FollowingScreen}
                firstTabColor={'skyblue'}
                secondTabColor={'#FFD580'}
                thirdTabColor={'#00FF00'}
                fourthTabColo={'#CBC3E3'}
                firstTabLabel={'Profile'}
                secondTabLabel={'Followers'}
                thirdTabLabel={'Following'}
                fourthTabLabel={'Contacts'}
                currentTabIndex={(index) => console.log('index+',index)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1
    }
})

export default TabViewScreen;

