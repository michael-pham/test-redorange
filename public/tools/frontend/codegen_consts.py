# -*- coding: utf-8 -*-
# CONSTANTS
DATA_PATH = './hello.json'
NAME_KEY = 'name'
DISPLAY_NAME_KEY = 'display_name'
ATTRIBUTES_KEY = 'attributes'
CONSTRAINTS_KEY = 'constraints'
MAX_KEY = 'max'
MIN_KEY = 'min'
PATTERN_KEY = 'pattern'
PATTERN_MESSAGE_KEY = "pattern_message"
REQUIRED_KEY = 'required'
NULLABLE_KEY = 'nullable'
NUMERIC_KEY = 'numeric'
UNIQUE_KEY = 'unique'
EMAIL_KEY = 'email'
UI_TYPE_KEY = 'ui_type'

# Form input types
TEXT_INPUT = 'text_input'
SELECTION_INPUT = 'selection_input'
RADIO_INPUT = 'radio_input'
DATALIST_INPUT = 'datalist_input'
CHECKBOX_INPUT = 'checkbox_input'
DATE_INPUT = 'date_input'
NUMERIC_INPUT = 'numeric_input'
TEXTAREA_INPUT = 'textarea_input'

SELECTION_INPUT_TPL = 'selection_input.html'
RADIO_INPUT_TPL = 'radio_input.html'
DATALIST_INPUT_TPL = 'datalist_input.html'
CHECKBOX_INPUT_TPL = 'checkbox_input.html'
DATE_INPUT_TPL = 'date_input.html'
NUMERIC_INPUT_TPL = 'numeric_input.html'
TEXTAREA_INPUT_TPL = 'textarea_input.html'

# Create form
CREATE_FORM_URL = './ui_components/create_modal.html'
CREATE_FORM_TITLE_PREFIX = "Thêm mới"
CREATE_FORM_TITLE_MARKER = "{{create_modal_title}}"
CREATE_FORM_INPUTS_MARKER = "{{create_modal_inputs}}"


# Common
INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
INPUT_NAME_MARKER = "{{input_name}}"
INPUT_LABEL_MARKER = "{{input_label}}"
INPUT_VALIDATION_MARKER = "{{input_validation}}"
INPUT_VALIDATION_NGMESSAGES_MARKER = "{{input_validation_ngmessages}}"

CREATE_FORM = 'create form'
UPDATEE_FORM = 'update form'
CREATE_FORM_MODEL_NAME_PREFIX = "new"
UPDATE_FORM_MODEL_NAME_PREFIX = "old"

# Text input
TEXT_INPUT_TPL = './ui_components/text_input.html'
TEXT_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
TEXT_INPUT_LABEL_MARKER = "{{input_label}}"
TEXT_INPUT_NAME_MARKER = "{{input_name}}"
TEXT_INPUT_VALIDATION_MARKER = "{{input_validation}}"
TEXT_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Numeric input
NUMERIC_INPUT_TPL = './ui_components/numeric_input.html'
NUMERIC_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
NUMERIC_INPUT_LABEL_MARKER = "{{input_label}}"
NUMERIC_INPUT_NAME_MARKER = "{{input_name}}"
NUMERIC_INPUT_VALIDATION_MARKER = "{{input_validation}}"
NUMERIC_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Checkbox input
CHECKBOX_INPUT_TPL = './ui_components/checkbox_input.html'
CHECKBOX_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
CHECKBOX_INPUT_LABEL_MARKER = "{{input_label}}"
CHECKBOX_INPUT_NAME_MARKER = "{{input_name}}"
CHECKBOX_INPUT_VALIDATION_MARKER = "{{input_validation}}"
CHECKBOX_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Datalist input
DATALIST_INPUT_TPL = './ui_components/datalist_input.html'
DATALIST_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
DATALIST_INPUT_LABEL_MARKER = "{{input_label}}"
DATALIST_INPUT_NAME_MARKER = "{{input_name}}"
DATALIST_INPUT_VALIDATION_MARKER = "{{input_validation}}"
DATALIST_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Radio input
RADIO_INPUT_TPL = './ui_components/radio_input.html'
RADIO_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
RADIO_INPUT_LABEL_MARKER = "{{input_label}}"
RADIO_INPUT_NAME_MARKER = "{{input_name}}"
RADIO_INPUT_VALIDATION_MARKER = "{{input_validation}}"
RADIO_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Date input
DATE_INPUT_TPL = './ui_components/date_input.html'
DATE_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
DATE_INPUT_LABEL_MARKER = "{{input_label}}"
DATE_INPUT_NAME_MARKER = "{{input_name}}"
DATE_INPUT_VALIDATION_MARKER = "{{input_validation}}"
DATE_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Textarea input
TEXTAREA_INPUT_TPL = './ui_components/textarea_input.html'
TEXTAREA_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
TEXTAREA_INPUT_LABEL_MARKER = "{{input_label}}"
TEXTAREA_INPUT_NAME_MARKER = "{{input_name}}"
TEXTAREA_INPUT_VALIDATION_MARKER = "{{input_validation}}"
TEXTAREA_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# Selection input
SELECTION_INPUT_TPL = './ui_components/selection_input.html'
SELECTION_INPUT_MODEL_NAME_MARKER = "{{input_model_name}}"
SELECTION_INPUT_LABEL_MARKER = "{{input_label}}"
SELECTION_INPUT_NAME_MARKER = "{{input_name}}"
SELECTION_INPUT_VALIDATION_MARKER = "{{input_validation}}"
SELECTION_INPUT_VALIDATION_NGMESSAGES_MARKER = "{{validation_ngmessages}}"

# ngmessages for validations
MAX_NGMESSAGE_TPL = './ui_components/max_ngmessage.html'
MAX_NGMESSAGE_VALUE_MARKER = '{{max_ngmessage_value}}'

MIN_NGMESSAGE_TPL = './ui_components/min_ngmessage.html'
MIN_NGMESSAGE_VALUE_MARKER = '{{min_ngmessage_value}}'

NUMERIC_NGMESSAGE_TPL = './ui_components/numeric_ngmessage.html'

PATTERN_NGMESSAGE_TPL = './ui_components/pattern_ngmessage.html'
PATTERN_NGMESSAGE_VALUE_MARKER = '{{pattern_ngmessage_value}}'

REQUIRED_NGMESSAGE_TPL = './ui_components/required_ngmessage.html'

EMAIL_NGMESSAGE_TPL = './ui_components/email_ngmessage.html'
