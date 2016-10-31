#!/usr/bin/env python

"""
This script can be used to parse CSV data into JSON, which makes it easy to filter out hotels based on some parameters.
For example, to fetch only hotels with 2 or 3 stars, we can pipe it to jq in the terminal and save the output in a new JSON file:
./parse_csv.py | jq 'map(select(.type == "HÔTEL" and .ranking > 1 and .ranking < 4))' > hotels_2_et_3_etoiles.json

The script can also take another CSV file (default is 'liste_etablissements.csv') as an argument.
"""

import csv
import sys
import json

DATE_DE_CLASSEMENT = 0
DATE_DE_PUBLICATION = 1
TYPOLOGIE = 2
CLASSEMENT = 3
CATEGORIE = 4
MENTION = 5
NOM_COMMERCIAL = 6 
ADRESSE = 7
CODE_POSTAL = 8
COMMUNE = 9
TELEPHONE = 10
COURRIEL = 11
SITE_INTERNET = 12
TYPE_DE_SEJOUR = 13
CAPACITE = 14
CHAMBRES = 15
EMPLACEMENTS = 16
UNITES_D_HABITATION = 17
LOGEMENTS = 18

def csv_to_json(csv_file):
	items = []
	with open(csv_file, newline='') as f:
	    reader = csv.reader(f, delimiter=';')
	    # skip the first line that describes the fields
	    next(reader)
	    for row in reader:
	        items.append(parse_row(row))
	return items

def parse_row(row):
	return {
		"category": row[CATEGORIE],
		"ranking": parse_ranking(row[CLASSEMENT]),
		"name": row[NOM_COMMERCIAL].title(),
		"type": row[TYPOLOGIE]
	}

def parse_ranking(ranking_field):
	ranking_table = {'Aire naturelle': 0, '1 étoile': 1, '2 étoiles': 2, '3 étoiles': 3, '4 étoiles': 4, '5 étoiles': 5}
	return ranking_table[ranking_field]

def main(csv_file):
	json_data = csv_to_json(csv_file)
	print(json.dumps(json_data))

if __name__ == '__main__':
	hotels_list = 'liste_etablissements.csv'
	if len(sys.argv) > 1:
		hotels_list = sys.argv[1]
	main(hotels_list)