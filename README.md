# Moi
A simple, light and highly customizable personal site template. [Example](https://ramantehlan.github.io)

# Index

1. [About](#about)
2. [Usage](#usage)
	- [About Themes](#about-themes)
	- [Json Design](#json-design)
	- [Adding A New Section](#adding-a-new-section)
3. [Development](#development)
 	- [Requirement](#requirement)
	- [Installation](#installation)
	- [File Hierarchy](#file-hierarchy)
4. [Contribution](#Contribution)
5. [License](#license)

## About
Moi is a single-page personal site template created to reduce the trouble of designing, developing and maintaining your own personal site while keeping it light, customizable and simple. It is free and opensource, so you still have the freedom to add your own changes and features.

Moe is responsive and SEO friendly, with multiple themes. It uses a single JSON file to fetch data and render it, which makes it extremely simple to make changes and control the overall performance.

> Moi means "me" in french.

## Usage

To use this template for your own personal site, you can follow steps given below:

1. Fork this repository.
2. Rename your fork to `YOURUSERNAME.github.io`.
3. Update `data.json` file with your information.

### About Themes.

To change the theme, you just need to open `data.json` and in *document* section, update the *theme* key, it will accept any numerical value, from 1 to the maximum number of objects in *themes* section. To add more themes, just add a new object in *themes* section.  


### Json Design

`data.json` is the most important file in this project, as it is responsible for providing all the data. It is designed in a way the JS script could understand it. Right now, the file is already populated with sample data, but the following are the rules used:

**Sections**

Every first level key is considered as a section, while their value is considered as the data of that section. For example, to create two sections, *document* and *about*, the following is how it will be done.

``` JSON
{
	"document" : {
		...
	},
	"about": {
		...
	}
}
```


> Note: Every key should be in lower caps.


**Pre-defined sections**

As a personal site, there are some sections which are common, and therefore they are pre-defined in the HTML and JS Script, so in no case, they should be removed, following are the fixed sections:

No | Section Name | Type |Information
---|------|------|-----------
 1 | `document` | *object* | Document information, like meta tags, default theme, first section.
 2 | `themes` | *array[object]* | Css root data, to set themes.
 3 | `menu` | *array[object]* | List of items in menu. *Note: they menu title should be same as section name*.
 4 | `about` | *array[object]* | Section about self introduction. This is by default set as first section.
 5 | `profile` | *array[object]* | Left or top section about the person.
 6 | `work` | *array[object]* | Work experience.
 7 | `projects` | *array[object]* | Projects you have created.
 8 | `achievements` | *array[object]* | Achievements or awards you have.
 9 | `contributions` | *array[object]* | Contribution you have made, or communities you are part of.
10 | `education` | *array[object]* | Education/Cources information.
11 | `blog` | *array[object]* | Blog, articles you have written.
12 | `talks` | *array[object]* | Your talks in any community or a show.
13 | `links` | *array[object]* | All your links on the internet.

**Pre-defined keys**

Sections also have an array of objects, which can only have pre-defined keys, which are already provided in the default `data.json` file. Just use only those keys, as any other key won't be rendered.

### Adding A New Section

To add a new section, steps are given below.

1. Add following HTML script to `index.html`. Here *NEW-SECTION* needs to be replaced by the new section name.

```HTML
<div id="NEW-SECTION" class="hidden">
	<span v-if="render">
		<span v-if="data.NEW-SECTION">
			<div class="break-heading">NEW-SECTION [{{ data.NEW-SECTION.length }}]</div>
			<card v-for="info in data.NEW-SECTION" v-bind:info="info" v-bind:key="info.key"></card>
		</span>
	</span>
</div>
```

2. Make a entry of new section in `data.json` inside menu, create a new object. Here *New-SECTION* needs to be replaced by the new section name, make sure it's same in html and *ICON-CLASS* needs to be replaced by [Font Awesome 5](https://fontawesome.com/) only.

```JSON
"menu": [
...
{
	"title": "NEW-SECTION",
	"display": true,
	"icon": "ICON-CLASS"
}
...
]
```

3. Create a new first level key, which should be a array of object, where each object is single entry of that new section.

```JSON
	...
	'NEW-SECTION': [{
		...
		}]
	...
```

## Development

To add more features to this project, you need to make sure you have all the requirements checked, this project installed, and a little understanding of this project.

### Requirement

You need to be at least familiar with the following tools and languages:

- HTML/CSS 3/JavaScript
- Vue.js
- JQuery
- Json

### Installation

Once you have all the requirements, you can now install the project and start developing. Just follow these steps:

1. Fork this project.
2. Clone your fork `git clone https://github.com/YOURUSERNAME/moi` OR `git clone https://github.com/YOURUSERNAME/YOURUSERNAME.github.io`
3. Branch out `git branch -b NEW-BRANCH`
4. Make your changes.
5. Create a pull request.

### File Hierarchy

```
.
├── assets
│   ├── font
│   │   ├── Roboto-Medium.ttf
│   │   ├── Roboto-Regular.ttf
│   │   ├── Roboto-Thin.ttf
│   │   └── ROCK.TTF
│   ├── img
│   │   └── favicon.ico
│   ├── script
│   │   ├── index.js
│   │   ├── jquery.js
│   │   └── vue.js
│   └── style
│       └── index.css
├── data.json
├── index.html
├── LICENSE
└── README.md

```

## Contribution

You can contribute to this project in multiple way. Here are some of them mentioned below

### Help in Development

This project can be improved so much more, with new features and design. If you
are willing and intrested, feel free to help develop it for yourself and others.  

### Report the issues and features

If you feel a feature is missing, or you have encounter a bug, report it in the
issues section. It will really help any one working on the development.

### Spread the words

Star this project, use it, or tell your friends about it. It will really help.

## License
GNU General Public License v3.0
