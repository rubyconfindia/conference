set :theme, "bridgepdx"

set :scm, "git"
set :repository,  "git://github.com/kaiwren/conference.git"
set :branch, "master"
set :deploy_to, "/var/www/rubyconfindia"
set :host, "rubyconfindia.org"
set :user, "rails"

set :deploy_via, :remote_cache
role :app, host
role :web, host
role :db,  host, :primary => true
default_run_options[:pty] = true
