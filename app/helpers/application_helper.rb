module ApplicationHelper
  def versions
    {
      alpine: `cat /etc/alpine-release 2>/dev/null`.chomp,
      ruby: RUBY_VERSION,
      rails: Rails.version,
      webpacker: Gem.loaded_specs['webpacker'].version.to_s,
      postgres:
        ActiveRecord::Base.connection.select_value('SHOW server_version;'),
      redis: Redis.new.info['redis_version'],
    }
  end
end
