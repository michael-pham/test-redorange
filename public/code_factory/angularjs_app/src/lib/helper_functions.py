
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
