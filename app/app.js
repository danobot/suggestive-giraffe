const express = require('express')
app = express();
var fu = require('../src/index')
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('hbs', require('hbs').__express);
app.get('/', (req, res) => {

  var longArray = [];
  longArray.push(fu.getShort());
  longArray.push(fu.getMedium());
  longArray.push(fu.get());
  var more = [];
  more.push(fu.get());
  more.push(fu.get());
  more.push(fu.get());
  more.push(fu.get());
  more.push(fu.get());
  more.push(fu.get());
  var short = [];
  short.push(fu.getShort());
  short.push(fu.getShort());
  short.push(fu.getShort());
  short.push(fu.getShort());
  short.push(fu.getShort());
  short.push(fu.getShort());
  var Medium = [];
  Medium.push(fu.getMedium());
  Medium.push(fu.getMedium());
  Medium.push(fu.getMedium());
  Medium.push(fu.getMedium());
  Medium.push(fu.getMedium());
  Medium.push(fu.getMedium());
  res.render('index.hbs', {id: longArray, countShort: fu.getShortSpace(), long:more, short: short, medium: Medium,countMedium: fu.getMediumSpace(),
    count: Math.round(fu.getIdSpaceCount()/100000)/10})
})

app.listen(3035, () => console.log('Example app listening on port 3035!'))

module.exports = app;
