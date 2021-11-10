from os import listdir
from os.path import isfile, join, getctime
from datetime import datetime
import json as JSON

def getJSON(filePath):
    with open(filePath, 'r') as f:
        jsonValue = f.read()
        return JSON.loads(jsonValue)

def process_post(filePath,title,date):
    pass

def getBlogContent(filePath):
    pass

def Main():
    readFromDirPath = r"../WriteBlogHere/"
    memoryPath = r"./memory.json"

    fileData = getJSON(memoryPath)
    lastCT = fileData["LastCT"]
    postCount = fileData["PostCount"]

    format_ct = lambda ct: datetime.fromtimestamp(ct).strftime('%Y-%m-%d %H:%M')

    listOfFiles = [f for f in listdir(readFromDirPath) if isfile(join(readFromDirPath,f))]
    ctimes = [getctime(join(readFromDirPath,f)) for f in listOfFiles]
    formattedCT = [format_ct(t) for t in ctimes]

    #tuples returned by refing a dict
    couples = [(x,formattedCT[i]) for i,x in enumerate(ctimes)]

    #format of the dict -> {'Blog Title.txt': (CT_Float, formattedCT_String),..}
    postsDict = dict(zip(listOfFiles,couples))

    for p in postsDict:
        ct = postsDict[p][0]
        if ct>lastCT:
            print(f"Processing {p}...")
            fp = join(readFromDirPath,p)
            title = p[:-4]
            date = postsDict[p][1]
            process_post(fp,title,date)
            lastCT=ct

Main()

"""
Load JSON Values
Look at dict and check for new uploads
if new upload(s) then take each new upload, take the title, create time and content and put it in the template form
create new files with respective titles and data and dates
save the files in /posts as div portions 
figure out what to do from there later
"""