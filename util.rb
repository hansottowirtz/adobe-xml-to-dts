module Util
  class << self
    def text_or_nil(ns)
      n = ns[0]
      if n then n.text else nil end
    end
  end
end
