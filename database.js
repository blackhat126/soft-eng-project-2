// var mysql = require('mysql');

// var link = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'backup123(hello)',
//     database: 'soft-eng-database'
// });

// link.connect(function(err) {
//     if (err) throw err;
//     console.log('connected');
//     let save;
//     let edit = "update items set location = 'By the bread section' where itemId = 3";
//     let remove = "delete from items where itemId = 3";
//     link.query(remove, function(err, result) {
//         if (err) throw err;
//         console.log('1 row affected');
//         link.end();
//     });
// });

