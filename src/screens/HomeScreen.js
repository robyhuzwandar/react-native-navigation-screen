import React, { Component } from 'react';
import{
    View, Text, StyleSheet, Button
} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button title="go back to login screen" onPress={()=> this.props.navigation.navigate('Login')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});