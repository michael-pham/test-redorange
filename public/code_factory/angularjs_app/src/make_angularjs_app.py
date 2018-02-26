#!/usr/bin/env python

# -*- coding: utf-8 -*-

from lib.helper_functions import *
from lib.automate import *
from data_model.attribute import *
from data_model.constraint import *
from data_model.model import *
from data_model.relationship import *
from constants import *

from render_config_route_js import *
from render_item_create_modal_html import *
from render_item_model_js import *
from render_item_service_js import *
from render_item_update_modal_html import *
from render_items_html import *
from render_items_js import *
from render_items_module_js import *

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
        # print(render_items_js(model))
        # print(render_items_module_js(model))
        # print(render_item_model_js(model))
        # print(render_item_service_js(model))
        # print(render_items_html(model))
        # print(render_item_create_modal_html(model))
        # print(render_item_update_modal_html(model))
