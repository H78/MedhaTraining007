# getting data from table in dict format...and seperating dict with comma,doing json 
import MySQLdb
import json
import generate_json
from generate_json import make_json_obj


class userprofile_fetch():
	table_dict=[]
	def fetchData(self):
		db=MySQLdb.connect(host="localhost",user="root",passwd="admin",db="framework")
		c=db.cursor()
		c.execute("SELECT * FROM userprofile")
		heads = [d[0] for d in c.description]
		print c.description
		c.fetchall()



		for row in c:
  			self.table_dict.append(dict(zip(heads,row)))
		db.close()

		print self.table_dict
	def convert_into_json(self):


		json_output=make_json_obj()
		json_output.create_json(self.table_dict)

data_json=userprofile_fetch()
data_json.fetchData()
data_json.convert_into_json()





Agile methodology
details about projectas dev and tester
sdlc agile scrum sprint planning (tools(read)) rally version 1 , automation selenium, framework,key driven,


software analyst...as resume...
mysql queries, primary key,foreign key,
test plans, bug report, reporting, root cause analysis,regression testing, 
jemter API testing, webservices (wisdal,soap UI) w3schools.com, 

EMR...EHR...medical transcription, electronic health records.... electronic health records,medical records.

around one year experiences.
traceabil

functionality met how u decide  

hospital work knowledge details worked in hospital


mainly testing  realted questions.

 epic tool ....viscon...
 soft developed on epic will be testing...