class Enum < Classdef
  def declaration
    chunk = Chunk.new
    chunk.puts "export declare enum #{name} {"
    chunk.puts_with_pad properties.collect(&:chunk).join(",\n"), 1
    chunk.puts '}'
    chunk
  end

  def properties
    @properties ||= @x.css('property').collect{ |x_p| EnumProperty.new(x_p) }
  end

  def doc_tags
   @doc_tags ||= [DocTag.new('enum')]
  end
end
