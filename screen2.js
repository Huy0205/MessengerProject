import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons';
function screen2 ({navigation}){
const[textI,setTextI] = useState('')
const [loginStatus, setLoginStatus] = useState(''); // Lưu trạng thái đăng nhập
const [showPassword, setShowPassword] = useState('false'); // Lưu trạng thái hiển thị mật khẩu
const arr = [
  { name: 'dat', password: '12345' },
  { name: 'teo', password: '123456' },
];

const checkLogin = () => {
  const nameInput = document.getElementById('name').value;
  const passInput = document.getElementById('password').value;

  for (let i = 0; i < arr.length; i++) {
    if (nameInput === arr[i].name && passInput === arr[i].password) {
      alert('Login Success');
         <TouchableOpacity onPress={navigation.navigate('',textI)}><Text>Login</Text></TouchableOpacity>
      return;
    }
  }
  alert('Login Failure');
};
return(
     <View style={styles.container} >
      <Image source={require('./assets/lol.png')}
       style={{width:'100%', height:300}}> 
    </Image>
    <View style={{position:'absolute', top:220, left:120}}> 
  <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: 'white',fontSize: 20,fontfamily: 'Poppins',fontWeight:900,wordWrap: 'breakword'}}> Sign Up Now</Text>
        </View>
  </View>
<View style={{justifyContent:'center', alignItems:'center'}}>
  <View  style={{backgroundColor:'white', width:300, height :55, borderRadius:25}}>
    <TextInput placeholder="FullName" style={{backgroundColor:'white', borderRadius:25,width:250, height:50, borderRadius:25,position:'absolute',left:50}} >
    </TextInput>
    <Image source={require('./assets/user 1.png')} 
          style={{width:14,height:14,position:'absolute',top:22,left:20}}
  ></Image>
    </View>
   
   <View style={{backgroundColor:'white', width:300, height :55, borderRadius:25,margin:'5%'}}>
    <TextInput placeholder="Email" style={{backgroundColor:'white', width:250, height:50, borderRadius:25,position:'absolute',left:50}} >
    </TextInput>
    <Image source={require('./assets/email_561127 1.png')} 
          style={{width:14,height:14,position:'absolute',top:22,left:20}}
  ></Image>
    </View>

    <View style={{backgroundColor:'white', width:300, height :55, borderRadius:25}}>
    <TextInput placeholder="Password" style={{backgroundColor:'white',width:250, height:50, borderRadius:25,position:'absolute',left:50}} >
    </TextInput>
    <Image source={require('./assets/key 1.png')} 
          style={{width:14,height:14,position:'absolute',top:22,left:20}}
  ></Image>
    </View>

<View style={{margin:10}}>
    <TouchableOpacity style={{backgroundColor:'#F3D9D8',width:300, height:50,borderRadius:25}}><Text style={{textAlign:'center', padding:15,fontWeight:'bold'}}>Login</Text></TouchableOpacity>
    <Text style={{color:'white',left:20}}>Already have an account?   <Pressable onPress={()=>{navigation.navigate('Screen1',textI)}}><Text style={{color:'#1F1F1F'}}>Log In</Text></Pressable></Text>
    </View>
<View><Text style={{color:'white'}}>─────────  or  ────────</Text></View>
<View style={{ width:200,flexDirection:'row',margin:20, justifyContent:'center', alignItems:'center'}}>
    <Pressable style={{width:30, margin:15}}>
    <Image source={require('./assets/google_300221 1.png')}
             style={{width:30, height:30}}    
     ></Image>
    </Pressable>

    <Pressable style={{width:30,margin:15}}>
    <Image source={require('./assets/google-plus_2111450 1.png')}
             style={{width:30, height:30}}    
     ></Image>
    </Pressable>

    <Pressable style={{width:30,margin:15}}>
    <Image source={require('./assets/facebook_5968764 1.png')}
             style={{width:30, height:30}}    
     ></Image>
    </Pressable>


</View>


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
export default screen2;