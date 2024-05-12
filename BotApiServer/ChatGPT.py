from openai import OpenAI
from passwords import ChatGPT_token

client = OpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    api_key=ChatGPT_token,
)

def chat_gpt(prompt):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return (response.choices[0].message.content.strip())
    except:
        return '500 Ошибка сервера'