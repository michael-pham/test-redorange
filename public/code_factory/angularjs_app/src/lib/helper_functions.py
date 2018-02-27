
def uncapitalise_txt(txt):
    if len(txt) > 0:
        return txt[0].lower() + txt[1:]
    return ""

def to_camel_from_pascal(word):
    return uncapitalise_txt(word)

import re
def to_snake_from_pascal(var_name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', var_name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

import os
def make_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def write_to_file(file_path, file_data):
    with open(file_path, 'w') as file:
      file.write(file_data)

# Search and replace text in a file
def search_and_replace_with_write(file_path, src_txt, dst_txt):
    # Read in the file
    with open(file_path, 'r') as file :
      file_data = file.read()

    # Replace the target string
    file_data = file_data.replace(src_txt, dst_txt)

    # Write the file out again
    with open(file_path, 'w') as file:
      file.write(file_data)
