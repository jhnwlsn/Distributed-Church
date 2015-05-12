class RootUrl < Middleman::Extension
  def root_url
    return "/root_url"
  end

  def initialize(app, options_hash={}, &block)
    super
  end
  alias :included :registered
end

::Middleman::Extensions.register(:my_feature, MyFeature)
