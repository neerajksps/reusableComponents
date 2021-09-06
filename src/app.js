import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Navigation from './navigation';

const App = () => {
  return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex:1}}>
        <Navigation />
        </SafeAreaView>
      </View>
  );
};

export default App;
