#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf8')

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

    included_js_files = ""
    included_modules = ""
    included_sidebar_links = ""

    for model_data in data:
        model = Model(model_data)
        model_name_in_camel = to_camel_from_pascal(model.name)
        model_name_in_snake = to_snake_from_pascal(model.name)

        model_dst_path = APP_BASE_PATH + model_name_in_snake + "s"
        make_dir(model_dst_path)

        config_route_js_dst_path = model_dst_path + "/" + \
                CONFIG_ROUTE_JS_DST_FILE_NAME
        write_to_file(config_route_js_dst_path, render_config_route_js(model))

        items_js_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEMS_JS_DST_FILE_NAME_SUFFIX
        write_to_file(items_js_dst_path, render_items_js(model))

        items_module_js_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEM_MODULE_JS_DST_FILE_NAME_SUFFIX
        write_to_file(items_module_js_dst_path, render_items_module_js(model))

        item_model_js_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEM_MODEL_JS_DST_FILE_NAME_SUFFIX
        write_to_file(item_model_js_dst_path, render_item_model_js(model))

        item_service_js_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEM_SERVICE_JS_DST_FILE_NAME_SUFFIX
        write_to_file(item_service_js_dst_path, render_item_service_js(model))

        items_html_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEMS_HTML_DST_FILE_NAME_SUFFIX
        write_to_file(items_html_dst_path, render_items_html(model))

        item_create_modal_html_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEM_CREATE_MODAL_HTML_DST_FILE_NAME_SUFFIX
        write_to_file(item_create_modal_html_dst_path, \
            render_item_create_modal_html(model))

        item_update_modal_html_dst_path = model_dst_path + "/" + \
                model_name_in_snake + \
                        ITEM_UPDATE_MODAL_HTML_DST_FILE_NAME_SUFFIX
        write_to_file(item_update_modal_html_dst_path, \
            render_item_update_modal_html(model))

        included_modules += '"app.' + model_name_in_camel + 's",\n'

        included_js_files += "<script src='/app/" + model_name_in_snake + "s/" + \
            model_name_in_snake + ITEM_MODULE_JS_DST_FILE_NAME_SUFFIX + "'></script>\n"

        included_js_files += "<script src='/app/" + model_name_in_snake + "s/" + \
            CONFIG_ROUTE_JS_DST_FILE_NAME + "'></script>\n"

        included_js_files += "<script src='/app/" + model_name_in_snake + "s/" + \
            model_name_in_snake + ITEMS_JS_DST_FILE_NAME_SUFFIX + "'></script>\n"

        included_js_files += "<script src='/app/" + model_name_in_snake + "s/" + \
            model_name_in_snake + ITEM_MODEL_JS_DST_FILE_NAME_SUFFIX + "'></script>\n"

        included_js_files += "<script src='/app/" +  model_name_in_snake + "s/" + \
            model_name_in_snake + ITEM_SERVICE_JS_DST_FILE_NAME_SUFFIX + "'></script>\n\n"

        included_sidebar_links += '<li><a href="#/' + model_name_in_snake + \
            's"><i class="fa fa-connectdevelop"></i><span>' + \
                model.display_name + '</span></a></li>\n'

    search_and_replace_with_write(APP_MODULE_PATH, included_modules, "")
    search_and_replace_with_write(SIDE_BAR_PATH, included_sidebar_links, "")
    search_and_replace_with_write(ADMIN_PATH, included_js_files, "")

    search_and_replace_with_write(APP_MODULE_PATH, INCLUDED_MODULES_MARKER,\
        included_modules + INCLUDED_MODULES_MARKER)
    search_and_replace_with_write(SIDE_BAR_PATH, INCLUDED_SIDEBAR_LINKS,\
        included_sidebar_links + INCLUDED_SIDEBAR_LINKS)
    search_and_replace_with_write(ADMIN_PATH, INCLUDED_JS_FILES,\
        included_js_files + INCLUDED_JS_FILES)
