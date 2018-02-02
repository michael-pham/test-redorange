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

dst_folder = "./generated_code"

models = {}

def initiate_code(model):
    # Copy code to generated_code
    # Change files name in newly created files
    # Rename in files in newly created files

def render_update_form():
    return;

def render_create_form():
    return;

def render_model_js():
    return;

for model in models:
    initiate_code(model)
    render_update_form(model)
    render_create_form(model)
    render_model_js(model)
