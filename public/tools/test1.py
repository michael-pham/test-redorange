import re

ss = '''qslkjqskqsdhf
#start
REPLACE ANYTHING IN HERE
#end
2135468761265
'''

reg = re.compile('(?<=#start)(\r?\n)'
                 '(.*?)'
                 '(?=\r?\n#end)',re.DOTALL)

print ss
print '----'
print reg.sub('1Ia orana',ss)
