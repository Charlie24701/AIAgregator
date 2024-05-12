import requests
import json
import GigaToken

url = "https://gigachat.devices.sberbank.ru/api/v1/chat/completions"
def sber(prompt):
  try:
    payload = json.dumps({
      "model": "GigaChat",
      "messages": [
        {
          "role": "user",
          "content": prompt
        }
      ],
      "temperature": 1,
      "top_p": 0.1,
      "n": 1,
      "stream": False,
      "max_tokens": 100,
      "repetition_penalty": 1
    })
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + GigaToken.token()
    }

    response = requests.request("POST", url, headers=headers, data=payload, verify=False)

    return (response.json()['choices'][0]['message']['content'])
  except:
      return '500 Ошибка сервера'
