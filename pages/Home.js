import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {styles} from '../Styles/loginStyles';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={[styles.centerizedView,{top:'5%'}]}>
          <View style={[styles.authBox,{ width: '90%',}]}>
            <Image source={require('../assets/Logo.jpg')} style={{height:250,width:280,margin:20,borderRadius:16}} /> 
           <View>
            <Text style={styles.TitleText}>{"Welcome "}</Text>
           </View>
            <TouchableOpacity onPress={() => navigation.navigate('Listen')} style={styles.PinkButton}>
          <Text style={styles.ButtonText}>  LISTEN </Text>
            </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Map')} style={[styles.BlueButton,{marginTop:5}]}>
          <Text style={styles.ButtonText}>  MAP </Text>
        </TouchableOpacity>

          </View>
          </View>
            
    </View>
    )

}
  

export default Home
