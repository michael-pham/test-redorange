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

    if len(max_constraint) > 0 and int(max_constraint) > 0:
        validation += "ng-maxlength='" + max_constraint + "' "
        render_markers = [INPUT_LABEL_MARKER, MAX_NGMESSAGE_VALUE_MARKER]
        code_contents = {INPUT_LABEL_MARKER: input_label, MAX_NGMESSAGE_VALUE_MARKER: max_constraint}
        ngmessages += ng_messages(MAX_NGMESSAGE_TPL, render_markers,
            code_contents)

    min_constraint = constraints[MIN_KEY]
    if len(min_constraint) > 0 and int(min_constraint) > 0:
        validation += "ng-minlength='" + min_constraint + "' "
        min_constraint = constraints[MIN_KEY]
        render_markers = [INPUT_LABEL_MARKER, MIN_NGMESSAGE_VALUE_MARKER]
        code_contents = {INPUT_LABEL_MARKER: input_label, MIN_NGMESSAGE_VALUE_MARKER: min_constraint}
        ngmessages += ng_messages(MIN_NGMESSAGE_TPL, render_markers,
            code_contents)

    pattern_constraint = constraints[PATTERN_KEY]
    pattern_message = constraints[PATTERN_MESSAGE_KEY]
    if len(pattern_constraint) > 0 :
        validation += "ng-pattern='" + pattern_constraint + "' "
        render_markers = [INPUT_LABEL_MARKER, PATTERN_NGMESSAGE_VALUE_MARKER]
        code_contents = {INPUT_LABEL_MARKER: input_label, PATTERN_NGMESSAGE_VALUE_MARKER: pattern_message}
        ngmessages += ng_messages(PATTERN_NGMESSAGE_TPL, render_markers,
            code_contents)

    required_constraint = constraints[REQUIRED_KEY]
    if required_constraint == "true":
        validation += "required" + " "
        render_markers = [INPUT_LABEL_MARKER]
        code_contents = {INPUT_LABEL_MARKER: input_label}
        ngmessages += ng_messages(REQUIRED_NGMESSAGE_TPL, render_markers,
            code_contents)

    numeric_constraint = constraints[NUMERIC_KEY]
    if numeric_constraint == "true":
        render_markers = [INPUT_LABEL_MARKER]
        code_contents = {INPUT_LABEL_MARKER: input_label}
        ngmessages += ng_messages(NUMERIC_NGMESSAGE_TPL, render_markers,
            code_contents)

    email_constraint = constraints[EMAIL_KEY]
    if email_constraint == "true":
        render_markers = []
        code_contents = {}
        ngmessages += ng_messages(EMAIL_NGMESSAGE_TPL, render_markers,
            code_contents)

    return [ngmessages, validation]

def input(form_model_name, input_tpl, attribute):
    render_markers = [INPUT_MODEL_NAME_MARKER, INPUT_LABEL_MARKER,
        INPUT_NAME_MARKER, INPUT_VALIDATION_MARKER,
            INPUT_VALIDATION_NGMESSAGES_MARKER]

    code_contents = dict()
    code_contents[INPUT_MODEL_NAME_MARKER] = form_model_name
    code_contents[INPUT_LABEL_MARKER] = attribute[DISPLAY_NAME_KEY]
    code_contents[INPUT_NAME_MARKER] = attribute[NAME_KEY]

    (code_contents[INPUT_VALIDATION_NGMESSAGES_MARKER], \
       code_contents[INPUT_VALIDATION_MARKER]) = \
            input_validation(attribute[DISPLAY_NAME_KEY], \
                attribute[CONSTRAINTS_KEY])

    # Read in the file
    with open(input_tpl, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, code_contents[render_marker])

    return file_data

def search_input(form_model_name, input_tpl, attribute):
    render_markers = [INPUT_MODEL_NAME_MARKER, INPUT_LABEL_MARKER,
        INPUT_NAME_MARKER, INPUT_VALIDATION_MARKER,
            INPUT_VALIDATION_NGMESSAGES_MARKER]

    code_contents = dict()
    code_contents[INPUT_MODEL_NAME_MARKER] = form_model_name
    code_contents[INPUT_LABEL_MARKER] = attribute[DISPLAY_NAME_KEY]
    code_contents[INPUT_NAME_MARKER] = attribute[NAME_KEY]

    (code_contents[INPUT_VALIDATION_NGMESSAGES_MARKER], \
       code_contents[INPUT_VALIDATION_MARKER]) = \
            input_validation(attribute[DISPLAY_NAME_KEY], \
                attribute[CONSTRAINTS_KEY])

    # Read in the file
    with open(input_tpl, 'r') as file :
      file_data = file.read()

    file_data = file_data.replace('12', '2')
    file_data = file_data.replace("<div class=\"row\">", '')
    file_data = file_data.replace('</div>', '', 1)

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, code_contents[render_marker])

    return file_data
