import re

file_path = "../api/DocGroups/Models/DocGroup.php"
with open(file_path) as f:
    ss = f.read()
reg = re.compile('(?<=#start)(\r?\n)'
                 '(.*?)'
                 '(?=\r?\n#end)',re.DOTALL)

print ss
print '----'
print reg.sub('\\1Ia orana',ss)
#
# # Render function
# import re
# def render(file_path, start_marker, end_marker, code):
#     with open(file_path) as f:
#         content = f.read()
#         reg = re.compile('(?<=#start)(\r?\n)'
#                          '(.*?)'
#                          '(?=\r?\n#end)',re.DOTALL)
#
#         content = reg.sub('\\1' + code, content)
#         print(start_marker)
#         print(end_marker)
#         print(content)
#
#     with open(file_path, "w") as f:
#         f.write(content)
#
# def render_fillable_attrs(file_path, attributes):
#     start_marker = "#start_fillable"
#     end_marker = "#end_fillable"
#     code = "\\1"
#
#     # for attribute in attributes:
#     #     code += attribute['name'] + ','
#
#     code += "asdfasdf"
#
#     render(file_path, start_marker, end_marker, code[:-1])
#
# file_path = "../api/DocGroups/Models/DocGroup.php"
# # render_fillable_attrs(file_path, "")
# render(file_path, "#start", "#end", "Nothing could be done")
