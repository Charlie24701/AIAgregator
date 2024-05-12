import React, { useState, useEffect } from 'react';  
import {
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'; 
import { StatusBar } from 'expo-status-bar'; 
import styled from 'styled-components/native'

const User = styled.Text`
    fontWeight: bold;

    color: white;
`
const Content = styled.Text`
    color: white;
`
export function Message({who, what}){
    if (who == 'You') {
        color = '#4A495A'
    } else {
        color = 0
    }
const OurMessage = styled.View`
    width: 100%;
    background-color: ${color};
    borderBottomWidth: 1px;
    borderColor: #5D5D5C;
    minHeight: 50px;
    maxWidth: 100%;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    paddingLeft: 10px;
    paddingRight: 10px
    `
return (
            <OurMessage>
                <User selectable={true}>{who+':'}</User>
                <Content selectable={true}>{what}</Content>
            </OurMessage>
)
}