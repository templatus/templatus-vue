class ClicksController < ApplicationController
  def index
    render json: {
             total: Click.count,
             items: Click.order(created_at: :desc).limit(5),
           }
  end

  def create
    click =
      Click.create! user_agent: request.user_agent,
                    ip: anonymize(request.remote_ip)
    ActionCable.server.broadcast 'clicks_channel', click

    head :ok
  end

  private

  def anonymize(ip)
    ip.sub(/\.\d+$/, '.0')
  end
end
