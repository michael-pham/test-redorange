# -*- coding: utf-8 -*-

# PATH_BASE = '/home/hbk/workspace/workspace/laravel-angularjs-creator/public/code_factory/'
ROOT = '/home/hbkhanh/workspace/laravel-angularjs-creator/'
PATH_BASE = '/home/hbkhanh/workspace/laravel-angularjs-creator/public/code_factory/'
TPL_PATH_KEY = "tpl_path"

APP_BASE_PATH = "/home/hbkhanh/workspace/laravel-angularjs-creator/public/app/"
APP_MODULE_PATH = APP_BASE_PATH + 'app.module.js'
SIDE_BAR_PATH = APP_BASE_PATH + 'layout/sidebar.html'
ADMIN_PATH = ROOT + "resources/views/admin.blade.php"

INCLUDED_MODULES_MARKER = "/* add_module */"
INCLUDED_SIDEBAR_LINKS = "<!-- project_links -->"
INCLUDED_JS_FILES = "<!-- modeljs -->"

CONFIG_ROUTE_JS_DST_FILE_NAME = "config.route.js"
ITEMS_JS_DST_FILE_NAME_SUFFIX = "s.js"
ITEM_MODULE_JS_DST_FILE_NAME_SUFFIX = "s.module.js"
ITEM_MODEL_JS_DST_FILE_NAME_SUFFIX= "_model.js"
ITEM_SERVICE_JS_DST_FILE_NAME_SUFFIX= "_service.js"
ITEMS_HTML_DST_FILE_NAME_SUFFIX= "s.html"
ITEM_CREATE_MODAL_HTML_DST_FILE_NAME_SUFFIX= "_create_modal.html"
ITEM_UPDATE_MODAL_HTML_DST_FILE_NAME_SUFFIX = "_update_modal.html"

ITEM_MODULE_JS_TPL = "angularjs_app/templates/items.module.js/items.module.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"

CONFIG_ROUTE_JS_TPL = "angularjs_app/templates/config.route.js/config.route.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ITEM_NAME_IN_SNAKE_CASE_KEY = "{{item_name_in_snake_case}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"

ITEM_JS_TPL = "angularjs_app/templates/items.js/items.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"

ITEM_SERVICE_JS_TPL = "angularjs_app/templates/item_service.js/item_service.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"
ITEM_FILTERING_ATTRIBUTES_KEY = "{{item_filtering_attributes}}"
PARAMETER_PROCESSING_KEY = "{{_parameter_processing}}"

ITEM_MODEL_JS_TPL = "angularjs_app/templates/item_model.js/item_model.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
DOMESTIC_ATTRIBUTES_KEY = "{{domestic_attributes}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"
ITEM_DISPLAY_NAME_KEY = "{{item_display_name}}"
ITEM_MANY_TO_ONE = "{{item_many_to_one}}"

_DATE_RANGE_PARAMS_TPL = "angularjs_app/templates/item_service.js/_parameter_processing/_date_range_param.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

NORMAL_PARAM_TPL = "angularjs_app/templates/item_service.js/_parameter_processing/_normal_param.js"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"
FILTERING_OPERATOR_KEY = "{{filtering_operator}}"

ITEMS_HTML_TPL = "angularjs_app/templates/items.html/items.html"
ITEM_DISPLAY_NAME_KEY = "{{item_display_name}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
TABLE_SORTABLE_THS_KEY = "{{_table_sortable_ths}}"
TABLE_SEARCH_TDS_KEY = "{{_table_search_tds}}"
TABLE_TDS_KEY = "{{_table_tds}}"

SORTABLE_TH_HTML_TPL = "angularjs_app/templates/items.html/_table_sortable_ths/_sortable_th.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"
ATTRIBUTE_DISPLAY_NAME_KEY = "{{attribute_display_name}}"

PLAIN_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_tds/_plain_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

LABEL_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_tds/_label_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

IMAGE_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_tds/_image_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

FILE_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_tds/_file_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

DATE_SEARCH_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_search_tds/_date_search_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

SELECTION_SEARCH_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_search_tds/_selection_search_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"
DEPENDENCY_IN_CAMEL_CASE_KEY = "{{dependency_in_camel_case}}"
DEPENDENCY_DISPLAY_ATTRIBUTE_KEY = "{{dependency_display_attribute}}"

PLAIN_SEARCH_TD_HTML_TPL = "angularjs_app/templates/items.html/_table_search_tds/_plain_search_td.html"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
ATTRIBUTE_NAME_KEY = "{{attribute_name}}"

ITEM_CREATE_MODAL_HTML_TPL = "angularjs_app/templates/item_create_modal.html/item_create_modal.html"
ITEM_DISPLAY_NAME_KEY = "{{item_display_name}}"
INPUTS_HTML_KEY = "{{_inputs_html}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"

ITEM_UPDATE_MODAL_HTML_TPL = "angularjs_app/templates/item_update_modal.html/item_update_modal.html"
ITEM_DISPLAY_NAME_KEY = "{{item_display_name}}"
INPUTS_HTML_KEY = "{{_inputs_html}}"
ITEM_NAME_IN_PASCAL_CASE_KEY = "{{item_name_in_pascal_case}}"

TEXT_INPUT = 'text_input'
EMAIL_INPUT = 'email_input'
DATALIST_INPUT = 'datalist_input'
FILE_INPUT = 'file_input'
TEXTAREA_INPUT = 'textarea_input'
CKEDITOR = 'ckeditor'
NUMERIC_INPUT = 'numeric_input'
CHECKBOX_INPUT = 'checkbox_input'
RADIO_INPUT = 'radio_input'
SELECTION_INPUT = 'selection_input'
DATE_INPUT = 'date_input'

TEXT_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_text_input.html"
SELECTION_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_selection_input.html"
CHECKBOX_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_checkbox_input.html"
DATALIST_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_datalist_input.html"
DATE_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_date_input.html"
EMAIL_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_email_input.html"
FILE_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_file_input.html"
NUMERIC_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_numeric_input.html"
RADIO_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_radio_input.html"
TEXTAREA_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_textarea_input.html"
CKEDITOR_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_ckeditor.html"
INPUT_LABEL_KEY = "{{input_label}}"
INPUT_NAME_KEY = "{{input_name}}"
ITEM_NAME_IN_CAMEL_CASE_KEY = "{{item_name_in_camel_case}}"
INPUT_VALIDATION_KEY = "{{input_validation}}"
INPUT_VALIDATION_NGMESSAGES_KEY = "{{input_validation_ngmessages}}"
SELECTION_ITEM_KEY = "{{selection_item}}"
SELECTION_ITEM_VALUE_KEY = "{{selection_item_value}}"
SELECTION_ITEM_DISPLAY_KEY = "{{selection_item_display}}"

MAX_NGMESSAGE_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_ngmessages.html/_max_ngmessage.html"
INPUT_LABEL_KEY = "{{input_label}}"
MAX_NGMESSAGE_VALUE_KEY = "{{max_ngmessage_value}}"

_MIN_NGMESSAGE_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_ngmessages.html/_min_ngmessage.html"
INPUT_LABEL_KEY = "{{input_label}}"
MIN_NGMESSAGE_VALUE_KEY = "{{min_ngmessage_value}}"

REQUIRED_NGMESSAGE_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_ngmessages.html/_required_ngmessage.html"
INPUT_LABEL_KEY = "{{input_label}}"

NUMERIC_NGMESSAGE_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_ngmessages.html/_numeric_ngmessage.html"
INPUT_LABEL_KEY = "{{input_label}}"

_EMAIL_NGMESSAGE_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_ngmessages.html/_email_ngmessage.html"

TEXT_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_text_input.html"
_EMAIL_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_email_input.html"
_NUMERIC_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_numeric_input.html"
_CHECKBOX_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_checkbox_input.html"
_RADIO_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_radio_input.html"
TEXTAREA_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_textarea_input.html"
_DATALIST_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_datalist_input.html"
_SELECTION_LIST_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_selection_input.html"
_DATE_LIST_INPUT_HTML_TPL = "angularjs_app/templates/item_create_modal.html/_inputs.html/_date_input.html"

INPUT_LABEL_KEY = "{{input_label}}"
INPUT_NAME_KEY = "{{input_name}}"
INPUT_MODEL_NAME_KEY = "{{input_model_name}}"
INPUT_VALIDATION_KEY = "{{input_validation}}"

INPUT_VALIDATION_NGMESSAGES_KEY = "{{input_validation_ngmessages}}"
