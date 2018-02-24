# -*- coding: utf-8 -*-

def make(file_path, render_markers, code_contents):
    with open(file_path, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, \
            code_contents[render_marker])

    return file_data

def render(data):
    if type(data) is list:
        ret = ""
        for item in data:
            ret += render(item);

        return ret

    if type(data) is dict:
        data_keys = list(data.keys())

        for key in data_keys:
            if data[key] is list or data[key] is dict:
                data[key] = render(data[key])

        return make(data['tpl_path'], data_keys, data)

    return ""




data_path = BASE_URL + '/models.json'
import ast

with open(data_path) as fd:
    content = fd.read()
    json_data = ast.literal_eval(content)
    json_data = json.dumps(json_data)
    data = json.loads(json_data)

    for model in data:
        src_name_portion = "ModelName"

        # Generate model code
        src_path  = BASE_URL + "/ModelNames"
        root_path = ROOT_URL + "/api/"
        dst_path = root_path + model['name'] + "s"
        generate_model_code(model, src_path, dst_path, src_name_portion)

        # Generate migration code
        src_path  = BASE_URL + "/./create_model_names_table.php"
        root_path = BASE_URL + "/../../database/migrations/"
        dst_path = root_path + "2014_10_12_000000_create_" + \
            to_snake_case(model['name']) + "s_table.php"
        generate_migration_code(model, src_path, dst_path, src_name_portion)
