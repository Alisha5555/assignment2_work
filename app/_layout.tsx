import { Tabs } from "expo-router";
import {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { VideoGamesContext } from '../assets/context/VideoGamesContext';
import data from "./../assets/data.json";

export default function RootLayout() {
    const [videoGames, setVideoGames] = useState(data);

  return (
    <VideoGamesContext.Provider value={{ videoGames, setVideoGames }}>
    <Tabs>
     <Tabs.Screen
            name="(tabs)/index"
            options={{
              title: 'top 3',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="star" color={color} size={size} />
              ),
            }}
          />
      <Tabs.Screen
        name="(tabs)/edit"
        options={{
          title: 'edit',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="edit" color={color} size={size} />
          ),
        }}
      />

    </Tabs>
    </VideoGamesContext.Provider>
  );
}
