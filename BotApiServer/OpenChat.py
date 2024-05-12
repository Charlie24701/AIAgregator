from openai import OpenAI
from passwords import OpenChat_token

openai = OpenAI(
    api_key=OpenChat_token,
    base_url="https://api.deepinfra.com/v1/openai",
) #Вводим данные авторизации
def opch(prompt): #Функция, принимающая аргумент с входящим сообщением, которую будет вызывать API 
    try:
        chat_completion = openai.chat.completions.create(
            model="openchat/openchat_3.5",
            messages=[{"role": "user", "content": prompt}], #в "content" помещаем сообщение пользователя
        )

        return (chat_completion.choices[0].message.content) #Возврат ответа от искусственного интеллекта
    except:
        return '[500] Ошибка сервера' #При ошибках будет отправляться это сообщение

        