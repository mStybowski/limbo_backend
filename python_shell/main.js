let {PythonShell} = require('python-shell'); 

// Configuration object
let defaultOptions = {
    mode: 'text',
    scriptPath: './pythonScripts/',
    args: ['1', '2', '3']
};


class PythonInterpreter{

    static spawn(url, options, onMessageCallback){
        let pInterpreter = new PythonShell(url, options);
        pInterpreter.on('message', onMessageCallback);

        return pInterpreter;
    }

    static run({url, options = defaultOptions, callback}){
        // You should print data using print() in python
        // Callback receives two parameters:
        // err, results
        // where, results is an array consisting of messages collected during execution
        console.log("url: " + url)
        console.log(defaultOptions.scriptPath);
        PythonShell.run(url, options, callback);
    }

}

module.exports = PythonInterpreter