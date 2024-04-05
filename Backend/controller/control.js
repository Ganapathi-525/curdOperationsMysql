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
    .catch(err => {
      console.error('Error fetching table data:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};

const postTableData = (req, res) => {
  const { name, email, date_of_birth, place } = req.body;
  if (!name || !email || !date_of_birth || !place) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }
  mysqlModel.insertTableData({ name, email, date_of_birth, place })
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.error('Error inserting table data:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};

const putTableData = (req, res) => {
  const { id, name, email, date_of_birth, place } = req.body;
  if (!id || !name || !email || !date_of_birth || !place) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }
  mysqlModel.updateTableData(id, { name, email, date_of_birth, place })
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.error('Error updating table data:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};

const deleteTableData = (req, res) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: 'Missing required field: id' });
    return;
  }
  mysqlModel.deleteTableData(id)
    .then(() => {
      res.json({ delete: true });
    })
    .catch(err => {
      console.error('Error deleting table data:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
};
