import React, { Component } from 'react'
import FCRecipes from '../FunctionComponenets/FCRecipes'
import FCRecipesDone from '../FunctionComponenets/FCRecipesDone';
import salad1 from '../assets/salad1.jpg';
import salad2 from '../assets/salad2.jpg';
import salad3 from '../assets/salad3.jpg';
import salad4 from '../assets/salad4.jpg';
import FCCounter from '../FunctionComponenets/FCounter';
import EHeader from '../elements/EHeader';
import { View, Text, ScrollView } from "react-native";
import EFooter from '../elements/EFooter';
import EAvatar from '../elements/EAvatar';

export default class CCMyKitchen extends Component {


    state = {
        recipes: [
            { title: "Greek Salad", img: salad1, desc: "Tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, pepper, Greek oregano, and olive oil " },
            { title: "Avocado Salad", img: salad2, desc: "Cucumber and tomato salad just got better with the addition of avocado, a light and flavorful lemon dressing and the freshness of cilantro" },
            { title: "Mandarin Salad", img: salad3, desc: "Baby spinach, arugula, mandarin oranges, toasted walnuts, dried cranberries,shaved Parmesan and Pinch of flaky sea salt" },
            { title: "Ceaser Salad", img: salad4, desc: "Romaine lettuce,croutons, parmigiano reggiano shavings and caesar dressing" }

        ],
        eatenRecipes: [],
        counter: 0
    }

    getRecipe = (index) => {
        let temp = [];
        let temp2 = [];
        temp = this.state.recipes;
        temp2 = [...this.state.eatenRecipes, this.state.recipes[parseInt(index)]];
        temp.splice(parseInt(index), 1);
        this.setState({
            recipes: temp,
            eatenRecipes: temp2,
            counter: this.state.counter + 1

        }, () => { { console.log(this.state.counter) } });
    }


    getEatenRecipe = (index) => {
        let temp = [];
        let temp2 = [];
        temp = this.state.eatenRecipes;
        temp2 = [...this.state.recipes, this.state.eatenRecipes[parseInt(index)
        ]];
        temp.splice(parseInt(index), 1);
        this.setState({
            eatenRecipes: temp,
            recipes: temp2,
            counter: this.state.counter - 1
        }, () => { { console.log(this.state.counter) } });
    }



    render() {
        return (
            <View id="main" tyle={{padding: 10, flex: 1 }}>
                {EHeader}
                <ScrollView contentContainerStyle={{paddingBottom: 100}}>
                    <FCRecipes recipes={this.state.recipes} getRecipe={this.getRecipe} />
                    <FCCounter counter={this.state.counter} />
                    <FCRecipesDone eatenRecipes={this.state.eatenRecipes} getRecipe={this.getEatenRecipe} />
                </ScrollView>
                {EFooter}
            </View>
        )
    }
}
