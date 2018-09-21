var mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
mongoose.connect('mongodb://ds163162.mlab.com:63162/feedme', {
    auth: {
      user: 'kutaykoc',
      password: 'Kutay2828'
    },
    useNewUrlParser:true
  })
  .then(() => console.log('database connection successful'))
  .catch((err) => console.error(err));
