import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hello World </Text>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;