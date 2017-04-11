require 'pry'
require 'nokogiri'
require 'fileutils'
require_relative './x'
require_relative './describable'
require_relative './documentable'
require_relative './classdef'
require_relative './classdef_property'
require_relative './doc'
require_relative './doc_tag'
require_relative './chunk'
require_relative './klass'
require_relative './klass_property'
require_relative './klass_method'
require_relative './enum'
require_relative './enum_property'
require_relative './beautifier'
require_relative './util'
require_relative './type'
require_relative './parameter'
require_relative './typescript'
require_relative './package'

module AdobeTypescript
  class << self
    def executing_dir
      Dir.pwd
    end

    def run(relative_input_file, relative_output_file)
      input_file = File.expand_path(relative_input_file, executing_dir)
      output_file = File.expand_path(relative_output_file, executing_dir)
      if !output_file.end_with? '.d.ts'
        raise "#{output_file} is not a directory" if !File.directory? output_file
        output_file = "#{output_file}/#{File.basename(input_file, '.xml')}.d.ts"
      end
      print "#{input_file} -> #{output_file}"
      doc = File.open(input_file) { |f| Nokogiri::XML(f) }
      package = Package.new(doc.css('package')[0])
      text = ''
      helper_file = "../helpers/#{File.basename(output_file, '.d.ts')}-helper.d.ts"
      if File.file?(File.expand_path(helper_file, File.dirname(output_file)))
        print " (with helper file)"
        text << "/// <reference path=\"#{helper_file}\"/>\n"
      end
      text << package.chunk.to_s
      FileUtils.mkdir_p(File.dirname(output_file))
      File.write(output_file, text)
      puts
    end
  end
end
