module.exports = {
  dist: {
      options: {
        style: 'expanded',
        require: ['susy','bourbon']
      },
      files: {
        'css/style.css': 'scss/style.scss'
      }
    }
}