# -*- coding: utf-8 -*-

from lib.helper_functions import *
from data_model.* import *
from constants import *

def make(file_path, render_markers, code_contents):
    with open(file_path, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, \
            code_contents[render_marker])

    return file_data

def render(data):
    if type(data) is list:
        ret = ""
        for item in data:
            ret += render(item);

        return ret

    if type(data) is dict:
        data_keys = list(data.keys(model))

        for key in data_keys:
            if data[key] is list or data[key] is dict:
                data[key] = render(data[key])

        return make(data['tpl_path'], data_keys, data)

    return ""

path_base = '/home/hbkhanh/workspace/laravel-angularjs-creator/public/code_factory/'
def render_items_module_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_MODULE_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)

    return render(data)

def render_config_route_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + CONFIG_ROUTE_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name

    return render(data)

def render_items_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name

    return render(data)

def render_item_model_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_MODEL_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name
    data[ITEM_DISPLAY_NAME_KEY] = model.display_name
    data[DOMESTIC_ATTRIBUTES_KEY] = ""
    for attribute in model.attributes:
        data[DOMESTIC_ATTRIBUTES_KEY] += '"' + attribute.name + '",'

    return render(data)

def render_item_service_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_SERVICE_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name

    data[ITEM_FILTERING_ATTRIBUTES_KEY] = ""
    for attribute in model.attributes:
        if attribute.type == "datetime":
            data[ITEM_FILTERING_ATTRIBUTES_KEY] += \
                attribute.name + '_range: {startDate: "", endDate: ""},'
        else:
            data[ITEM_FILTERING_ATTRIBUTES_KEY] += \
                attribute.name + ': "",'

    data[_PARAMETER_PROCESSING_KEY] = []
    for attribute in model.attributes:
        subdata = dict()

        if attribute.type == "datetime":
            subdata[TPL_PATH_KEY] = PATH_BASE + _DATE_RANGE_PARAMS_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
        elif attribute.ui_type == "selection_input" or attribute.ui_type == \
            "datalist_input":

            subdata[TPL_PATH_KEY] = PATH_BASE + _NORMAL_PARAM_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
            subdata[FILTERING_OPERATOR_KEY] = 'eq'
        else:
            subdata[TPL_PATH_KEY] = PATH_BASE + _NORMAL_PARAM_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
            subdata[FILTERING_OPERATOR_KEY] = 'ct'

        data[_PARAMETER_PROCESSING_KEY].append(subdata)
        
    return render(data)

def render_items_html:
    return render(data)

def render_item_create_modal_html:
    return render(data)

def render_item_update_modal_html:
    return render(data)

data_path = '../data/models.json'
import ast
import json
with open(data_path) as fd:
    content = fd.read()
    json_data = ast.literal_eval(content)
    json_data = json.dumps(json_data)
    data = json.loads(json_data)

    for model_data in data:
        model = Model(model_data)
        print(render_config_route_js(model))
        print(render_items_js(model))
        print(render_items_module_js(model))
        print(render_item_model_js(model))
        print(render_item_service_js(model))
        print(render_items_html(model))
        print(render_item_create_modal_html(model))
        print(render_item_update_modal_html(model))
