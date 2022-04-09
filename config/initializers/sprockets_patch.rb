# Patch Sprockets to avoid digesting assets when they are already digested
# Remove this when https://github.com/rails/sprockets/pull/726 is merged
Sprockets::DigestUtils.module_eval do |_variable|
  def already_digested?(name)
    name =~ /-([0-9a-zA-Z]{7,128})\.digested/
  end
end
