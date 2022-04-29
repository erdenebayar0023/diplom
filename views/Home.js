<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React,{useEffect, useState} from 'react';
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
<<<<<<< HEAD
  Image,
  Button
} from 'react-native'
=======
  Image
}from 'react-native'
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
import MapView from 'react-native-maps';
import mapStyle from '../style';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data'
<<<<<<< HEAD
import { Marker } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default function Home({ navigation }) {
  const [data1, setData1] = useState([]);
  const [latlong, setLatLong] = useState({ latitude: 47.927583,
    longitude: 106.888641,});
    const[location, setLocation] = useState({ "latitude": 47.92752045889474,
    "longitude": 106.8890054896474,});

  async function makeRequest() {

    let res = await axios.get('http://192.168.207.52:3000/api/v1/car', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    setData1(res.data);

  }
    makeRequest()
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
    
  
  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        provider="google"
mapType='satellite'
        onPress={(e) => { console.log('e', e.nativeEvent.coordinate); setLatLong({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude }) }}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 47.92653246934641,
          longitude: 106.89001996107875,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421 * ASPECT_RATIO,
        }}
        customMapStyle={mapStyle}>
        <Marker
          coordinate={latlong}>
          <View style={styles.marker}>
            <Fontisto name="navigate"
              size={20}
              style={{ color: '#fff' }}
            />
          </View>
        </Marker>
        <Marker
          coordinate={location}>
          <View style={styles.pin}>
            <Fontisto name="map-marker-alt"
              size={30}
              style={{ color: 'red' }}
            />
          </View>
        </Marker>          
      </MapView>
=======
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { Marker } from 'react-native-maps';
import icoMoonConfig from '../assets/selection.json'
import axios from 'axios';


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf')

export default function Home() {

  const [data1, setData1] = useState([]);


  async function makeRequest() {

    let res = await axios.get('http://192.168.193.60:3000/api/v1/car', { 
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })

      setData1(res.data);

    }

  useEffect(() => {
    makeRequest()
  }, []);
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
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={24} />
          </View>
<<<<<<< HEAD
          <TouchableOpacity style={styles.search} onPress={() => navigation.navigate("Search")}>
=======
          <TouchableOpacity style={styles.search}>
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
            <View style={styles.inputWrapper}>
              <View style={styles.greenDot} />
              <View >
                <Text style={styles.inputText}>Таны сонгосон газар</Text>
              </View>
            </View>
            <View>
<<<<<<< HEAD
              <Feather name="heart" size={20} style={{ color: '#97989' }} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View></View>
        <View style={styles.categoryWrapper}>
          {
            data1.map((data) => {
              return (
                
                <View key={data?._id} style={styles.category}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>

                    <Image
                      style={{ width: 50, height: 50, marginRight: 10, borderRadius: 30 }}
                      source={{
                        uri: data?.image,
                      }}
                    />

                    <View>
                      <Text style={{ color: data?.id === '1' ? '#fff' : '#fff' }}>{data?.name}</Text>
                      <Text style={{ color: data?.id === '1' ? '#fff' : '#fff' }}>100-д идэх {data?.gasoline}</Text>
                    </View>
                  </View>
                </View>
              )
            })
          }
=======
              <Feather name="heart" size={20} style={{color: '#97989'}} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.categoryWrapper}>
             {
             data1.map((data) => {
                 return(
                   <View key={data?._id} style={styles.category}>
                     <View style={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>
                            
                            <Image
                              style={{width: 50, height: 50, marginRight: 10, borderRadius: 30}}
                              source={{
                                uri: data?.image,
                              }}
                            />
  
                            <View>
                              <Text style={{color: data?.id === '1' ? '#5d5e6b' : '#c1c2c7' }}>{data?.name}</Text>
                              <Text style={{color: data?.id === '1' ? '#5d5e6b' : '#c1c2c7' }}>100-д идэх {data?.gasoline}</Text>
                            </View>
                     </View>
                   </View>
                 )
               })
              }
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7

        </View>
      </View>
      <View style={styles.buttonWrapper}>
<<<<<<< HEAD
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Book")}>
          <Text style={styles.buttonText}>Энд дарна уу</Text>
        </TouchableOpacity>
=======
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Би энд байна </Text>
       </TouchableOpacity>
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
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
<<<<<<< HEAD
    shadowRadius: 6,
=======
    shadowRadius:6,
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
    shadowOpacity: 0.05,
  },
  inputWrapper: {
    flexDirection: 'row',
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
<<<<<<< HEAD
    backgroundColor: '#fff7',
=======
    backgroundColor: '#fff',
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
<<<<<<< HEAD
    top: height / 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
=======
    top: height / 4,
    shadowColor: '#000',
    shadowOffset: {
      width:2,
      height: 2,
    },
    shadowOpacity:0.1,
    shadowRadius:20,
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
  },
  category: {
    marginBottom: 15,
    justifyContent: 'center',
    display: 'flex',
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
<<<<<<< HEAD

=======
  
>>>>>>> 97b2dabaf7c4002ffb4f6c7068b58d972e34d1c7
});