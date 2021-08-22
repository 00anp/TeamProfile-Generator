const employeeCards = function (employee) {

    const role = employee.getRole();
    let fontIcon = '';
    let roleSpecifics = '';
    if (role === "Manager") {
        fontIcon = `<i class="medium material-icons">account_circle</i>`;
        roleSpecifics = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
    } else if (role === "Engineer") {
        fontIcon = `<i class="medium material-icons">developer_mode</i>`;
        roleSpecifics = `<li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a> </li>`;
    } else {
        fontIcon = `<i class="medium material-icons">folder_shared</i>`;
        roleSpecifics = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    }

    let employeeCards =  `
            <div class="col-xs-2 col-sm-3 py-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-header custom-background-color ">
                        <h4>${employee.getName()}</h4>
                        <p>${fontIcon} ${role}</p>
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employee.getId()} </li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            ${roleSpecifics}
                        </ul>
                    </div>
                </div>
            </div>  
    `;
    return employeeCards;
}

const render = function (team) {
    let memberSection = '';
    team.forEach(employee => {
        memberSection += employeeCards(employee);
    });
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <header>
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Team Profile Generator</a>
            </div>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row pt-4">
                    ${memberSection}                     
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="page-footer">
        <div class="footer-copyright">
            <div class="container"> Team Profile Generator by @00anp</div>
        </div>
    </footer>
</body>

</html>
    `;
    return htmlTemplate;
 }

// Here the function of render is exported 
module.exports = render