import React from 'react'
import { View } from 'react-native';
import FCRecipe from './FCRecipe';
import { StyleSheet } from "react-native";

export default function FCRecipesDone(props) {
    const styles = StyleSheet.create({
        recipesDiv: {
          padding: 10,
          justifyContent: "center"
        },
        button: {
          width: 300,
          marginTop: 20,
          backgroundColor: "red",
          padding: 15,
          borderRadius: 10,
        },
        btnText: {
          color: "white",
          fontSize: 20,
          justifyContent: "center",
          textAlign: "center",
        }
      });

    let list = props.eatenRecipes.map(
        (r, index) => <FCRecipe style1={styles.button} style2={styles.btnText} title={r.title} img={r.img} desc={r.desc} key={index} index={index} getRecipe={props.getRecipe} btnTitle={'Return Dish'} variant={'btn btn-outline-danger'} />);


    return (
        <View style={styles.recipesDiv}>
                {list}
        </View>
    )
}
