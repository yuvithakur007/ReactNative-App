import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;