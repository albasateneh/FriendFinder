var friendsArray = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
        
    });

    app.post('/api/friends', function(req, res) {
		// Capture the user input object
        var userInput = req.body;
        console.log(req.body)
        friendsArray.push(userInput);
        res.json(req.body)
    });
}