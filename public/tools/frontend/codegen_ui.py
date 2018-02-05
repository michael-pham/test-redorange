# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

from codegen_consts import *
from codegen_utils import *
from codegen_inputs import *

# Make update form
def make_form(form_type, model):
    if form_type is CREATE_FORM:
        form_model_name = CREATE_FORM_MODEL_NAME_PREFIX + model[NAME_KEY]

        # Base content
        base_content = ""
        create_modal_title = model[DISPLAY_NAME_KEY]
        base_content = search_and_replace_without_write(CREATE_FORM_URL, \
            CREATE_FORM_TITLE_MARKER, create_modal_title)
    elif form_type is UPDATE_FORM:
        form_model_name = UPDATEA_FORM_MODEL_NAME_PREFIX + model[NAME_KEY]

        # Base content
        base_content = ""
        update_modal_title = model[DISPLAY_NAME_KEY]
        base_content = search_and_replace_without_write(UPDATE_FORM_URL, \
            UPDATE_FORM_TITLE_MARKER, update_modal_title)

    # Input content
    input_content = ""
    for attribute in model[ATTRIBUTES_KEY]:
        ui_type = attribute[UI_TYPE_KEY]

        if ui_type == TEXT_INPUT:
            input_content += input(form_model_name, TEXT_INPUT_TPL, attribute)

        if ui_type == NUMERIC_INPUT:
            input_content += input(form_model_name, NUMERIC_INPUT_TPL, attribute)

        if ui_type == CHECKBOX_INPUT:
            input_content += input(form_model_name, CHECKBOX_INPUT_TPL, attribute)

        if ui_type == TEXTAREA_INPUT:
            input_content += input(form_model_name, TEXTAREA_INPUT_TPL, attribute)

        if ui_type == DATALIST_INPUT:
            input_content += input(form_model_name, DATALIST_INPUT_TPL, attribute)

        if ui_type == SELECTION_INPUT:
            input_content += input(form_model_name, SELECTION_INPUT_TPL, attribute)

        if ui_type == DATE_INPUT:
            input_content += input(form_model_name, DATE_INPUT_TPL, attribute)

    base_content = base_content.replace(CREATE_FORM_INPUTS_MARKER, input_content)


    base_content = BeautifulSoup(base_content, 'html.parser').prettify()
    print(base_content)

    return base_content

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
        make_form(CREATE_FORM, model)
        # make_form(UPDATE_FORM, model)
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
