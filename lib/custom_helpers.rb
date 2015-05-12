module CustomHelpers
  # Table of Contents
  def table_of_contents(resource)
    content = File.read(resource.source_file)
    toc_renderer = Redcarpet::Render::HTML_TOC.new(nesting_level: 1)
    markdown = Redcarpet::Markdown.new(toc_renderer)
    markdown.render(content)
  end
end
