module.exports = [
  {
    entry: {
     "node-theme": "./app/components/admin/node-theme.vue",
     "node-settings": "./app/components/admin/node-settings.vue",
     "widget-theme": "./app/components/admin/widget-theme.vue",
     "node-general": "./app/components/admin/node-general.vue"
    },
    output: {
      filename: "./app/bundle/[name].js"
    },
    module: {
      loaders: [
          { test: /\.vue$/, loader: "vue" }
      ]
    }
  }
];
