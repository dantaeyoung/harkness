from pymongo import MongoClient
import settings

client = MongoClient('mongodb://' + settings.mongouser + ':' + settings.mongopass + '@' + settings.mongourl)
db = client['manila_db']
collection_on_compose = db['tabs']

print collection_on_compose.find_one()

