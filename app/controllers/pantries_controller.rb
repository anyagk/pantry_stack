class PantriesController < ApplicationController
  before_action :require_current_user

  def index
    @pantries = current_user.pantries
  end

  def show
  end

  # GET /pantry/new
  def new
    @pantry = Pantry.new
  end

  # GET /pantry/1/edit
  def edit
  end

  # POST /pantry
  # POST /pantry.json
  def create
    @pantry = current_user.pantries.new(pantry_params)

    respond_to do |format|
      if @pantry.save
        format.html { redirect_to @pantry }
        format.json { render :show, status: :created, location: @pantry }
      else
        format.html { render :new }
        format.json { render json: @pantry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pantry/1
  # PATCH/PUT /pantry/1.json
  def update
    respond_to do |format|
      if @pantry.update(pantry_params)
        format.html { redirect_to @pantry, notice: 'pantry was successfully updated.' }
        format.json { render :show, status: :ok, location: @pantry }
      else
        format.html { render :edit }
        format.json { render json: @pantry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pantry/1
  # DELETE /pantry/1.json
  def destroy
    @pantry.destroy
    respond_to do |format|
      format.html { redirect_to pantry_url, notice: 'pantry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pantry
      @pantry = Pantry.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pantry_params
      params.require(:pantry).permit(:food_id)
    end
end

