def render_item_service_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_SERVICE_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name

    data[ITEM_FILTERING_ATTRIBUTES_KEY] = ""
    for attribute in model.attributes:
        if attribute.type == "datetime":
            data[ITEM_FILTERING_ATTRIBUTES_KEY] += \
                attribute.name + '_range: {startDate: "", endDate: ""},'
        else:
            data[ITEM_FILTERING_ATTRIBUTES_KEY] += \
                attribute.name + ': "",'

    data[_PARAMETER_PROCESSING_KEY] = []
    for attribute in model.attributes:
        subdata = dict()

        if attribute.type == "datetime":
            subdata[TPL_PATH_KEY] = PATH_BASE + _DATE_RANGE_PARAMS_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
        elif attribute.ui_type == "selection_input" or attribute.ui_type == \
            "datalist_input":

            subdata[TPL_PATH_KEY] = PATH_BASE + _NORMAL_PARAM_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
            subdata[FILTERING_OPERATOR_KEY] = 'eq'
        else:
            subdata[TPL_PATH_KEY] = PATH_BASE + _NORMAL_PARAM_TPL
            subdata[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
            subdata[ATTRIBUTE_NAME_KEY] = attribute.name
            subdata[FILTERING_OPERATOR_KEY] = 'ct'

        data[_PARAMETER_PROCESSING_KEY].append(subdata)

    return render(data)
