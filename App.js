import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Accelerometer} from 'expo-sensors';
import * as ScreenOrientation from 'expo-screen-orientation';

export default App = () => {
  const [data, setData] = useState({x: 0, y: 0, z: 0});

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    const sub = Accelerometer.addListener(setData)
    return () => sub.remove()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level</Text>
      <View style={styles.levelContainer}>
        <View
          style={[
             styles.bubble,
             {transform:[{translateX: -data.x * 100}, {translateY: data.y * 100}]}
          ]
          }
        />
      </View>
      <Text style={styles.data}> Data X: {data.x.toFixed(2)} </Text>
      <Text style={styles.data}> Data Y: {data.y.toFixed(2)} </Text>
      <Text style={styles.data}> Data Z: {data.y.toFixed(2)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    marginBottom: 20, 
  },
  levelContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#D9C7F0',
    borderRadius: 100,
    borderColor: 'dark',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    width: 40,
    height: 40,
    backgroundColor: '#E8B7E3',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  data: {
    marginTop: 20,
    fontSize: 18,
    backgroundColor: '#E8B7E3',
    borderRadius: 25,
  },
});