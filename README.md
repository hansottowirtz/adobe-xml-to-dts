# Adobe Typescript
### A .d.ts generator for ExtendScript

This Ruby script converts ExtendScript Toolkit's Object Model Viewer `.xml` files to `.d.ts` files
for Typescript. You can find those in the [types/built](types/built) folder.

Currently these apps have built xmls:
- Illustrator
- Photoshop
- Indesign

I am searching for more `omv.xml` files, which are found in
[these directories](https://github.com/ExtendScript/Sublime-ExtendScript) on a Mac.
Please open an issue or pull request if you have more than just the these `.xml`s!
(Like for `File` and `UnitValue`, which must exist because they exist [here](http://jongware.mit.edu/iljscs6html/iljscs6/inxx.html))

## Usage

```bash
./bin/adobe-typescript res/illustrator.xml res/photoshop.xml types/built/
./bin/adobe-typescript res/scriptui.xml types/built/scriptui.d.ts
```

## Setup

Depends on Ruby, probably `>= 2.0.0`

```bash
git clone https://github.com/hansottowirtz/adobe-typescript
cd adobe-typescript
chmod +x ./bin/adobe-typescript
bundle install
```
