exports.config =
  
  files:

    javascripts: 
      joinTo: 'js/app.js'
  
    stylesheets: 
      joinTo: 'css/app.css'
  
  paths:
    public: 'builds/dev'
    watched: [ 'app' ]
  
  plugins: 
    sass: 
      options:
        includePaths: [ 'node_modules/foundation-sites/scss']
        precision: 8

    kss:
      addCssFiles: true
      addJsFiles: false
      kssConfig: {
                  "title"        : "FreeSpace Foundation6 - Styleguide"
                  # "mask"         : "*.scss",
                  # "placeholder"  : "[modifier]",
                  # "builder"      : "node_modules/michelangelo/kss_styleguide/custom-template/",
                  # "source"       : "src/",
                  "destination"  : "documentation/styleguide/"
                  # "homepage"     : "../kss_styleguide/index.html",
                  # "css": [],
                  # "js" : []
                }

    # pug:
    #   pugRuntime: require('path').resolve('.', 'vendor', 'pug_runtime.js')
    autoReload:
        enabled:
          css: true
          js: true
          assets: true
      
  npm:
    enabled: true
    globals:
      $: 'jquery'
      jQuery: 'jquery'
  
  modules:
    addSourceURLs: true