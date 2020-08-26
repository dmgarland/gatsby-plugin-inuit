## Gatsby-Plugin-Inuit

[InuitCSS](https://github.com/inuitcss/inuitcss) is an object-orientated CSS framework. This package provides a plugin that sets it up in your Gatsby project. 

There is a monorepo with an example site using this plugin, found [here](https://github.com/dmgarland/gatsby-plugin-inuit)

*N.B.* Check the version number before you decide to use this in your production app.

### Dependencies

Node Sass is a peer dependency, so you'll need to install it.

> npm --save node-sass

or 

> yarn add node-sass

And obvisouly you'll need to setup Gatsby too.

### Learning Resources 

TODO

## How to install

> npm --save gatsby-plugin-inuit

Then, add the plugin to your `gatsby-config.js`

```
plugins: [
  `gatsby-plugin-inuit`
]
```
    
## Available options

If you want to customise the output css directory (default is `src/stylesheets`)

```
{
  resolve: `gatsby-plugin-inuit`,
  options: { css_dir: "src/css" },
},
```

## Using


Don't forget to actually import the css

```javascript
import '../stylesheets/main.scss'
```

## When do I use this plugin?

* If you want to write your own SASS and use with your React components
* As an alternative to styled components
* If you want to build your own style guide from scratch

## How to run tests

## How to develop locally

Checkout the monorepo from Github and then to see an example Gatsby site that uses the plugin, you can run the following:

> yarn workspace example-site 
> yarn workspace example-site develop

And visit http://localhost:8000 

## How to contribute

Send me a PR!
