def render_items_js(model):
    data = dict()
    data[TPL_PATH_KEY] = PATH_BASE + ITEM_JS_TPL
    data[ITEM_NAME_IN_CAMEL_CASE_KEY] = to_camel_from_pascal(model.name)
    data[ITEM_NAME_IN_PASCAL_CASE_KEY] = model.name

    return render(data)
