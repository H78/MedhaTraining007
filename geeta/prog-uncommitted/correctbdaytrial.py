# sending greetings assignment.
# open csv file of email addresses and read and make hash table.
import selenium
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

from datetime import datetime
now=datetime.now()
mm=str(now.month)
dd=str(now.day)
thisday= mm+"/"+dd	
print thisday
# now getting data from csv file
DOBMAP={}
fh=open("bday.csv",'r')
for line in fh:
	line=line.rstrip()
	data=line.split(',')
	DOBMAP[data[1]]=data[0]+data[2]
	#email=data[1]
	bday=data[2]
	print data[1]
	print bday
	if (thisday==bday):
		print "its ur bday",data[0],data[2]
		print data[1]
		
		br=webdriver.Firefox()
		br.get("https://gmail.com")

		uname=br.find_element_by_id("Email")
		uname.send_keys("appigeeta")
		password=br.find_element_by_id("Passwd")
		password.send_keys("1976year2013")
		signinbutton=br.find_element_by_id("signIn")
		signinbutton.click()	
		br.implicitly_wait(30)

# locate compose and click

	try:
		composebutton=br.find_element_by_xpath("/html/body/div[7]/div[3]/div/div[2]/div/div/div/div[2]/div/div/div/div/div")
	except:
		print"not able to find compose button"
	else:
		br.implicitly_wait(15)
		composebutton.click()
		br.implicitly_wait(20)

# locate To: and enteremail address
# it use to work...now its not...check...recepient xpath not working..should try with name
		recepient=br.find_element_by_xpath("/html/body/div[13]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[4]/table/tbody/tr/td[2]/form/div/table/tbody/tr/td[2]/div/div/textarea")
		#br.implicitly_wait(10)
		recepient.send_keys(data[1])
		#recepient.send_keys("appigeeta@gmail.com")
		br.implicitly_wait(20)

		addcc=br.find_element_by_xpath("/html/body/div[13]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[4]/table/tbody/tr/td[2]/form/div/table/tbody/tr/td[2]/div/div/div/span/span/span")
		addcc.click()
		
		

		#br.implicitly_wait(20)
		ccto=br.find_element_by_xpath("/html/body/div[13]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[4]/table/tbody/tr/td[2]/form/div/table/tbody/tr[2]/td[2]/div/div/textarea")
		ccto.send_keys(data[1])
		br.implicitly_wait(20)

		subject=br.find_element_by_xpath("/html/body/div[13]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[4]/table/tbody/tr/td[2]/form/div[3]/input")
		subject.send_keys("python")
		br.implicitly_wait(20)
	
		try:
			write=br.find_element_by_xpath("/html/body/div[13]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[4]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/div[2]/div/div/table/tbody/tr/td[2]/div[2]/div/iframe")
		except:
			print"dont know where to write"
		else:
			fh1=open("greetings.txt",'r')
	#print fh1.read()
			content=fh1.read()
			print content
			write.send_keys(content)
# for writing its working for xpath of iframe...need to understand why.

		sendbutton=br.find_element_by_xpath("/html/body/div[13]/div/div/div/div/div[2]/div/div/div/div/div/div[3]/div/div/div[4]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/div/div/div[4]/table/tbody/tr/td/div/div[2]")
		sendbutton.click()
		
		
		
		
#fh1=open("greetings.txt",'r')
#print fh1