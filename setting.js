import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons';

export default function profile({navigation}){
    const[textI,setTextI] = useState('')

    const logout = () => {
        // Call the API to log out the user
        fetch("https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: global.appName,
    password: global.appPass, // Send the username as the body
  }),
})
  .then((response) => {
    // Handle the response
    if (response.ok) {
      // If the ok property is true, proceed to the next step
      console.log("Logged out successfully");
      // Clear the user data from the global object
      delete global.appName;
      delete global.appPass; // Delete the username
      delete global.appEmail; // Delete the email
      delete global.appPhone; // Delete the phone
      delete global.appImage; // Delete the image
      // Navigate back to the login screen
      navigation.reset({
        index: 0, // Set the current index to 0
        routes: [{ name: "Screen1" }], // Set the routes array to the login screen
      });
    } else {
      // If the ok property is false, show an alert message
      alert("Failed to log out: " + response.statusText);
    }
  })
  .catch((error) => {
    // Handle the error
    console.error(error); // Log the error
    alert("An error occurred: " + error.message); // Show an alert message
  });
    }





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
 <View style={{justifyContent:'center', alignItems:'center'}}>
    <Pressable onPress={()=>{logout()}} style={{flexDirection:'row'}}>
    <Image source={require('./assets/exit 1.png')}
           style={{width:20, height:20,top:30}}
    ></Image>
    <Text style={{fontSize:15, top:30, left:5}}>LOG OUT</Text>
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