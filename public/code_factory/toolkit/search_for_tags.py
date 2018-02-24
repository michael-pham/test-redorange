#!/usr/bin/env python

# -*- coding: utf-8 -*-
import sys
import re
path_base = '/home/hbkhanh/workspace/laravel-angularjs-creator/public/code_factory/'

file_relative_path = "angularjs_app/templates/items.html/items.html"
file_name_constant_var = 'items_html'
data_name = 'model'
file_name_constant_var += '_tpl'
file_name_constant_var = file_name_constant_var.upper()

file_path = path_base + file_relative_path

with open(file_path, 'r') as file:
    file_data = file.read()
    pattern = re.compile("[{][{][a-z_]+[}][}]")
    tags = pattern.findall(file_data)

    code = ""
    constants = ""
    for tag in tags:
        trimmed_tag = tag[2:-2]
        trimmed_upper_tag = tag.upper()[2:-2]
        # code += 'data["' + tag + '"] = ' + data_name + '[' + trimmed_upper_tag + '_KEY]\n'

        newline_code = 'data[' + trimmed_upper_tag + '_KEY] = ' + data_name + '.' + trimmed_tag + '\n'
        if newline_code not in code:
            code += newline_code

        newline_constant = trimmed_upper_tag + '_KEY = "' + tag + '"\n'
        if newline_constant not in constants:
            constants += newline_constant

    print('data[TPL_PATH_KEY] = PATH_BASE + ' + file_name_constant_var)
    print code
    print("-------------------------------------------------")
    print(file_name_constant_var + ' = "' + file_relative_path + '"')
    print constants
