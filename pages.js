const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
<<<<<<< HEAD
const repoURL = "https://github.com/siya-gumede/info.git";
=======
const repoURL = "https://github.com/siya-gumede/siya-gumede/info.git";
>>>>>>> parent of 6da0214e (Updates)

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
