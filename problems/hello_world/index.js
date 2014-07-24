var verify = require('adventure-verify');

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({pass: 'green', fail: 'red'}, function (args, t) {
    var gulpfile = path.resolve(args[0]);

    //test if gulpfile is exists.
    t.ok(fs.existsSync(gulpfile), 'the gulpfile is created!');

    //test run result:
    t.test('run', function(st){
      exec('gulp', function(err, stdout){
        if(err) {
          st.ok(false, err);
        }
        st.ok(/hello\sworld/i.test(stdout), 'Come on, go next!');
        st.end();
      });
    });

    t.end();
});