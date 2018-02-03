# -*- coding: utf-8 -*-

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

from codepen_consts import *
from codegen_utils import *

# Make update form
def make_create_form(model):
    model_form_name = "new" + model[NAME_KEY]

    # Base content
    create_modal_title = CREATE_FORM_TITLE_PREFIX + " " + model_form_name
    base_content = search_and_replace_without_write(CREATE_FORM_URL,
        CREATE_FORM_TITLE_MARKER, create_modal_title)

    # Input content
    input_content = ""
    for attribute in model[ATTRIBUTES_KEY]:
        input_item = search_and_replace_without_write(,
            CREATE_FORM_TITLE_MARKER, create_modal_title)


    base_content = base_content.replace(CREATE_FORM_INPUTS_MARKER, input_content)
    CREATE_FORM_INPUTS_MARKER

    print(content)

# Make create form
def make_update_form():
    return ""

# Make listing table
def make_listing_table():
    return ""
    # # Properties of the current model
    # current_model_name = model[NAME_KEY]
    #
    # # Attributes of the current model
    # attributes = model[ATTRIBUTES_KEY]
    # for attribute in attributes:
    #     # Constraints of the attribute
    #     constraints = attribute[CONSTRAINTS_KEY]
    #     max_constraint = constraints[MAX_KEY]
    #     min_constraint = constraints[MIN_KEY]
    #     pattern_constraint = constraints[PATTERN_KEY]
    #     required_constraint = constraints[REQUIRED_KEY]
    #     nullable_constraint = constraints[NULLABLE_KEY]
    #     numeric_key_constraint = constraints[NUMERIC_KEY]
    #     unique_key_constraint = constraints[UNIQUE_KEY]
    #     email_constraint = constraints[EMAIL_KEY]

import json
data_path = './hello.json'
import ast
with open(data_path) as fd:
    content = fd.read()
    json_data = ast.literal_eval(content)
    json_data = json.dumps(json_data)
    data = json.loads(json_data)

    # Traverse models
    for model in data:
        make_create_form(model)
        # # Properties of the current model
        # current_model_name = model[NAME_KEY]
        #
        # # Attributes of the current model
        # attributes = model[ATTRIBUTES_KEY]
        # for attribute in attributes:
        #     # Constraints of the attribute
        #     constraints = attribute[CONSTRAINTS_KEY]
        #     max_constraint = constraints[MAX_KEY]
        #     min_constraint = constraints[MIN_KEY]
        #     pattern_constraint = constraints[PATTERN_KEY]
        #     required_constraint = constraints[REQUIRED_KEY]
        #     nullable_constraint = constraints[NULLABLE_KEY]
        #     numeric_key_constraint = constraints[NUMERIC_KEY]
        #     unique_key_constraint = constraints[UNIQUE_KEY]
        #     email_constraint = constraints[EMAIL_KEY]


            # Make update form

            # Make create form
            # Make listing tables
