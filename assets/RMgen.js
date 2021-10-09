var bio = require('bio')

bio.appendFile('name', 'age', 'height', function (err) {
    if (err) throw err;
    console.log('saved')
})