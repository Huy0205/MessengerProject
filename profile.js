import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable, FlatList } from "react-native";
import { Octicons } from '@expo/vector-icons';

export default function profile({navigation}){
    const[textI,setTextI] = useState('')
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState(data);
    const username = global.appName;
    const email = global.appEmail;
    const phone = global.appPhone;

    const image = global.appImage;
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
            
            <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{top:100, fontWeight:'bold',textAlign:'center', fontSize:18}}>{username}</Text>
         <Image source={global.appImage}
          style={{width:100, height:100,bottom:20, borderRadius:30}}
      > 
      </Image>
      <Text >{email}</Text>
      
   </View>
   <View style={{flexDirection:'row', top:20, left:100}}>
    <Image source={require('./assets/telephone 1.png')}
           style={{width:20, height:20}}
    >

    </Image>
        <Text>{phone}</Text>
      </View>
             
             
             <Pressable onPress={()=>{navigation.navigate('EditProfile',textI)}}>
             <Image source={require('./assets/user (1) 1.png')}
                    style={{width:25, height:25, left:170,bottom:120}}
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