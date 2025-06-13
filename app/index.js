import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopItem from './components/TopItem';
import SwitchButton from './components/SwitchButton';

const data = [
  {
    title: '#1 - Call of Duty: Black Ops III',
    description: 'Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision. It is the twelfth entry in the Call of Duty series. ',
    image: require('./images/Black_Ops_3.jpg')
  },
  {
    title: '#2 - Rainbow Six Siege',
    description: 'Tom Clancy\'s Rainbow Six Siege is a 2015 tactical shooter game developed by Ubisoft Montreal and published by Ubisoft. The game puts heavy emphasis on environmental destruction and cooperation between players.',
    image: require('./images/images.jpg')
  },
  {
    title: '#3 - Minecraft',
    description: 'Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours.',
    image: require('./images/minecraft.jpg')
  }
];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
