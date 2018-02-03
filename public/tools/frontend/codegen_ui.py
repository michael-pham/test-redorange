# -*- coding: utf-8 -*-

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

from codepen_consts import *
from codegen_utils import *
from codegen_inputs import *

# Make update form
def make_create_form(model):
     form_model_name = "new" + model[NAME_KEY]

    # Base content
    base_content = ""
    create_modal_title = CREATE_FORM_TITLE_PREFIX + " " + model_form_name
    base_content = search_and_replace_without_write(CREATE_FORM_URL,
        CREATE_FORM_TITLE_MARKER, create_modal_title)

    # Input content
    input_content = ""
    for attribute in model[ATTRIBUTES_KEY]:
        ui_type = attributes[UI_TYPE]

        if ui_type == TEXT_INPUT:
            input_content += text_inputs(form_model_name, attribute)

        if ui_type == NUMERIC_INPUT:
            input_content += numeric_inputs(form_model_name, attribute)

        if ui_type == CHECKBOX_INPUT:
            input_content += checkbox_inputs(form_model_name, attribute)

        if ui_type == TEXTAREA_INPUT:
            input_content += textarea_inputs(form_model_name, attribute)

        if ui_type == DATALIST_INPUT:
            input_content += datalist_inputs(form_model_name, attribute)

        if ui_type == SELECTION_INPUT:
            input_content += selection_inputs(form_model_name, attribute)

        if ui_type == DATE_INPUT:
            input_content += date_inputs(form_model_name, attribute)

    base_content = base_content.replace(CREATE_FORM_INPUTS_MARKER, input_content)

    print base_content

    return base_content

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
    #     ui_type = attributes[UI_TYPE]
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
