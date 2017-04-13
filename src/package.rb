class Package < X
  def initialize(*args)
    super(*args)
    @classdefs = []
    x_classdefs = @x.css('classdef')
    x_classdefs.each do |x_classdef|
      @classdefs << Classdef.appropriate_new(x_classdef)
    end
  end

  def chunk
    Chunk.join_n(1, *@classdefs.collect(&:chunk))
  end
end
