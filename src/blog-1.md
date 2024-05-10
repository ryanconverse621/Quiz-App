# CLI Script For Blog Sites
Below is a zsh script that will automate a blog post:

```bash
#!/bin/zsh
# ./create_blog.sh <project_name>

# Creates the directory structure
create_structure() {
    mkdir -p "$1/images" "$1/scripts" "$1/styles" "$1/site"
    mkdir -p "$1/site/pages" "$1/site/posts" "$1/site/comments"
    cd "$1" || exit
    touch index.html styles/style.css styles/normalize.css scripts/script.js .gitignore
}

# The automated starting HTML
add_html() {
    # Ensure there's a Markdown file to convert, e.g., "content.md"
    if [ ! -f "./blog1.md" ]; then
        echo "Markdown file content.md does not exist, creating a sample one."
        echo "# Sample Blog Post" > content.md
        echo "This is a *sample* blog post written in Markdown." >> content.md
    fi

    pandoc ./blog1.md -o index.html -s -c styles/normalize.css -c styles/style.css --javascript scripts/script.js --metadata title="My Blog"
}

# Automated starting CSS
add_css() {
    echo "h1 { color: red; }" > styles/style.css
}   

# Automated starting Javascript
add_js() {
    echo "alert('Javascript is working');" > scripts/script.js
}

# gitignore created
create_gitignore() {
    cat <<- EOF > .gitignore
node_modules/
*.log
EOF
}

# Check for correct number of arguments
if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <project_name>"
  exit 1
fi 

# Check if the directory already exists
if [[ -d "$1" ]]; then
  echo "Directory $1 already exists. Please choose a different name."
  exit 1
fi

create_structure "$1"

add_html

add_css

add_js

create_gitignore

code .

open index.html

echo "Successful"
```

## How to Run the Script
1. Open up the terminal
2. cd into file location 
3. chmod +x [script name]
4. ./[script name] [name of blog]

Result: ![Success](/img/success.jpg)


## Rationale
There are multiple reasons as to why making getting the boilerplate for a blog website using automation rather than starting from scratch. First off, it removes the hastle of starting from the beginning. It promotes efficiency of website creation and allows the user to focus on the more complex parts of the website much sooner. Secondly, it allows for customation and scalability. 

## Potential Knowledge Gained
As shell scripting is very important for automation and for working closely with the operating system, learning various things in BASH/zsh, such as syntax, will give me a great foundation to do those things.
