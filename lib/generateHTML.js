const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../templates");

// assign employee array to correct div
const renderHTML = employees => {
    const html = [];
  
    // filtering managers
    html.push(...employees
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => renderManager(manager))
    );

    // filtering engineers
    html.push(...employees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => renderEngineer(engineer))
    );

    // filtering interns
    html.push(...employees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => renderIntern(intern))
    );
    
    return renderMain(html.join(""));
  
  };

  // create div for manager type
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOffice());
  return template;
};

  // create div for engineer type
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

  // create div or intern type
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

  // use correct array to create index.html
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  
  return replacePlaceholders(template, "team", html);
};

// fill placeholders with employee data input
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = renderHTML;