import { useState } from 'react';
import {
    Text, 
    View,
    TextInput,
    Image,
    Modal,
    Switch
} from 'react-native'; 

import styled from 'styled-components/native'

const CloseModel = styled.TouchableOpacity`
justify-content: center;
width: 40px;
height: 40px;
align-items: center;
margin-left: 10px;
borderTopLeftRadius: 20px;
borderTopRightRadius: 20px;
borderBottomLeftRadius: 20px;
borderBottomRightRadius: 20px;
margin-top: auto;
margin-bottom: auto;
margin-left: 5px;
position: absolute
`
const Top = styled.View`
height: 60px;
align-items: center;
flex-direction: row;
background-color: #BB76FF;
`
const ModalToggle = styled.Modal`

`
const Middle = styled.View`
background-color: #323843;
height: 100%
`
const Toggle = styled.View`
flex-direction: row;
width: 94%;
align-items: center;
margin-right: auto;
margin-left: 3%;
justify-content: space-between;

`
const CheckBot = styled.Switch`
flex: 2;

`
const CheckView = styled.View`

`
const Submit = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 200px;
height: 40px;
background-color: #CAF030;
margin-left: 10px;
borderTopLeftRadius: 20px;
borderTopRightRadius: 20px;
borderBottomLeftRadius: 20px;
borderBottomRightRadius: 20px;
margin-top: 20px;
margin-bottom: auto;
margin-left: auto;
margin-right: auto;

`
const Bot = styled.Text`
font-size: 18px;
color: white;
`
const Setting = styled.Text`
margin-left: auto;
margin-right: auto;
font-size: 24px;
color: white;
`
export function Toggles({Show, setToggles, setToggle}){
const [Bot1, setBot1] = useState(true)
const [Bot2, setBot2] = useState(true)
const [Bot3, setBot3] = useState(true)
const [Bot4, setBot4] = useState(false)
const [Bot5, setBot5] = useState(false)
    return (
        <ModalToggle visible = {Show}>
            <Top>
            <CloseModel onPress={() => {setToggles(false)}}>
            <Image source = {require("../Images/back.png")} style = {{width: 35, height: 35}}/>
            </CloseModel>
                <Setting>
                    Настройки
                </Setting>
            </Top>
            <Middle>
            <CheckView>
                <Toggle>
                    <Bot>
                        ChatGPT
                    </Bot>
                    <CheckBot 
                    value={Bot3}
                    onValueChange={setBot3}
                    />
                </Toggle>
                <Toggle>
                    <Bot>
                        OpenChat
                    </Bot>
                    <CheckBot 
                    value={Bot1}
                    onValueChange={setBot1}
                    />
                </Toggle>
                <Toggle>
                    <Bot>
                        HuggingChat
                    </Bot>
                    <CheckBot 
                    value={Bot2}
                    onValueChange={setBot2}
                    />
                </Toggle>
                <Toggle>
                    <Bot>
                        GigaChat
                    </Bot>
                    <CheckBot 
                    value={Bot4}
                    onValueChange={setBot4}
                    />
                </Toggle>
                <Toggle>
                    <Bot>
                        DeepSeek
                    </Bot>
                    <CheckBot 
                    value={Bot5}
                    onValueChange={setBot5}
                    />
                </Toggle>
                <Submit onPress={() => {
                    setToggle({
                        'OpenChat': Bot1, 
                        'HuggingChat': Bot2,
                        'ChatGPT': Bot3,
                        'GigaChat': Bot4,
                        'DeepSeek': Bot5,
                    })
                }}>
                
                <Text style={{fontSize: 20, color: '#323843'}}>Подтвердить</Text>    
                </Submit>
            </CheckView>
            </Middle>
        </ModalToggle>

    )
}