class Describable < X
  def initialize(*args)
    super(*args)
    @description, @summary = Beautifier.sort_descriptions(
      Util.text_or_nil(@x.css('description')),
      Util.text_or_nil(@x.css('shortdesc'))
    )
    # binding.pry
    # puts @description, @summary
  end
end
