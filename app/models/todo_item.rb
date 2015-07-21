class TodoItem < ActiveRecord::Base
  belongs_to :todo_list #created by todo_list:references when creating the rails g model

  def completed?
  	!completed_at.blank?
  end

end
