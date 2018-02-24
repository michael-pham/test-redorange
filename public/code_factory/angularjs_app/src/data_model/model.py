from data_model_constants import *
from attribute import *

class Model:
    def __init__(self, model_data):
        self.name = model_data[NAME_KEY]
        self.attributes = []
        for attribute in model_data[ATTRIBUTES]:
            self.attributes.append(Attribute(attribute))
