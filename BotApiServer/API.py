from flask import Flask, jsonify, request
import ChatGPT
import Hugging
import OpenChat
import GigaChat
import DeepSeek
app = Flask(__name__)

@app.route('/api/openchat', methods=['POST']) #Описание эндпоинта "/api/openchat" и используемого метода
def open_chat(): #Функция, которая будет вызвана сразу после обращения к эндпоинту
    data = request.json.get('text') #Получение сообщения пользователя из пакета, полученного от клиента
    return jsonify({'OpenChat': f'{OpenChat.opch(data)}' #Возврат JSON пакета с ответом от ИИ
    })

@app.route('/api/input', methods=['POST'])
def chat_gpt():
    data = request.json.get('text')
    try:
        return jsonify({'ChatGPT': f'{ChatGPT.chat_gpt(data)}'})
    except:
        return jsonify({'ChatGPT': f'Здравствуйте! Хорошо, а у вас?'
    
    })

@app.route('/api/Hug', methods=['POST'])
def Hugi_chat():
    data = request.json.get('text')
    return jsonify({
    'HuggingChat': f'{Hugging.Hug_chat(data)}'
    })


@app.route('/api/gigachat', methods=['POST'])
def Giga_chat():
    data = request.json.get('text')
    return jsonify({
    'GigaChat': f'{GigaChat.sber(data)}'
    })

@app.route('/api/deepseek', methods=['POST'])
def DeepSek():
    data = request.json.get('text')
    return jsonify({
    'DeepSeek': f'{DeepSeek.deep_seek(data)}'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000,
    )