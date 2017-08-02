const { indexPage, getComment, createComment, updateComment, deleteComment } = require('../controllers');

const routes = (router) => {
  router.route('/comments')
    .get(indexPage);

  router.route('/comments')  
    .post(createComment);

  router.route('/comments/:id')
    .get(getComment)
    .put(updateComment)
    .delete(deleteComment);
}

module.exports =  routes;