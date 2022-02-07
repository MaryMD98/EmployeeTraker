const express = require('express');
// const cTable = require('console.table');
const db = require('./connection.js');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post();

// app.listen(PORT, () => {
//     console.log(`server running on oprt ${PORT}`);
// });

// Display information of the departments
function view_depa (){
    console.log("we are on db file index.js");
    console.log("view departments");

    const sql = `SELECT department.dep_name AS department_Name, department.id AS department_ID
    FROM department
    ORDER BY department.dep_name;`;

    db.query(sql, (err,rows) =>{
        if(err) {console.error(err.message);}
        else {console.table(rows);}
    });
}

// master function to send the information to correct function
function company(method,data){
    switch(method){
        case "view_DEPA":
            return view_depa();
        default:
            return console.log("no case available for this query");
    }
}

module.exports = company;