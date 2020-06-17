import csv,json

fname = str(input("Enter file path: "))

csvfile = open(fname, 'r')
jsonfile = open(fname.replace(".csv",".json"), 'w')
reader = csv.DictReader(csvfile)

jsonfile.write('[')
for row in reader:
  json.dump(row, jsonfile)
  jsonfile.write(',')
  jsonfile.write('\n')
jsonfile.write(']')