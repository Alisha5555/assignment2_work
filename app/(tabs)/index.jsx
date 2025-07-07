import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {TopItem }from './../../assets/components/TopItem';
import {SwitchButton} from './../../assets/components/SwitchButton';
import {VideoGamesContext} from './../../assets/context/VideoGamesContext';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
    const { videoGames } = useContext(VideoGamesContext);
    const data = videoGames

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top 3 Video Games</Text>

      <TopItem
        title={data[selectedIndex].title}
        description={data[selectedIndex].description}
        image={data[selectedIndex].image}
      />

      <View style={styles.buttonRow}>
        {data.map((item, index) => (
          <SwitchButton
            key={index}
            label={`#${index + 1}`}
            onPress={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 40 },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  buttonRow: { flexDirection: 'row', marginTop: 20 }
});
