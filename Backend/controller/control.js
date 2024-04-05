const mysqlModel = require('../model/model');

const getTableData = (req, res) => {
  mysqlModel.getTableData()
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: false });
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

const postTableData = (req, res) => {
  const {name, email,date_of_birth, place} = req.body;
  console.log(req.body)
  // const added = new Date();
  if(Object.keys(req.body).length===0){
    res.send("Enter the Values");
  }else{
    mysqlModel.insertTableData({ name, email,date_of_birth, place})
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));

  }
 
};

const putTableData = (req, res) => {
  const {id,  name, email,date_of_birth, place} = req.body;
  if(Object.keys(req.body).length===0){
    // console.log("bloody")
    res.send("enter the values")
  }else{
    mysqlModel.updateTableData(id, { name,email,date_of_birth, place })
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));

  }
  
};

const deleteTableData = (req, res) => {
  const { id } = req.body;
  console.log(id,"data")
  mysqlModel.deleteTableData(id)
    .then(() => {
      res.json({ delete: true });
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
};
