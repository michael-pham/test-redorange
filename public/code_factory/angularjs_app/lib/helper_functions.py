def uncapitalise_txt(txt):
    return txt[0].lower() + txt[1:]

def to_camel_from_pascal(word):
    return uncapitalise_txt(word)
