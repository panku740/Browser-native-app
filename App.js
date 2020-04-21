import * as React from 'react';
import { Button, View, Text,Image,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {WebView} from 'react-native-webview';


function HomeScreen({ navigation }) {
  return (
    <View>
    <View style={{flexDirection:"row" , justifyContent: 'flex-start',width:100 ,padding:3 }}>
      <View style={{ justifyContent: 'flex-start',width:100 ,padding:3}}>
      <Button 
        title="Google"
        onPress={() => navigation.navigate('Google')}
      />
      </View>
      <View style={{ justifyContent: 'flex-start',width:100 ,padding:3}}>
      <Button
        title="Youtube"
        onPress={() => navigation.navigate('Youtube')}
      />
      </View>
      <View style={{ justifyContent: 'flex-start',width:100 ,padding:3}}>
      <Button
        title="gmail"
        onPress={() => navigation.navigate('Gmail')}
      />
      </View>
      <View style={{ justifyContent: 'flex-start',width:100 ,padding:3}}>
      <Button
        title="amazon"
        onPress={() => navigation.navigate('Amazon')}
      />
      </View>
      </View>
     <View style={{justifyContent: 'center'}}>
      <Image source={{uri:'https://www.jakpost.travel/wimages/large/3-32902_iphone-10-wallpaper-geometric-phone-wallpaper-hd.jpg'}}
       style = {{ width: 500, height: 800 }}
       />

       </View>

     
     </View>
      
    
  );
}

function Google({ navigation }) {
  return (
    
  <View style={{flex:1}}>
     
      
  <WebView
     source={{ uri: 'https://google.com' }}
    style={{flex:1}}
    />
</View>
    
  );
}

function Youtube({ navigation }) {
  return (
    
  <View style={{flex:1}}>
     
      
  <WebView
     source={{ uri: 'https://youtube.com' }}
    style={{flex:1}}
    />
</View>
    
  );
}

function Gmail({ navigation }) {
  return (
    
  <View style={{flex:1}}>
     
      
      
  <WebView
     source={{ uri: 'https://gmail.com' }}
    style={{flex:1}}
    />
</View>
    
  );
}

function Amazon({ navigation }) {
  return (
    
  <View style={{flex:1}}>
     
    
  <WebView
     source={{ uri: 'https://amazon.com' }}
    style={{flex:1}}
    />
</View>
    
  );
}
//<WebView style={{margin:50}}  />
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Youtube" component={Youtube} />
        <Stack.Screen name="Gmail" component={Gmail} />
        <Stack.Screen name="Amazon" component={Amazon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;