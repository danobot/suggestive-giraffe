var funny = require('./index');

test('it generates an id', () => {
  console.log("Id:", funny.get());
});

test('it returns the number of addresses', () => {
  console.log("Count:", funny.getIdSpaceCount());
});
