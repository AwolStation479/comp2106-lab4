var express = require('express');
var router = express.Router();

var ron = 'Ron has been a senior credit manager for '+
  'Farm Credit Canada for almost five years.';
var colleen = 'Colleen is now a personal trainer with '+
  'the YMCA since January of this year.';
var jake = 'Jake is currently a second year student at '+
  'Georgian College in the Computer Programmer diploma program.';
var nico = 'Nico graduated from the Ontario College of '+
  'Art and Design in Toronto in 2015.';
var simon = 'Simon graduated from Georgian college with '+
  'a diploma in Recreation and Leisure Services in 2014, '+
  'and is currently attending again for Personal Fitness.';
var emily = 'Emily will soon graduate from Guelph University '+
  'with a Bachelor\'s of Nutrition and Nutraceutical Science.';
var lidia = 'Lidia will soon graduate from Guelph University '+
  'with a Bachelor\'s of European Studies, minor in French.';

/* GET home page. */

router.get('/', function(req,res,next){
  res.render('index',
    {
      title: 'Family van Niekerk',
      message:'Welcome to the van Niekerk family page!'
    }
  );
});

/* GET page for each family member. */

router.get('/ron', function(req,res,next){
  res.render('ron',
    {
      title: 'Ron',
      message: ron
    }
  );
});

router.get('/colleen', function(req,res,next){
  res.render('colleen',
    {
      title: 'Colleen',
      message: colleen
    }
  );
});

router.get('/jake', function(req,res,next){
  res.render('jake',
    {
      title: 'Jake',
      message: jake
    }
  );
});

router.get('/nico', function(req,res,next){
  res.render('nico',
    {
      title: 'Nico',
      message: nico
    }
  );
});

router.get('/simon', function(req,res,next){
  res.render('simon',
    {
      title: 'Simon',
      message: simon
    }
  );
});

router.get('/emily', function(req,res,next){
  res.render('emily',
    {
      title: 'Emily',
      message: emily
    }
  );
});

router.get('/lidia', function(req,res,next){
  res.render('lidia',
    {
      title: 'Lidia',
      message: lidia
    }
  );
});


module.exports = router;
