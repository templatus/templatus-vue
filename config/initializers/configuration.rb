Rails.configuration.x.app_host = ENV.fetch('APP_HOST', 'localhost:3000')

Rails.configuration.x.git.commit_sha =
  (ENV.fetch('COMMIT_SHA') { `git rev-parse HEAD` }).first(7)

Rails.configuration.x.git.commit_time =
  ENV.fetch('COMMIT_TIME') { `git show -s --format=%cI`.chomp }
