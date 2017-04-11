module Type
  class << self
    def aliases
      h = {
        'bool' => 'boolean',
        'Boolean' => 'boolean',
        'uint' => 'number',
        'int' => 'number',
        'Int32' => 'number',
        'Number' => 'number',
        'String' => 'string',
        'Any' => 'any',
        'Array' => 'any[]',
        'Undefined' => 'undefined'
      }
      h[nil] = 'void'
      h
    end

    def map(type_text)
      type_alias = aliases[type_text]
      if type_alias then type_alias else type_text end
    end
  end
end
