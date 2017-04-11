class ClassdefProperty < Documentable
  attr_reader :type
  attr_reader :name
  attr_reader :description
  attr_reader :summary
  attr_reader :value # on classes only when enum AND dynamic

  def initialize(*args)
    super(*args)
    @name = @x.attributes['name'].value
    @value = @x.css('value').text
  end

  def chunk
    Chunk.join(doc, declaration)
  end
end
