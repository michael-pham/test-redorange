def render_items_module_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_MODULE_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)

    return render(data)
