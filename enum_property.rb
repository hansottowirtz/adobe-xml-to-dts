class EnumProperty < ClassdefProperty
  attr_reader :value

  def initialize(*args)
    super(*args)
    @type = 'int'
  end

  def declaration
    "#{name} = #{value}"
  end
end
