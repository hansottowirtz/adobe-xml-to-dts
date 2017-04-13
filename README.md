# Adobe Object Mobel Viewer .d.ts Generator
### A Typescript declaration file convertor for ExtendScript

This Ruby script converts ExtendScript Toolkit's Object Model Viewer `.xml` files to `.d.ts` files
for Typescript. You can find those in the [types/](types/) folder.

Currently these apps have built declaration files:
- Illustrator
- Photoshop
- Indesign

Please open an issue if you want to have another `.xml` converted.

The files have quite a lot of errors (which is the fault of Adobe) and still need some adjustments
before they can be used in a real project.

## Usage

```bash
./bin/adobe-xml-to-dts res/illustrator.xml res/photoshop.xml types/
./bin/adobe-xml-to-dts res/scriptui.xml types/built/scriptui.d.ts
```

## Setup

Depends on Ruby, probably `>= 2.3.0`

```bash
git clone https://github.com/hansottowirtz/adobe-xml-to-dts
cd adobe-xml-to-dts
chmod +x ./bin/adobe-xml-to-dts
bundle install
```
