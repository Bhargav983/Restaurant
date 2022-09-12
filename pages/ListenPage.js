import React, { useState,useEffect } from 'react';
import { StyleSheet,Text,FlatList,Image, View,TouchableHighlight } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Listen = ({navigation}) => {
  const [data,setData]=useState([])
  const [curLat,setCurLat]=useState(0)
  const [curLong,setCurLong]=useState(0)
  const serviceUrl='http://205.134.254.135/~mobile/interview/public/api/restaurants_list'
  const getAccountDetails = async () => {
    try {
      let response = await fetch(
        serviceUrl
      )
      let readSave = await response.json();
      setData(readSave['data']);
      // console.log('readSave=',readSave['data'][0].title);
    }
    catch(e){
        console.log("error=",e);
    }
}

Geolocation.getCurrentPosition((data) => {
  console.log(data)
  setCurLat(data.coords.latitude);
  setCurLong(data.coords.longitude);
  console.log('cur Lat =',curLat)
  console.log('cur Longi =',curLong)
}).catch((err) => {
  console.log(err);
});

useEffect(()=>{getAccountDetails()},[])

const goReadSheet=(item)=>{
     
  console.log("Pressed",item.latitude,item.longitude);
 navigation.navigate('Map',{OriLat:item.latitude.toString(),OriLong:item.longitude.toString(),curLat:curLat.toString(),curLong:curLong.toString()});

}


return (
  <View style={styles.list}>
       <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      data={data}
      renderItem={({ item }) => {
        // console.log(item.title);
        return (
          <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
        <View style={{alignItems:'center',flex:1,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
          <Image
      style={{width: 50, height: 50,margin:5,marginLeft:10,borderRadius:10}}
      source={{uri: item.images[0].url}}
    />
          
          <View style={{flex:1,flexDirection:'column'}}>
          <Text style={styles.listStyle}> {item.title} </Text>
          <Text style={styles.listStyle}> Rating: {item.rating} </Text>
          </View>

          <TouchableHighlight onPress={()=>{goReadSheet(item)}} >
          <Image
              style={{width: 40, height: 40,margin:5,marginLeft:10,borderRadius:10}}
              
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNvqugXh0VzdRykozxtrXzW-n0L-d-4KNRA&usqp=CAU'}}
          /> 
          </TouchableHighlight>

          </View>
          <View  style={{backgroundColor:'black',height:1,marginBottom:20}}>

          </View>
          </View>
         
          
          )
      }}
    />
    </View>
  )
}
export default Listen;


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 40,
    backgroundColor: "white",
    margin: 10,
    color: "black",
    borderRadius:16,
    borderBottomColor:'red',
        borderBottomWidth:2,
        
  },
  listStyle: {
    textAlign: "center",
    padding: 10,
    fontSize:16,    fontWeight: 'bold'

  },
  list:{
    flex : 1, flexGrow :1
  }
});