from data_model_constants import *
from constraint import *

class Attribute:
    def __init__(self, attribute_data):
        self.name = attribute_data[NAME_KEY]
        self.display_name = attribute_data[DISPLAY_NAME_KEY]
        self.type = attribute_data[TYPE_KEY]
        self.ui_type = attribute_data[UI_TYPE_KEY]
        self.ui_display_type = attribute_data[UI_DISPLAY_TYPE_KEY]
        self.dependency_name = attribute_data[DEPENDENCY_NAME]
        self.dependency_display_name = attribute_data[DEPENDENCY_DISPLAY_NAME]
        self.constraints = []

        for constraint in attribute_data[CONSTRAINTS_KEY]:
            self.constraints.append(Constraint(constraint))
