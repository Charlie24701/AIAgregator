from openai import OpenAI
from passwords import DeepSeek_token

client = OpenAI(api_key=DeepSeek_token, base_url="https://api.deepseek.com/v1")

def deep_seek(data):
    try:
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[
                {"role": "user", "content": data},
            ]
        )

        return (response.choices[0].message.content)
    except:
        return '[500] Ошибка сервера'