# Copy function
import shutil, errno
def copy(src, dst):
    try:
        if os.path.exists(dst):
            # return
            shutil.rmtree(dst)
        shutil.copytree(src, dst)
    except OSError as exc: # python >2.5
        if exc.errno == errno.ENOTDIR:
            shutil.copy(src, dst)
        else: raise

from codepen_consts import *



def input_validation(constraints):
    ngmessages = ""
    validation = ""

    {"max":"500","min":"","pattern":"","required":"true","nullable":"","numeric":"","unique":"","email":""}

    max_constraint = constraints[MAX_KEY]
    if int(max_constraint) > 0:
        validation += "ng-maxlength='" + max_constraint + "' "
        ngmessages += ""

    min_constraint = constraints[MIN_KEY]
    if int(min_constraint) > 0:
        validation += "ng-minlength='" + min_constraint + "' "
            min_constraint = constraints[MIN_KEY]

    pattern_constraint = constraints[PATTERN_KEY]
    if pattern_constraint is not "":
        validation += "ng-pattern='" + pattern_constraint + "' "

    required_constraint = constraints[REQUIRED_KEY]
    if required_constraint is "True":
        validaton += "required" + " "

    numeric_constraint = constraints[NUMERIC_KEY]
    if numeric_constaint is "True":
        ng-messages += ""

    email_constraint = constraints[EMAIL_KEY]
    if email_constraint is "True":
        ngmessages +=""

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
