# --------------------------------------
#   Config
# --------------------------------------

# ----- Middleman ----- #

activate :livereload

# ----- Assets ----- #

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :relative_links, true

# ----- Images ----- #

activate :automatic_image_sizes

# ----- Helpers ----- #

require "lib/custom_helpers"
helpers CustomHelpers

# --------------------------------------
#   Content
# --------------------------------------

# ----- Blog ----- #

activate :blog do |blog|
  blog.layout = "layout_blog"
  blog.permalink = "{title}"
  blog.prefix = "blog"
  blog.sources = "articles/{title}.html"
end

# ----- Directories for assets (needs to be activated after blog) ----- #

activate :directory_indexes

# ----- Markdown ----- #

set :markdown_engine, :redcarpet
set :markdown, with_toc_data: true

# --------------------------------------
#   Production
# --------------------------------------

# ----- Prefixing ----- #

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  config.cascade = false
end

# ----- Build ----- #

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :gzip
end

# ----- Deploy ----- #

activate :deploy do |deploy|
  deploy.method = :git
end
