class Classdef < Documentable
  attr_reader :description
  attr_reader :summary

  def initialize(*args)
    super(*args)
  end

  def name
    @x.attributes['name'].value
  end

  def enum?
    @x.attributes['enumeration']
  end

  def dynamic?
    @x.attributes['dynamic']
  end

  def chunk
    Chunk.join(doc, declaration)
  end

  def doc
    Doc.generate(@description, @summary, doc_tags)
  end

  def doc_tags
    []
  end

  def self.appropriate_new(x)
    classdef = Classdef.new(x)
    if classdef.enum? && classdef.dynamic?
      Klass.new(x)
    elsif classdef.enum?
      Enum.new(x)
    else
      Klass.new(x)
    end
  end
end
