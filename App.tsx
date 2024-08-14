import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;