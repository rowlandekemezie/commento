const Comment = require('../models/comments');

const indexPage = (req, res) => {
  Comment.find({})
    .exec((err, comments) => {
      if(err) res.json({error: err});
      res.json({
        message: 'This is the index page',
        comments
      });
    });
};

const getComment = (req, res) => {
  Comment.findById(req.param.id)
    .exec((err, comment) => {
      if(err) res.json({ error: err });
      res.json({
        message: 'Get a comment',
        comment,
      });
    });
}

const createComment = (req, res ) => {
  Comment.create(req.body, (err, comment) => {
    if (err) res.json({error: err})
    res.json({
      message: 'This is create',
      comment,
    });
  });
}


const updateComment = (req, res ) => {
  Comment.findOneAndUpdate(req.params.id, req.body)
    .exec((err, comment) => {
      if (err) res.json({error: err});
      res.json({comment, message: 'Successfully updated!'})
    });
}

const deleteComment = (req, res ) => {
  Comment.findByIdAndRemove(req.params.id)
    .exec((err, comment) => {
      if (err) res.json({error: err});
      res.json({comment, message: 'Successfully updated!'})
    });
}

module.exports = { indexPage, createComment, getComment, updateComment, deleteComment };