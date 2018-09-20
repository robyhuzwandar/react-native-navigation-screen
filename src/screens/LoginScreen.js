import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class LoginScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button title="Home Screen" onPress={()=> this.props.navigation.navigate('Home')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});