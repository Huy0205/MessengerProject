import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons';

export default function profile({navigation}){
    const[textI,setTextI] = useState('')
    return(
     
        <View style={styles.container}>
            <View>
                <Pressable onPress={()=>{navigation.goBack()}}>
             <Image source={require('./assets/next 3.png')}
             style={{width:20, height:30, left:10}}
             >
             </Image>
             </Pressable>
            </View>
            <View style={{left:10}}>
                <Text style={{fontSize:35}}>Settings</Text>
            </View>

            <View style={{shadowOffset: {width: 0,height: 3},shadowRadius: 5,shadowOpacity: 0.5,height:500, width:'100%',backgroundColor:'gray',  borderRadius:20,backgroundColor:'white', shadowColor: 'black'}}>
            <View style={{ flexDirection:'row'}}>
                    <Image source={require('./assets/profile.png')}
                            style={{width:30, height:30}}> 
                        </Image> 
                        <Text style={{top:5}}>Account</Text>
             </View>
           <Pressable onPress={()=>{navigation.navigate('EditProfile',textI)}} style={{width:200 , flexDirection:'row',top:20}}>
            <Text style={{fontSize:20, left:10}}>Edit profile</Text>
            <Image source={require('./assets/next 4.png')}
                   style={{width:30, height:30, left:260}}
            >

            </Image>
           </Pressable>

<Pressable style={{width:200 , flexDirection:'row',top:30}}>
<Text style={{fontSize:20, left:10}}>Change password</Text>
            <Image source={require('./assets/next 4.png')}
                   style={{width:30, height:30, left:200}}
            >

            </Image>

</Pressable>


            </View>

           
 

 
           
 
        </View>
)   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor:'white'
    },
})