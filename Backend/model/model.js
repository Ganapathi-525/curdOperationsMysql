const mysql = require('mysql');

// MySQL Database Connection Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Eevilattitude143#',
  database: 'INI8LABS'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Function to get data from MySQL table
const getTableData = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM registration', (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

// Function to insert data into MySQL table
const insertTableData = (data) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO registration SET ?', data, (err, results) => {
      if (err) {
        console.log(err)
        reject(err);
        return;
      }
      console.log(results)
      resolve(results);
    });
  });
};

// Function to update data in MySQL table
const updateTableData = (id, data) => {
  console.log(id,"update")
  return new Promise((resolve, reject) => {
    db.query('UPDATE registration SET ? WHERE id = ?', [data, id], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};

// Function to delete data from MySQL table
const deleteTableData = (id) => {
  console.log("Deleting data with ID:", id);
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM registration WHERE id = ?', id, (err, results) => {
      if (err) {
        console.error("Error deleting data:", err);
        reject(err);
        return;
      }
      console.log("Data deleted successfully:", results);
      resolve(results);
    });
  });
};

// const deleteTableData = (id) => {
//   console.log("hi",id)
//   return new Promise((resolve, reject) => {

//     db.query('DELETE FROM registration WHERE id = ?', id, (err, results) => {
//       if (err) {
//         console.log(err)
//         reject(err);
//         return;
//       }
//       resolve(results);
//       console.log(results)
//     });
//   });
// };

module.exports = {
  getTableData,
  insertTableData,
  updateTableData,
  deleteTableData
};
