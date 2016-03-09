class Gratitude < ActiveRecord::Base
  belongs_to :user

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  # validates_attachment :image,
  # content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
end
