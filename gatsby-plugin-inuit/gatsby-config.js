const base_path = require
  .resolve("inuitcss")
  .split("/")
  .slice(0, -2)
  .join("/");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${base_path}/inuitcss`, `${base_path}/sass-mq`]
      }
    }
  ]
};
