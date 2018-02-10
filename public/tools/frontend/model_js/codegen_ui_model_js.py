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

def make_many_to_one_items(model, model_dict):
    ret = ""
    for relationship in model[RELATIONSHIPS_KEY]:
        if relationship[TYPE_KEY] == 'many-to-one':
            foreign_model_name = relationship[WITH_KEY]
            render_markers = [MANY_TO_ONE_LIST_NAME_MARKER, MANY_TO_ONE_LIST_API_MARKER]
            code_contents = {
                MANY_TO_ONE_LIST_NAME_MARKER: uncapitalise_txt(foreign_model_name),
                MANY_TO_ONE_LIST_API_MARKER: to_snake_case(foreign_model_name)
            }
            ret += render(MANY_TO_ONE_MODEL_ITEM_TPL, render_markers, code_contents)

    return ret

# Helper
def make_one_to_many_item(model, model_dict):
    render_markers = [DOMESTIC_MARKER, ONE_TO_MANY_LIST_API_MARKER, \
        ONE_TO_MANY_LIST_NAME_MARKER, MANY_TO_ONE_RELATIONSHIP_MARKER,
            ONE_TO_MANY_RELATIONSHIP_MARKER]

    domestic_attributes = ""
    for attribute in model[ATTRIBUTES_KEY]:
        domestic_attributes += attribute[NAME_KEY] + ", "

    one_to_many_list_api = to_snake_case(model[NAME_KEY])
    one_to_many_list_name = uncapitalise_txt(model[NAME_KEY])

    many_to_one_relationship = make_many_to_one_items(model, model_dict)

    one_to_many_relationship = ""
    for relationship in model[RELATIONSHIPS_KEY]:
        if relationship[TYPE_KEY] == "one-to-many":
            foreign_model_name = relationship[WITH_KEY]
            try:
                foreign_model = model_dict[foreign_model_name]
                one_to_many_relationship += make_one_to_many_item(foreign_model,
                    model_dict)
            except:
                print(foreign_model_name + " not found")

    code_contents = {
        DOMESTIC_MARKER: domestic_attributes,
        ONE_TO_MANY_LIST_API_MARKER: one_to_many_list_api,
        ONE_TO_MANY_LIST_NAME_MARKER: one_to_many_list_name,
        MANY_TO_ONE_RELATIONSHIP_MARKER: many_to_one_relationship,
        ONE_TO_MANY_RELATIONSHIP_MARKER: one_to_many_relationship
    }

    return render(ONE_TO_MANY_MODEL_ITEM_TPL, render_markers, code_contents)

def make_model_js(model, model_dict):
    many_to_one_relationship = make_many_to_one_items(model, model_dict)
    one_to_many_relationship = ""
    for relationship in model[RELATIONSHIPS_KEY]:
        if relationship[TYPE_KEY] == "one-to-many":
            foreign_model_name = relationship[WITH_KEY]
            # try:
            foreign_model = model_dict[foreign_model_name]
            one_to_many_relationship += make_one_to_many_item(foreign_model, model_dict)
            # except:
            #     print(foreign_model_name + " not found")

    model_js_tpl = MODEL_JS_TPL
    domestic_attributes = ""
    for attribute in model[ATTRIBUTES_KEY]:
        domestic_attributes += attribute[NAME_KEY] + ", "

    render_markers = [DOMESTIC_MARKER, UNCAPITALISED_MODEL_NAME_MARKER, \
        SNAKE_CASE_MODEL_NAME_MARKER, MODEL_DISPLAY_NAME_MARKER, \
            MANY_TO_ONE_RELATIONSHIP_MARKER, ONE_TO_MANY_RELATIONSHIP_MARKER]

    code_contents = {
        DOMESTIC_MARKER: domestic_attributes,
        UNCAPITALISED_MODEL_NAME_MARKER:  uncapitalise_txt(model[NAME_KEY]),
        SNAKE_CASE_MODEL_NAME_MARKER: to_snake_case(model[NAME_KEY]),
        MODEL_DISPLAY_NAME_MARKER: model[DISPLAY_NAME_KEY],
        MANY_TO_ONE_RELATIONSHIP_MARKER: many_to_one_relationship,
        ONE_TO_MANY_RELATIONSHIP_MARKER: one_to_many_relationship
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

    model_dict = dict()
    for model in data:
        model_dict[model[NAME_KEY]] = model

    # Traverse models
    for model in data:
        print(make_model_js(model, model_dict))
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
