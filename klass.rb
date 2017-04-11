class Klass < Classdef
  def declaration
    chunk = Chunk.new
    chunk.puts "export declare class #{name}"
    if st = superclass_text
      chunk.print " extends #{superclass_text}"
    end
    chunk.print ' {'

    chunk.merge Chunk.new(
      properties
      .uniq(&:name)
      .collect(&:chunk)
      .join("\n")
    ).pad(1)

    chunk.merge Chunk.new(
      methods
      .uniq(&:name)
      .collect(&:chunk)
      .join("\n")
    ).pad(1)

    chunk.puts '}'
    chunk
  end

  def properties
    @properties ||= @x.css('property').collect{ |x_p| KlassProperty.new(x_p, static?) }
  end

  def static?
    enum? && dynamic?
  end

  def superclass_text
    Util.text_or_nil @x.css('> superclass')
  end

  def doc_tags
    tags = [DocTag.new('class')]
    tags << DocTag.new('extends', superclass_text) if superclass_text
    tags
  end

  def methods
    @methods ||= @x.css('method').collect{ |x_m| KlassMethod.new(x_m) }
  end
end
