import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { VideoGamesContext } from './../../assets/context/VideoGamesContext';

export default function Edit() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [form, setForm] = useState({title: '', description: '', image: ''});
  const { videoGames, setVideoGames } = useContext(VideoGamesContext);
  const data = videoGames

  useEffect(() => {
    setForm({...data[selectedIndex]});
  }, [selectedIndex]);

  const handleChange = (key, value) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleSave = () => {
    const updated = [...data];
    updated[selectedIndex] = { ...form };
    setVideoGames(updated);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Edit Top 3 Item</Text>
      <Picker
        selectedValue={selectedIndex}
        onValueChange={itemValue => setSelectedIndex(itemValue)}>
        <Picker.Item label="Item 1" value={0} />
        <Picker.Item label="Item 2" value={1} />
        <Picker.Item label="Item 3" value={2} />
      </Picker>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={form.title}
        onChangeText={text => handleChange('title', text)}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, {height: 80}]}
        value={form.description}
        multiline
        onChangeText={text => handleChange('description', text)}
      />
      <Text style={styles.label}>Image Path</Text>
      <TextInput
        style={styles.input}
        value={form.image}
        onChangeText={text => handleChange('image', text)}
      />
      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  picker: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
});
