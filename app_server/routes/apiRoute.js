var express=require('express');
var router=express.Router();

var ctrlApi=require('../controller/apiController');

router.get('/',ctrlApi.index);
router.post('/newUser',ctrlApi.newUser);
router.post('/loginControl',ctrlApi.loginControl);
router.get('/users',ctrlApi.getAll);
router.get('/feeds',ctrlApi.getAllFeeds);
router.post('/feeds/:id',ctrlApi.getFeedById);
module.exports=router;