# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_auctionhouse_session',
  :secret      => '29436433ba07b989efcb8e1bf44d3b8c0f35bccf001df92ef0f646387b77ab59b2641c57a6ab131bd544a0c0120bd0f01185f130e3ef3e88376397de7d36006e'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
