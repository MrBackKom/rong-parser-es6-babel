var babel = require('babel-core');
var transform = babel.transform;

module.exports = function (content,file,conf){		
	var result = transform(content, {presets: ["es2015"]});
    var code = result.code;
    return code;   
}