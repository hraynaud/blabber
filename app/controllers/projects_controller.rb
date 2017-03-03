class ProjectsController < ApplicationController

  before_action :authenticate_request, only: [:create]

  def index
    @projects = Blab.all.order(created_at: :desc)
    render json: @projects, include: { user: { only: [:handle] } }, only: [:id, :content]
  end

  def create
    binding.pry
    @project = @current_user.projects.build(project_params)
    if @project.save
      render json: @project, include: { user: { only: [:handle] } }, only: [:id, :content], status: :created, location: project_url(@project, format: :json)
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  private
  def project_params
    params.require(:project).permit(:name, :description)
  end
end
