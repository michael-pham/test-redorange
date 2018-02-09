# -*- coding: utf-8 -*-
# CONSTANTS - FOR MODEL-JS
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
sys.path.append('../')
from codegen_consts import *

MODEL_JS_TPL = BASE_URL + '/model_js/model_tpl.js'
MANY_TO_ONE_MODEL_ITEM_TPL = BASE_URL + '/model_js/many_to_one_model_item.txt'

UNCAPITALISED_MODEL_NAME_MARKER = "{{uncapitalised_model_name}}"
SNAKE_CASE_MODEL_NAME_MARKER = "{{snake_case_model_name}}"
MODEL_DISPLAY_NAME_MARKER = "{{model_display_name}}"
MANY_TO_ONE_RELATIONSHIP_MARKER = "{{many_to_one_relationship}}"


MANY_TO_ONE_LIST_NAME_MARKER = '{{many_to_one_list_name}}'
MANY_TO_ONE_LIST_API_MARKER = '{{many_to_one_list_api}}'
