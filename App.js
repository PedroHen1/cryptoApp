import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView>
       <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </SafeAreaView>
  );
}

export default App;
