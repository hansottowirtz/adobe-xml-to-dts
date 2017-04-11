module Beautifier
  class << self
    def beautify(desc)
      desc.split("\n").collect(&:strip)
        .reject(&:empty?)
        .join("\n")
    end

    def sort_descriptions(description, summary)
      if !description and !summary
        [nil, nil]
      elsif !description
        return [beautify(summary), nil]
      elsif !summary
        return [beautify(description), nil]
      else
        return [beautify(description), beautify(summary)]
      end
    end
  end
end
