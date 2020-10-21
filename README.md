# webpack-lending

## Scripts

### Start webpack with webpack-dev-server in development mode.
Run script from the project dir.
```
npx webpack-dev-server --config ./../../webpack.config.js --entry bundle=./src/scripts/index.js --output ./dist/[name].js --mode development --contentBase=../
```

### Start webpack in production mode
Run script from the project dir.
```
npx webpack --config ./../../webpack.config.js --entry bundle=./src/scripts/index.js --output ./dist/[name].js
```