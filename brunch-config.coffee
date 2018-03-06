exports.config =
  jsWrapper: 'raw'
  files:

    javascripts: 
      joinTo:
        'js/app.js' 
        # 'js/app.js': /^app/,
        # 'js/vendor.js': /^(?!app)/

  
    stylesheets:  
      joinTo: 'css/app.css' 
  
  paths:
    public: 'build'
    watched: [ 'app' ]
  
  plugins: 
    babel:
        ignore: [
          /^(node_modules|vendor)/
        ]      
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
      # Foundation: 'foundation-sites'
  
  modules:
    enabled: true
    addSourceURLs: false
    # wrapper: false
    # definition: false
    # autoRequire: 
          # 'js/app.js': ['initialize']
    