const fs = require("fs");

exports.onPreInit = (_, pluginOptions) => {
  const css_dir = pluginOptions.css_dir || "src/stylesheets";
  const directories = [
    "settings",
    "tools",
    "generic",
    "elements",
    "objects",
    "components",
    "utilities"
  ];
  directories.forEach(directory => {
    fs.mkdirSync([css_dir, directory].join("/"), { recursive: true }, err => {
      if (err) console.error(`Failed to make ${css_dir}`);
    });
  });
  if (initInuit(css_dir)) {
    console.log(`Initialising Inuit CSS in ${css_dir}`);
    const base_dir = require
      .resolve("inuitcss")
      .split("/")
      .slice(0, -1)
      .join("/");
    console.log(`Using inuit in ${base_dir}`);

    const files = [
      "example.main.scss",
      "settings/_example.settings.config.scss",
      "settings/_example.settings.global.scss"
    ];

    files.forEach(file => {
      const source_file_path = [base_dir, file].join("/");
      const dest_file_path = [css_dir, file.replace(/example\./, "")].join("/");
      fs.copyFileSync(source_file_path, dest_file_path);
    });

    // doctor the main.scss to have right paths
    const main_path = `${css_dir}/main.scss`;
    fs.readFile(main_path, "utf8", (err, data) => {
      if (err) {
        console.error(err);
      }

      const doctored = data
        .replace("node_modules/sass-mq/", "")
        .replace("example.", "");
      fs.writeFile(main_path, doctored, err => {
        if (err) console.error(err);
      });
    });
  }
};

function initInuit(css_dir) {
  try {
    fs.accessSync(`${css_dir}/main.scss`, fs.constants.F_OK);
    return false;
  } catch (err) {
    return true;
  }
}
