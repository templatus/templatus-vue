return unless Rails.env.test?

Rails.application.load_tasks unless defined?(Rake::Task)

CypressRails.hooks.before_server_start do
  # Called once, before either the transaction or the server is started
end

CypressRails.hooks.after_server_start do
  # After the server has booted we add the Click to the existing fixture list!
end

CypressRails.hooks.after_transaction_start do
  # After each transaction, add this click (will be rolled back on reset)
end

CypressRails.hooks.after_state_reset do
  # Triggered after `/cypress_rails_reset_state` is called
end

CypressRails.hooks.before_server_stop do
  # Called once, at_exit
end
