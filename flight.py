class FLIGHT():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)

    def open_seats(self):
        return self.capacity - len(self.passengers)

fli = FLIGHT(2)

people = ["h","r","d"]

for x in people:
    fli.add_passenger(x)

print(fli.passengers)