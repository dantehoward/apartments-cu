import pandas as pd
import json

df = pd.read_csv('./data/ApartmentData.csv')

def get_lat_lon(str):
    lat, lon = str.split(',')
    return float(lat), float(lon)

def get_amenities(str):
    amenities = {'gym': False, 'pool': False, 'studySpace': False, 'sauna': False, 'coveredParking': False, 'patio': False, 'pets': False}
    
    # If no amenities data is available
    if type(str) == float:
        return amenities

    amenities_list = str.split(',')

    if 'Gym' in amenities_list:
        amenities['gym'] = True
    if 'Pool' in amenities_list:
        amenities['pool'] = True
    if 'Study spaces' in amenities_list:
        amenities['studySpace'] = True
    if 'Sauna' in amenities_list:
        amenities['sauna'] = True
    if 'Covered Parking' in amenities_list:
        amenities['coveredParking'] = True
    if 'Patio' in amenities_list:
        amenities['patio'] = True
    if 'Pets' in amenities_list:
        amenities['pets'] = True

    return amenities
    
    

buildings = []
building_ids = {}
curr_id = 1

for index, row in df.iterrows():

    if row['Building Name'] in building_ids:
        continue

    curr_building = {}

    # Setting building name and id
    name = row['Building Name']
    building_ids[name] = curr_id
    curr_building['id'] = curr_id
    curr_id += 1
    curr_building['name'] = name

    # Bulding address
    curr_building['address'] = row['Building address']

    # Building longitude and latitude
    lat, lon = get_lat_lon(row['Latitude, Longitude'])
    curr_building['lat'] = lat
    curr_building['lon'] = lon

    # Building amenities
    curr_building['amenities'] = get_amenities(row['Amenities'])

    # Building company
    if type(row['Management Company']) == float:
        curr_building['company'] = None
    else:
        curr_building['company'] = row['Management Company']

    buildings.append(curr_building)

# Export json
buildings_json = json.dumps(buildings, indent=4)
f = open('../src/util/buildings.json', 'w')
f.write(buildings_json)

    

