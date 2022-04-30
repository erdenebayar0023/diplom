import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
  ScrollView
} from 'react-native'
import MapView from 'react-native-maps';
import mapStyle from '../style';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data'
import { Marker } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';

import Geolocation from 'react-native-geolocation-service';


import {getDistance, getPreciseDistance} from 'geolib';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default function Home({ navigation }) {
  const [data1, setData1] = useState([]);
  const [km, setKm] = useState(0);
  const [latlong, setLatLong] = useState({ latitude: 47.927583,
    longitude: 106.888641,});

    const [visible, setVisible] = useState(false);

  

    const[location, setLocation] = useState({ latitude: 47.92752045889474,
    longitude: 106.8890054896474,});

    const calculateDistance = (latitude, longitude) => {
      var dis = getDistance(
        {latitude: location?.latitude,  longitude: location?.longitude},
        {latitude: latitude, longitude: longitude},
      );

      setLatLong({ latitude: latitude, longitude: longitude }) 

      alert(
        `Зай\n${dis / 1000} KM`
      );
      setKm(dis / 1000);
    };


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
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        makeRequest()
        setLocation(location);
        setLocation({'latitude': location?.coords?.latitude, 'longitude' :location?.coords?.longitude});
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
        onPress={
          (e) => { 
    
            calculateDistance(e.nativeEvent.coordinate.latitude,  e.nativeEvent.coordinate.longitude);
          }
        }
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
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={24} />
          </View>
          <TouchableOpacity style={styles.search} onPress={() => navigation.navigate("Search")}>
            <View style={styles.inputWrapper}>
              <View style={styles.greenDot} />
              <View >
                <Text style={styles.inputText}>Таны сонгосон газар</Text>
              </View>
            </View>
            <View>
              <Feather name="heart" size={20} style={{ color: '#97989' }} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View></View>
        <TouchableOpacity style={styles.categoryWrapper} onPress={()=>setVisible(!visible)} >
          {
            visible === true 
            ?
            data1.map((data) => {
              return (
                <ScrollView>
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
                                <Text style={{ color: data?.id === '1' ? '#fff' : '#fff' }}>100-д {data?.gasoline}</Text>
                                <Text style={{ color: data?.id === '1' ? '#fff' : '#fff' }}>Цэг хүртэл {((km / 100) * data?.gasoline).toFixed(2)}</Text>
                              </View>
            

                      </View>
                      
                    </View>
                </ScrollView>
              )
            })
            : null

          }

        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Book")}>
          <Text style={styles.buttonText}>Энд дарна уу</Text>
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
    shadowRadius: 6,
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
    backgroundColor: '#fff7',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
    top: height / 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
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
});