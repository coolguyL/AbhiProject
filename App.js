import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../LearnApp/Components/Homepage'
import About from '../LearnApp/Components/About'
import Contact from '../LearnApp/Components/Contact'
import Courses from '../LearnApp/Components/Courses'
import Userdata from '../LearnApp/Components/Userdata'


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   
    < >
  
 <NavigationContainer >
 
<Stack.Navigator initialRouteName='Homepage'

>
  <Stack.Screen
   name='Homepage' component={Homepage}
   options={{
     headerShown:false
     ,
   }}
  />
  {/* Course */}
  <Stack.Screen
   name='Courses' component={Courses}
   options={{
    headerStyle: {
      backgroundColor: '#5e548d',
    },
      headerTitleStyle:{
        fontSize:23,
        color:'white',
        fontWeight: 'bold',
        //backgroundColor:'darkgoldenrod ',
      },
      headerTintColor: 'lightgrey',
      
     headerTitleAlign:"center",
   }}
  />
   {/* Aboout */}
   <Stack.Screen
   name='About' component={About}
   options={{
    headerStyle: {
      backgroundColor: '#5e548d',
    },
      headerTitleStyle:{
        fontSize:23,
        color:'white',
        fontWeight: 'bold',
        //backgroundColor:'darkgoldenrod ',
      },
      headerTintColor: 'lightgrey',
  
     headerTitleAlign:"center",
   }}
   
  />
   {/* Contact */}
   <Stack.Screen
   name='Contact' component={Contact}
   options={{
    headerStyle: {
      backgroundColor: '#5e548d',
    },
      headerTitleStyle:{
        fontSize:23,
        color:'white',
        fontWeight: 'bold',
        //backgroundColor:'darkgoldenrod ',
      },
      headerTintColor: 'lightgrey',
  
     headerTitleAlign:"center",
   }}
   
  />
   {/* Userdata */}
   <Stack.Screen
   name='Userdata' component={Userdata}
   options={{
    headerStyle: {
      backgroundColor: '#5e548d',
    },
      headerTitleStyle:{
        fontSize:23,
        color:'white',
        fontWeight: 'bold',
        //backgroundColor:'darkgoldenrod ',
      },
      headerTintColor: 'lightgrey',
     headerTitle:" Student Details",
     headerTitleAlign:"center",
   }}
  />
 
</Stack.Navigator>


    </NavigationContainer>
    

    
     
   
    </>
    
  );
}

const styles = StyleSheet.create({
  manecontainer: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});
