from lib.helper_functions import *
from lib.renderer import *
from data_model.data_model_constants import *
from constants import *

def render_items_html(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEMS_HTML_TPL
    data[ITEM_DISPLAY_NAME_KEY] = model.display_name
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)

    data[TABLE_SORTABLE_THS_KEY] = []
    for attribute in model.attributes:
        if attribute.shown_on_table == "false":
            continue
        subdata = dict()
        subdata[TPL_PATH_KEY] = PATH_BASE + SORTABLE_TH_HTML_TPL
        subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
        subdata[ATTRIBUTE_NAME_KEY] = attribute.name
        subdata[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name
        subdata[ATTRIBUTE_DISPLAY_NAME_KEY] = attribute.display_name
        data[TABLE_SORTABLE_THS_KEY].append(subdata)

    data[TABLE_TDS_KEY] = []
    for attribute in model.attributes:
        if attribute.shown_on_table == "false":
            continue
        subdata = dict()
        if attribute.ui_display_type == PLAIN:
            subdata[TPL_PATH_KEY] = PATH_BASE + PLAIN_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name

        if attribute.ui_display_type == LABEL:
            subdata[TPL_PATH_KEY] = PATH_BASE + LABEL_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name

        if attribute.ui_display_type == IMAGE:
            subdata[TPL_PATH_KEY] = PATH_BASE + IMAGE_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name

        if attribute.ui_display_type == FILE:
            subdata[TPL_PATH_KEY] = PATH_BASE + FILE_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name

        data[TABLE_TDS_KEY].append(subdata)

    data[TABLE_SEARCH_TDS_KEY] = []
    for attribute in model.attributes:
        if attribute.shown_on_table == "false":
            continue
        subdata = dict()
        # for attribute in model.attributes:
        if attribute.ui_type == "date_input":
            subdata[TPL_PATH_KEY] = PATH_BASE + DATE_SEARCH_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name

        elif attribute.ui_type == "selection_input" or attribute.ui_type == "datalist_input":
            subdata[TPL_PATH_KEY] = PATH_BASE + SELECTION_SEARCH_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
            subdata[DEPENDENCY_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(attribute.dependency_name)
            subdata[DEPENDENCY_DISPLAY_ATTRIBUTE_KEY] = attribute.dependency_display_name

        # if attribute.ui_type == "text_input" or attribute.ui_type == "numeric_input" or attribute.ui file_input:
        else:
            subdata[TPL_PATH_KEY] = PATH_BASE + PLAIN_SEARCH_TD_HTML_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name

        data[TABLE_SEARCH_TDS_KEY].append(subdata)

    return render(data)
