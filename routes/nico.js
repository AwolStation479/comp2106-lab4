var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/nico', function(req, res, next) {
  res.render(
    'nico', {
      title: 'Nico',
      message: ''
    }
  );
});

module.exports = router;
