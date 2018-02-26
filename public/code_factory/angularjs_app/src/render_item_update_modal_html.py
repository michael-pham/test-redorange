from lib.helper_functions import *
from lib.renderer import *
from constants import *

def _render_ngmessages_html(input_label, constraints):
    ngmessages = []
    validation = ""

    max_constraint = constraints[MAX_KEY]
    if len(max_constraint) > 0 and int(max_constraint) > 0:
        validation += "ng-maxlength='" + max_constraint + "' "
        data = dict()
        data[TPL_PATH_KEY] = PATH_BASE + _MAX_NGMESSAGE_HTML_TPL
        data[INPUT_LABEL_KEY] = input_label
        data[MAX_NGMESSAGE_VALUE_KEY] = max_constraint
        ngmessages.append(data)

    min_constraint = constraints[MIN_KEY]
    if len(min_constraint) > 0 and int(min_constraint) > 0:
        validation += "ng-minlength='" + min_constraint + "' "
        data = dict()
        data[TPL_PATH_KEY] = PATH_BASE + _MIN_NGMESSAGE_HTML_TPL
        data[INPUT_LABEL_KEY] = input_label
        data[MIN_NGMESSAGE_VALUE_KEY] = min_constraint
        ngmessages.append(data)

    pattern_constraint = constraints[PATTERN_KEY]
    pattern_message = constraints[PATTERN_MESSAGE_KEY]
    if len(pattern_constraint) > 0 :
        validation += "ng-pattern='" + pattern_constraint + "' "

        data = dict()
        data[TPL_PATH_KEY] = PATH_BASE + _PATTERN_NGMESSAGE_HTML_TPL
        data[PATTERN_NGMESSAGE_VALUE_KEY] = pattern_message
        ngmessages.append(data)

    required_constraint = constraints[REQUIRED_KEY]
    if required_constraint == "true":
        validation += "required" + " "
        data = dict()
        data[TPL_PATH_KEY] = PATH_BASE + _REQUIRED_NGMESSAGE_HTML_TPL
        data[INPUT_LABEL_KEY] = input_label
        ngmessages.append(data)

    numeric_constraint = constraints[NUMERIC_KEY]
    if numeric_constraint == "true":
        data = dict()
        data[TPL_PATH_KEY] = PATH_BASE + _NUMERIC_NGMESSAGE_HTML_TPL
        data[INPUT_LABEL_KEY] = input_label
        ngmessages.append(data)

    email_constraint = constraints[EMAIL_KEY]
    if email_constraint == "true":
        data = dict()
        data[TPL_PATH_KEY] = PATH_BASE + _EMAIL_NGMESSAGE_HTML_TPL
        ngmessages.append(data)

    return [ngmessages, validation]

def input(form_model_name, attribute):
    data = dict()
    data[INPUT_MODEL_NAME_KEY] = form_model_name
    data[INPUT_LABEL_KEY] = attribute.display_name
    data[INPUT_NAME_KEY] = attribute.name

    (data[INPUT_VALIDATION_NGMESSAGES_KEY], data[INPUT_VALIDATION_KEY]) \
        = _render_ngmessages_html(attribute.display_name, attribute.constraints)

    return data

def _render_inputs_html(model):
    inputs = []
    form_model_name = "old" + model.name

    for attribute in model.attributes:
        if attribute.ui_type == TEXT_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _TEXT_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == EMAIL_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _EMAIL_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == NUMERIC_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _NUMERIC_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == CHECKBOX_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _CHECKBOX_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == RADIO_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _RADIO_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == TEXTAREA_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _TEXTAREA_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == DATALIST_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _DATALIST_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == SELECTION_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _SELECTION_INPUT_HTML_TPL
            inputs.append(data)

        if attribute.ui_type == DATE_INPUT:
            data = input(form_model_name, attribute)
            data[TPL_PATH_KEY] = PATH_BASE + _DATE_INPUT_HTML_TPL
            inputs.append(data)

    return inputs

def render_item_update_modal_html(model):
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_UPDATE_MODAL_HTML_TPL
    data[ITEM_DISPLAY_NAME_KEY] = model.item_display_name
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name
    data[_INPUTS_HTML_KEY] = _render_inputs_html(model)

    return render(data)
