# Adobe Typescript
### A .d.ts generator for ExtendScript

This Ruby script converts ExtendScript Toolkit's Object Model Viewer `.xml` files to `.d.ts` files
for Typescript. You can find those in the [types/built](types/built) folder.

I am searching for more `omv.xml` files, which are found in the
`/Library/Application Support/Adobe/Scripting Dictionaries CC` folder on a Mac.
Please open an issue or pull request if you have more than just the Photoshop,
Illustrator, ScriptUI and Javascript `.xml`s!

## Usage

```bash
./bin/adobe-types res/illustrator.xml res/photoshop.xml types/built/
./bin/adobe-types res/scriptui.xml types/built/scriptui.d.ts
```

## Setup

Depends on Ruby, probably `>= 2.0.0`

```bash
bundle install
```
