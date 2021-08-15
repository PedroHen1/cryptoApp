import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.screenView}>
       <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenView: {
    backgroundColor: '#050a11',
    flex: 1
  }
});

export default App;
