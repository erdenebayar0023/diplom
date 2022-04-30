import React,{useEffect, useState} from 'react';
import MapView ,{ Marker } from 'react-native-maps';
import {Text, Dimensions ,StyleSheet, View ,SafeAreaView} from 'react-native';
import mapStyle from '../style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';
import MapViewDirections from 'react-native-maps-directions';
import API_KEY from '../API_KEY';
import axios from 'axios';


import {getDistance, getPreciseDistance} from 'geolib';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf')

export default function Book({navigation}) {
  const [data1, setData1] = useState([]);


  // const calculateDistance = () => {
  //   var dis = getDistance(
  //     {latitude: 20.0504188, longitude: 64.4139099},
  //     {latitude: 51.528308, longitude: -0.3817765},
  //   );
  //   alert(
  //     `Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`
  //   );
  // };
 
  // const calculatePreciseDistance = () => {
  //   var pdis = getPreciseDistance(
  //     {latitude: 20.0504188, longitude: 64.4139099},
  //     {latitude: 51.528308, longitude: -0.3817765},
  //   );
  //   alert(
  //     `Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM`
  //   );
  // };
 
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
            mapType='terrain'
            style={StyleSheet.absoluteFillObject} 
            initialRegion={{
              latitude: 47.92653246934641, 
              longitude: 106.89001996107875,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421 * ASPECT_RATIO,
            }}
            customMapStyle={mapStyle}>
                <Marker coordinate={{
                  latitude: 47.92653246934641, 
                  longitude: 106.89001996107875,
                }}>
                  <View></View>
                  <View 
                    style={[
                      styles.dotWrapper, 
                  {
                    backgroundColor: 'rgba(2,213,155,.25)'
                  },
                  
                  ]}>
                    <View 
                     style={[
                       styles.dot,
                       {
                         backgroundColor: '#02d59b',
                       },
                       ]}/>
                  </View>
                </Marker>


                <Marker 
                coordinate={{
                   latitude: 47.924189, 
                   longitude:106.899642,
                }}>
                  <View 
                    style={[
                      styles.dotWrapper, 
                  {
                    backgroundColor: 'rgba(247,70,86,.35)',
                  },
                  
                  ]}>
                    <View 
                     style={[
                       styles.dot,
                       {
                         backgroundColor: '#f74656',
                       },
                       ]}/>
                  </View>
                </Marker>
                <MapViewDirections 
                origin={{
                  latitude: 47.92653246934641, 
                  longitude: 106.89001996107875,
                }} 
                destination={{
                  latitude: 47.924189, 
                   longitude:106.899642,
                }} 
                apiKey={API_KEY} 
                mode="WALKING" 
                strokeColor="#5b5c69" 
                strokeWidth={4} 
                lineDashPattern={[6, 6]}
                />
              </MapView>

        <View>
        <SafeAreaView style={StyleSheet.container}>
        <View style={styles.header}>
          <Feather name="menu" size={30}  onPress={()=>navigation.navigate("")}/>
          <Feather name="x" size={30} onPress={()=>navigation.navigate("Home")}/>
        </View>
          </SafeAreaView>
        </View>
         <View style={styles.bottomContent}>
           <View style={styles.actionButtonWrapper}>
             <Ionicons name="grid" size={20} style={{ color: "#fff"}}/>
           </View>
           <View style={styles.categoryWrapper}>
             {data1.map(data => {
               return (
                 <View key={data.id} style={{alignItems: 'center'}}>
                  <Text style={{color: data.id === '1' ? '#5e5e6b' : '#c1c2c7'}}>
                  {data.name}
                  </Text>
                  <Car style={{color: data.id === '1' ? '#5e5e6b' : '#c1c2c7'}} 
                  name={data1.image} size={40} 
                  />
                 </View>
               );
             })}
             <View>
               <Text></Text>
             </View>
           </View>
         </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    
  },
  bottomContent: {
    position: "absolute",
    width,
    bottom: 0
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  actionButtonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8f9098',
    alignSelf: 'center',
    marginBottom: 30,
  },
  dotWrapper: {
    width: 30,
    height: 30,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
  },
  dot:{
    height: 10,
    width: 10,
    borderRadius: 10,
  },
});
