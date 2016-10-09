require "./config/seed/generic_seed"

class Seed
  class PostsSeed < GenericSeed
    def self.klass
      Post
    end

    private

    def attributes_for_create
      html = "<p>#{record.markdown.split("\n").join("</p><p>")}</p>"
      attributes.merge(
        author_id: first_user.id,
        created_by: first_user.id,
        updated_by: first_user.id,
        published_by: first_user.id,
        html: html
      )
    end
  end
end
