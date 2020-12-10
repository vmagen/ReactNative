import React from 'react'
import { StyleSheet, View } from 'react-native';
import FCRecipe from './FCRecipe';


export default function FCRecipes(props) {
  const styles = StyleSheet.create({
    recipesDiv: {
      padding: 10,
      justifyContent: "center"
    },
    button: {
      width: 300,
      marginTop: 20,
      backgroundColor: "green",
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

  let list = props.recipes.map(
    (r, index) => <FCRecipe style1={styles.button} style2={styles.btnText} title={r.title} img={r.img} desc={r.desc} key={index} index={index} getRecipe={props.getRecipe}  btnTitle={'Eat Me!'}  variant={'btn btn-outline-primary'} />);



  return (
    <View style={styles.recipesDiv}>
      {list}
    </View>
  )
}
