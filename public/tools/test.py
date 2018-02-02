import re

# Rendering function
def render(file_path, start_marker, end_marker, code_block):
    with open(file_path) as f:
        content = f.read()
        reg = re.compile('(?<=' + start_marker + ')(\r?\n)'
                         '(.*?)'
                         '(?=\r?\n' + end_marker + ')',re.DOTALL)

        content = reg.sub('\\1' + code_block, content)

    with open(file_path, "w") as f:
        f.write(content)
# file_path = './ModelName/Models/ModelName.php'
# start = "#start-fillable"
# end = "#end-fillable"
# render(file_path, start, end, "nothing can be explained\nadfadfd")

import shutil, errno
# Copying function
def copy(src, dst):
    try:
        shutil.copytree(src, dst)
    except OSError as exc: # python >2.5
        if exc.errno == errno.ENOTDIR:
            shutil.copy(src, dst)
        else: raise

# src = './ModelName'
# dst = './DocGroup'
# copy(src, dst)

import os
# folder = './DocGroup'
def fixDirName(dir_path, src_name_portion, dst_name_portion):
    paths = (os.path.join(root, file_name)
            for root, _, file_names in os.walk(dir_path)
            for file_name in file_names)

    for path in paths:
        # the '#' in the example below will be replaced by the '-' in the filenames in the directory
        new_name = path.replace(src_name_portion, dst_name_portion)
        if new_name != path:
            os.rename(path, new_name)
