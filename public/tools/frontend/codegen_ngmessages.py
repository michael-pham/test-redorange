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

# MAX_NGMESSSAGE_TPL = './ui_components/max_ngmessage.html'
# MIN_NGMESSSAGE_TPL = './ui_components/min_ngmessage.html'
# NUMERIC_NGMESSSAGE_TPL = './ui_components/numeric_ngmessage.html'
# PATTERN_NGMESSSAGE_TPL = './ui_components/pattern_ngmessage.html'
# REQUIRED_NGMESSSAGE_TPL = './ui_components/required_ngmessage.html'
# DATE_NGMESSSAGE_TPL = './ui_components/date_ngmessage.html'
# EMAIL_NGMESSSAGE_TPL = './ui_components/email_ngmessage.html
def max_ngmessage():
    # Read in the file
    with open(MAX_NGMESSSAGE_TPL, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, code_contents[render_marker])

    return file_data

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
