const path = require('path'),
  express= require('express'),
  webpack= require('webpack'),
  webpackConfig = require('../webpack.config.js'),
  app = express(),
  port = process.env.PORT || 5000;

let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath, stats: {colors:true}
})); 
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, 'dist'))); 
app.get('*', (req,res,next) => {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if(err){
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end(); 
  });
  // res.sendFile(path.resolve('dist', 'index.html'));

});



app.listen(port, () => { console.log(`App is listening on port ${port}`)});
