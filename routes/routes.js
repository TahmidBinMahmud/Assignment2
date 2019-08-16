module.exports = function(app) {

    var user = require('../controllers/controllers.js');
    var chat = require('../controllers/controllers.js');
  
    //app.get('/new-article', article.new);
  
    app.post('/user/create', user.create);
    app.post('/chat/new', chat.new);
  
    app.get('/user/list', user.list);
    
  
  }