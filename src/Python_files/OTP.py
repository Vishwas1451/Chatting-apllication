# import os
# import math
# import random
# import smtplib

# digit="123456789"
# OTP=""
# for i in range(4):
#     OTP=OTP+digit[math.floor(random.random())]
# msg=OTP
# s=smtplib.SMTP_SSL("SMTP.gmail.com",465)
# Email_id=input("Enter your email id:")
# s.login(Email_id,"PES2UG20CS390")
# send_to=input("Send To:")
# s.sendmail(Email_id,send_to,msg)
# d = input("Enter Your OTP >>: ")
# if(d == OTP):
#     print("Verified")
# else:
#     print("Check your OTP again")

# import requests
# import random
# import json


# rand=random.randint(1,999999)

# msg=f"Your One Time Password(OTP) is {rand}"

# def sms_send(a,msg):
#     url="https://www.fast2sms.com/dev/bulk"
#     params={
#     # Paste Your Unique API Here in-place of ************
#         "authorization":"WnP4m13bAI7c2eTFsz0fVZahRxX9jqJCl86LODptdYHkurowEMaemNpY5cGAP2BvrVRJwqIyx4XD80kW",
#         "sender_id":"SMSINI",
#         "message":msg,
#         "language":"english",
#         "route":"p",
#         "numbers":a
#     }
#     rs=requests.get(url,params=params)


# def send():
#     a=input("enter number:")
#     if(a==""):
#         print("Error","Enter Your Mobile Number")
#     elif (len(a)<10):
#         print("Error","Invalid Mobile Number")
#     else:
#         sms_send(a,msg)
        

# def check():
#     c=input("enter otp:")
#     if(c==""):
#         print("Error","Enter OTP")
#     else:
#         if(str(rand)==c):
#             print("Info, Successful")
#         else:
#             print("Error, Invalid OTP")
            

# send()
# check()    
# 

# import smtplib  
# import getpass
# email=input("Enter Email:")
# password=getpass.getpass(prompt='Password:',stream=None)
# server=smtplib.SMTP_SSL('smtp.gmail.com',993)
# server.login(email,password)

# msg='''From: From Person <email>
#     To: To Person <email>
#     {}
#     '''.format(f.read())

# server.sendmail(email,email,msg)

# sender_mail = 'pesug20cs390@pesu.pes.edu'    
# receivers_mail = ['vishwas1451@gmail.com']    
# message = """From: From Person %s  
# To: To Person %s  
# Subject: Sending SMTP e-mail   
# This is a test e-mail message.  
# """%(sender_mail,receivers_mail)    
# try:    
#    password = input('Enter the password');    
#    smtpObj = smtplib.SMTP('gmail.com',587)    
#    smtpObj.login(sender_mail,password)    
#    smtpObj.sendmail(sender_mail, receivers_mail, message)    
#    print("Successfully sent email")    
# except Exception:    
#    print("Error: unable to send email")    