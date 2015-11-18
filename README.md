
# rong-parser-es6-babel

rong插件 

todo:编译es6/es2015 到es5

##安装

``` shell
npm install -g rong
npm install -g rong-parser-es6-babel
```

## fis-conf.js 配置 

``` js
fis.config.merge({
	project:{
		fileType:{
			text:'es6'
		}
	},
	modules:{
		parser:{
			es6:'es6-babel'
		}
	},
	roadmap:{
		ext:{
			es6:'js'
		}
	}
});
```

或者 

``` js
fis.config.set('project.fileType.text', 'es6');
fis.config.set('modules.parser.es6', 'es6-babel');
fis.config.set('roadmap.ext.es6', 'js');
```