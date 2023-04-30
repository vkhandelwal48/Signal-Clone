import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Button } from "react-native-elements";
import { auth } from "../Firebase";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
        if(authUser){
            navigation.replace("Home");
        }
    })
    return unsubscribe;
  },[])

  const signIn = () => {
    auth.signInWithEmailAndPassword(email,password).catch((error)=>alert(error));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
      <View style={{height:50}} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {width:300},
  button: {width:200,marginTop:10},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor:"white"},
});
