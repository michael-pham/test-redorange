from constants import *

class Relationship:
    def __init__(self, relationship_data):
        self.type = relationship_data[TYPE_KEY]
        self.with_model = relationship_data[WITH_KEY]
