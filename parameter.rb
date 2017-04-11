class Parameter < Describable
  attr_reader :name
  attr_reader :type

  def initialize(x, optional = false)
    super(x)
    @name = @x.attributes['name'].value
    @name = "_#{@name}" if Typescript::RESERVED_KEYWORDS.include? @name
    @name = /(\D+)\d/.match(@name)[1] if @name.end_with? '...'
    @type = Type.map(Util.text_or_nil(@x.css('> datatype type')))
    @optional = optional || @x.attributes['optional']
  end

  def declaration
    "#{@name}#{"?" if optional?}: #{@type}"
  end

  def optional?
    @optional
  end

  def doc_tag
    if @description
      if @summary
        DocTag.new('param', "{#{@type}} #{@name} - #{@summary} / #{@description}")
      else
        DocTag.new('param', "{#{@type}} #{@name} - #{@description}")
      end
    else
      DocTag.new('param', "{#{@type}} #{@name}")
    end
  end
end
