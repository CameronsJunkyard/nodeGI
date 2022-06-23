const express = require('express');
const employee= require('./employee.json')
const app = express();
const port = 3000

function getEmployeeData(id) {
    return employee[id]
}

app.listen(port);

app.get('/employee/:id', (req, res) => { // IS ID
    let employeeData = getEmployeeData(req.params.id);
    if (employeeData) {
        res.status(200).send(employeeData);
        console.log(`Sent ${employeeData.name}'s employee data to user.`)
    }
    else {
        res.status(400).send({ "error": "Invalid employee id" });
    }
})

app.get('/employee/', (req, res) => {
    res.status(200).send(employee)
})