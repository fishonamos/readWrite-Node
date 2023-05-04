const fs = require('fs');

// Read the contents of input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Write the contents to output.txt
  fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
});
