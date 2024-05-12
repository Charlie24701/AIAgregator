import requests
from passwords import GigaChat_token

url = "https://ngw.devices.sberbank.ru:9443/api/v2/oauth"

payload='scope=GIGACHAT_API_PERS'
headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json',
  'RqUID': '8b23810b-7dcf-4117-9e53-660f25f6c6dd',
  'Authorization': GigaChat_token
}

response = requests.request("POST", url, headers=headers, data=payload, verify=False)

def token():
  return response.json()['access_token']