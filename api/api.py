from flask import Flask, request
import pymongo
from pymongo import MongoClient
import settings
import datetime
import urllib


app = Flask(__name__)


@app.route('/')
def index():
    return 'Hi! use either /get_meeting or /add_comment'

"""
@app.route('/get_tab')
def get_tab():
    # get the most recent tab, given meetingname
    meetingname = request.args.get('meetingname')
    print meetingname  
    if (meetingname):

        client = MongoClient('mongodb://' + settings.mongouser + ':' + settings.mongopass + '@' + settings.mongocomment)
        db = client['manila_db']
        collection_on_compose = db['tabs']

        try:
            # sort in descending order by date/time, so that  we get the most recent
            one_tab = collection_on_compose.find({"meetingname": meetingname}).sort('datetime',pymongo.DESCENDING).limit(1)[0]
            if(one_tab['comment']):
                print one_tab['comment']
                return one_tab['comment']
        except Exception:
            print "error: no comment"
            return "error: no comment"

    else:
        return "error: no meetingname"
"""

@app.route('/add_comment')
def add_comment():
    # add a comment, given meeting-name, initials, previous-person initials, duration, and time (end-time)
    meetingname = request.args.get('meetingname')
    comment = urllib.unquote(request.args.get('comment'))
    if (meetingname and comment):

        client = MongoClient('mongodb://' + settings.mongouser + ':' + settings.mongopass + '@' + settings.mongocomment)
        db = client['manila_db']
        collection_on_compose = db['tabs']

        tab = {'meetingname': meetingname, 'comment': comment, 'dbinserttime': datetime.datetime.utcnow()}

        try:
            result = collection_on_compose.insert_one(tab)

            print "Inserted: ", result.inserted_id, " >> ", meetingname, " : ", comment
            return "Inserted: " + str(result.inserted_id)
        except Exception:
            print "error: not inserted", tab
            return "error: not inserted", tab

    else:
        return "error: no meetingname or comment"



if __name__ == "__main__":
    app.run(host='0.0.0.0')
