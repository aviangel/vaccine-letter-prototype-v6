const express = require('express')
const router = express.Router()

// Clear any session data on start
router.get('/v1/', function (req, res) {
  req.session.data = {}
  res.redirect('/v1/start')
})


// Do you know your NHS number?
router.post('/v1/do-you-know-nhs-number-check', function (req, res) {

  var know = req.session.data['know-nhs']

  if (know == "Yes"){
    res.redirect('/v1/what-is-your-dob')
  }
  else {
    res.redirect('/v1/what-is-your-name')
  }

})


// Do you require a letter in an alternative format?
router.post('/v1/alternative-format-check', function (req, res) {

  var alternative = req.session.data['alternative']

  if (alternative == "Yes"){
    res.redirect('/v1/alternative-languages-formats')
  }
  else {
    res.redirect('/v1/send-application')
  }

})

module.exports = router