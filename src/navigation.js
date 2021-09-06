import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabViewScreen from './Screens/TabViewScreen';
import HomeScreen from './Screens/HomeScreen';
import TrendingScreen from './Screens/TrendingScreen';
import FollowingScreen from './Screens/FollowingScreen';
import FollowerScreen from './Screens/FollowerScreen';
import CustomTabBar from './Components/CustomTabBar';
import {followersIcon, followingIcon, HomeIcon, listIcon} from './assets';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const transitionAnim = ({current, next, layouts}) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
        {
          scale: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.9],
              })
            : 1,
        },
      ],
    },
  };
};
function bottomTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={(props) => (
        <CustomTabBar
          {...props}
          firstTabIcon={followersIcon}
          secondTabIcon={followingIcon}
          thirdTabIcon={HomeIcon}
          fourthTabIcon={listIcon}
          activeTabColor={'skyblue'}
          onFirstTabPress={() => navigation.navigate('homeScreen')}
          onSecondTabPress={() => navigation.navigate('trending')}
          onThirdTabPress={() => navigation.navigate('following')}
          onFourthTabPress={() => navigation.navigate('follower')}
          currentTabIndex={(index) => console.log('index getting=====', index)}
        />
      )}>
      <Tab.Screen name="homeScreen" component={HomeScreen} />
      <Tab.Screen name="trending" component={TrendingScreen} />
      <Tab.Screen name="following" component={FollowingScreen} />
      <Tab.Screen name="follower" component={FollowerScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: transitionAnim,
        }}>
        <Stack.Screen name="home" component={bottomTabs} />
        <Stack.Screen name="squaredTabs" component={TabViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
