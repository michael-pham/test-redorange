# -*- coding: utf-8 -*-
# CONSTANTS - FOR MODEL-JS
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
sys.path.append('../')
from codegen_consts import *

UNCAPITALISED_MODEL_NAME_MARKER = "{{uncapitalised_model_name}}"
SNAKE_CASE_MODEL_NAME_MARKER = "{{snake_case_model_name}}"
MODEL_DISPLAY_NAME_MARKER = "{{model_display_name}}"

CONTROLLER_TPL = BASE_URL + '/controller_js/controller_tpl.js'
MODULE_TPL = BASE_URL + '/controller_js/module_tpl.js'
ROUTE_CONFIG_TPL = BASE_URL + '/controller_js/config.route.js'
