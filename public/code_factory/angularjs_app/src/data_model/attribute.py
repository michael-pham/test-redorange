from data_model_constants import *
from constraint import *

class Attribute:
    def __init__(self, attribute_data):
        self.name = attribute_data[NAME_KEY]
        self.display_name = attribute_datea[DISPLAY_NAME_KEY]
        self.type = attribute_data[TYPE_KEY]
        self.ui_type = attribute_data[UI_TYPE_KEY]
        self.constraints = []

        for constraint in attribute_data[CONSTRAINTS_KEY]:
            self.constraints.append(Constraint(constraint))
