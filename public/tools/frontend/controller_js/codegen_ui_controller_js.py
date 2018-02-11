#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
# sys.path.append('../')

from codegen_consts import *
from codegen_utils import *
# from codegen_inputs import *
from codegen_ui_controller_consts import *
from codegen_utils import *

def make_route_config(model):
    render_markers = [
        SNAKE_CASE_MODEL_NAME_MARKER, UNCAPITALISED_MODEL_NAME_MARKER
    ]

    code_contents = {
        SNAKE_CASE_MODEL_NAME_MARKER: to_snake_case(model[NAME_KEY]),
        UNCAPITALISED_MODEL_NAME_MARKER: uncapitalise_txt(model[NAME_KEY])
    }

    return render(ROUTE_CONFIG_TPL, render_markers, code_contents)

def make_controller(model):
    render_markers = [UNCAPITALISED_MODEL_NAME_MARKER, MODEL_NAME_MARKER]
    uncapitalised_model_name = uncapitalise_txt(model[NAME_KEY])

    code_contents = {
        UNCAPITALISED_MODEL_NAME_MARKER: uncapitalised_model_name,
        MODEL_NAME_MARKER: model[NAME_KEY]
    }

    return render(CONTROLLER_TPL, render_markers, code_contents)

def make_module(model):
    render_markers = [UNCAPITALISED_MODEL_NAME_MARKER]
    uncapitalised_model_name = uncapitalise_txt(model[NAME_KEY])

    code_contents = {
        UNCAPITALISED_MODEL_NAME_MARKER: uncapitalised_model_name
    }

    return render(MODULE_TPL, render_markers, code_contents)

# Make update form
import json
data_path = BASE_ROOT + '/models.json'
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
        directory = ROOT + '/public/app/' + to_snake_case(model[NAME_KEY]) + 's'
        make_dir(directory)

        module_path = directory + '/' + to_snake_case(model[NAME_KEY]) + 's.module.js'
        write_to_file(module_path, make_module(model))

        route_config_path = directory + '/config.route.js'
        write_to_file(route_config_path, make_route_config(model))

        controller_path = directory + '/' + to_snake_case(model[NAME_KEY]) + 's.js'
        write_to_file(controller_path, make_controller(model))

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
