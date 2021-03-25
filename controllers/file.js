const File = require('../models/file');
const fs = require('fs');

exports.createFile = (req, res, next) => {
  let file = new File();


  const { idUser, idSite, isAdmin, isSuperAdmin} = req.body;

  file.idUser = req.body.idUser,
  file.fileName = req.file.filename,


  file.save().then(
    () => {
      res.status(201).json({
        message: 'File saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllFile = (req, res, next) => {
  File.find().then(
    (file) => {
      res.status(200).json({
        file: file
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getMyFile = (req, res, next) => {
  File.find(
    {idUser: req.params.id}
  ).then(
    (file) => {
      res.status(200).json({
        file: file
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
