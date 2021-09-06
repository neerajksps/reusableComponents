import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wholeView}>
      <Text>home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('squaredTabs')}>
        <Text>go to squared tabs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
