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

# Input: var_name: snake_str_model_name_id
# Output: snakeStrModelName
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
def search_and_replace_with_write(file_path, src_txt, dst_txt):
    print(file_path)
    # Read in the file
    with open(file_path, 'r') as file :
      file_data = file.read()

    # Replace the target string
    file_data = file_data.replace(src_txt, dst_txt)

    # Write the file out again
    with open(file_path, 'w') as file:
      file.write(file_data)

# Search and replace text without writing to file
def search_and_replace_without_write(file_path, src_txt, dst_txt):
    # Read in the file
    with open(file_path, 'r') as file :
      file_data = file.read()

    # Replace the target string
    file_data = file_data.replace(src_txt, dst_txt)

    return file_data

def render(file_path, render_markers, code_contents):
    with open(file_path, 'r') as file :
      file_data = file.read()

    for render_marker in render_markers:
        file_data = file_data.replace(render_marker, \
            code_contents[render_marker])

    return file_data

def make_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def write_to_file(file_path, file_data):
    with open(file_path, 'w') as file:
      file.write(file_data)
