#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
sys.path.append('../')

from codegen_consts import *
from codegen_utils import *
from codegen_inputs import *
from codegen_ui_model_js_consts import *
from codegen_utils import *

def make_model_js(model):
    model_js_tpl = MODEL_JS_TPL
    render_markers = [UNCAPITALISED_MODEL_NAME_MARKER, \
        SNAKE_CASE_MODEL_NAME_MARKER, MODEL_DISPLAY_NAME_MARKER, \
            MANY_TO_ONE_RELATIONSHIP_MARKER]

    many_to_one_relationship = ""
    for relationship in model[RELATIONSHIPS_KEY]:
        if relationship[TYPE_KEY] == "many-to-one":
            foreign_model_name = relationship[WITH_KEY]
            render_markers = [MANY_TO_ONE_LIST_API_MARKER, \
                MANY_TO_ONE_LIST_NAME_MARKER]
            sub_code_contents = {
                MANY_TO_ONE_LIST_NAME_MARKER: uncapitalise_txt(foreign_model_name),
                MANY_TO_ONE_LIST_API_MARKER: API_BASE_URL + \
                    to_snake_case(foreign_model_name) + "s"
            }

            many_to_one_relationship += \
                render(MANY_TO_ONE_MODEL_ITEM_TPL, render_markers, \
                    sub_code_contents) + ","

    code_contents = {
        UNCAPITALISED_MODEL_NAME_MARKER:  uncapitalise_txt(model[NAME_KEY]),
        SNAKE_CASE_MODEL_NAME_MARKER: to_snake_case(model[NAME_KEY]),
        MODEL_DISPLAY_NAME_MARKER: model[DISPLAY_NAME_KEY],
        MANY_TO_ONE_RELATIONSHIP_MARKER: many_to_one_relationship
    }

    return render(model_js_tpl, render_markers, code_contents)

# Make update form
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
        print(make_model_js(model))
        #make_form(UPDATE_FORM, model)
        #make_listing_table(model)
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
