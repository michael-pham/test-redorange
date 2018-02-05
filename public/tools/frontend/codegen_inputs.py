from codegen_consts import *

def ng_messages(ngmessage_tpl, render_markers, code_contents):
    with open(ngmessage_tpl, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, \
            code_contents[render_marker])

    return file_data

def input_validation(input_label, constraints):
    ngmessages = ""
    validation = ""

    max_constraint = constraints[MAX_KEY]
    if int(max_constraint) > 0:
        validation += "ng-maxlength='" + max_constraint + "' "
        render_markers = [INPUT_LABEL, MAX_NGMESSSAGE_VALUE]
        code_contents = {INPUT_LABEL: input_label, MAX_NGMESSAGE_VALUE:  max_constraint}
        ngmessages += ng_messages(MAX_NGMESSSAGE_TPL, render_markers,
            code_contents)

    min_constraint = constraints[MIN_KEY]
    if int(min_constraint) > 0:
        validation += "ng-minlength='" + min_constraint + "' "
            min_constraint = constraints[MIN_KEY]
        render_markers = [INPUT_LABEL, MIN_NGMESSSAGE_VALUE]
        code_contents = {INPUT_LABEL: input_label, MIN_NGMESSAGE_VALUE: min_constraint}
        ngmessages += ng_messages(MIN_NGMESSSAGE_TPL, render_markers,
            code_contents)

    pattern_constraint = constraints[PATTERN_KEY]
    pattern_message = constraints[PATTERN_MESSAGE_KEY]
    if pattern_constraint is not "":
        validation += "ng-pattern='" + pattern_constraint + "' "
        render_markers = [INPUT_LABEL, PATTERN_NGMESSAGE_VALUE]
        code_contents = {INPUT_LABEL: input_label, PATTERN_NGMESSAGE_VALUE: pattern_message}
        ngmessages += ng_messages(PATTERN_NGMESSSAGE_TPL, render_markers,
            code_contents)

    required_constraint = constraints[REQUIRED_KEY]
    if required_constraint is "True":
        validaton += "required" + " "
        render_markers = [INPUT_LABEL]
        code_contents = {INPUT_LABEL: input_label}
        ngmessages += ng_messages(PATTERN_NGMESSSAGE_TPL, render_markers,
            code_contents)

    numeric_constraint = constraints[NUMERIC_KEY]
    if numeric_constaint is "True":
        render_markers = [INPUT_LABEL]
        code_contents = {INPUT_LABEL: input_label}
        ngmessages += ng_messages(NUMERIC_NGMESSSAGE_TPL, render_markers,
            code_contents)

    email_constraint = constraints[EMAIL_KEY]
    if email_constraint is "True":
        render_markers = []
        code_contents = {}
        ngmessages += ng_messages(EMAIL_NGMESSSAGE_TPL, render_markers,
            code_contents)

    return [ngmessages, validation]

def text_input(form_model_name, attribute):

    TEXT_INPUT_TMPL = 'text_input.html'
    TEXT_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
    TEXT_INPUT_LABEL_MARKER = "{{input_label}}"
    TEXT_INPUT_NAME_MARKER = "{{input_name}}"
    TEXT_INPUT_VALIDATION_MARKER = "{{input_validation}}"
    TEXT_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

    code_contents = dict()
    code_contents[INPUT_LABEL_MARKER] = attribute[DISPLAY_NAME_KEY]
    code_contents[INPUT_NAME_MARKER] = attribute[NAME_KEY]

    constraints = attribute[CONSTRAINTS_KEY]

    # # Properties of the current model
    # current_model_name = model[NAME_KEY]
    #
    # # Attributes of the current model
    # attributes = model[ATTRIBUTES_KEY]
    # for attribute in attributes:
    #     # Constraints of the attribute
    #     ui_type = attributes[UI_TYPE]


    render_markers = [DISPLAY_NAME_MARKER, MODEL_FORM_NAME_MARKER, \
        INPUT_ATTRIBUTE_NAME_MARKER, VALIDATION_MARKER, \
            VALIDATION_NGMESSAGES_MARKER]

    # Read in the file
    with open(TEXT_INPUT_TMPL, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, code_contents[render_marker])

    return file_data

def numeric_input():
    render_markers = [DISPLAY_NAME_MARKER, MODEL_FORM_NAME_MARKER, \
        INPUT_ATTRIBUTE_NAME_MARKER, VALIDATION_MARKER, \
            VALIDATION_NGMESSAGES_MARKER]
    # Read in the file
    with open(NUMERIC_INPUT_TMPL, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, codes[render_marker])

    return file_data
