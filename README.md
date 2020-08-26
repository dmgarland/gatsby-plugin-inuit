# gatsby-source-inuit

This is a monorepo containing the plugin an example gatsby starter used to develop the app and serve as a reference.

```
example-site - gatsby starter that uses this plugin
gatsby-source-inuit - the actual plugin
```

Please check the version number before you decide to use this in production.

## How to use

1. Install dependencies

> yarn install
> yarn install node-sass

1. Add the plugin to your `gatsby-config.js`, filling in your WebDAV settings.

```
    plugins: [
      `gatsby-plugin-inuit`
    ]
    ```
    
Or, if you want to customise the output css directory (default is `src/stylesheets`

```
    {
      resolve: `gatsby-plugin-inuit`,
      options: { css_dir: "src/css" },
    },
```

## Developing

To see an example Gatsby site that uses the plugin, you can run the following:

> yarn workspace example-site 
> yarn workspace example-site develop

And visit http://localhost:8000. 
