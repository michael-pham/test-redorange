#!/usr/bin/env python
# -*- coding: utf-8 -*-
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
        form_model_name = UPDATE_FORM_MODEL_NAME_PREFIX + model[NAME_KEY]

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

        if ui_type == EMAIL_INPUT:
            input_content += input(form_model_name, EMAIL_INPUT_TPL, attribute)

        if ui_type == NUMERIC_INPUT:
            input_content += input(form_model_name, NUMERIC_INPUT_TPL, attribute)

        if ui_type == CHECKBOX_INPUT:
            input_content += input(form_model_name, CHECKBOX_INPUT_TPL, attribute)

        if ui_type == RADIO_INPUT:
            input_content += input(form_model_name, RADIO_INPUT_TPL, attribute)

        if ui_type == TEXTAREA_INPUT:
            input_content += input(form_model_name, TEXTAREA_INPUT_TPL, attribute)

        if ui_type == DATALIST_INPUT:
            input_content += input(form_model_name, DATALIST_INPUT_TPL, attribute)

        if ui_type == SELECTION_INPUT:
            input_content += input(form_model_name, SELECTION_INPUT_TPL, attribute)

        if ui_type == DATE_INPUT:
            input_content += input(form_model_name, DATE_INPUT_TPL, attribute)

    if form_type is CREATE_FORM:
        base_content = base_content.replace(CREATE_FORM_INPUTS_MARKER, input_content)
    elif form_type is UPDATE_FORM:
        base_content = base_content.replace(UPDATE_FORM_INPUTS_MARKER, input_content)

    # base_content = BeautifulSoup(base_content, 'html.parser').prettify()
    # base_content = base_content.replace('required=""', 'required')
    # print(base_content)

    return base_content
# Make update form
def make_search_form(model):
    form_model_name = SEARCH_FORM_MODEL_NAME_PREFIX + model[NAME_KEY]

    # Input content
    input_content = ""
    for attribute in model[ATTRIBUTES_KEY]:
        ui_type = attribute[UI_TYPE_KEY]

        if ui_type == TEXT_INPUT:
            input_content += search_input(form_model_name, TEXT_INPUT_TPL, attribute)

        if ui_type == EMAIL_INPUT:
            input_content += search_input(form_model_name, EMAIL_INPUT_TPL, attribute)

        if ui_type == NUMERIC_INPUT:
            input_content += search_input(form_model_name, NUMERIC_INPUT_TPL, attribute)

        if ui_type == CHECKBOX_INPUT:
            input_content += search_input(form_model_name, CHECKBOX_INPUT_TPL, attribute)

        if ui_type == RADIO_INPUT:
            input_content += search_input(form_model_name, RADIO_INPUT_TPL, attribute)

        if ui_type == TEXTAREA_INPUT:
            input_content += search_input(form_model_name, TEXTAREA_INPUT_TPL, attribute)

        if ui_type == DATALIST_INPUT:
            input_content += search_input(form_model_name, DATALIST_INPUT_TPL, attribute)

        if ui_type == SELECTION_INPUT:
            input_content += search_input(form_model_name, SELECTION_INPUT_TPL, attribute)

        if ui_type == DATE_INPUT:
            input_content += search_input(form_model_name, DATE_INPUT_TPL, attribute)

        return input_content

def make_listing_table(model):
    table_headers = ""
    table_data = ""
    render_markers = [
        TABLE_TITLE_MARKER,
        TABLE_SEARCH_QUICK_BOX_PLACEHOLDER_MARKER,
        UNCAPITALSED_MODEL_NAME_MARKER,
        TABLE_ADD_ITEM_TITLE_MARKER,
        TABLE_SEARCH_FIELDS_MARKER,
        MODEL_NAME_MARKER,
        TABLE_DATA_MARKER,
        TABLE_HEADERS_MARKER,
        SNAKE_CASE_MODEL_NAME_MARKER,
        MODEL_DISPLAY_NAME_MARKER
    ]

    table_title = TABLE_TITLE_PREFIX + " " + model[DISPLAY_NAME_KEY]
    table_search_quick_box_placeholder = TABLE_SEARCH_QUICK_BOX_PLACEHOLDER
    uncapitalsed_model_name = uncapitalise_txt(model[NAME_KEY])
    table_add_item_title = TABLE_ADD_ITEM_TITLE_PREFIX + " " + model[DISPLAY_NAME_KEY]
    model_name = model[NAME_KEY]
    snake_case_model_name = to_snake_case(model_name)
    model_display_name = model[DISPLAY_NAME_KEY]
    table_search_fields = make_search_form(model)

    for attribute in model[ATTRIBUTES_KEY]:
        table_data += "<td>{{" + uncapitalsed_model_name + "." + attribute[NAME_KEY] + "}}</td>"
        table_headers += "<th>" + attribute[DISPLAY_NAME_KEY] + "</th>"

    code_contents = {
        TABLE_TITLE_MARKER: table_title,
        TABLE_SEARCH_QUICK_BOX_PLACEHOLDER_MARKER: table_search_quick_box_placeholder,
        UNCAPITALSED_MODEL_NAME_MARKER: uncapitalsed_model_name,
        TABLE_ADD_ITEM_TITLE_MARKER: table_add_item_title,
        TABLE_SEARCH_FIELDS_MARKER: table_search_fields,
        MODEL_NAME_MARKER: model_name,
        TABLE_DATA_MARKER: table_data,
        TABLE_HEADERS_MARKER: table_headers,
        SNAKE_CASE_MODEL_NAME_MARKER: snake_case_model_name,
        MODEL_DISPLAY_NAME_MARKER: model_display_name
    }

    # Read in the file
    with open(TABLE_LISTING_TPL, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, code_contents[render_marker])

    # file_data = BeautifulSoup(file_data, 'html.parser').prettify()
    # file_data = file_data.replace('required=""', 'required')
    # print(file_data)

    return file_data

import json
data_path = BASE_ROOT + '/frontend/tmpModel.json'
import ast
with open(data_path) as fd:
    content = fd.read()
    json_data = ast.literal_eval(content)
    json_data = json.dumps(json_data)
    data = json.loads(json_data)

    # Traverse models
    for model in data:
        # print(make_form(CREATE_FORM, model))
        #make_form(UPDATE_FORM, model)
        print(make_listing_table(model))
        # # Properties of the current model
        # current_model_name = model[NAME_MARKER]
        #
        # # Attributes of the current model
        # attributes = model[ATTRIBUTES_MARKER]
        # for attribute in attributes:
        #     # Constraints of the attribute
        #     constraints = attribute[CONSTRAINTS_MARKER]
        #     max_constraint = constraints[MAX_MARKER]
        #     min_constraint = constraints[MIN_MARKER]
        #     pattern_constraint = constraints[PATTERN_MARKER]
        #     required_constraint = constraints[REQUIRED_MARKER]
        #     nullable_constraint = constraints[NULLABLE_MARKER]
        #     numeric_key_constraint = constraints[NUMERIC_MARKER]
        #     unique_key_constraint = constraints[UNIQUE_MARKER]
        #     email_constraint = constraints[EMAIL_MARKER]


            # Make update form

            # Make create form
            # Make listing tables
