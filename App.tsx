import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        <ActionCard />
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;