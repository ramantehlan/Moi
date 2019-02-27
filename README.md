# Moi
A simple, light and highly customizable personal site template.

# Index

1. [About](#about)
2. [Usage](#usage)
	- [Json Design](#data.json-design)
	- [Adding A New Section](#adding-a-new-section)
3. [Development](#development)
 	- [Requirement](#requirement)
	- [Installation](#installation)
	- [File Hierarchy](#file-hierarchy)
4. [Contribution](#Contribution)
5. [Resources](#resources)
6. [License](#license)
7. [Back Story](#back-story)

## About
Moi is a single-page personal site template created to reduce the trouble of designing, developing and maintaining your own personal site while keeping it light, customizable and simple. It is free and opensource, so you still have the freedom to add your own changes and features.

Moe is responsive and SEO friendly, with multiple themes. It uses a single JSON file to fetch data and render it, which makes it extremely simple to make changes and control the overall performance.

> Moi means "me" in french.

## Usage

To use this template for your own personal site, you can follow steps given below:

1. Fork this repository.
2. Rename your fork to `YOURUSERNAME.github.io`.
3. Update `data.json` file with your information.


### data.json Design

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


**Pre-defined Sections**

As a personal site, there are some sections which are common, and therefore they are pre-defined in the HTML and JS Script, so in no case, they should be removed, following are the fixed sections:

No | Name | Type |Information
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
11 | `blogs` | *array[object]* | Blogs you have written.
12 | `talks` | *array[object]* | Your talks in any community or a show.
13 | `links` | *array[object]* | All your links on the internet.

### Adding A New Section

## Development

### Requirement

### Installation

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

##### Spread the word

##### Help in the development

##### Adding a new logo

## Resources

## License

## Back Story
