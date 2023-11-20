import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons';
function screen3 ({navigation}){
const[textI,setTextI] = useState('')
const [loginStatus, setLoginStatus] = useState(''); // Lưu trạng thái đăng nhập
const [showPassword, setShowPassword] = useState('false'); // Lưu trạng thái hiển thị mật khẩu



return(
     <View style={styles.container} >
      <Image source={require('./assets/Ellipse 3.png')}
       style={{width:'100%', height:360}}> 
    </Image>
    <View style={{position:'absolute',top:60,left:15}} >
    <Image source={require('./assets/Screenshot_2023-11-04_171510-removebg-preview.png')}
      style={{width:341,height:273}}>
    </Image>
 </View>
  <View style={{margin:35}}>
      <Text style={{textAlign:'center', fontSize:26, color:'white',fontFamily:'Poppins',fontWeight:'bold'}}> Yoga is the journey, not <br/> the destination</Text>
  </View>
  <View ><Text style={{textAlign:'center', fontSize:18, color:'white',fontFamily:'Poppins'}}>Every day is a good day for <br/> Yoga</Text></View>

<View style={{justifyContent:'center', alignItems:'center', margin:30}}>
<TouchableOpacity onPress={()=>{navigation.navigate('Screen4',textI)}} style={{backgroundColor:'#F3D9D8',width:300, height:55,borderRadius:25}} ><Text style={{textAlign:'center', padding:15,fontWeight:'bold'}}>START NOW</Text></TouchableOpacity>

</View>


</View>




);

}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#713C5D',
        flex:1
    }
})
export default screen3;