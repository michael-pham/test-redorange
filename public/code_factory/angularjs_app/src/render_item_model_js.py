from lib.helper_functions import *
from lib.renderer import *
from constants import *

def render_item_model_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_MODEL_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_SNAKE_CASE_KEY] = to_snake_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name
    data[ITEM_DISPLAY_NAME_KEY] = model.display_name
    data[HAS_FILE_ATTACHED] = model.has_file_attached
    data[DOMESTIC_ATTRIBUTES_KEY] = ""
    data[INCLUDES_MODELS] = ""
    data[ITEM_MANY_TO_ONE] = ""
    data[ITEM_ONE_TO_MANY] = ""
    for attribute in model.attributes:
        data[DOMESTIC_ATTRIBUTES_KEY] += '"' + attribute.name + '",'
        if len(attribute.dependency_name) > 0:
            data[ITEM_MANY_TO_ONE] += '{name: "' + \
                to_camel_from_pascal(attribute.dependency_name) + '", url: "http://localhost:8000/' + \
                    to_snake_from_pascal(attribute.dependency_name) + 's" }, '

        if to_camel_from_pascal(attribute.dependency_name)  not in data[INCLUDES_MODELS]:
            data[INCLUDES_MODELS] = += '"' + to_camel_from_pascal(attribute.dependency_name) + '",'

    for relationship in model.relationships:
        if relationship.type is "one-to-many":
            data[ITEM_ONE_TO_MANY] = '{name: "' + \
                to_camel_from_pascal(relationship.with_model) + 's", url: "http://localhost:8000/' + \
                    to_snake_from_pascal(relationship.with_model) + 's", domestic: [], has_file_attached: false, many_to_one: [], one_to_many: []}, '

    return render(data)
