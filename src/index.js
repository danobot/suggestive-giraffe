var _ = require('lodash');

var data  = require('./data.js');

var separator = '-'

function getIdSpaceCount()
{
  return data.quantifiers.length*data.adjectives.length*data.colors.length*data.animals.length;
}
function separateWith(s)
{
  separator = s;
}

function getShort() {
  return _.sample(data.adjectives)+separator+_.sample(data.animals);
}

function getShortSpace()
{
  return data.adjectives.length*data.animals.length;
}
function getMedium()
{
    return _.sample(data.quantifiers)+separator+getShort();
}
function getMediumSpace()
{
  return data.quantifiers.length*getShortSpace();
}
function get()
{
  return _.sample(data.quantifiers) +separator+_.sample(data.adjectives)+separator+_.sample(data.colors)+separator+_.sample(data.animals);
}
module.exports = {getIdSpaceCount,get, getShort,getShortSpace, getMediumSpace, getMedium
};
