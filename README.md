### Super simple mobx teaching

### Plugin required

### Decorator support
#### install
```bash
yarn add @babel/plugin-proposal-decorators -S
yarn add @babel/plugin-proposal-class-properties -S
```
#### package.json
```javascript
"babel": {
	"plugins": [
		["@babel/plugin-proposal-decorators", { "legacy":true }],
		["@babel/plugin-proposal-class-properties", {"loose":true}]
	],
	"presets": [
	  "react-app"
	]
	},
	"eslintConfig": {
	  "parserOptions": {
		  "ecmaFeatures": {
			  "legacyDecorators": true
		  }
	  },
	"extends": "react-app"
},
```
### Clone
```bash
git clone https://github.com/HHardyy/eazy-mobx.git
````### Run
```bash
yarn start
```