---
title: "Exploring TailwindCSS: Get Started Stylizing More Efficiently"
date: "2024-05-09"
version: "3.0"
---

# Exploring TailwindCSS: Get Started Stylizing More Efficiently

## Introduction

In this blog post, we'll delve into how to get started with using TailwindCSS. We will go
from installing it into a project, to actually using it in your projects

## Purpose

The purpose of this blog post is to provide a comprehensive guide on how to effectively use the basic features of TailwindCSS and get you to appreciate how much more efficient using
it is compared to stylizing with plain CSS.

## Prerequisites

* node.js/npm

## Step-by-Step Instructions

### Step 1: Installation Process
To start with using TailwindCSS, first you need to integrate it into your project. So start with changing your directory into your project

```bash
cd [your project]
```
Now, install TailwindCSS by typing this command into the terminal
```bash
npm install -D tailwindcss
```

After TailwindCSS is installed, create the TailwindCSS config file by putting this command into the terminal
```bash
npx tailwindcss init
```

The config file should contain this
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Will work for any html/js files in the path
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Next, make a css file. For this example, we will put the css file in a folder called styles/style.css. Put the following in the file

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then type this in the terminal
```bash
npx tailwindcss -i ./styles/style.css -o ./src/style.css --watch
```
What this does is take all the utility classes from the includes in the input style.css and sends them to the output style.css to allow the user to use the utility classes.

Now, you can link the output style.css to any html file in your project.

## Step 2: How to actually use TailwindCSS

Usually, if you wanted to style projects, you would have to make a separate CSS file, and do stuff like this

```css
.menu {
    display: flex;
    color: red;
    border-style: solid;
}

.menu:hover {
    color: green;
    background-color: red;
}
```

It usually gets annoying after a while and unexpected occurances may pop up due to precedences and such. With TailwindCSS, it is much more efficient and user friendly. TailwindCSS does all the hard work styling so you can get right to coding

Remember the css snippet from above? This is the equivalent in TailwindCSS, and all you
have to do is edit your html file.
```html
<div class="flex text-red-500 border-solid hover:text-green-500 bg-red-500></div>
```

As you can see, you accomplish the same amount of work in just one line!

## Step 3: Visit [TailwindCSS][1]
[1]: https://tailwindcss.com/
TailwindCSS has organized their docs so whatever you need, such as a hover style, you can just search hover on their website and it will show you many examples of how to use it and stroke-fuchsia-50


