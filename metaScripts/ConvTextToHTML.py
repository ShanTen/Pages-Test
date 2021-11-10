from os import listdir
from os.path import isfile, join, getctime
from datetime import datetime
import json

humanReadable = lambda ct: datetime.fromtimestamp(ct).strftime('%Y-%m-%d %H:%M')

dirPath = r"../WriteBlogHere/"
listOfFiles = [f for f in listdir(dirPath) if isfile(join(dirPath,f))]
ctimes = [getctime(join(dirPath,f)) for f in listOfFiles]


"""
Load JSON Values
Look at dict and check for new uploads
if new upload(s) then take each new upload, take the title, create time and content and put it in the template form
create new files with respective titles and data and dates
save the files in /posts as div portions 
figure out what to do from there later
"""