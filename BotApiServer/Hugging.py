from hugchat import hugchat
from hugchat.login import Login
from passwords import Hugging_token

EMAIL = Hugging_token["email"]
PASSWD = Hugging_token["password"]
def Hug_chat(prompt):
    try:
        cookie_path_dir = "./cookies/" # NOTE: trailing slash (/) is required to avoid errors
        sign = Login(EMAIL, PASSWD)
        cookies = sign.login(cookie_dir_path=cookie_path_dir, save_cookies=True)

        chatbot = hugchat.ChatBot(cookies=cookies.get_dict())  # or cookie_path="usercookies/<email>.json"

        # Define the prompt

        # Chat with the bot
        response = chatbot.chat(f'Общайся на русском языке {prompt}')
        return response
    except:
        return '[500] Ошибка сервера'