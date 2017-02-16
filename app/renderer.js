// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const _exec = require('child_process').exec;
document.getElementById('btnRunCommand').addEventListener("click", function() {
	let cmd = document.getElementById('txtCmd').value;

	_exec(cmd, function(err, output) {
		var outputElement = document.getElementById('divCmdResult');
		if (err) {
			outputElement.innerHTML = 'Error: ' + err;
		} else {
			outputElement.innerHTML = 'Results: ' + (output && output.split('\n').join('<br/>'));
		}
	});
});


/*exec('ls', function(err, data) {
	console.log('!!! data: ' + data);
});*/
