import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'

// class Family extends React.Component{
//   render(){
//     return(
//       <Text>Hello { this.props.name}</Text>
//     )
//   }
// }

// class Brother extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { name: true};

//     setInterval(()=> {
//       this.setState(previousState => {
//         return { name: !previousState.name }
//       })
//     }, 1000)
//   }

//   render(){
//     let display = this.state.name ? this.props.Text: ' ';
//     return(
//       <Text>{display}</Text>
//     )
//   }
// }

export default class App extends React.Component {
  render() {

    // let pic = {
    //    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // }

    return (
      <AppStactNavigation/>
      // <View style={styles.container}>
      //   <Text>Hello Word</Text>
      //   <Image source={pic} style={{width: 193, height: 110}} />
      //   <Family name='Ridho'/>
      //   <Brother text='Rody Huzwandar'/>
      // </View>
    );
  }

  
}
    const AppStactNavigation = createStackNavigator({
      Login: LoginScreen,
      Home: HomeScreen
    });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
