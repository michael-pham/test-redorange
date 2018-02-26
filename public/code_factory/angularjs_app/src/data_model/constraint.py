# -*- coding: utf-8 -*-

from data_model_constants import *

class Constraint:
    def __init__(self, constraint_data):
        self.max = constraint_data[MAX_KEY]
        self.min = constraint_data[MIN_KEY]
        self.pattern = constraint_data[PATTERN_KEY]
        self.pattern_message = constraint_data[PATTERN_MESSAGE_KEY]
        self.required = constraint_data[REQUIRED_KEY]
        self.nullable = constraint_data[NULLABLE_KEY]
        self.numeric = constraint_data[NUMERIC_KEY]
        self.unique = constraint_data[UNIQUE_KEY]
        self.email = constraint_data[EMAIL_KEY]
