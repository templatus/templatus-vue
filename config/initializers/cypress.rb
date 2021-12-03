return unless Rails.env.test?

Rails.application.load_tasks unless defined?(Rake::Task)

CypressRails.hooks.before_server_start do
  # Add our fixtures before the resettable transaction is started
  Rake::Task['db:fixtures:load'].invoke
end

CypressRails.hooks.after_server_start do
  # After the server has booted we add the Click to the existing fixture list!
end

CypressRails.hooks.after_transaction_start do
  # After each transaction, add this click (will be rolled back on reset)
end

CypressRails.hooks.after_state_reset do
  # After state reset
end

CypressRails.hooks.before_server_stop do
  # Purge and reload the test database so we don't leave our fixtures in there
  Rake::Task['db:test:prepare'].invoke
end
