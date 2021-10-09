var bio = require('bio')

bio.writeFile('name', 'age', 'height', function (err) {
    if (err) throw err;
    console.log('saved')
})
