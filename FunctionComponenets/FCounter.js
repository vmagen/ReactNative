import React from 'react'
import { Text } from 'react-native-elements';
import {View} from "react-native" ;

export default function FCCounter(props) {
    return (
        <View>
            <Text></Text>
            <Text h2>{props.counter > 0 ? `READY TO EAT: Recipes made: ${props.counter}` :` `}</Text>
            <Text></Text>
        </View>
    )
}
