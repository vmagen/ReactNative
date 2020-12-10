import React from 'react'
import { Text } from 'react-native-elements';
import {View, StyleSheet} from "react-native" ;

export default function FCCounter(props) {
    const styles= StyleSheet.create({
        view:{
            width:300,
            alignContent:"center",
            alignItems:"center"            
        }

    });

    return (
        <View style={styles.view}>
            <Text></Text>
            <Text h2>{props.counter > 0 ? `READY TO EAT: Recipes made: ${props.counter}` :` `}</Text>
            <Text></Text>
        </View>
    )
}
