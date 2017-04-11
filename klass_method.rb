class KlassMethod < Documentable
  attr_reader :name
  attr_reader :return_type

  def initialize(*args)
    super(*args)
    @name = @x.attributes['name'].value
    @return_type = Type.map(Util.text_or_nil(@x.css('> datatype type')))
  end

  def declaration
    chunk = Chunk.new
    if @name == '[]'
      chunk.puts "[#{parameters[0].declaration}]: #{@return_type};"
    else
      chunk.puts "#{@name}(#{parameters.collect(&:declaration).join(', ')}): #{@return_type};"
    end
  end

  def doc_tags
    tags = []
    parameters.each do |param|
      tags << param.doc_tag
    end
    tags << DocTag.new('deprecated') if deprecated?
    tags
  end

  def deprecated?
    @description && @description.include?('deprecated')
  end

  def parameters
    @x.css('parameter').collect{ |x_p| Parameter.new(x_p) }
  end

  def chunk
    Chunk.join(doc, declaration)
  end
end
