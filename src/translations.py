'''
This script will fetch translations from google docs and generate JS file that contains translations.
Previous file will be overwritten!
'''
import json
import urllib.request
from collections import OrderedDict

sheet_id = '1k0XatJovAKCNcPLCkL9krsSkKNla1PwHf7th2cUq0Fs'
base = 'https://spreadsheets.google.com/feeds/list/{0}/od6/public/values?alt=json'
translation_config = 'src/app/_app-main/_app-main.translations.js'

url = base.format(sheet_id)
json_data = json.loads(urllib.request.urlopen(url).read().decode('utf8'))
#we need to build different data structure
en_translation_map = OrderedDict()
da_translation_map = OrderedDict()
for entry in json_data['feed']['entry']:
    key = entry['gsx$key']['$t']
    en_value = entry['gsx$en']['$t']
    da_value = entry['gsx$da']['$t']
    en_translation_map[key] = en_value
    da_translation_map[key] = da_value
#Javascript for translations file we are generating
config = """
angular.module(playConfig.appRootModuleName).config(translateConfig);
translateConfig.$inject = ['$translateProvider'];
function translateConfig($translateProvider){
"""
en_translations = json.dumps(en_translation_map, indent=4)
da_translations = json.dumps(da_translation_map, indent=4)
config = config + "\n$translateProvider.translations('en'," + en_translations + ');'
config = config + "\n$translateProvider.translations('da'," + da_translations + ');'
config = config + "\n}" #close translateConfig function
with open(translation_config, 'w') as outfile:
    outfile.write(config)
