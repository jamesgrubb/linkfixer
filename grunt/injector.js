module.exports = {
   options: {
  min: true,
  addRootSlash: false,
 },
    local_dependencies: {
      files: {
        'index.html': ['scripts/*.js', 'css/*.css', 'bower.json'],
      }
    }
}