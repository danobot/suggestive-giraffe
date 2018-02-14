const express = require('express')
const app = express()
var fu = require('../src/index')
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);
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
  res.render('index.html', {id: longArray, countShort: fu.getShortSpace(), long:more, short: short, medium: Medium,countMedium: fu.getMediumSpace(),
    count: Math.round(fu.getIdSpaceCount()/100000)/10})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
