# -*- coding: utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

# ACTUAL CODE
import json
from pprint import pprint

################################################################################
#                               HELPER FUNCTIONS                               #
################################################################################
# Input: var_name: snake_str_model_name_id
# Output: snakeStrModelName
def get_model_name_lcamel(var_name):
    return to_camel_case(var_name[:-3])

def to_camel_case(snake_str):
    components = snake_str.split('_')
    return "".join(x.title() for x in components)

def uncapitalise_txt(txt):
    return txt[0].lower() + txt[1:]

def to_snake_case(var_name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', var_name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

# Render function
import re
def render(file_path, start_marker, end_marker, code):
    with open(file_path) as f:
        content = f.read()
        reg = re.compile('(?<=' + start_marker + ')(\r?\n)'
                         '(.*?)'
                         '(?=\r?\n' + end_marker + ')',re.DOTALL)

        content = reg.sub('\\1' + code, content)

    with open(file_path, "w") as f:
        f.write(content)

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

# Fix-directory-name function
import os
def fix_dir_name(dir_path, src_name_portion, dst_name_portion):
    paths = (os.path.join(root, file_name)
        for root, _, file_names in os.walk(dir_path)
        for file_name in file_names)

    for path in paths:
        new_name = path.replace(src_name_portion, dst_name_portion)
        if new_name != path:
            os.rename(path, new_name)

# Search and replace text in a file
def search_and_replace(file_path, src_txt, dst_txt):
    # Read in the file
    with open(file_path, 'r') as file :
      file_data = file.read()

    # Replace the target string
    file_data = file_data.replace(src_txt, dst_txt)

    # Write the file out again
    with open(file_path, 'w') as file:
      file.write(file_data)

################################################################################
#                               MAIN FUNCTIONS                                 #
################################################################################
# Main Functions
import subprocess
import shlex
import fnmatch
import os
def init_model_codebase(src_path, dst_path, src_name_portion, dst_name_portion):
    copy(src_path, dst_path)
    fix_dir_name(dst_path, src_name_portion, dst_name_portion)

    matches = []
    for root, dirnames, filenames in os.walk(dst_path):
        for filename in fnmatch.filter(filenames, '*.php'):
            file_path = os.path.join(root, filename)

            src_name = src_name_portion
            dst_name = dst_name_portion
            search_and_replace(file_path, src_name, dst_name)

            src_name = uncapitalise_txt(src_name_portion)
            dst_name = uncapitalise_txt(dst_name_portion)
            search_and_replace(file_path, src_name, dst_name)

            src_name = to_snake_case(src_name_portion)
            dst_name = to_snake_case(dst_name_portion)
            search_and_replace(file_path, src_name, dst_name)

import re
def render_fillable_attrs(file_path, attributes):
    start_marker = "// start_fillable"
    end_marker = "// end_fillable"
    code = ""

    for attribute in attributes:
        code += '"' + attribute['name'] + '"' + ','

    render(file_path, start_marker, end_marker, code[:-1])

def render_hidden_attrs(file_path, attributes):
    start_marker = "// start_hidden"
    end_marker = "// end_hidden"
    code = ""
    for attribute in attributes:
        if attribute["hidden"] == "true":
            code += attribute['name'] + ','
    if code != "":
        render(file_path, start_marker, end_marker, code[:-1])

def make_validation_line(model):
    lcamel_model_name = uncapitalise_txt(model['name'])
    validation = "'" + lcamel_model_name + "' => 'array|required',\n"
    error_messages = ""
    for attribute in model['attributes']:
        validation += "'" + lcamel_model_name + "." + attribute['name'] + "' => '"
        constraints = attribute['constraints']
        if constraints["required"] == "true":
            validation += "required|"
            error_messages += "        '" + lcamel_model_name + "." + \
                attribute['name'] + ".required' => '" + \
                    attribute["display_name"] + " là trường bắt buộc.',\n"
        if constraints["nullable"] == "true":
            validation += "nullable|"
        if constraints["unique"] == "true":
            validation += "unique:" + to_snake_case(model['name']) + "s," + attribute['name']  + "|"
            error_messages += "        '" + lcamel_model_name + "." + \
                attribute['name'] + ".unique' => '" + \
                    attribute["display_name"] + " đã tồn tại.',\n"
        if attribute['type'] == "string" or attribute['type'] == "text":
            validation += "string|"
        if constraints["numeric"] == "true":
            validation += "numeric|"
            error_messages += "        '" + lcamel_model_name + "." + \
                attribute['name'] + ".numeric' => '" + \
                    attribute["display_name"] + " phải là một số',\n"
        if constraints["email"] == "true":
            validation += "email|"
            error_messages += "        '" + lcamel_model_name + "." + \
                attribute['name'] + ".email' => '" + \
                    attribute["display_name"] + " phải là một email hợp lệ.',\n"
        if constraints["max"] != "":
            validation += "max:" + constraints["max"] + "|"
            error_messages += "        '" + lcamel_model_name + "." + \
                attribute['name'] + ".max' => '" + \
                    attribute["display_name"] + " không được vượt quá " + constraints["max"] + ".',\n"
        if constraints["min"] != "":
            validation += "min:" + constraints["min"] + "|"
            error_messages += "        '" + lcamel_model_name + "." + \
                attribute['name'] + ".min' => '" + \
                    attribute["display_name"] + " không được nhỏ hơn " + constraints["min"] + ".',\n"
        validation = validation[:-1] + "',\n"

    return [validation, error_messages]

def render_validation(file_path, model):
    validation_code = ""
    error_message_code = ""

    temp = make_validation_line(model)
    validation_code = temp[0]
    error_message_code += temp[1]
    # for attribute in attributes:

    start_marker = "// start_rules"
    end_marker = "// end_rules"
    render(file_path, start_marker, end_marker, validation_code[:-2])

    start_marker = "        // start_messages"
    end_marker = "        // end_messages"
    render(file_path, start_marker, end_marker, error_message_code[:-2])

def render_relationships(file_path, relationships, model_name):
    code = ""
    for relationship in relationships:
        friend_model_name = relationship["with"]

        if relationship["type"] == "many-to-many":
            code = "public function " + uncapitalise_txt(friend_model_name) + "s()\n{\n"
            code += "    return $this->belongsToMany('Api\\" + friend_model_name + "s\Models\\" + friend_model_name + "');\n}\n"

        if relationship["type"] == "one-to-many":
            code = "public function " + uncapitalise_txt(friend_model_name) + "s()\n{\n"
            code += "    return $this->hasMany('Api\\" + friend_model_name + "s\Models\\" + friend_model_name + "');\n}\n"

        if relationship["type"] == "many-to-one":
            code = "public function " + uncapitalise_txt(friend_model_name) + "()\n{\n"
            code += "    return $this->belongsTo('Api\\" + friend_model_name + "s\Models\\" + friend_model_name + "');\n}\n"

        if relationship["type"] == "one-to-one":
            code = "public function " + uncapitalise_txt(friend_model_name) + "()\n{\n"
            code += "    return $this->hasOne('Api\\" + friend_model_name + "s\Models\\" + friend_model_name + "');\n}\n"

    start_marker = "// start_relationships"
    end_marker = "// end_relationships"
    render(file_path, start_marker, end_marker, code)

def generate_model_code(model, src_path, dst_path, src_name_portion):
    # Initialise model codebase
    init_model_codebase(src_path, dst_path, src_name_portion, model["name"])

    # Render code for attributes of the models
    attributes = model['attributes']

    # Model class
    model_file_path = dst_path + "/Models/" + model["name"] + ".php"
    request_file_path = dst_path + "/Requests/" + "Create" + model["name"] + "Request.php"

    render_fillable_attrs(model_file_path, attributes)
    render_hidden_attrs(model_file_path, attributes)

    render_validation(request_file_path, model)

    # Render code for relationships of the models
    render_relationships(model_file_path, model["relationships"], model["name"])

def generate_migration_code(model, src_path, dst_path, src_name_portion):
    copy(src_path, dst_path)

    dst_name_portion = model["name"]

    src_name = src_name_portion
    dst_name = dst_name_portion
    search_and_replace(dst_path, src_name, dst_name)

    src_name = uncapitalise_txt(src_name_portion)
    dst_name = uncapitalise_txt(dst_name_portion)
    search_and_replace(dst_path, src_name, dst_name)

    src_name = to_snake_case(src_name_portion)
    dst_name = to_snake_case(dst_name_portion)
    search_and_replace(dst_path, src_name, dst_name)

    start_marker = "            // start_migration"
    end_marker = "            // end_migration"
    code = "            "

    attributes = model["attributes"]
    for attribute in attributes:
        if attribute['type'] == "string":
            code += "$table->string('" + attribute['name'] + "')"
        if attribute['type'] == "text":
            code += "$table->text('" + attribute['name'] + "')"
        if attribute['type'] == "integer":
            code += "$table->integer('" + attribute['name'] + "')"
        if attribute['type'] == "big_integer":
            code += "$table->bigInteger('" + attribute['name'] + "')"
        if attribute['type'] == "boolean":
            code += "$table->boolean('" + attribute['name'] + "')"
        if attribute['type'] == "decimal":
            code += "$table->decimal('" + attribute['name'] + "')"

        if attribute["constraints"]['nullable'] == "true":
            code += "->nullable();"
        code += ";\n"
    render(dst_path, start_marker, end_marker, code[:-1])

data_path = './models.json'
import ast
with open(data_path) as fd:
    content = fd.read()
    json_data = ast.literal_eval(content)
    json_data = json.dumps(json_data)
    data = json.loads(json_data)

    for model in data:
        src_name_portion = "ModelName"

        # Generate model code
        src_path  = "./ModelNames"
        root_path = "../../api/"
        dst_path = root_path + model['name'] + "s"
        generate_model_code(model, src_path, dst_path, src_name_portion)

        # Generate migration code
        src_path  = "./create_model_names_table.php"
        root_path = "../../database/migrations/"
        dst_path = root_path + "2014_10_12_000000_create_" + \
            to_snake_case(model['name']) + "s_table.php"
        generate_migration_code(model, src_path, dst_path, src_name_portion)
