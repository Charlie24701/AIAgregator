import React, { useState } from 'react';  
import {
    FlatList,
    Text, 
    View,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'; 
import styled from 'styled-components/native'
import { Navbar } from './Navbar';
import { Message } from './message';

//Стили
const Main = styled.View`
    flex: 1;
    background-color: #323843;
    align-items: center;
    flex-direction:column;
    justify-content: flex-end;
    overflowY: scroll;

` 
const MainMes = styled.FlatList`
    width: 100%;
    flex:1;
` 

const UserPrompt = styled.View`
    background-color: #323843;
    height: 60px;
    flex-direction: row;
    align-items: center;
    minHeight: 10px;
    
`
const UserImput = styled.TextInput`
    flex:1;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    padding-left: 20px;
    padding-right:20px;
    height: 40px;
    maxHeight: 100px;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    borderBottomLeftRadius: 20px;
    borderBottomRightRadius: 20px;
    background-color: #BB76FF;
    color: white;
`
const SubmitMes = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #BB76FF;
    margin-right: 10px;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    borderBottomLeftRadius: 20px;
    borderBottomRightRadius: 20px;
    
`
const OurMessage = styled.View`
    width: 99%;
    borderBottomWidth: 3px;
    borderColor: #228B22;
    background-color: white;
    minHeight: 50px;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
`

export const ChatPage= () => {
    const [messages, SetMessages] = useState([]) //Переменная массив, которая хранит историю сообщений, в будущем возможно будет перенесен на сервер
    const [text, SetText] = useState('') // Переменная, которая хранит набранный текст в поле ввода сообщения

    // Переменные состояния сервера
    const [loadingHug, setLoadingHug] =useState(false)
    const [loadingGPT, setloadingGPT] =useState(false)
    const [loadingOpCh, setLoadingOpCh] =useState(false)
    const [loadingGiga, setGigaChat] =useState(false)
    const [loadingDeep, setDeepSeek] =useState(false)

    const [activeToggle, setActiveToggle] =useState({ // Переменная конфигурации, которая хранит настройки нужных пользователю ИИ
        'ChatGPT': true,
        'OpenChat': true, 
        'HuggingChat': true,
        'GigaChat': false,
        'DeepSeek': false
    })

    const setActive = (value) => { //Вспомогательная функция изменения состояния переменной конфигурации
        setActiveToggle(value)
    }
    
    const HOST = 'http://127.0.0.1:5000' //IP, на котором находится API

    function addmessage(who, mes) { //Функция добавления сообщения в массив истории сообщений
        SetMessages((prev) => [{'who': who, 'what': mes}, ...prev])
        
    }

// Функции вызова эндпоинтов API и получения ответа от ИИ
    async function Chat_gpt(text) {
        setloadingGPT(true) //Изменяется состояние загрузки ответа от ИИ
        try {
            const requestOptions = //Формируется JSON для отправки на сервер с API
            {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({text}), //Здесь хранится сообщение пользователя
            }

        const response = await fetch(HOST + '/api/input', requestOptions); //Асинхронная функция, которая отправляет данные на сервер
        const data = await response.json(); //Асинхронная функция, которая получит ответ от сервера
        addmessage("ChatGpt", data.ChatGPT) //Функция отображения ответа на экран пользователя
        
        
    } catch (error) {
        addmessage("ChatGpt", '[408] Сервер не отвечает')
    }
    setloadingGPT(false)
}

    async function Hug_Gpt(text) {
        setLoadingHug(true)
        try {
            const requestOptions = 
            {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({text}),
            }

        const response = await fetch(HOST + '/api/Hug', requestOptions);
        const data = await response.json();
        addmessage("HuggingChat", data.HuggingChat)
    } catch (error) {
        addmessage("HuggingChat", '[408] Сервер не отвечает')
    } setLoadingHug(false)
}

    async function OpenChat_Gpt(text) {
    setLoadingOpCh(true)
    try {
        const requestOptions = 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text}),
        }

    const response = await fetch(HOST + '/api/openchat', requestOptions);
    const data = await response.json();
    addmessage("OpenChat", data.OpenChat)
} catch (error) {
    addmessage("OpenChat", '[408] Сервер не отвечает')
}setLoadingOpCh(false) }

async function GigaChat_Gpt(text) {
    setGigaChat(true)
    try {
        const requestOptions = 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text}),
        }

    const response = await fetch(HOST + '/api/gigachat', requestOptions);
    const data = await response.json();
    addmessage("GigaChat", data.GigaChat)
} catch (error) {
    addmessage("GigaChat", '[408] Сервер не отвечает')
}setGigaChat(false) }

async function DeepSeek_Gpt(text) {
    setDeepSeek(true)
    try {
        const requestOptions = 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text}),
        }

    const response = await fetch(HOST + '/api/deepseek', requestOptions);
    const data = await response.json();
    addmessage("DeepSeek", data.DeepSeek)
} catch (error) {
    addmessage("Deepseek", '[408] Сервер не отвечает')
}setDeepSeek(false) }

    return ( //В этой части находится разметка, внешний вид чата.
        <View style={{height: '100%', backgroundcolor: '#98FB98'}}>
            <Navbar 
                loadHug = {loadingHug}
                loadGPT = {loadingGPT}
                loadOpCh = {loadingOpCh}
                loadGiga = {loadingGiga}
                loadDeep = {loadingDeep}
                setActive = {setActive}
            /> 

            <Main>
                <MainMes 
                inverted={true}
                data = {messages} 
                renderItem={({ item }) =>
                (<Message who = {item.who} what = {item.what}/>
                )}
                />
                
            </Main>

            <UserPrompt>
                <UserImput multiline placeholder="Введите сообщение"
                onChangeText={(text) => SetText(text)}
                        value={text}
                />
                <SubmitMes onPress= {() => {if (text != '' && (text[0] != '\n') && text[0] != ' ') {
                    addmessage('You', text); 
                    try{
                        if (activeToggle['ChatGPT']) Chat_gpt(text);
                        if (activeToggle['HuggingChat']) Hug_Gpt(text);
                        if (activeToggle['OpenChat']) OpenChat_Gpt(text);
                        if (activeToggle['GigaChat']) GigaChat_Gpt(text);
                        if (activeToggle['DeepSeek']) DeepSeek_Gpt(text);
                        SetText('')
                    } catch(error) {
                        SetText('')
                    }
                    }}}>
                    <Image source = {require("../Images/send.png")} style = {{width: 25, height: 25}}/>
                </SubmitMes>
            </UserPrompt>
        </View>
    )
}

