import React from 'react'
import { Card, Text } from 'react-native-elements';
import { StyleSheet, Image, TouchableOpacity } from "react-native";


export default function FCRecipe(props) {

    const eatRecipe = () => {
        props.getRecipe(props.index)
    }
    const styles = StyleSheet.create({
        image: {
            height: 200,
            width: 300
        },
        card: {
            width: 300,
            marginBottom: 100,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold"
        }


    });

    return (
        <Card style={styles.card}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={props.img}
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.desc}</Text>
            <TouchableOpacity
                style={props.style1}
                onPress={eatRecipe}>
            <Text style={props.style2}>{props.btnTitle}</Text>
            </TouchableOpacity>
        </Card>

    )
}
