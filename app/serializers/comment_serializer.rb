class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :article, :user
  has_one :article
  has_one :book
  has_one :user
end