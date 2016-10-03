var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/colleen', function(req, res, next) {
  res.render(
    'colleen', {
      title: 'Colleen',
      message: ''
    }
  );
});

module.exports = router;
