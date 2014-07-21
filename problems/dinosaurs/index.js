var verify = require('adventure-verify');
var path = require('path');

exports.problem = 'Make a dinosaur sound.\n'
    + 'Use `$ADVENTURE_COMMAND verify YOUR_TEXT...` to make your sound.'
;

exports.verify = verify({modeReset: true}, function(args, t){
    var f = require(path.resolve(args[0]));
    t.equal(typeof f, 'function', 'must function');
    t.end();
});

// exports.verify = function (args, cb) {
//     if (/RAWR/.test(args)) {
//         console.log('Wow that is a convincing dinosaur.\n');
//         cb(true);
//     }
//     else if (/rawr/i.test(args)) {
//         console.log('Close, but too quiet. Try louder.\n');
//         cb(false);
//     }
//     else {
//         console.log("That doesn't sound like a dinosaur at all.\n");
//         cb(false);
//     }
// };