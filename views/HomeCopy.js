import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
}from 'react-native'
// import MapView from 'react-native-maps';
import mapStyle from '../style';
import Feather from 'react-native-vector-icons/Feather'
import data from '../data'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonconfig from '../assets/selection.json'

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(icoMooConfig, 'icomoon', 'icomoon.ttf')

export default function Home() {
  return (
    <View
     style={{
       flex: 1,
     }}>
      {/* <MapView 
      provider="google" 
      style={StyleSheet.absoluteFillObject} 
      initialRegion={{
        latitude: 47.92653246934641, 
        longitude: 106.89001996107875,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      customMapStyle={mapStyle}></MapView> */}
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="Цэс" size={24} />
          </View>
          <TouchableOpacity style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.greenDot} />
              <View >
                <Text style={styles.inputText}>Таны сонгосон газар</Text>
              </View>
            </View>
            <View>
              <Feather name="heart" size={20} style={{color: '#97989'}} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View>
             {
               data.map(data => {
                 return(
                   <View>
                     <Text>{data.name}</Text>
                     <Car name={data.icon} size={45} />
                     
                   </View>
                 )
               })
             }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  search: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius:6,
    shadowOpacity: 0.05,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#0ddda2',
    marginRight: 10,
  },
  inputText: {
    fontWeight: '600',
    color: '#8b8d96',
  },
});