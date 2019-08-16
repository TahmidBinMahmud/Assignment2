module.exports = function(app) {

    var user = require('../controllers/controllers.js');
  
    //app.get('/new-article', article.new);
  
    app.post('/user/create', user.create);
  
    //app.get('/article/list', article.list);
    
  
  }