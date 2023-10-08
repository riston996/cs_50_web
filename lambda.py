people = [{"name": "harry", "house": "gryfindor"}, {"name": "dra", "house": "sly"}]

people.sort(key=lambda people: people["name"])

print(people)
