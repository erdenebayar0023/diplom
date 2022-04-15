import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
}from 'react-native'
import MapView from 'react-native-maps';
import mapStyle from '../style';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { Marker } from 'react-native-maps';
import icoMoonConfig from '../assets/selection.json'

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf')

export default function Home() {
  return (
    <View
     style={{
       flex: 1,
     }}>
      <MapView 
            provider="google" 
            style={StyleSheet.absoluteFillObject} 
            initialRegion={{
              latitude: 47.92653246934641, 
              longitude: 106.89001996107875,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421 * ASPECT_RATIO,
            }}
      customMapStyle={mapStyle}>
          <Marker
            coordinate={{
             
              latitude: 47.927583, 
            longitude: 106.888641,
            }}>
            <View style={styles.pin}>
             <Fontisto name="map-marker-alt" 
             size={30}
             style={{color: '#02dc9f'}} 
             />
            </View>
          </Marker>
          <Marker
          coordinate={{
            latitude: 47.917102, 
            longitude:106.934162,
            }}
          >
            <View style={styles.marker}>
              <Ionicons name="navigate" size={20} style={{color: '#fff'}} />
            </View>
          </Marker>
        </MapView> 
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={24} />
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
        <View style={styles.categoryWrapper}>
             {data.map((data) => {
                 return(
                   <View key={data.id} style={styles.category}>
                     <Text style={{color: data.id === '1' ? '#5d5e6b' : '#c1c2c7' }}>{data.name}</Text>
                     <Car 
                      style={{color: data.id === '1' ? '#5d5e6b' : '#c1c2c7' }}
                      name={data.icon} 
                      size={45} 
                     />
                   </View>
                 )
               })}

        </View>
      </View>
      <View style={styles.buttonWrapper}>
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Би энд байна </Text>
       </TouchableOpacity>
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
  categoryWrapper: {
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
    top: height / 4,
    shadowColor: '#000',
    shadowOffset: {
      width:2,
      height: 2,
    },
    shadowOpacity:0.1,
    shadowRadius:20,
  },
  category: {
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pin: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'rgba(2,220,159,.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});