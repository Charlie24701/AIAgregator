import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import React, { useState } from 'react';   
import styled from 'styled-components/native';
import { Toggles } from './BotToggle';

const Main = styled.View`
    background-color: #BB76FF;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: flex-end;
`;
const TextLoad = styled.Text`
    color: white;
    background-color: rgba(0,0,0,0.5);
    width: 100%
`;
const LoadingView = styled.View`
text-align: left;
margin-right: 5px;
display: inline-block;
justify-content: flex-end;
flex: 1;
`
const OpenModel = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
margin-left: 10px;
borderTopLeftRadius: 20px;
borderTopRightRadius: 20px;
borderBottomLeftRadius: 20px;
borderBottomRightRadius: 20px;
margin-top: auto;
margin-bottom: auto;
margin-left: auto;
margin-right: 5px;
`


export function Navbar({loadHug, loadGPT, loadOpCh, loadGiga, loadDeep, setActive}){
const [modalView, setModalView] = useState(false)
function loadingHug() {
    if (loadHug) {
        return (<TextLoad>  Loading HuggingChat response...</TextLoad>)
    }
}
function loadingChatGpt() {
    if (loadGPT) {
        return (<TextLoad>  Loading ChatGPT response...</TextLoad>)
    }
}
function loadingOpCh() {
    if (loadOpCh) {
        return (<TextLoad>  Loading OpenChat response...</TextLoad>)
    }
}
function loadingGiga() {
    if (loadGiga) {
        return (<TextLoad>  Loading GigaChat response...</TextLoad>)
    }
}

function loadingDeep() {
    if (loadDeep) {
        return (<TextLoad>  Loading DeepSeek response...</TextLoad>)
    }
}

const setToggles = (state) => {
    setModalView(state)
}

const setToggle = (state) => {
    setActive(state)
}
function cons(value) {
    if (value == true) {
        return "Hello world"
    }
}
    return (
        <Main>
            <Toggles Show={modalView} 
            setToggles={setToggles} 
            setToggle={setToggle}/>
            <LoadingView>
            {loadingHug()}
            {loadingChatGpt()}
            {loadingOpCh()}
            {loadingGiga()}
            {loadingDeep()}
            </LoadingView>           
            <OpenModel onPress= {() => {setToggles()}}>
            <Image source = {require("../Images/settings.png")} style = {{width: 50, height: 50}}/>
            </OpenModel>

        </Main>
    )
}
