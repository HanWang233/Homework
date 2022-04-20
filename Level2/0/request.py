import os
import requests
import json

try:
    resp = requests.get('https://api.pancakeswap.info/api/v2/pairs',timeout=500)
    if resp.status_code ==200:
        data = json.loads(resp.text).get('data',None)
        if data is not None:
            result = []
            for k,v in data.items():
                result.append(v.get('pair_address',''))
            with open('pair_address.txt','w') as f:
                for str in result:
                    f.write(str+"\n")
        else:
            print('Api Error')
except requests.exceptions:
    print("Request errors!")