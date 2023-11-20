import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image, Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons';
function Screen1 ({navigation}){
const[textI,setTextI] = useState('')
const[username, setname ]= useState('');
const[password, setpass] = useState('');
const [data,setData]= useState([]);

const fetchdata = async ()=>{fetch("https://65042ff8c8869921ae24a8f8.mockapi.io/demo1/api/v1/User")
.then(response => response.json())
.then(json=> setData(json))
.catch(error=>console.error(error))
};
useEffect(()=>{
  fetchdata();
},[]);

const checkuser = (name, pass)=>{
  const res= data.find(item => item.username === name && item.password === pass)
  return res;
}

const xulylogin = ()=>{
   if(checkuser(username,password)){
    navigation.navigate('Screen3')
    global.appName  =username;
   }else{
    console.log('ko dung!')
   }

}




return(
     <View style={styles.container} >
      <Image source={require('./assets/Vector 2.png')}
       style={{width:'100%', height:300}}> 
    </Image>
    <View style={{position:'absolute', top:220, left:120}}> 
  <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: 'white',fontSize: 20,fontfamily: 'Poppins',fontWeight:900,wordWrap: 'breakword'}}> Log In Now</Text>
        </View>
  </View>
<View style={{justifyContent:'center', alignItems:'center'}}>
  <View style={{backgroundColor:'white', width:300, height :55, borderRadius:25,margin:'5%'}}>
    <TextInput placeholder="username"  onChangeText={(text)=>(setname(text))} style={{backgroundColor:'white', width:250, height:50, borderRadius:25,position:'absolute',left:50}} >
    </TextInput>
 <Image source={require('./assets/user 1.png')} 
          style={{width:14,height:14,position:'absolute',top:22,left:20}}
  ></Image>


</View>

<View style={{backgroundColor:'white', width:300, height :55, borderRadius:25}}>
    <TextInput   secureTextEntry={true}  placeholder="password" onChangeText={(text)=>{setpass(text)}}  style={{backgroundColor:'white',  width:250, height:50,borderRadius:25,position:'absolute',left:50}} >
    </TextInput>
    <Image source={require('./assets/key 1.png')} 
          style={{width:14,height:14,position:'absolute',top:22,left:20}}
  ></Image>

    </View>
  <View style={{position:'absolute', left:190, top:150}}>
    <Pressable><Text style={{fontSize:14}}>Forget password</Text></Pressable>
    </View>

<View style={{margin:25}}>
    <TouchableOpacity  style={{backgroundColor:'#F3D9D8',width:300, height:55,borderRadius:25}} onPress={xulylogin} ><Text style={{textAlign:'center', padding:15,fontWeight:'bold'}}>Login</Text></TouchableOpacity>
    <Text style={{color:'white',left:20}}>Dont have an account?   <Pressable onPress={()=>{navigation.navigate('Screen2',textI)}}><Text style={{color:'#1F1F1F'}}>Sign Up</Text></Pressable></Text>
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
        flex:1,
        height:'100%'
    }
});
export default Screen1;