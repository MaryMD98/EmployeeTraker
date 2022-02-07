const express = require('express');
const { __await } = require('tslib');
const { query } = require('./connection.js');
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
// function view_depa (){
async function view_depa (){
 
    const sql = `SELECT department.dep_name AS Department_Name, department.id AS Department_ID
    FROM department
    ORDER BY department.dep_name;`;
    // try {
    //     const promiseDB = db.promise();
    // const result = await promiseDB.query(sql); 

    const result = await db.promise().query(sql);
    console.log(`\n`);
    console.table(result[0]);
    //  return ;
        // ,(err,rows) =>{
        //     // callback funtion
            // if(err) {console.error(err.message);}
            // return rows;
            // });
            // console.table(result);
        
        
    // console.table(rows);
    // } catch (error){console.log(error);}
    // await db.query(sql, (err,rows) =>{
    //     // callback funtion
    //     if(err) {console.error(err.message);}
    //     else {console.table(rows);}
    // });
}

// master function to send the information to correct function
function company(method,data){
    switch(method){
        case "view_DEPA":
            view_depa();//.then(result => {console.table(result);}).catch((err) => console.log(err));
            return;
        default:
            return console.log("no case available for this query");
    }
}

module.exports = company;