var babel = require('barbel-core');
var transform = babel.transform;

module.exports = function (content,file,conf){	
	
	var result = transform(content, conf);
    var code = result.code;
    return code;   
}