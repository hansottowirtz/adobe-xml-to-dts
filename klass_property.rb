class KlassProperty < ClassdefProperty
  def initialize(*args, static)
    super(*args)
    @type = Type.map(Util.text_or_nil(@x.css('type')))
    @static = static
  end

  def declaration
    if constructor?
      d = "#{name}();"
    else
      d = "#{name}: #{type};"
    end
    if static? then "static #{d}" else d end
  end

  def constructor?
    name == 'constructor' && type == 'Function'
  end

  def static?
    @static
  end

  def deprecated?
    @description && @description.include?('deprecated')
  end

  def doc_tags
    tags = []
    tags << DocTag.new('constructor') if constructor?
    tags << DocTag.new('deprecated') if deprecated?
    tags
  end
end
