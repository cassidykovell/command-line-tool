const inquirer = require("inquirer");
const fs = require("fs");

const HTML = ({ name, location, bio, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}</p>
      <h3><span class="badge">${bio}</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub URL is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you located?",
    },
    {
      type: "input",
      name: "bio",
      message: "Tell us a bit about yourself.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub URL?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your Linkedin URL?",
    },
  ])
  .then((answers) => {
    const bioContent = HTML(answers);

    fs.writeFile("index.html", bioContent, (err) =>
      err ? console.log(err) : console.log("Success")
    );
  });
