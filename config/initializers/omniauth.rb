OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '1073315332430-36lamkp30sss6jcb0s0tr56pdkrmunbi.apps.googleusercontent.com', 'MYDzWx-RXhwQG2tMDKCRijPq', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end