//Подключение библиотек
import { View } from 'react-native'; 
import { ChatPage } from './screens/ChatPage'


export default function App() { 
// Главная страница переносит нас сразу на страницу с чатом "ChatPage"
  return(
    <View>
      <ChatPage />
    </View>
    
  )
  
} 

