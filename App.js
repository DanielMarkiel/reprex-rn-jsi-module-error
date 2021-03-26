/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import TabViewExample from './TabViewExample';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedLanguage, setSelectedLanguage] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={itemValue => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <TabViewExample />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
