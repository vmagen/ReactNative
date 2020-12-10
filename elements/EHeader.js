import React from 'react'
import { Header } from 'react-native-elements';
import { View } from "react-native";

const EHeader =

        <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY KITCHEN', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                        backgroundColor: 'green',
                        justifyContent: 'space-evenly'
                      }}
        />

export default EHeader;

