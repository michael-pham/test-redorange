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


