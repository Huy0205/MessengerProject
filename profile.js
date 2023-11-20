import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons';

export default function profile({navigation}){
    const[textI,setTextI] = useState('')


    return(
     
        <View style={styles.container}>
            <View>
                <Pressable onPress={()=>{navigation.navigate('Setting',textI)}}>
             <Image source={require('./assets/menu 1.png')}
             style={{width:20, height:30, left:10}}
             >
             </Image>
             </Pressable>
            </View>
            <View style={{left:10}}>
                <Text style={{fontSize:35}}>My Profile</Text>
            </View>

            <View style={{shadowOffset: {width: 0,height: 3},shadowRadius: 5,shadowOpacity: 0.5,height:200, width:'100%',backgroundColor:'gray', justifyContent:'center', alignItems:'center', borderRadius:20,backgroundColor:'white', shadowColor: 'black'}}>
             <Pressable>
             <Image source={require('./assets/user (1) 1.png')}
                    style={{width:25, height:25, left:175,top:45}}
             >
             </Image>
             </Pressable>
            </View>

            <View style={{shadowOffset: {width: 0,height: 3},shadowRadius: 5,shadowOpacity: 0.5,height:200, width:'100%',backgroundColor:'gray', justifyContent:'center', alignItems:'center', borderRadius:20,backgroundColor:'white',top:20}}>

            </View>
 
 <View style={{top:50, left:10}}>
    <Text style={{fontSize:20, color:'gray'}}>Current works plan</Text>
 </View>
 
            <View style={{shadowOffset: {width: 0,height: 3},shadowRadius: 5,shadowOpacity: 0.5,height:100, width:'100%',backgroundColor:'gray', justifyContent:'center', alignItems:'center', borderRadius:20,backgroundColor:'white',top:60}} >

            </View>
 
        </View>
)   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundImage:'red'
    },
})