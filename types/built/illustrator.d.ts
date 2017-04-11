/// <reference path="../helpers/illustrator-helper.d.ts"/>
/**
 * The screen mode.
 * @enum
 */
export declare enum ScreenMode {
	/** Display multiple windows. */
	MULTIWINDOW = 1,
	/** Full screen with menu bar. */
	DESKTOP = 2,
	/** Full screen without menu bar. */
	FULLSCREEN = 3
}

/**
 * The color model.
 * @enum
 */
export declare enum ColorType {
	None = 6,
	CMYK = 1,
	GRAY = 0,
	RGB = 5,
	SPOT = 3,
	PATTERN = 2,
	GRADIENT = 4
}

/**
 * The color spaces available for documents.
 * @enum
 */
export declare enum DocumentColorSpace {
	/** RGB document color space. */
	RGB = 1,
	/** CMYK document color space. */
	CMYK = 2
}

/**
 * The preset types available for new documents.
 * @enum
 */
export declare enum DocumentPresetType {
	/** The default Print document preset. */
	Print = 1,
	/** The default Web document preset. */
	Web = 2,
	/** The default Mobile document preset. */
	Mobile = 3,
	/** The default Video and Film document preset. */
	Video = 4,
	/** The default CMYK document preset. */
	BasicCMYK = 5,
	/** The default RGB document preset. */
	BasicRGB = 6
}

/**
 * The raster resolutions available when creating a new 
 * document.
 * @enum
 */
export declare enum DocumentRasterResolution {
	/** Low raster resolution, 72 PPI. */
	ScreenResolution = 1,
	/** Medium raster resolution, 150 PPI. */
	MediumResolution = 2,
	/** High raster resolution, 300 PPI. */
	HighResolution = 3
}

/**
 * The transparency grid for the new document, in video 
 * presets.
 * @enum
 */
export declare enum DocumentTransparencyGrid {
	/** No grids. */
	TransparencyGridNone = 0,
	/** Light grid colors. */
	TransparencyGridLight = 1,
	/** Medium grid colors. */
	TransparencyGridMedium = 2,
	/** Dark color grids. */
	TransparencyGridDark = 3,
	/** Red grids. */
	TransparencyGridRed = 4,
	/** Orange grids. */
	TransparencyGridOrange = 5,
	/** Green grids. */
	TransparencyGridGreen = 6,
	/** Blue grids. */
	TransparencyGridBlue = 7,
	/** Purple grids. */
	TransparencyGridPurple = 8
}

/**
 * The preview modes available when creating a new document.
 * @enum
 */
export declare enum DocumentPreviewMode {
	/** Default Preview mode. */
	DefaultPreview = 1,
	/** Pixel Preview mode. */
	PixelPreview = 2,
	/** Overprint Preview Mode. */
	OverprintPreview = 3
}

/**
 * The layout of artboards in document.
 * @enum
 */
export declare enum DocumentArtboardLayout {
	/** Arrange artboards in Grid by Row pattern. */
	GridByRow = 1,
	/** Arrange artboards in Grid by Column pattern. */
	GridByCol = 2,
	/** Arrange artboards in a single row. */
	Row = 3,
	/** Arrange artboards in a single column. */
	Column = 4,
	/**
	 * Arrange artboards in Grid by Row pattern from right-to-left.
	 */
	RLGridByRow = 5,
	/**
	 * Arrange artboards in Grid by Column pattern from 
	 * right-to-left.
	 */
	RLGridByCol = 6,
	/** Arrange artboards in a single row from right-to-left. */
	RLRow = 7
}

/**
 * The color space.
 * @enum
 */
export declare enum ImageColorSpace {
	/** Gray color space. */
	GrayScale = 1,
	/** RGB color space. */
	RGB = 2,
	/** CMYK color space. */
	CMYK = 3,
	/** LAB color space. */
	LAB = 4,
	/** Separation color space. */
	Separation = 5,
	/** DeviceN color space. */
	DeviceN = 6,
	/** Indexed color space. */
	Indexed = 7
}

/**
 * The stroke cap.
 * @enum
 */
export declare enum StrokeCap {
	/** Butted cap. */
	BUTTENDCAP = 1,
	/** Rounded cap. */
	ROUNDENDCAP = 2,
	/** Projecting cap. */
	PROJECTINGENDCAP = 3
}

/**
 * The stroke joint.
 * @enum
 */
export declare enum StrokeJoin {
	/** Mitered joints. */
	MITERENDJOIN = 1,
	/** Rounded joints. */
	ROUNDENDJOIN = 2,
	/** Beveled joints. */
	BEVELENDJOIN = 3
}

/**
 * The path point selection state.
 * @enum
 */
export declare enum PathPointSelection {
	/** Path point not selected. */
	NOSELECTION = 1,
	/** Anchor point selected. */
	ANCHORPOINT = 2,
	/** Left direction point selected. */
	LEFTDIRECTION = 3,
	/** Right direction point selected. */
	RIGHTDIRECTION = 4,
	/** Left and right direction points selected. */
	LEFTRIGHTPOINT = 5
}

/**
 * The path point type: smooth/corner.
 * @enum
 */
export declare enum PointType {
	/** Smooth path point. */
	SMOOTH = 1,
	/** Corner point. */
	CORNER = 2
}

/**
 * The type of text art.
 * @enum
 */
export declare enum TextType {
	/** Text from a point. */
	POINTTEXT = 0,
	/** Text within an area. */
	AREATEXT = 1,
	/** Text on a path. */
	PATHTEXT = 2
}

/**
 * The type of text antialiasing.
 * @enum
 */
export declare enum TextAntialias {
	/** Text from a point. */
	NONE = 1,
	/** Text within an area. */
	SHARP = 2,
	/** Text on a path. */
	CRISP = 3,
	/** Text on a path. */
	STRONG = 4
}

/**
 * The gradient type.
 * @enum
 */
export declare enum GradientType {
	/** Linear gradient. */
	LINEAR = 1,
	RADIAL = 2
}

/**
 * The orientation.
 * @enum
 */
export declare enum TextOrientation {
	/** Horizontal orientation. */
	HORIZONTAL = 0,
	/** Vertical orientation. */
	VERTICAL = 1
}

/**
 * The crop style.
 * @enum
 */
export declare enum CropOptions {
	/** Standard crop style. */
	Standard = 1,
	/** Japanese crop style. */
	Japanese = 2
}

/**
 * The raster link state.
 * @enum
 */
export declare enum RasterLinkState {
	/** Image data is not set. */
	NODATA = 1,
	/** Image data is from the linked file. */
	DATAFROMFILE = 2,
	/** Image data has been modified. */
	DATAMODIFIED = 3
}

/**
 * The tab alignment.
 * @enum
 */
export declare enum TabStopAlignment {
	Left = 0,
	Center = 1,
	Right = 2,
	Decimal = 3
}

/**
 * The paragraph alignment.
 * @enum
 */
export declare enum Justification {
	LEFT = 0,
	RIGHT = 1,
	CENTER = 2,
	FULLJUSTIFYLASTLINELEFT = 3,
	FULLJUSTIFYLASTLINERIGHT = 4,
	FULLJUSTIFYLASTLINECENTER = 5,
	FULLJUSTIFY = 6
}

/**
 * The transformation type.
 * @enum
 */
export declare enum Transformation {
	/** Transform relative to the illustration's page origin. */
	DOCUMENTORIGIN = 1,
	/** Transform relative to the object's top left corner. */
	TOPLEFT = 2,
	/** Transform relative to the object's left edge. */
	LEFT = 3,
	/** Transform relative to the object's bottom left corner. */
	BOTTOMLEFT = 4,
	/** Transform relative to the object's top edge. */
	TOP = 5,
	/** Transform relative to the object's center. */
	CENTER = 6,
	/** Transform relative to the object's bottom edge. */
	BOTTOM = 7,
	/** Transform relative to the object's top right corner. */
	TOPRIGHT = 8,
	/** Transform relative to the object's right edge. */
	RIGHT = 9,
	/** Transform relative to the object's bottom right corner. */
	BOTTOMRIGHT = 10
}

/**
 * Illustrator library types.
 * @enum
 */
export declare enum LibraryType {
	/** Illustrator artwork. */
	ILLUSTRATORARTWORK = 1,
	/** Illustrator swatches library. */
	SWATCHES = 2,
	/** Illustrator brushes library. */
	BRUSHES = 3,
	/** Illustrator graphic styles library. */
	GRAPHICSTYLES = 4,
	/** Illustrator symbols library. */
	SYMBOLS = 5
}

/**
 * Savable document types.
 * @enum
 */
export declare enum DocumentType {
	/** Illustrator file format. */
	ILLUSTRATOR = 1,
	/** EPS file format. */
	EPS = 2,
	/** Acrobat PDF file format. */
	PDF = 3,
	/** FXG file format. */
	FXG = 4
}

/**
 * Export file types.
 * @enum
 */
export declare enum ExportType {
	/** JPEG export file format. */
	JPEG = 1,
	/** Photoshop export file format. */
	PHOTOSHOP = 2,
	/** SVG export file format. */
	SVG = 3,
	/** PNG 8-bit export file format. */
	PNG8 = 4,
	/** PNG 24-bit export file format. */
	PNG24 = 5,
	/** GIF export file format. */
	GIF = 6,
	/** Flash export file format. */
	FLASH = 7,
	/** AutoCAD export file format. */
	AUTOCAD = 8,
	/** TIFF export file format. */
	TIFF = 9,
	/** Web Optimized SVG export file format. */
	WOSVG = 10
}

/**
 * Method used to reduce color for PNG8 and GIF export formats.
 * @enum
 */
export declare enum ColorReductionMethod {
	SELECTIVE = 0x536C7476,
	ADAPTIVE = 0x41647074,
	PERCEPTUAL = 0x50726370,
	WEB = 0x57656220
}

/**
 * Method used to dither colors for PNG8 and GIF export 
 * formats.
 * @enum
 */
export declare enum ColorDitherMethod {
	/** No dithering. */
	NOREDUCTION = 0x4E6F6E65,
	DIFFUSION = 0x4466736E,
	PATTERNDITHER = 0x5074726E,
	NOISE = 0x424E6F69
}

/**
 * The compatibility type.
 * @enum
 */
export declare enum Compatibility {
	ILLUSTRATOR3 = 3,
	JAPANESEVERSION3 = 3,
	ILLUSTRATOR8 = 8,
	ILLUSTRATOR9 = 9,
	ILLUSTRATOR10 = 10,
	ILLUSTRATOR11 = 11,
	ILLUSTRATOR12 = 12,
	ILLUSTRATOR13 = 13,
	ILLUSTRATOR14 = 14,
	ILLUSTRATOR15 = 15,
	ILLUSTRATOR16 = 16,
	ILLUSTRATOR17 = 17
}

/**
 * This provides a means for matching the color characteristics 
 * of a PDF document.
 * @enum
 */
export declare enum PDFXStandard {
	/** The user isn't complying with any PDF standard. */
	PDFXNONE = 1,
	/**
	 * Supports only a CMYK and spot color workflow, targeted to a 
	 * specific output device.
	 */
	PDFX1A2001 = 2,
	/**
	 * Supports only a CMYK and spot color workflow, targeted to a 
	 * specific output device.
	 */
	PDFX1A2003 = 3,
	/**
	 * Supports a color-managed workflow, allowing the use of 
	 * device-independent color in addition to CMYK and spot 
	 * colors.
	 */
	PDFX32001 = 4,
	/**
	 * Supports a color-managed workflow, allowing the use of 
	 * device-independent color in addition to CMYK and spot 
	 * colors.
	 */
	PDFX32002 = 4,
	/**
	 * Supports a color-managed workflow, allowing the use of 
	 * device-independent color in addition to CMYK and spot 
	 * colors.
	 */
	PDFX32003 = 5,
	/**
	 * Supports a color-managed workflow, allowing the use of 
	 * device-independent color in addition to CMYK and spot 
	 * colors.
	 */
	PDFX42007 = 6
}

/**
 * The PDF compatibility type.
 * @enum
 */
export declare enum PDFCompatibility {
	/** Acrobat version 4. */
	ACROBAT4 = 4,
	/** Acrobat version 5. */
	ACROBAT5 = 5,
	/** Acrobat version 6. */
	ACROBAT6 = 6,
	/** Acrobat version 7. */
	ACROBAT7 = 7,
	/** Acrobat version 8. */
	ACROBAT8 = 8
}

/**
 * The Photoshop compatibility type.
 * @enum
 */
export declare enum PhotoshopCompatibility {
	/** Photoshop version 8. */
	PHOTOSHOP8 = 1,
	/** Photoshop version 6. */
	PHOTOSHOP6 = 2
}

/**
 * The compression type.
 * @enum
 */
export declare enum CompressionQuality {
	/** Automatic compression. */
	None = 1,
	JPEGMINIMUM = 3,
	JPEGLOW = 4,
	JPEGMEDIUM = 5,
	JPEGHIGH = 6,
	JPEGMAXIMUM = 7,
	ZIP4BIT = 8,
	ZIP8BIT = 9,
	/**
	 * Automatically choose between JPEG and ZIP performing minimum 
	 * compression depending on images.
	 */
	AUTOMATICJPEGMINIMUM = 10,
	/** Automatic JPEG compression low. */
	AUTOMATICJPEGLOW = 11,
	/** Automatic JPEG compression medium. */
	AUTOMATICJPEGMEDIUM = 12,
	/** Automatic JPEG compression high. */
	AUTOMATICJPEGHIGH = 13,
	/** Automatic JPEG compression maximum. */
	AUTOMATICJPEGMAXIMUM = 14,
	/** Automatic JPEG2000 compression minimum. */
	AUTOMATICJPEG2000MINIMUM = 15,
	/** Automatic JPEG2000 compression low. */
	AUTOMATICJPEG2000LOW = 16,
	/** Automatic JPEG2000 compression medium. */
	AUTOMATICJPEG2000MEDIUM = 17,
	/** Automatic JPEG2000 compression high. */
	AUTOMATICJPEG2000HIGH = 18,
	/** Automatic JPEG2000 compression maximum. */
	AUTOMATICJPEG2000MAXIMUM = 19,
	/** Automatic JPEG2000 compression lossless. */
	AUTOMATICJPEG2000LOSSLESS = 20,
	JPEG2000MINIMUM = 21,
	JPEG2000LOW = 22,
	JPEG2000MEDIUM = 23,
	JPEG2000HIGH = 24,
	JPEG2000MAXIMUM = 25,
	JPEG2000LOSSLESS = 26
}

/**
 * PDF color conversion policy.
 * @enum
 */
export declare enum ColorConversion {
	/** Preserves color data as is. */
	None = 0,
	/**
	 * Converts all colors to the profile selected for Destination.
	 */
	COLORCONVERSIONTODEST = 1,
	/**
	 * Preserves color numbers for untagged content in the same 
	 * color space as the destination profile. Not available with 
	 * CMS off.
	 */
	COLORCONVERSIONREPURPOSE = 2
}

/**
 * PDF destination profile.
 * @enum
 */
export declare enum ColorDestination {
	/** N/A. */
	None = 0,
	/**
	 * Converts all colors to the profile selected for Destination.
	 */
	COLORDESTINATIONDOCCMYK = 1,
	/**
	 * Preserves color numbers for untagged content in the same 
	 * color space as the destination profile. Not available with 
	 * CMS off.
	 */
	COLORDESTINATIONWORKINGCMYK = 2,
	/**
	 * Preserves color numbers for untagged content in the same 
	 * color space as the destination profile. Not available with 
	 * CMS off.
	 */
	COLORDESTINATIONDOCRGB = 3,
	/**
	 * Preserves color numbers for untagged content in the same 
	 * color space as the destination profile. Not available with 
	 * CMS off.
	 */
	COLORDESTINATIONWORKINGRGB = 4,
	/**
	 * Preserves color numbers for untagged content in the same 
	 * color space as the destination profile. Not available with 
	 * CMS off.
	 */
	COLORDESTINATIONPROFILE = 5
}

/**
 * PDF ICC profile inclusion.
 * @enum
 */
export declare enum ColorProfile {
	/** All profiles removed (embedProfile == false) */
	None = 0,
	/** Everything gets tagged (embedProfile == true) */
	INCLUDEALLPROFILE = 1,
	/** Leave tagged items tagged, untagged items untagged. */
	LEAVEPROFILEUNCHANGED = 2,
	/** Tag all RGB, leave CMYK unchanged. */
	INCLUDERGBPROFILE = 3,
	/** Everything ends up tagged with the destination profile. */
	INCLUDEDESTPROFILE = 4
}

/**
 * The monochrome compression type.
 * @enum
 */
export declare enum MonochromeCompression {
	/** Automatic compression. */
	None = 0,
	/** CCITT Group 3 compression. */
	CCIT3 = 1,
	/** CCITT Group 4 compression. */
	CCIT4 = 2,
	/** ZIP compression. */
	MONOZIP = 3,
	/** RLE compression. */
	RUNLENGTH = 4
}

/**
 * Pdf trim mark weight options.
 * @enum
 */
export declare enum PDFTrimMarkWeight {
	TRIMMARKWEIGHT0125 = 1,
	TRIMMARKWEIGHT025 = 2,
	TRIMMARKWEIGHT05 = 3
}

/**
 * Pdf overprint options.
 * @enum
 */
export declare enum PDFOverprint {
	/** Preserve overprint. */
	PRESERVEPDFOVERPRINT = 1,
	/** Discard overprint. */
	DISCARDPDFOVERPRINT = 2
}

/**
 * Pdf print permissions.
 * @enum
 */
export declare enum PDFPrintAllowedEnum {
	/** Printing allowed none - 128bit. */
	PRINT128NONE = 1,
	/** Print allowed only in low resolution - 128bit. */
	PRINT128LOWRESOLUTION = 2,
	/** Print high resolution allowed - 128bit. */
	PRINT128HIGHRESOLUTION = 3,
	/** Printing allowed none - 40bit. */
	PRINT40NONE = 4,
	/** Print high resolution allowed - 40bit. */
	PRINT40HIGHRESOLUTION = 5
}

/**
 * Options available for making changes to a pdf document.
 * @enum
 */
export declare enum PDFChangesAllowedEnum {
	/** No changes allowed - 128bit. */
	CHANGE128NONE = 1,
	/** Editing page allowed - 128bit. */
	CHANGE128EDITPAGE = 2,
	/** Filling in of form field and signing allowed - 128bit. */
	CHANGE128FILLFORM = 3,
	/** Comment allowed - 128bit. */
	CHANGE128COMMENTING = 4,
	/** Any changes allowed except extracting of pages- 128bit. */
	CHANGE128ANYCHANGES = 5,
	/** No changes allowed - 40bit. */
	CHANGE40NONE = 6,
	/** Comment allowed - 40bit. */
	CHANGE40COMMENTING = 7,
	/** Page layout allowed - 40bit. */
	CHANGE40PAGELAYOUT = 8,
	/** Any changes allowed except extracting of pages- 40bit. */
	CHANGE40ANYCHANGES = 9
}

/**
 * The resample type.
 * @enum
 */
export declare enum DownsampleMethod {
	/** Downsampling. */
	NODOWNSAMPLE = 0,
	/** Average Downsampling. */
	AVERAGEDOWNSAMPLE = 1,
	/** Subsampling. */
	SUBSAMPLE = 2,
	/** Bicubic Downsampling. */
	BICUBICDOWNSAMPLE = 3
}

/**
 * The preview type.
 * @enum
 */
export declare enum EPSPreview {
	/** No preview. */
	None = 1,
	/** Black and white Macintosh preview. */
	BWMACINTOSH = 2,
	/** Color Macintosh preview. */
	COLORMACINTOSH = 3,
	/** Black and white PC preview. */
	BWTIFF = 4,
	/** Color PC preview. */
	COLORTIFF = 6,
	/** Transparent color PC preview (8 or later) */
	TRANSPARENTCOLORTIFF = 5
}

/**
 * The PostScript levels available when saving EPS files.
 * @enum
 */
export declare enum EPSPostScriptLevelEnum {
	/** PostScript Level 2. */
	LEVEL2 = 2,
	/** PostScript Level 3. */
	LEVEL3 = 3
}

/**
 * The PostScript levels supported by various printers.
 * @enum
 */
export declare enum PrinterPostScriptLevelEnum {
	/** PostScript Level 1. */
	PSLEVEL1 = 1,
	/** PostScript Level 2. */
	PSLEVEL2 = 2,
	/** PostScript Level 3. */
	PSLEVEL3 = 3
}

/**
 * The options that may be applied when saving a file.
 * @enum
 */
export declare enum SaveOptions {
	/** Save changes. */
	SAVECHANGES = 1,
	/** Do not save changes. */
	DONOTSAVECHANGES = 2,
	/** Ask the user whether to save. */
	PROMPTTOSAVECHANGES = 3
}

/**
 * Ruler units are unknown.
 * @enum
 */
export declare enum RulerUnits {
	/** Ruler units are unknown. */
	Unknown = 1,
	/** Ruler units are unknown. */
	Inches = 2,
	/** Ruler units are measured in centimeters. */
	Centimeters = 3,
	/** Ruler units are measured in points. */
	Points = 4,
	/** Ruler units are measured in picas. */
	Picas = 5,
	/** Ruler units are measured in millimeters. */
	Millimeters = 6,
	/** Ruler units are measured in Qs. */
	Qs = 7,
	/** Ruler units are measured in pixels. */
	Pixels = 8
}

/**
 * Blend modes used when compositing an object.
 * @enum
 */
export declare enum BlendModes {
	NORMAL = 0,
	MULTIPLY = 1,
	SCREEN = 2,
	OVERLAY = 3,
	SOFTLIGHT = 4,
	HARDLIGHT = 5,
	COLORDODGE = 6,
	COLORBURN = 7,
	DARKEN = 8,
	LIGHTEN = 9,
	DIFFERENCE = 10,
	EXCLUSION = 11,
	HUE = 12,
	SATURATIONBLEND = 13,
	COLORBLEND = 14,
	LUMINOSITY = 15
}

/**
 * Knockout state of a page item.
 * @enum
 */
export declare enum KnockoutState {
	/** Unknown/uninitialized knockout state. */
	Unknown = -1,
	/** Knockout off. */
	DISABLED = 0,
	/** Knockout off. */
	ENABLED = 1,
	/** Knockout state inherited from group? */
	INHERITED = 2
}

/**
 * How to re-arrange the art item.
 * @enum
 */
export declare enum ZOrderMethod {
	/** Move art to front of it's group or layer. */
	BRINGTOFRONT = 1,
	/** Move art one step forward in it's group or layer. */
	BRINGFORWARD = 2,
	/** Move art one step backwards in it's group or layer. */
	SENDBACKWARD = 3,
	/** Move art to back of it's group or layer. */
	SENDTOBACK = 4
}

/**
 * The version of the SVG DTD.
 * @enum
 */
export declare enum SVGDTDVersion {
	/** SVG 1.0. */
	SVG1_0 = 1,
	/** SVG 1.1. */
	SVG1_1 = 2,
	/** SVG Tiny 1.1. */
	SVGTINY1_1 = 3,
	/** SVG Tiny 1.1 Plus. */
	SVGTINY1_1PLUS = 4,
	/** SVG Basic 1.1. */
	SVGBASIC1_1 = 5,
	/** SVG Tiny 1.2. */
	SVGTINY1_2 = 6
}

/**
 * What font type to include with the file?
 * @enum
 */
export declare enum SVGFontType {
	SVGFONT = 2,
	OUTLINEFONT = 3
}

/**
 * What fonts to include with the file?
 * @enum
 */
export declare enum SVGFontSubsetting {
	/** Use system fonts. */
	None = 1,
	GLYPHSUSED = 2,
	COMMONENGLISH = 3,
	GLYPHSUSEDPLUSENGLISH = 4,
	COMMONROMAN = 5,
	GLYPHSUSEDPLUSROMAN = 6,
	ALLGLYPHS = 7
}

/**
 * ISO 8859-1.
 * @enum
 */
export declare enum SVGDocumentEncoding {
	/** ISO 8859-1. */
	ASCII = 1,
	UTF8 = 2,
	UTF16 = 3
}

/**
 * Style attributes with entity reference.
 * @enum
 */
export declare enum SVGCSSPropertyLocation {
	/** Style attributes with entity reference. */
	ENTITIES = 2,
	STYLEATTRIBUTES = 1,
	STYLEELEMENTS = 3,
	PRESENTATIONATTRIBUTES = 4
}

/**
 * Type of SVG Id.
 * @enum
 */
export declare enum SVGIdType {
	/** Style attributes with entity reference. */
	SVGIDMINIMAL = 0,
	SVGIDREGULAR = 1,
	SVGIDUNIQUE = 2
}

/**
 * Decide where the raster images will be stored.
 * @enum
 */
export declare enum RasterImageLocation {
	/** Embed the raster images in the svg file. */
	EMBED = 0,
	LINK = 1,
	PRESERVE = 2
}

/**
 * How should transparency be flattened for pre-AI9 file 
 * formats.
 * @enum
 */
export declare enum OutputFlattening {
	/** Discard transparency. */
	PRESERVEPATHS = 0,
	PRESERVEAPPEARANCE = 1
}

/**
 * Color model of the custom color.
 * @enum
 */
export declare enum ColorModel {
	/** Registration color (prints on in all separations) */
	REGISTRATION = 0,
	/** Process color (mixed ink) */
	PROCESS = 1,
	/** Spot color (separate ink) */
	SPOT = 2
}

/**
 * Custom color kind of the spot color.
 * @enum
 */
export declare enum SpotColorKind {
	/** Solid ink, expressed in four CMYK values. */
	SPOTCMYK = 0,
	/** Solid color, expressed as three RGB values. */
	SPOTRGB = 1,
	/** Lab color. Only valid for spot colors. */
	SPOTLAB = 2
}

/**
 * Illustrator Artboards to Flash Files.
 * @enum
 */
export declare enum FlashExportStyle {
	/** Illustrator Artboards to Flash Files. */
	ARTBOARDSTOFILES = 5,
	/** Illustrator file to Flash file. */
	ASFLASHFILE = 1,
	/** Illustrator layers to Flash frames. */
	LAYERSASFRAMES = 2,
	/** Illustrator layers to Flash files. */
	LAYERSASFILES = 3,
	/** Illustrator layers to Flash Symbols. */
	LAYERSASSYMBOLS = 4
}

/**
 * How the arts should be clipped.
 * @enum
 */
export declare enum ArtClippingOption {
	/** Output size is the size of the artwork. */
	OUTPUTARTBOUNDS = 1,
	/** Output size is the size of the artboard. */
	OUTPUTARTBOARDBOUNDS = 2,
	/** Output size is the size of the crop area. */
	OUTPUTCROPRECTBOUNDS = 3
}

/**
 * Version of the SWF File to be exported.
 * @enum
 */
export declare enum FlashExportVersion {
	/** SWF Version 1. */
	FLASHVERSION1 = 1,
	/** SWF Version 2. */
	FLASHVERSION2 = 2,
	/** SWF Version 3. */
	FLASHVERSION3 = 3,
	/** SWF Version 4. */
	FLASHVERSION4 = 4,
	/** SWF Version 5. */
	FLASHVERSION5 = 5,
	/** SWF Version 6. */
	FLASHVERSION6 = 6,
	/** SWF Version 7. */
	FLASHVERSION7 = 7,
	/** SWF Version 8. */
	FLASHVERSION8 = 8,
	/** SWF Version 9. */
	FLASHVERSION9 = 9
}

/**
 * @enum
 */
export declare enum FlashImageFormat {
	LOSSLESS = 1,
	LOSSY = 2
}

/**
 * @enum
 */
export declare enum LayerOrderType {
	BOTTOMUP = 1,
	TOPDOWN = 2
}

/**
 * No blend animation.
 * @enum
 */
export declare enum BlendAnimationType {
	/** No blend animation. */
	NOBLENDANIMATION = 0,
	INSEQUENCE = 1,
	INBUILD = 2
}

/**
 * @enum
 */
export declare enum FlashJPEGMethod {
	Standard = 1,
	Optimized = 2
}

/**
 * @enum
 */
export declare enum FlashPlaybackSecurity {
	PlaybackLocal = 1,
	PlaybackNetwork = 2
}

/**
 * @enum
 */
export declare enum VariableKind {
	Unknown = 1,
	VISIBILITY = 2,
	TEXTUAL = 3,
	IMAGE = 4,
	GRAPH = 5
}

/**
 * @enum
 */
export declare enum AutoCADExportFileFormat {
	DXF = 0,
	DWG = 1
}

/**
 * @enum
 */
export declare enum AutoCADCompatibility {
	AutoCADRelease13 = 0,
	AutoCADRelease14 = 1,
	AutoCADRelease15 = 2,
	AutoCADRelease18 = 3,
	AutoCADRelease21 = 4,
	AutoCADRelease24 = 5
}

/**
 * @enum
 */
export declare enum AutoCADUnit {
	Points = 0,
	Picas = 1,
	Inches = 2,
	Millimeters = 3,
	Centimeters = 4,
	Pixels = 5
}

/**
 * @enum
 */
export declare enum AutoCADColors {
	Max8Colors = 0,
	Max16Colors = 1,
	Max256Colors = 2,
	TrueColors = 3
}

/**
 * @enum
 */
export declare enum AutoCADRasterFormat {
	PNG = 0,
	JPEG = 1
}

/**
 * @enum
 */
export declare enum AutoCADExportOption {
	PreserveAppearance = 0,
	MaximumEditability = 1
}

/**
 * @enum
 */
export declare enum AutoCADGlobalScaleOption {
	OriginalSize = 0,
	FitArtboard = 1,
	ScaleByValue = 2
}

/**
 * Byte Order of TIFF file.
 * @enum
 */
export declare enum TIFFByteOrder {
	IBMPC = 0,
	MACINTOSH = 1
}

/**
 * COM user interaction enumeration.
 * @enum
 */
export declare enum UserInteractionLevel {
	DONTDISPLAYALERTS = -1,
	DISPLAYALERTS = 2
}

/**
 * @enum
 */
export declare enum PolarityValues {
	POSITIVE = 1,
	NEGATIVE = -1
}

/**
 * When should a JavaScript debugger be shown.
 * @enum
 */
export declare enum JavaScriptExecutionMode {
	/**
	 * Never show the JavaScript debugger. Treat runtime errors by 
	 * throwing a JavaScript exceptions.
	 */
	never = 1,
	/** Show the JavaScript debugger is a runtime error occurs. */
	OnRuntimeError = 2,
	/**
	 * Show the JavaScript debugger at the first line of the 
	 * JavaScript.
	 */
	BeforeRunning = 3
}

/**
 * The artwork layers/objects to be printed.
 * @enum
 */
export declare enum PrintArtworkDesignation {
	/** Print visible printable layers. */
	VISIBLEPRINTABLELAYERS = 0,
	/** Print visible layers. */
	VISIBLELAYERS = 1,
	/** Print all layers. */
	ALLLAYERS = 2
}

/**
 * The printing bounds type.
 * @enum
 */
export declare enum PrintingBounds {
	/** Use artboard bounds. */
	ARTBOARDBOUNDS = 0,
	/** Use artwork bounds. */
	ARTWORKBOUNDS = 1,
	/** Use crop bounds. */
	CROPBOUNDS = 2
}

/**
 * The color separation mode.
 * @enum
 */
export declare enum PrintColorSeparationMode {
	/** The composite mode. */
	COMPOSITE = 0,
	/** The host based color separation mode. */
	HOSTBASEDSEPARATION = 1,
	/** The InRIP color separation mode. */
	INRIPSEPARATION = 2
}

/**
 * The artwork printing orientation.
 * @enum
 */
export declare enum PrintOrientation {
	/** Portrait. */
	PORTRAIT = 0,
	/** Landscape. */
	LANDSCAPE = 1,
	/** Reverse portrait. */
	REVERSEPORTRAIT = 2,
	/** Reverse landscape. */
	REVERSELANDSCAPE = 3,
	/** Auto Rotate. */
	AUTOROTATE = 4
}

/**
 * The artwork printing position on media.
 * @enum
 */
export declare enum PrintPosition {
	/** Translate to the top left of media. */
	TRANSLATETOPLEFT = 1,
	/** Translate to the top center of media. */
	TRANSLATETOP = 2,
	/** Translate to the top right of media. */
	TRANSLATETOPRIGHT = 3,
	/** Translate to the left center of media. */
	TRANSLATELEFT = 4,
	/** Translate to the center of media. */
	TRANSLATECENTER = 5,
	/** Translate to the right center of media. */
	TRANSLATERIGHT = 6,
	/** Translate to the bottom left of media. */
	TRANSLATEBOTTOMLEFT = 7,
	/** Translate to the bottom center of media. */
	TRANSLATEBOTTOM = 8,
	/** Translate to the bottom right of media. */
	TRANSLATEBOTTOMRIGHT = 9
}

/**
 * The page tiling type.
 * @enum
 */
export declare enum PrintTiling {
	/** Tile single full page. */
	TILESINGLEFULLPAGE = 0,
	/** Tile full pages. */
	TILEFULLPAGES = 1,
	/** Tile imageable areas. */
	TILEIMAGEABLEAREAS = 2
}

/**
 * The page marks style type.
 * @enum
 */
export declare enum PageMarksTypes {
	/** Roman page marks style. */
	Roman = 0,
	/** Japanese page marks style. */
	Japanese = 1
}

/**
 * The printer font download mode.
 * @enum
 */
export declare enum PrintFontDownloadMode {
	/** Download none. */
	DOWNLOADNONE = 0,
	/** Download subset. */
	DOWNLOADSUBSET = 1,
	/** Download complete. */
	DOWNLOADCOMPLETE = 2
}

/**
 * The font substitution policy.
 * @enum
 */
export declare enum FontSubstitutionPolicy {
	/** Substitute oblique font. */
	SUBSTITUTEOBLIQUE = 0,
	/** Substitute tint font. */
	SUBSTITUTETINT = 1,
	/** Substitute device font. */
	SUBSTITUTEDEVICE = 2
}

/**
 * The PostScript image compression type.
 * @enum
 */
export declare enum PostScriptImageCompressionType {
	/** No image compression. */
	IMAGECOMPRESSIONNONE = 0,
	/** RLE image compression. */
	RLE = 1,
	/** JPEG image compression. */
	JPEG = 2
}

/**
 * The color profile type.
 * @enum
 */
export declare enum PrintColorProfile {
	/** Use old style AI color profile. */
	OLDSTYLEPROFILE = 0,
	/** Same as source color profile. */
	SOURCEPROFILE = 1,
	/** Same as printer color profile. */
	PRINTERPROFILE = 2,
	/** Use custom color profile. */
	CUSTOMPROFILE = 3
}

/**
 * The color intent type.
 * @enum
 */
export declare enum PrintColorIntent {
	/** Perceptual color intent. */
	PERCEPTUALINTENT = 0,
	/** Saturation color intent. */
	SATURATIONINTENT = 1,
	/** Relative colorimetric. */
	RELATIVECOLORIMETRIC = 2,
	/** Absolute colorimetric. */
	ABSOLUTECOLORIMETRIC = 3
}

/**
 * The printer type.
 * @enum
 */
export declare enum PrinterTypeEnum {
	/** Unknown printer type. */
	Unknown = 0,
	/** PostScript printer. */
	POSTSCRIPTPRINTER = 1,
	/** Non PostScript printer. */
	NONPOSTSCRIPTPRINTER = 2
}

/**
 * The printer color mode.
 * @enum
 */
export declare enum PrinterColorMode {
	/** Color printer. */
	COLORPRINTER = 0,
	/** Grayscale printer. */
	GRAYSCALEPRINTER = 1,
	/** Black and white printer. */
	BLACKANDWHITEPRINTER = 2
}

/**
 * The ink printing status.
 * @enum
 */
export declare enum InkPrintStatus {
	/** Disable the ink during print. */
	DISABLEINK = 0,
	/** Enable the ink during print. */
	ENABLEINK = 1,
	/** Convert to process color during print. */
	CONVERTINK = 2
}

/**
 * The ink type.
 * @enum
 */
export declare enum InkType {
	/** Cyan color ink. */
	CYANINK = 0,
	/** Magenta color ink. */
	MAGENTAINK = 1,
	/** Yellow color ink. */
	YELLOWINK = 2,
	/** Black color ink. */
	BLACKINK = 3,
	/** Custom color ink. */
	CUSTOMINK = 4
}

/**
 * The trapping type.
 * @enum
 */
export declare enum TrappingType {
	/** Normal trapping type. */
	NORMALTRAPPING = 0,
	/** Transparent trapping type. */
	TRANSPARENT = 1,
	/** Opaque trapping type. */
	OPAQUE = 2,
	/** Ignore opaque trapping type. */
	IGNOREOPAQUE = 3
}

/**
 * The auto kern type.
 * @enum
 */
export declare enum AutoKernType {
	/** No auto kerning. */
	NOAUTOKERN = 0,
	/** Auto kerning. */
	AUTO = 1,
	/** Optical kerning. */
	OPTICAL = 2,
	/** Metrics roman only. */
	METRICSROMANONLY = 3
}

/**
 * The auto leading type.
 * @enum
 */
export declare enum AutoLeadingType {
	/** Roman leading type. */
	BOTTOMTOBOTTOM = 0,
	/** Japanese leading type. */
	TOPTOTOP = 1
}

/**
 * The case change type.
 * @enum
 */
export declare enum CaseChangeType {
	/** Change to upper case. */
	UPPERCASE = 0,
	/** Change to lower case. */
	LOWERCASE = 1,
	/** Change to title case. */
	TITLECASE = 2,
	/** Change to sentence case. */
	SENTENCECASE = 3
}

/**
 * The font capitalization option.
 * @enum
 */
export declare enum FontCapsOption {
	/** Normal caps. */
	NORMALCAPS = 0,
	/** Small caps. */
	SMALLCAPS = 1,
	/** All caps. */
	ALLCAPS = 2,
	/** All small caps. */
	ALLSMALLCAPS = 3
}

/**
 * The font baseline option.
 * @enum
 */
export declare enum FontBaselineOption {
	/** Normal baseline. */
	NORMALBASELINE = 0,
	/** Fauxed superscript baseline. */
	SUPERSCRIPT = 1,
	/** Fauxed subscript baseline. */
	SUBSCRIPT = 2
}

/**
 * The OpenType font position option.
 * @enum
 */
export declare enum FontOpenTypePositionOption {
	/** Default position. */
	OPENTYPEDEFAULT = 0,
	/** OpenType superscript position. */
	OPENTYPESUPERSCRIPT = 1,
	/** OpenType subscript position. */
	OPENTYPESUBSCRIPT = 2,
	/** OpenType numerator position. */
	NUMERATOR = 3,
	/** OpenType denominator position. */
	DENOMINATOR = 4
}

/**
 * The figure style type.
 * @enum
 */
export declare enum FigureStyleType {
	/** Default figure style. */
	DEFAULTFIGURESTYLE = 0,
	/** Tabular lining style. */
	TABULAR = 1,
	/** Proportional oldstyle. */
	PROPORTIONALOLDSTYLE = 2,
	/** Proportional lining style. */
	PROPORTIONAL = 3,
	/** Tabular oldstyle. */
	TABULAROLDSTYLE = 4
}

/**
 * The baseline direction type.
 * @enum
 */
export declare enum BaselineDirectionType {
	Standard = 1,
	VerticalRotated = 2,
	TateChuYoko = 3
}

/**
 * The language of text.
 * @enum
 */
export declare enum LanguageType {
	ENGLISH = 0,
	FINNISH = 1,
	STANDARDFRENCH = 2,
	CANADIANFRENCH = 3,
	STANDARDGERMAN = 4,
	OLDGERMAN = 5,
	SWISSGERMAN = 6,
	ITALIAN = 7,
	BOKMALNORWEGIAN = 8,
	/** Nynorsk Norwegian. */
	NYNORSKNORWEGIAN = 9,
	STANDARDPORTUGUESE = 10,
	BRAZILLIANPORTUGUESE = 11,
	SPANISH = 12,
	SWEDISH = 13,
	UKENGLISH = 14,
	DUTCH = 15,
	DANISH = 16,
	CATALAN = 17,
	RUSSIAN = 18,
	UKRANIAN = 19,
	BULGARIAN = 20,
	SERBIAN = 21,
	CZECH = 22,
	POLISH = 23,
	RUMANIAN = 24,
	GREEK = 25,
	TURKISH = 26,
	ICELANDIC = 27,
	HUNGARIAN = 28,
	CHINESE = 29,
	JAPANESE = 30,
	ARABIC = 39,
	FARSI = 41,
	GERMAN2006REFORM = 42,
	DUTCH2005REFORM = 43,
	SWISSGERMAN2006REFORM = 44,
	HINDI = 49,
	MARATHI = 50,
	BENGALIINDIA = 51,
	PUNJABI = 52,
	GUJARATI = 53,
	ORIYA = 54,
	TAMIL = 55,
	TELUGU = 56,
	KANNADA = 57,
	MALAYALAM = 58
}

/**
 * The alternate glyphs form of text.
 * @enum
 */
export declare enum AlternateGlyphsForm {
	DEFAULTFORM = 0,
	TRADITIONAL = 1,
	EXPERT = 2,
	JIS78FORM = 3,
	JIS83FORM = 4,
	HALFWIDTH = 5,
	THIRDWIDTH = 6,
	QUARTERWIDTH = 7,
	FULLWIDTH = 8,
	PROPORTIONALWIDTH = 9,
	JIS90FORM = 10,
	JIS04FORM = 11
}

/**
 * The style run alignment.
 * @enum
 */
export declare enum StyleRunAlignmentType {
	bottom = 0,
	icfBottom = 1,
	ROMANBASELINE = 2,
	center = 3,
	icfTop = 4,
	top = 5
}

/**
 * The Wari-Chu alignment type.
 * @enum
 */
export declare enum WariChuJustificationType {
	Left = 0,
	Right = 1,
	Center = 2,
	WARICHUFULLJUSTIFYLASTLINELEFT = 3,
	WARICHUFULLJUSTIFYLASTLINERIGHT = 4,
	WARICHUFULLJUSTIFYLASTLINECENTER = 5,
	WARICHUFULLJUSTIFY = 6,
	WARICHUAUTOJUSTIFY = 7
}

/**
 * The Burasagari type.
 * @enum
 */
export declare enum BurasagariTypeEnum {
	None = 0,
	Standard = 1,
	Forced = 2
}

/**
 * The preferred Kinsoku order.
 * @enum
 */
export declare enum KinsokuOrderEnum {
	PUSHIN = 0,
	PUSHOUTFIRST = 1,
	PUSHOUTONLY = 2
}

/**
 * Crop box.
 * @enum
 */
export declare enum PDFBoxType {
	/**
	 * Crop to ArtBox. The art box defines the extent of the page's 
	 * meaningful content (including potential white space) as 
	 * intended by the page's creator.
	 */
	PDFARTBOX = 0,
	/**
	 * Crop to CropBox. The crop box is the region of the page to 
	 * display and to print.
	 */
	PDFCROPBOX = 1,
	/**
	 * Crop to TrimBox. The trim box specifies the positioning of 
	 * the page's content within the imposition.
	 */
	PDFTRIMBOX = 2,
	/**
	 * Crop to BleedBox. The bleed box defines the region to which 
	 * the contents of the page should be clipped when output in a 
	 * production environment.
	 */
	PDFBLEEDBOX = 3,
	/**
	 * Crop to MediaBox. The media box is a natural size of the 
	 * page. For example, the dimensions of A4 sheet of paper.
	 */
	PDFMEDIABOX = 4,
	/**
	 * Crop to Bounding Box. The bounding box is the rectangle that 
	 * encloses all text, graphics, and images on the page.
	 */
	PDFBOUNDINGBOX = 5
}

/**
 * The tracing method: abutting and overlapping.
 * @enum
 */
export declare enum TracingMethodType {
	/** Tracing abutting method. */
	TRACINGMETHODABUTTING = 0,
	/** Tracing overlapping method. */
	TRACINGMETHODOVERLAPPING = 1
}

/**
 * The tracing mode: color, grayscale, black and white.
 * @enum
 */
export declare enum TracingModeType {
	/** Color tracing mode. */
	TRACINGMODECOLOR = 0,
	/** Grayscale tracing mode. */
	TRACINGMODEGRAY = 1,
	/** Black and white tracing mode. */
	TRACINGMODEBLACKANDWHITE = 2
}

/**
 * The input color type Full Color or Limited colors.
 * @enum
 */
export declare enum TracingColorType {
	/** Use Limited colors for Tracing. */
	TRACINGLIMITEDCOLOR = 0,
	/** Use Full colors for Tracing. */
	TRACINGFULLCOLOR = 1
}

/**
 * Controls the type of vector view.
 * @enum
 */
export declare enum ViewType {
	/** View artwork. */
	TRACINGVIEWVECTORTRACINGRESULT = 0,
	/** View paths and transparent fills. */
	TRACINGVIEWVECTOROUTLINESWITHTRACING = 1,
	/** View just the paths. */
	TRACINGVIEWVECTOROUTLINES = 2,
	/** View Outlines with Transparent Image. */
	TRACINGVIEWVECTORWITHTRANSPARENTIMAGE = 3,
	/** View Source Image. */
	TRACINGVIEWIMAGE = 4
}

/**
 * Controls the color model for the rasterization.
 * @enum
 */
export declare enum RasterizationColorModel {
	/** Rasterize in the default document color space. */
	DEFAULTCOLORMODEL = 1,
	/** Rasterize as grayscale image. */
	GRAYSCALE = 2,
	/** Rasterize as 1-bit bitmap. */
	BITMAP = 3
}

/**
 * Controls the type of antialiasing method used in the 
 * rasterization.
 * @enum
 */
export declare enum AntiAliasingMethod {
	/** No anti-aliasing allowed. */
	None = 0,
	/** Optimize for the art object. */
	ARTOPTIMIZED = 1,
	/** Optimize for the type object. */
	TYPEOPTIMIZED = 2
}

/**
 * Denotes the purpose of color conversion using 
 * ConvertSmapleColor method.
 * @enum
 */
export declare enum ColorConvertPurpose {
	/** Do standard conversion, without black preservation. */
	defaultpurpose = 0,
	/**
	 * Conversion options appropriate to creating an image for 
	 * screen display.
	 */
	previewpurpose = 1,
	/**
	 * Conversion options appropriate to creating an image for 
	 * print or export.
	 */
	exportpurpose = 2,
	/** Dummy option. */
	dummypurpose = 4
}

/**
 * The FXG file format version.
 * @enum
 */
export declare enum FXGVersion {
	/** FXG version 1.0. */
	VERSION1PT0 = 1,
	/** FXG version 2.0. */
	VERSION2PT0 = 2
}

/**
 * Filters preserve policy used by FXG file format.
 * @enum
 */
export declare enum FiltersPreservePolicy {
	/** Preserve the appearance of filters by expanding it. */
	EXPANDFILTERS = 1,
	/** Preserve the appearance of filters by rasterizing it. */
	RASTERIZEFILTERS = 2,
	/** Preserve the editability of filters. */
	KEEPFILTERSEDITABLE = 3
}

/**
 * Text preserve policy used by FXG file format.
 * @enum
 */
export declare enum TextPreservePolicy {
	/** Preserve the appearance of text by outlining it. */
	OUTLINETEXT = 1,
	/** Preserve the appearance of text by rasterizing it. */
	RASTERIZETEXT = 2,
	/** Preserve the editability of text. */
	KEEPTEXTEDITABLE = 3,
	/** Automatically convert text. */
	AUTOMATICALLYCONVERTTEXT = 4
}

/**
 * Gradients preserve policy used by FXG file format.
 * @enum
 */
export declare enum GradientsPreservePolicy {
	/** Preserve the editability of gradients. */
	KEEPGRADIENTSEDITABLE = 3,
	/** Automatically Convert Gradients. */
	AUTOMATICALLYCONVERTGRADIENTS = 4
}

/**
 * Blends Expand policy used by FXG file format.
 * @enum
 */
export declare enum BlendsExpandPolicy {
	/** Automatically Convert Blends. */
	AUTOMATICALLYCONVERTBLENDS = 1,
	/** Expand Blends by Rasterizing. */
	RASTERIZEBLENDS = 2
}

/**
 * Coordinate system used by Illustrator.
 * @enum
 */
export declare enum CoordinateSystem {
	/** Document coordinate system. */
	DOCUMENTCOORDINATESYSTEM = 0,
	/** Artboard coordinate system. */
	ARTBOARDCOORDINATESYSTEM = 1
}

/**
 * The symbol registration point.
 * @enum
 */
export declare enum SymbolRegistrationPoint {
	/** Top left point of symbol bounding box. */
	SYMBOLTOPLEFTPOINT = 1,
	/** Top middle point of symbol bounding box. */
	SYMBOLTOPMIDDLEPOINT = 2,
	/** Top right point of symbol bounding box. */
	SYMBOLTOPRIGHTPOINT = 3,
	/** Middle left point of symbol bounding box. */
	SYMBOLMIDDLELEFTPOINT = 4,
	/** Center point of symbol bounding box. */
	SYMBOLCENTERPOINT = 5,
	/** Middle right point of symbol bounding box. */
	SYMBOLMIDDLERIGHTPOINT = 6,
	/** Bottom left point of symbol bounding box. */
	SYMBOLBOTTOMLEFTPOINT = 7,
	/** Bottom middle point of symbol bounding box. */
	SYMBOLBOTTOMMIDDLEPOINT = 8,
	/** Bottom right point of symbol bounding box. */
	SYMBOLBOTTOMRIGHTPOINT = 9
}

/**
 * Perspective grid plane types.
 * @enum
 */
export declare enum PerspectiveGridPlaneType {
	/** Invalid Perspective Grid Plane Type. */
	NOPLANE = 0,
	/** Perspective Grid Left Plane Type. */
	LEFTPLANE = 1,
	/** Perspective Grid Right Plane Type. */
	RIGHTPLANE = 2,
	/** Perspective Grid Floor Plane Type. */
	FLOORPLANE = 3
}

/**
 * Text Item First baseline types.
 * @enum
 */
export declare enum FirstBaselineType {
	/** First Baseline Ascent Type. */
	BASELINEASCENT = 0,
	/** First baseline Cap Height Type. */
	BASELINECAPHEIGHT = 1,
	/** First Baseline Leading Type. */
	BASELINELEADING = 2,
	/** First Baseline x Height Type. */
	BASELINEXHEIGHT = 3,
	/** First Baseline Em Box Height Type. */
	BASELINEEMBOXHEIGHT = 4,
	/** First Baseline Fixed Type. */
	BASELINEFIXED = 5,
	/** First Baseline Legacy Type. */
	BASELINELEGACY = 6
}

/**
 * Document layout style types.
 * @enum
 */
export declare enum DocumentLayoutStyle {
	/** Arranges document in cascaded style. */
	CASCADE = 0,
	/** Arranges documents as horizontal tiles. */
	HORIZONTALTILE = 1,
	/** Arranges documents as vertical tiles. */
	VERTICALTILE = 2,
	/** Arranges all documents floating layout. */
	FLOATALL = 3,
	/** Consolidates all documents. */
	CONSOLIDATEALL = 4
}

/**
 * A collection of artboards.
 * @class
 */
export declare class Artboards {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Add artboard object.
	 * @param {Rect} artboardRect - Size and position of artboard.
	 */
	add(artboardRect: Rect): Artboard;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Artboard;
	/**
	 * Delete artboard object.
	 * @param {number} index - Index of the crop area to be 
	 * deleted.
	 */
	remove(index: number): void;
	/**
	 * Insert an Artboard at specified location.
	 * @param {Rect} artboardRect - Size and position of artboard.
	 * @param {number} index - Index position where artboard should 
	 * be inserted.
	 */
	insert(artboardRect: Rect, index: number): void;
	/**
	 * Retrieves the index position of the active artboard in the 
	 * document's list.
	 */
	getActiveArtboardIndex(): number;
	/**
	 * Makes a specific artboard active, and makes it current in 
	 * the iteration order.
	 * @param {number} index - The 0-based index position of the 
	 * artboard in the document list.
	 */
	setActiveArtboardIndex(index: number): void;
}

/**
 * A collection of documents.
 * @class
 */
export declare class Documents {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a new document from a preset.
	 * @param {string} startupPreset - The name of a startup 
	 * document preset.
	 * @param {DocumentPreset} presetSettings - Custom settings to 
	 * apply to the preset.
	 * @param {boolean} showOptionsDialog - If false, do not show 
	 * Options dialog.
	 */
	addDocument(startupPreset: string, presetSettings: DocumentPreset, showOptionsDialog: boolean): Document;
	/**
	 * Create a document from the preset with option to throw 
	 * dialog to customize present settings.
	 * @param {string} startupPreset - The name of startup document 
	 * preset.
	 * @param {boolean} showOptionsDialog - Argument controls if 
	 * options Dialog is shown or not.
	 */
	addDocumentWithDialogOption(startupPreset: string, showOptionsDialog: boolean): Document;
	/**
	 * A document.
	 * @param {DocumentColorSpace} documentColorSpace - The color 
	 * model used for the document.
	 * @param {number} width - Width of the artboard.
	 * @param {number} height - Height of the artboard.
	 * @param {number} numArtboards - Number of artboards for new 
	 * document.Range (1:100).
	 * @param {DocumentArtboardLayout} artboardLayout - Layout of 
	 * artboards for new document.
	 * @param {number} artboardSpacing - Spacing between artboards 
	 * for new document.
	 * @param {number} artboardRowsOrCols - Number of rows (for 
	 * rows layout) OR column(for column layouts)of artboards.Range 
	 * is 1 to (docNumArtboards - 1) or 1 for single row or column 
	 * layouts.
	 */
	add(documentColorSpace: DocumentColorSpace, width: number, height: number, numArtboards: number, artboardLayout: DocumentArtboardLayout, artboardSpacing: number, artboardRowsOrCols: number): Document;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Document;
	/**
	 * Arranges the documents in the specified style.
	 * @param {DocumentLayoutStyle} layoutStyle - The document 
	 * layout style.
	 */
	arrange(layoutStyle: DocumentLayoutStyle): boolean;
}

/**
 * A collection of layers.
 * @class
 */
export declare class Layers {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a layer. */
	add(): Layer;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Layer;
}

/**
 * A collection of group items.
 * @class
 */
export declare class GroupItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a group item. */
	add(): GroupItem;
	/**
	 * Create a group item from a vector graphics file.
	 * @param {File} imageFile - The vector graphics file to be 
	 * embedded.
	 */
	createFromFile(imageFile: File): GroupItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): GroupItem;
}

/**
 * A collection of page items.
 * @class
 */
export declare class PageItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PageItem;
}

/**
 * A collection of path items.
 * @class
 */
export declare class PathItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a path. */
	add(): PathItem;
	/**
	 * Create an elliptical path item.
	 * @param {number} top - The ellipse's bounds.
	 * @param {number} left - The ellipse's bounds.
	 * @param {number} width - The ellipse's bounds.
	 * @param {number} height - The height of the ellipse.
	 * @param {boolean} reversed - Is the ellipse path reversed?
	 * @param {boolean} inscribed - Is the ellipse path inscribed?
	 */
	ellipse(top: number, left: number, width: number, height: number, reversed: boolean, inscribed: boolean): PathItem;
	/**
	 * Used to create a rectangular path item. Not for path item 
	 * access.
	 * @param {number} top - The top coordinate of the rectangle's 
	 * bounds.
	 * @param {number} left - The left coordinate of the 
	 * rectangle's bounds.
	 * @param {number} width - The width of the rectangle.
	 * @param {number} height - The height of the rectangle.
	 * @param {boolean} reversed - Is the rectangle path reversed?
	 */
	rectangle(top: number, left: number, width: number, height: number, reversed: boolean): PathItem;
	/**
	 * Used to create a rounded-corner rectangular path item. Not 
	 * for path item access.
	 * @param {number} top
	 * @param {number} left
	 * @param {number} width
	 * @param {number} height
	 * @param {number} horizontalRadius - Horizontal corner radius.
	 * @param {number} verticalRadius - Vertical corner radius.
	 * @param {boolean} reversed - Is the rectangle path reversed?
	 */
	roundedRectangle(top: number, left: number, width: number, height: number, horizontalRadius: number, verticalRadius: number, reversed: boolean): PathItem;
	/**
	 * Used to create a regular polygon path item. Not for path 
	 * item access.
	 * @param {number} centerX
	 * @param {number} centerY
	 * @param {number} radius - The radius of the polygon points.
	 * @param {number} sides - The number of sides on the polygon.
	 * @param {boolean} reversed - Is the polygon path reversed?
	 */
	polygon(centerX: number, centerY: number, radius: number, sides: number, reversed: boolean): PathItem;
	/**
	 * Used to create a star-shaped path item. Not for path item 
	 * access.
	 * @param {number} centerX
	 * @param {number} centerY
	 * @param {number} radius - The outside radius of the star 
	 * points.
	 * @param {number} innerRadius - The inside radius of the star 
	 * points.
	 * @param {number} points - The number of points on the star.
	 * @param {boolean} reversed - Is the star path reversed?
	 */
	star(centerX: number, centerY: number, radius: number, innerRadius: number, points: number, reversed: boolean): PathItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PathItem;
}

/**
 * A collection of path points.
 * @class
 */
export declare class PathPoints {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a path point. */
	add(): PathPoint;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PathPoint;
}

/**
 * A collection of compound path items.
 * @class
 */
export declare class CompoundPathItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a compound path item. */
	add(): CompoundPathItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): CompoundPathItem;
}

/**
 * A collection of stories.
 * @class
 */
export declare class Stories {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Story;
}

/**
 * A collection of text frame items.
 * @class
 */
export declare class TextFrameItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a point text frame item. */
	add(): TextFrameItem;
	/**
	 * Create a point text frame item.
	 * @param {Point} anchor - The position (coordinates) of the 
	 * anchor point.
	 * @param {TextOrientation} orientation - The orientation of 
	 * the text.
	 */
	pointText(anchor: Point, orientation: TextOrientation): TextFrameItem;
	/**
	 * Create an area text frame item.
	 * @param {PathItem} textPath - The path item associated with 
	 * the text frame.
	 * @param {TextOrientation} orientation - The orientation of 
	 * the text.
	 * @param {TextFrameItem} baseFrame - The base text frame if it 
	 * has one.
	 * @param {boolean} postFix - Whether to postfix/prefix the new 
	 * text frame to the specified base text frame.
	 */
	areaText(textPath: PathItem, orientation: TextOrientation, baseFrame: TextFrameItem, postFix: boolean): TextFrameItem;
	/**
	 * Create an on-path text frame item.
	 * @param {PathItem} textPath - The path item associated with 
	 * the text frame.
	 * @param {number} startTValue - The start position of text 
	 * along a path, as a value relative to the path's segments 
	 * (path text only)
	 * @param {number} endTValue - The end position of text along a 
	 * path, as a value relative to the path's segments (path text 
	 * only)
	 * @param {TextOrientation} orientation - The orientation of 
	 * the text.
	 * @param {TextFrameItem} baseFrame - The base text frame if it 
	 * has one.
	 * @param {boolean} postFix - Whether to postfix/prefix the new 
	 * text frame to the specified base text frame.
	 */
	pathText(textPath: PathItem, startTValue: number, endTValue: number, orientation: TextOrientation, baseFrame: TextFrameItem, postFix: boolean): TextFrameItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextFrameItem;
}

/**
 * A collection of legacy text items.
 * @class
 */
export declare class LegacyTextItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): LegacyTextItem;
	/**
	 * Create text frames from all legacy text items. The original 
	 * legacy text items will be deleted.
	 */
	convertToNative(): boolean;
}

/**
 * A collection of text range items.
 * @class
 */
export declare class TextRanges {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextRange;
}

/**
 * A collection of insertion points.
 * @class
 */
export declare class InsertionPoints {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): InsertionPoint;
}

/**
 * A collection of characters.
 * @class
 */
export declare class Characters {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a character.
	 * @param {string} contents - The text string.
	 */
	add(contents: string): TextRange;
	/**
	 * The text string.
	 * @param {string} contents - The text string.
	 */
	addBefore(contents: string): TextRange;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextRange;
}

/**
 * A collection of words.
 * @class
 */
export declare class Words {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a word.
	 * @param {string} contents - The text string.
	 */
	add(contents: string): TextRange;
	/**
	 * The text string.
	 * @param {string} contents - The text string.
	 */
	addBefore(contents: string): TextRange;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextRange;
}

/**
 * A collection of lines.
 * @class
 */
export declare class Lines {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextRange;
}

/**
 * A collection of Paragraphs.
 * @class
 */
export declare class Paragraphs {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a text art item.
	 * @param {string} contents - The text string.
	 */
	add(contents: string): TextRange;
	/**
	 * The text string.
	 * @param {string} contents - The text string.
	 */
	addBefore(contents: string): TextRange;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextRange;
}

/**
 * A collection of character styles.
 * @class
 */
export declare class CharacterStyles {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a named character style.
	 * @param {string} name - The character style name.
	 */
	add(name: string): CharacterStyle;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): CharacterStyle;
}

/**
 * A collection of paragraph styles.
 * @class
 */
export declare class ParagraphStyles {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a named paragraph style.
	 * @param {string} name - The paragraph style name.
	 */
	add(name: string): ParagraphStyle;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): ParagraphStyle;
}

/**
 * A collection of custom spot colors.
 * @class
 */
export declare class Spots {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a spot color. */
	add(): Spot;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Spot;
}

/**
 * A collection of swatches.
 * @class
 */
export declare class Swatches {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a swatch. */
	add(): Swatch;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Swatch;
	/**
	 * Get selected swatches in the document.
	 * @param {boolean} includeSwatchInGroup - The selected element 
	 * should include swatches in group.
	 */
	getSelected(includeSwatchInGroup: boolean): Swatch;
}

/**
 * A collection of Swatch groups.
 * @class
 */
export declare class SwatchGroups {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a Swatch group. */
	add(): SwatchGroup;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): SwatchGroup;
	/** Get selected swatchGroups in the document. */
	getSelected(): SwatchGroup;
}

/**
 * A collection of gradients.
 * @class
 */
export declare class Gradients {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a gradient. */
	add(): Gradient;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Gradient;
}

/**
 * A collection of gradient stops.
 * @class
 */
export declare class GradientStops {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a gradient stop. */
	add(): GradientStop;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): GradientStop;
}

/**
 * A collection of patterns.
 * @class
 */
export declare class Patterns {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a pattern. */
	add(): Pattern;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Pattern;
}

/**
 * A collection of symbols.
 * @class
 */
export declare class Symbols {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a symbol.
	 * @param {PageItem} sourceArt - The art item from which to 
	 * make this symbol.
	 * @param {SymbolRegistrationPoint} registrationPoint - The 
	 * symbol registration point.
	 */
	add(sourceArt: PageItem, registrationPoint: SymbolRegistrationPoint): Symbol;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Symbol;
}

/**
 * A collection of symbol items.
 * @class
 */
export declare class SymbolItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * An instance of a symbol item.
	 * @param {Symbol} _symbol - The symbol to make an instance of.
	 */
	add(_symbol: Symbol): SymbolItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): SymbolItem;
}

/**
 * A collection of brushes.
 * @class
 */
export declare class Brushes {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Create a brush.
	 * @param {File} brushDefinition - The brush definition from 
	 * which the brush would be created.
	 * @param {string} brushName - The name of the brush.
	 */
	add(brushDefinition: File, brushName: string): Brush;
	/**
	 * Create a brush, select the brush tool and load the created 
	 * brush in the brush tool.
	 * @param {File} brushDefinition - The brush definition from 
	 * which the brush would be created.
	 */
	addAndLoad(brushDefinition: File): Brush;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Brush;
}

/**
 * A collection of art styles.
 * @class
 */
export declare class ArtStyles {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): ArtStyle;
}

/**
 * A collection of fonts.
 * @class
 */
export declare class TextFonts {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextFont;
	/**
	 * Get the Text Font with the font name , if not avaiable it 
	 * will create the substitute font.
	 * @param {string} fontName - The name of the font to find or 
	 * create substitute.
	 */
	getFontByName(fontName: string): TextFont;
	/**
	 * Check if any original font is present with the given name.
	 * @param {string} fontName - The name of the font to find.
	 */
	isFontAvailable(fontName: string): boolean;
	/** Returns the current font name. */
	getCurrentFont(): string;
}

/**
 * The collection of tags associated with a page item.
 * @class
 */
export declare class Tags {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a tag. */
	add(): Tag;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Tag;
}

/**
 * The object's container.
 * @class
 */
export declare class RasterItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): RasterItem;
}

/**
 * Create a placed item.
 * @class
 */
export declare class PlacedItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a placed item. */
	add(): PlacedItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PlacedItem;
}

/**
 * EmbeddedItems Collection.
 * @class
 */
export declare class EmbeddedItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create an embedded item. */
	add(): EmbedItem;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): EmbedItem;
}

/**
 * The object's container.
 * @class
 */
export declare class MeshItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): MeshItem;
}

/**
 * The object's container.
 * @class
 */
export declare class GraphItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): GraphItem;
}

/**
 * The object's container.
 * @class
 */
export declare class PluginItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PluginItem;
}

/**
 * The object's container.
 * @class
 */
export declare class NonNativeItems {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): NonNativeItem;
}

/**
 * A collection of views.
 * @class
 */
export declare class Views {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): View;
}

/**
 * A collection of variables.
 * @class
 */
export declare class Variables {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a variable. */
	add(): Variable;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Variable;
}

/**
 * A collection of datasets.
 * @class
 */
export declare class DataSets {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Number of elements in the collection. */
	length: number;
	/** Create a data set. */
	add(): DataSet;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): DataSet;
}

/**
 * Options which may be supplied when opening a file.
 * @class
 */
export declare class OpenOptions {
	/**
	 * Choose to update all text objects for documents saved with 
	 * legacy texts (pre-Illustrator 11)
	 */
	updateLegacyText: boolean;
	/**
	 * Choose to preserve the spot colors in the gradient mesh 
	 * objects for legacy documents (pre-Illustrator CS3)
	 */
	updateLegacyGradientMesh: boolean;
	/** Open the file as library. */
	openAs: LibraryType;
	/**
	 * Preserve Legacy Artboard (pre-Illustrator CS4) when opening 
	 * in CS4 or later.
	 */
	preserveLegacyArtboard: boolean;
	/**
	 * Convert crop area to Artboard when opening legacy document 
	 * (pre-Illustrator CS4) in CS4 or later. If false then crop 
	 * areas are discarded.
	 */
	convertCropAreaToArtboard: boolean;
	/**
	 * Create Artboard with dimentions of artwork bounding box when 
	 * opening legacy document (pre-Illustrator CS4) in CS4 or 
	 * later.
	 */
	createArtboardWithArtworkBoundingBox: boolean;
	/**
	 * Convert print tiles to Artboard when opening legacy document 
	 * (pre-Illustrator CS4) in CS4 or later.
	 */
	convertTilesToArtboard: boolean;
	/** Add this file to the list of recently opened files. */
	addToRecentFiles: boolean;
	
}

/**
 * Options which may be supplied when saving a document as an 
 * FXG file.
 * @class
 */
export declare class FXGSaveOptions {
	/** All the artboards or range of the artboards will be saved. */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	/** The version of the FXG file format to create. */
	version: FXGVersion;
	/** Choose to preserve the editing capabilities of FXG. */
	preserveEditingCapabilities: boolean;
	/** Choose to include unused symbols. */
	includeUnusedSymbols: boolean;
	/** Choose to downsample the linked images(72ppi) */
	downsampleLinkedImages: boolean;
	/** Choose to include metadata (XMP) */
	includeMetadata: boolean;
	/** The policy used by FXG to preserve filters. */
	filtersPolicy: FiltersPreservePolicy;
	/** The policy used by FXG to preserve text. */
	textPolicy: TextPreservePolicy;
	/** The policy used by FXG to preserve gradients. */
	gradientsPolicy: GradientsPreservePolicy;
	/** The policy used by FXG to expand blends. */
	blendsPolicy: BlendsExpandPolicy;
	
}

/**
 * Options which may be supplied when saving a document as an 
 * Illustrator EPS file.
 * @class
 */
export declare class EPSSaveOptions {
	/** What Illustrator file format version to create. */
	compatibility: Compatibility;
	/** EPS preview format. */
	preview: EPSPreview;
	/**
	 * Are linked image files to be included in the saved document.
	 */
	embedLinkedFiles: boolean;
	/** Include thumbnail image of the EPS artwork. */
	includeDocumentThumbnails: boolean;
	/**
	 * Embed all fonts used by the document in the saved file 
	 * (version 7 or later)
	 */
	embedAllFonts: boolean;
	/** Use CMYK PostScript. */
	cmykPostScript: boolean;
	/**
	 * PostScript level to use (level 1 valid for file format 
	 * version 8 or older)
	 */
	postScript: EPSPostScriptLevelEnum;
	/**
	 * How should transparency be flattened for older file format 
	 * versions (pre-version 9)
	 */
	flattenOutput: OutputFlattening;
	/**
	 * Create a raster item of the gradient or gradient mesh so 
	 * that PostScript Level 2 printers can print the object.
	 */
	compatibleGradientPrinting: boolean;
	overprint: PDFOverprint;
	/** All the artboards or range of the artboards will be saved. */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	
}

/**
 * Options which may be supplied when saving a document as a 
 * PDF file.
 * @class
 */
export declare class PDFSaveOptions {
	/**
	 * The max string length is 255 bytes. Name of PDF preset to 
	 * use.
	 */
	pDFPreset: string;
	/** The version of the Acrobat file format to create. */
	compatibility: PDFCompatibility;
	/**
	 * This control includes the None option for when the user is 
	 * not complying with any PDF standard.
	 */
	pDFXStandard: PDFXStandard;
	/** This displays the description from the selected preset. */
	pDFXStandardDescription: string;
	/**
	 * Preserve Illustrator editing capabilities when saving the 
	 * document.
	 */
	preserveEditability: boolean;
	/** Generate thumbnails for the saved document. */
	generateThumbnails: boolean;
	/** Should the PDF document be optimized for fast web viewing. */
	optimization: boolean;
	/** View PDF after saving. */
	viewAfterSaving: boolean;
	/** How should color bitmap images be compressed. */
	colorCompression: CompressionQuality;
	/** Tile size when compressing with JPEG2000. */
	colorTileSize: number;
	/** How should color bitmap images be resampled. */
	colorDownsamplingMethod: DownsampleMethod;
	/**
	 * If zero, no downsampling, otherwise, the resolution to 
	 * downsample color bitmap images to.
	 */
	colorDownsampling: number;
	/** Downsample if the image's resolution is above this value. */
	colorDownsamplingImageThreshold: number;
	/** How should grayscale bitmap images be compressed. */
	grayscaleCompression: CompressionQuality;
	/** Tile size when compressing with JPEG2000. */
	grayscaleTileSize: number;
	/** How should grayscale bitmap images be resampled. */
	grayscaleDownsamplingMethod: DownsampleMethod;
	/**
	 * If zero, no downsampling, otherwise, the resolution to 
	 * downsample grayscale images to.
	 */
	grayscaleDownsampling: number;
	/** Downsample if the image's resolution is above this value. */
	grayscaleDownsamplingImageThreshold: number;
	/** How should monochrome bitmap images be compressed. */
	monochromeCompression: MonochromeCompression;
	/** How should monochrome bitmap images be resampled. */
	monochromeDownsamplingMethod: DownsampleMethod;
	/**
	 * If zero, no downsampling, otherwise, the resolution to 
	 * downsample images to.
	 */
	monochromeDownsampling: number;
	/** Downsample if the image's resolution is above this value. */
	monochromeDownsamplingImageThreshold: number;
	/** Should line art and text be compressed? */
	compressArt: boolean;
	/** Draw trim marks. */
	trimMarks: boolean;
	/** Draw registration marks. */
	registrationMarks: boolean;
	/** Draw color bars. */
	colorBars: boolean;
	/** Draw page information. */
	pageInformation: boolean;
	/** The page marks style. */
	pageMarksType: PageMarksTypes;
	/** Trim mark weight. */
	trimMarkWeight: PDFTrimMarkWeight;
	/** Custom offset (in points) for using the custom paper. */
	offset: number;
	/** The bleed offset rect. */
	bleedOffsetRect: Rect;
	/** Link 4 bleed values. */
	bleedLink: boolean;
	/**
	 * PDF color conversion policy. Three choices are available: 
	 * (1)No Color Conversion (2) Repurpose (3) Convert to 
	 * Destination.
	 */
	colorConversionID: ColorConversion;
	/**
	 * When NoColorConversion is specified for Color Conversion, 
	 * NoColorDestination is set.
	 */
	colorDestinationID: ColorDestination;
	/** If CMS is off, Don't Include Profiles is set. */
	colorProfileID: ColorProfile;
	/**
	 * When CMS is on, the output intent profile is the same 
	 * profile selected for Destination in the Color group box.
	 */
	outputIntentProfile: string;
	/**
	 * This is an optional comment which, if present, is added to 
	 * the PDF file and describes the intended printing condition.
	 */
	outputCondition: string;
	/**
	 * If selected for Output Intent Profile Name, you can set the 
	 * name of a registered printing condition.
	 */
	outputConditionID: string;
	/**
	 * URL to the site where the specified output condition is 
	 * registered. No validation is performed on the URL.
	 */
	registryName: string;
	/**
	 * This indicates if manual trapping has been prepared in the 
	 * document.
	 */
	trapped: boolean;
	/**
	 * Include a subset of fonts when less than this percentage of 
	 * characters are used.
	 */
	fontSubsetThreshold: number;
	/** The transparency flattener preset name. */
	flattenerPreset: string;
	/** The printing flattener options. */
	flattenerOptions: PrintFlattenerOptions;
	/** Flattening printer resolution. */
	printerResolution: number;
	/**
	 * Create acrobat layers from top-level layers - acrobat 6 only 
	 * option.
	 */
	acrobatLayers: boolean;
	/** Require a password to open the document. */
	requireDocumentPassword: boolean;
	/** A password string to open the document. */
	documentPassword: string;
	/** Use a password to restrict editing security settings. */
	requirePermissionPassword: boolean;
	/** A password string to restrict editing security settings. */
	permissionPassword: string;
	/** PDF security printing permission. */
	pDFAllowPrinting: PDFPrintAllowedEnum;
	/** PDF security changes allowed. */
	pDFChangesAllowed: PDFChangesAllowedEnum;
	/** Enable copying of text 128-bit. */
	enableCopy: boolean;
	/** Enable accessing 128-bit. */
	enableAccess: boolean;
	/**
	 * Enable plaintext metadata 128-bit - available only for 
	 * acrobat 6.
	 */
	enablePlainText: boolean;
	/** Enable copying and accessing 40-bit. */
	enableCopyAccess: boolean;
	/**
	 * Considered for multi-asset extraction which specifies 
	 * artboard range.Empty string will extracts all the 
	 * artboards.Default is empty string.
	 */
	artboardRange: string;
	
}

/**
 * Options which may be supplied when saving a document as an 
 * Illustrator file.
 * @class
 */
export declare class IllustratorSaveOptions {
	/** What Illustrator file format version to create. */
	compatibility: Compatibility;
	/**
	 * Include a subset of fonts when less than this percentage of 
	 * characters are used (version 9 or later)
	 */
	fontSubsetThreshold: number;
	/**
	 * Embed the document's ICC profile in the saved file (version 
	 * 9 or later)
	 */
	embedICCProfile: boolean;
	/**
	 * Are linked image files to be included in the saved document 
	 * (versions 7 or later)
	 */
	embedLinkedFiles: boolean;
	/**
	 * How should transparency be flattened for older file format 
	 * versions (pre-version 9)
	 */
	flattenOutput: OutputFlattening;
	/** Save as a PDF compatible file (version 10 or later) */
	pdfCompatible: boolean;
	/** Should the saved file be compressed (version 10 or later) */
	compressed: boolean;
	/** All the artboards or range of the artboards will be saved. */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true ,this will be considered 
	 * for multi-asset extraction which specifies artboard 
	 * range.Empty string will extracts all the artboards.Default 
	 * is empty string.
	 */
	artboardRange: string;
	
}

/**
 * @class
 */
export declare class Matrix {
	mValueA: number;
	mValueB: number;
	mValueC: number;
	mValueD: number;
	mValueTX: number;
	mValueTY: number;
	
}

/**
 * Options which may be supplied when exporting a document as a 
 * JPEG file.
 * @class
 */
export declare class ExportOptionsJPEG {
	/** Quality of resulting image. */
	qualitySetting: number;
	/** Should the image be optimized for web viewing. */
	optimization: boolean;
	/** Blur the resulting image this much. */
	blurAmount: number;
	/** Should the artboard be matted with a color. */
	matte: boolean;
	/** The color to use when matting the artboard (default: white) */
	matteColor: RGBColor;
	/** Horizontal scaling factor. */
	horizontalScale: number;
	/** Vertical scaling factor. */
	verticalScale: number;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	/** Should the resulting image be clipped to the artboard. */
	artBoardClipping: boolean;
	/** Should the resulting image be saved as HTML. */
	saveAsHTML: boolean;
	
}

/**
 * Options which may be supplied when exporting a document as 
 * an 8 bit PNG file.
 * @class
 */
export declare class ExportOptionsPNG8 {
	/** Number of colors in exported color table. */
	colorCount: number;
	/** Method used to reduce the number of colors. */
	colorReduction: ColorReductionMethod;
	/** Method used to dither colors. */
	colorDither: ColorDitherMethod;
	/** How much should the colors be dithered. */
	ditherPercent: number;
	/**
	 * How much should the color table be changed to match the web 
	 * palette.
	 */
	webSnap: number;
	/** Should the resulting image use transparency. */
	transparency: boolean;
	/** Should the resulting image be interlaced. */
	interlaced: boolean;
	/** Should the artboard be matted with a color. */
	matte: boolean;
	/** The color to use when matting the artboard (default: white) */
	matteColor: RGBColor;
	/** Horizontal scaling factor. */
	horizontalScale: number;
	/** Vertical scaling factor. */
	verticalScale: number;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	/** Should the resulting image be clipped to the artboard. */
	artBoardClipping: boolean;
	/** Should the resulting image be saved as HTML. */
	saveAsHTML: boolean;
	
}

/**
 * Options which may be supplied when exporting a document as 
 * an 24 bit PNG file.
 * @class
 */
export declare class ExportOptionsPNG24 {
	/** Should the resulting image use transparency. */
	transparency: boolean;
	/** Should the artboard be matted with a color. */
	matte: boolean;
	/** The color to use when matting the artboard (default: white) */
	matteColor: RGBColor;
	/** Horizontal scaling factor. */
	horizontalScale: number;
	/** Vertical scaling factor. */
	verticalScale: number;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	/** Should the resulting image be clipped to the artboard. */
	artBoardClipping: boolean;
	/** Should the resulting image be saved as HTML. */
	saveAsHTML: boolean;
	/** Dimensions in which to contain the resulting raster. */
	dimensions: Dimensions;
	
}

/**
 * Options which may be supplied when exporting a document as a 
 * GIF file.
 * @class
 */
export declare class ExportOptionsGIF {
	/** Number of colors in exported color table. */
	colorCount: number;
	/** Method used to reduce the number of colors. */
	colorReduction: ColorReductionMethod;
	/** Level of information loss during compression. */
	infoLossPercent: number;
	/** Method used to dither colors. */
	colorDither: ColorDitherMethod;
	/** How much should the colors be dithered. */
	ditherPercent: number;
	/**
	 * How much should the color table be changed to match the web 
	 * pallet.
	 */
	webSnap: number;
	/** Should the resulting image use transparency. */
	transparency: boolean;
	/** Should the resulting image be interlaced. */
	interlaced: boolean;
	/** Should the artboard be matted with a color. */
	matte: boolean;
	/** The color to use when matting the artboard (default: white) */
	matteColor: RGBColor;
	/** Horizontal scaling factor. */
	horizontalScale: number;
	/** Vertical scaling factor. */
	verticalScale: number;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	/** Should the resulting image be clipped to the artboard. */
	artBoardClipping: boolean;
	/** Should the resulting image be saved as HTML. */
	saveAsHTML: boolean;
	
}

/**
 * Options which may be supplied when exporting a document as a 
 * Photoshop file.
 * @class
 */
export declare class ExportOptionsPhotoshop {
	/** The color space of the exported file. */
	imageColorSpace: ImageColorSpace;
	/** The resolution of the exported file. */
	resolution: number;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	/** Preserve document layers when exporting. */
	writeLayers: boolean;
	/** Export text objects as editable text layers. */
	editableText: boolean;
	/** Embed an ICC profile when exporting. */
	embedICCProfile: boolean;
	/**
	 * Should a warning dialog be displayed because of conflicts in 
	 * the export settings.
	 */
	warnings: boolean;
	/**
	 * Preserve as much of the original document's structure as 
	 * possible when exporting.
	 */
	maximumEditability: boolean;
	/**
	 * All the artboards or range of the artboards will be 
	 * exported.
	 */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	
}

/**
 * Options which may be supplied when exporting a document as 
 * an SVG file.
 * @class
 */
export declare class ExportOptionsSVG {
	/**
	 * The version of DTD that the exported file should be 
	 * conforming to.
	 */
	DTD: SVGDTDVersion;
	/**
	 * The type of font that should be included in the exported 
	 * file.
	 */
	fontType: SVGFontType;
	/** What font glyphs should be included in the exported file. */
	fontSubsetting: SVGFontSubsetting;
	/** Should the raster images in the exported file be included. */
	embedRasterImages: boolean;
	/** Decimal precision for element coordinate values. */
	coordinatePrecision: number;
	/** How should the text in the document be encoded. */
	documentEncoding: SVGDocumentEncoding;
	/**
	 * How should the CSS properties of the document be included in 
	 * the document.
	 */
	cssProperties: SVGCSSPropertyLocation;
	/** Should the exported file be compressed. */
	compressed: boolean;
	optimizeForSVGViewer: boolean;
	includeVariablesAndDatasets: boolean;
	includeFileInfo: boolean;
	includeUnusedStyles: boolean;
	/** Preserve slice data in exported document. */
	slices: boolean;
	/**
	 * Preserve Illustrator editing capabilities when exporting the 
	 * document.
	 */
	preserveEditability: boolean;
	/** Is SVG auto kerning allowed? */
	sVGAutoKerning: boolean;
	/** Is SVG text-on-path construct allowed? */
	sVGTextOnPath: boolean;
	/** All the artboards or range of the artboards will be saved. */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	
}

/**
 * Options which may be supplied when exporting a document as a 
 * Web optimized SVG file.
 * @class
 */
export declare class ExportOptionsWebOptimizedSVG {
	/**
	 * The type of font that should be included in the exported 
	 * file.
	 */
	fontType: SVGFontType;
	/** Decimal precision for element coordinate values. */
	coordinatePrecision: number;
	/**
	 * How should the CSS properties of the document be included in 
	 * the document.
	 */
	cssProperties: SVGCSSPropertyLocation;
	/** How object names (IDs) are generated in exported SVG. */
	svgId: SVGIdType;
	/** Reduces the size of the svg. */
	svgMinify: boolean;
	/** Makes the SVG Responsive. */
	svgResponsive: boolean;
	/** Should the raster images in the exported file be included. */
	rasterImageLocation: RasterImageLocation;
	/** All the artboards or range of the artboards will be saved. */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	
}

/**
 * Options which may be supplied when exporting a document as 
 * an Flash (.SWF) file.
 * @class
 */
export declare class ExportOptionsFlash {
	/** How should the Flash file be created. */
	exportStyle: FlashExportStyle;
	/** Which version of SWF to export. */
	exportVersion: FlashExportVersion;
	/** When exporting layers to Flash frames. */
	frameRate: number;
	/** Should the Flash file be set to loop when run. */
	looping: boolean;
	/**
	 * Prevent the exported file from being imported by other 
	 * applications.
	 */
	readOnly: boolean;
	/** How should the arts be clipped during the output. */
	artClipping: ArtClippingOption;
	/** How much curve information should be preserved. */
	curveQuality: number;
	/**
	 * How should the images in the exported Flash file be 
	 * compressed.
	 */
	imageFormat: FlashImageFormat;
	/** Level of compression. */
	jpegQuality: number;
	/** What method to use. */
	jpegMethod: FlashJPEGMethod;
	/**
	 * What access should the SWF file have - local or network 
	 * access.
	 */
	playbackAccess: FlashPlaybackSecurity;
	/** Pixels per inch. */
	resolution: number;
	/**
	 * If a file with the same name already exists, should it be 
	 * replaced?
	 */
	replacing: SaveOptions;
	/** Should all text be converted to outlines. */
	convertTextToOutlines: boolean;
	/** Should the exported file be compressed. */
	compressed: boolean;
	/** The background color. */
	backgroundColor: RGBColor;
	/**
	 * A list of layers to be included as the static background in 
	 * all exported Flash frames.
	 */
	backgroundLayers: Layer;
	/**
	 * The order in which the layers will be exported to Flash 
	 * frames.
	 */
	layerOrder: LayerOrderType;
	/**
	 * Controls how the blend art objects are animated when export 
	 * to Flash frames.
	 */
	blendAnimation: BlendAnimationType;
	/** Should the kerning information for text objects be ignored. */
	ignoreTextKerning: boolean;
	/**
	 * Should all symbol definitions in the palette be exported to 
	 * the SWF File.
	 */
	exportAllSymbols: boolean;
	/**
	 * Choose whether to preserve artwork appearance or editability 
	 * (default) during export.
	 */
	preserveAppearance: boolean;
	/** If true, include minimal XMP metadata in the exported file. */
	includeMetadata: boolean;
	/**
	 * All the artboards or range of the artboards will be 
	 * exported.
	 */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	
}

/**
 * Options which may be supplied when exporting a document to 
 * AutoCAD formats (.dwg or .dxf)
 * @class
 */
export declare class ExportOptionsAutoCAD {
	/** Which format to export the file as. */
	exportFileFormat: AutoCADExportFileFormat;
	/** Release of AutoCAD to export to. */
	version: AutoCADCompatibility;
	/** Ratio by which to scale the output. */
	unitScaleRatio: number;
	/** Units from which to map. */
	unit: AutoCADUnit;
	/** Number of colors to export into the AutoCAD file. */
	colors: AutoCADColors;
	/** Raster format in which to export raster art. */
	rasterFormat: AutoCADRasterFormat;
	/**
	 * Whether to preserve appearance or editability during export.
	 */
	exportOption: AutoCADExportOption;
	/** Export selected art only. */
	exportSelectedArtOnly: boolean;
	/** Alter paths for appearance. */
	alterPathsForAppearance: boolean;
	/** Whether to convert text to outlines. */
	convertTextToOutlines: boolean;
	/**
	 * Whether to scale lineweights by the same amount as rest of 
	 * the drawing.
	 */
	scaleLineweights: boolean;
	
}

/**
 * Options which may be supplied when exporting a document as a 
 * TIFF file.
 * @class
 */
export declare class ExportOptionsTIFF {
	/** The color space of the exported file. */
	imageColorSpace: ImageColorSpace;
	/** The resolution of the exported file. */
	resolution: number;
	/** Should the resulting image be antialiased. */
	antiAliasing: AntiAliasingMethod;
	/** Compress TIFF file with LZW Compression when exporting. */
	lZWCompression: boolean;
	/** Mac or PC byte order when exporting. */
	byteOrder: TIFFByteOrder;
	/** Embed an ICC profile when exporting. */
	embedICCProfile: boolean;
	/**
	 * All the artboards or range of the artboards will be 
	 * exported.
	 */
	saveMultipleArtboards: boolean;
	/**
	 * If SaveMultipleArtboards is true,this will be considered for 
	 * multi-asset extraction which specifies artboard range.Empty 
	 * string will extracts all the artboards.Default is empty 
	 * string.
	 */
	artboardRange: string;
	
}

/**
 * The parent class for all color values used in Illustrator. 
 * See the specific color classes for more information.
 * @class
 */
export declare class Color {
	
	
}

/**
 * An Lab color specification.
 * @class
 * @extends Color
 */
export declare class LabColor extends Color {
	/** The L color value (between 0.0 and 100.0) */
	l: number;
	/** The a color value (between -128.0 and 127.0) */
	a: number;
	/** The b color value (between -128.0 and 127.0) */
	b: number;
	
}

/**
 * Dimensions (height and width)
 * @class
 */
export declare class Dimensions {
	/** The Width parameter. */
	width: number;
	/** The Height parameter. */
	height: number;
	
}

/**
 * An RGB color specification.
 * @class
 * @extends Color
 */
export declare class RGBColor extends Color {
	/** The red color value (between 0.0 and 255.0) */
	red: number;
	/** The green color value (between 0.0 and 255.0) */
	green: number;
	/** The blue color value (between 0.0 and 255.0) */
	blue: number;
	
}

/**
 * A CMYK color specification.
 * @class
 * @extends Color
 */
export declare class CMYKColor extends Color {
	/** The cyan color value (between 0.0 and 100.0) */
	cyan: number;
	/** The magenta color value (between 0.0 and 100.0) */
	magenta: number;
	/** The yellow color value (between 0.0 and 100.0) */
	yellow: number;
	/** The black color value (between 0.0 and 100.0) */
	black: number;
	
}

/**
 * A gray color specification.
 * @class
 * @extends Color
 */
export declare class GrayColor extends Color {
	/** The gray value (between 0.0 and 100.0) */
	gray: number;
	
}

/**
 * Represents the 'none' color.
 * @class
 * @extends Color
 */
export declare class NoColor extends Color {
	
	
}

/**
 * Information about the spot color.
 * @class
 * @extends Color
 */
export declare class SpotColor extends Color {
	/** Percentage level of tint to be applied to the spot color. */
	tint: number;
	spot: Spot;
	
}

/**
 * A Pattern color specification.
 * @class
 * @extends Color
 */
export declare class PatternColor extends Color {
	/**
	 * The distance to translate the (unscaled) prototype before 
	 * filling.
	 */
	shiftDistance: number;
	/**
	 * The angle to translate the (unscaled) prototype before 
	 * filling.
	 */
	shiftAngle: number;
	/** The fraction to scale the prototype before filling. */
	scaleFactor: Point;
	/** The angle to rotate the before filling. */
	rotation: number;
	/** Whether or not the prototype is reflected before filling. */
	reflect: boolean;
	/** The axis around which to reflect. */
	reflectAngle: number;
	/** The angle to slant the shear by. */
	shearAngle: number;
	/** The axis to shear with respect to. */
	shearAxis: number;
	/**
	 * Additional transformation arising from manipulating the 
	 * path.
	 */
	matrix: Matrix;
	pattern: Pattern;
	
}

/**
 * A Gradient color specification.
 * @class
 * @extends Color
 */
export declare class GradientColor extends Color {
	/** The gradient vector origin. */
	origin: Point;
	/** The gradient vector angle. */
	angle: number;
	/** The gradient vector length. */
	length: number;
	/** The gradient hilite vector angle. */
	hiliteAngle: number;
	/** The gradient hilite vector length. */
	hiliteLength: number;
	/**
	 * Additional transformation arising from manipulating the 
	 * path.
	 */
	matrix: Matrix;
	/** Reference to the object defining the gradient. */
	gradient: Gradient;
	
}

/**
 * Tab stop information (returned by tab stops from a paragraph 
 * object)
 * @class
 */
export declare class TabStopInfo {
	/** The alignment of the tab stop. */
	alignment: TabStopAlignment;
	/** The character used for decimal tab stops. */
	decimalCharacter: string;
	/** The position of the tab stop expressed in points. */
	position: number;
	/** The leader dot. */
	leader: string;
	
}

/**
 * An installed printer.
 * @class
 */
export declare class Printer {
	/** The printer name. */
	name: string;
	/** The printer information. */
	printerInfo: PrinterInfo;
	
}

/**
 * Printer information.
 * @class
 */
export declare class PrinterInfo {
	/** The printer type. */
	printerType: PrinterTypeEnum;
	/** The PostScript level. */
	postScriptLevel: PrinterPostScriptLevelEnum;
	/** The printer color capability. */
	colorSupport: PrinterColorMode;
	/** The printer default resolution. */
	deviceResolution: number;
	/** The printer maximum device resolution. */
	maxDeviceResolution: number;
	/** Does the printer support InRIP color separation? */
	inRIPSeparationSupport: boolean;
	/** Does the printer support binary printing? */
	binaryPrintingSupport: boolean;
	/** The list of supported paper sizes. */
	paperSizes: Paper;
	/** Does the printer support custom paper size? */
	customPaperSupport: boolean;
	/** Does the printer support custom paper transverse? */
	customPaperTransverseSupport: boolean;
	/** Custom paper's minimum width. */
	minPaperWidth: number;
	/** Custom paper's maximum width. */
	maxPaperWidth: number;
	/** Custom paper's minimum height. */
	minPaperHeight: number;
	/** Custom paper's maximum height. */
	maxPaperHeight: number;
	/** Custom paper's minimum height offset. */
	minPaperHeightOffset: number;
	/** Custom paper's maximum height offset. */
	maxPaperHeightOffset: number;
	/** Custom paper's minimum width offset. */
	minPaperWidthOffset: number;
	/** Custom paper's maximum width offset. */
	maxPaperWidthOffset: number;
	
}

/**
 * A PPD file.
 * @class
 */
export declare class PPDFile {
	/** The PPD model name. */
	name: string;
	/** The PPD file information. */
	PPDInfo: PPDFileInfo;
	
}

/**
 * PPD file information.
 * @class
 */
export declare class PPDFileInfo {
	/** The PostScript language level. */
	languageLevel: string;
	/** Path specification for the PPD file. */
	PPDFilePath: File;
	/** List of color separation screens. */
	screenList: Screen;
	/** List of color separation screen spot functions. */
	screenSpotFunctionList: ScreenSpotFunction;
	
}

/**
 * Paper size.
 * @class
 */
export declare class Paper {
	/** The paper name. */
	name: string;
	/** The paper information. */
	paperInfo: PaperInfo;
	
}

/**
 * Paper information.
 * @class
 */
export declare class PaperInfo {
	/** The paper's width (in points) */
	width: number;
	/** The paper's height (in points) */
	height: number;
	/** The imageable area. */
	imageableArea: Rect;
	/** Is it a custom paper? */
	customPaper: boolean;
	
}

/**
 * Color separation screen.
 * @class
 */
export declare class Screen {
	/** The color separation screen name. */
	name: string;
	/** The color separation screen information. */
	screenInfo: ScreenInfo;
	
}

/**
 * Screen information.
 * @class
 */
export declare class ScreenInfo {
	/** Is it the default screen? */
	defaultScreen: boolean;
	/** The screen's frequency. */
	frequency: number;
	/** The screen's angle (in degrees) */
	angle: number;
	
}

/**
 * Color separation screen spot function.
 * @class
 */
export declare class ScreenSpotFunction {
	/** The color separation screen spot function name. */
	name: string;
	/** The spot function in terms of the PostScript commands. */
	spotFunction: string;
	
}

/**
 * Printer's ink.
 * @class
 */
export declare class Ink {
	/** The ink's name. */
	name: string;
	/** The ink information. */
	inkInfo: InkInfo;
	
}

/**
 * Ink information.
 * @class
 */
export declare class InkInfo {
	/** The ink printing status. */
	printingStatus: InkPrintStatus;
	/** The ink type. */
	kind: InkType;
	/** The trapping type. */
	trapping: TrappingType;
	/** The order of trapping for the ink. */
	trappingOrder: number;
	/** The neutral density. */
	density: number;
	/** The ink's frequency. */
	frequency: number;
	/** The ink's screen angle (in degrees) */
	angle: number;
	/** The color of the custom ink. */
	customColor: Color;
	/** The dot shape name. */
	dotShape: string;
	
}

/**
 * The new document preset to use for creating a new document.
 * @class
 */
export declare class DocumentPreset {
	/** The title for the new document. */
	title: string;
	/** The width for the new document. */
	width: number;
	/** The height for the new document. */
	height: number;
	/** Number of artboards for new document.Range (1:100). */
	numArtboards: number;
	/** Layout for artboards. */
	artboardLayout: DocumentArtboardLayout;
	/** Spacing between artboards. */
	artboardSpacing: number;
	/**
	 * Number of rows (for rows layout) OR column(for column 
	 * layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 
	 * 1 for single row or column layouts.
	 */
	artboardRowsOrCols: number;
	/** The color mode for the new document. */
	colorMode: DocumentColorSpace;
	/** The units for the new document. */
	units: RulerUnits;
	/** The preview mode for the new document. */
	previewMode: DocumentPreviewMode;
	/** The raster resolution for the new document. */
	rasterResolution: DocumentRasterResolution;
	/** The transparency grid for the new document. */
	transparencyGrid: DocumentTransparencyGrid;
	
}

/**
 * The print options.
 * @class
 */
export declare class PrintOptions {
	/** The name of the printer to print to. */
	printerName: string;
	/** The name of the PPD to use. */
	PPDName: string;
	/** The name of a print preset to use. */
	printPreset: string;
	/** The transparency flattener preset name. */
	flattenerPreset: string;
	/** The paper options. */
	paperOptions: PrintPaperOptions;
	/** The printing job options. */
	jobOptions: PrintJobOptions;
	/** The printing color separation options. */
	colorSeparationOptions: PrintColorSeparationOptions;
	/** The printing coordinate options. */
	coordinateOptions: PrintCoordinateOptions;
	/** The printing page marks options. */
	pageMarksOptions: PrintPageMarksOptions;
	/** The printing font options. */
	fontOptions: PrintFontOptions;
	/** The printing PostScript options. */
	postScriptOptions: PrintPostScriptOptions;
	/** The printing color management options. */
	colorManagementOptions: PrintColorManagementOptions;
	/** The printing flattener options. */
	flattenerOptions: PrintFlattenerOptions;
	
}

/**
 * The paper options.
 * @class
 */
export declare class PrintPaperOptions {
	/** The paper's name. */
	name: string;
	/** The custom width (in points) for using the custom paper. */
	width: number;
	/** The custom height (in points) for using the custom paper. */
	height: number;
	/** Custom offset (in points) for using the custom paper. */
	offset: number;
	/**
	 * Whether to transverse the artwork (rotate 90 degrees) on the 
	 * custom paper.
	 */
	transverse: boolean;
	
}

/**
 * The print job options.
 * @class
 */
export declare class PrintJobOptions {
	/** The layers/objects to be printed. */
	designation: PrintArtworkDesignation;
	/** The printing bounds. */
	printArea: PrintingBounds;
	/** The number of copies to print. */
	copies: number;
	/** Print pages in reverse order. */
	reversePages: boolean;
	/** Whether to collate print pages. */
	collate: boolean;
	/** The file to be printed to. */
	file: File;
	/** Whether to print as bitmap. */
	printAsBitmap: boolean;
	/** The bitmap resolution. */
	bitmapResolution: number;
	/** The print job name. */
	name: string;
	/** Whether to print all artboards. */
	printAllArtboards: boolean;
	/** Artboard Range to be printed if PrintAllArtboards is false. */
	artboardRange: string;
	
}

/**
 * Print color separation options.
 * @class
 */
export declare class PrintColorSeparationOptions {
	/** The color separation type. */
	colorSeparationMode: PrintColorSeparationMode;
	/** Whether to convert all spot colors to process colors. */
	convertSpotColors: boolean;
	/** Whether to overprint in black. */
	overPrintBlack: boolean;
	/** The list of inks for color separation. */
	inkList: Ink;
	
}

/**
 * The print coordinate options.
 * @class
 */
export declare class PrintCoordinateOptions {
	/** The artwork orientation. */
	orientation: PrintOrientation;
	/** Whether to flip artwork horizontally. */
	emulsion: boolean;
	/** The artwork position on media. */
	position: PrintPosition;
	/**
	 * Whether to proportionally scale the artwork to fit on the 
	 * page.
	 */
	fitToPage: boolean;
	/**
	 * The horizontal scaling factor expressed as a percentage (100 
	 * = 100%)
	 */
	horizontalScale: number;
	/**
	 * The vertical scaling factor expressed as a percentage (100 = 
	 * 100%)
	 */
	verticalScale: number;
	/** The page tiling mode. */
	tiling: PrintTiling;
	
}

/**
 * The page marks options.
 * @class
 */
export declare class PrintPageMarksOptions {
	/** The page marks style. */
	pageMarksType: PageMarksTypes;
	/** Stroke weight of trim marks. */
	trimMarksWeight: number;
	/** Whether to enable trim marks printing. */
	trimMarks: boolean;
	/** Whether to enable registration marks printing. */
	registrationMarks: boolean;
	/** Whether to enable color bars printing. */
	colorBars: boolean;
	/** Whether to enable page info marks printing. */
	pageInfoMarks: boolean;
	/** The bleed offset rect. */
	bleedOffsetRect: Rect;
	/** The page marks offset rect. */
	marksOffsetRect: Rect;
	
}

/**
 * The font options for printing.
 * @class
 */
export declare class PrintFontOptions {
	/** The font download mode. */
	downloadFonts: PrintFontDownloadMode;
	/** The font substitution policy. */
	fontSubstitution: FontSubstitutionPolicy;
	
}

/**
 * The PostScript options.
 * @class
 */
export declare class PrintPostScriptOptions {
	/** The PostScript language level. */
	postScriptLevel: PrinterPostScriptLevelEnum;
	/** Whether to print in binary mode. */
	binaryPrinting: boolean;
	/** Whether to print in negative mode. */
	negativePrinting: boolean;
	/** The image compression type. */
	imageCompression: PostScriptImageCompressionType;
	/** Whether to force continuous tone. */
	forceContinuousTone: boolean;
	/**
	 * Use PostScript level 1 compatible gradient and gradient mesh 
	 * printing.
	 */
	compatibleShading: boolean;
	/** The shading resolution. */
	shadingResolution: number;
	
}

/**
 * The color management options.
 * @class
 */
export declare class PrintColorManagementOptions {
	/** The color management profile mode. */
	colorProfileMode: PrintColorProfile;
	/** The color management intent type. */
	intent: PrintColorIntent;
	/** The color management profile name. */
	name: string;
	
}

/**
 * The transparency flattening options.
 * @class
 */
export declare class PrintFlattenerOptions {
	/** The flattening balance. */
	flatteningBalance: number;
	/** The rasterization resolution. */
	rasterizationResolution: number;
	/** The gradient resolution. */
	gradientResolution: number;
	/** Whether to convert all text to outlines. */
	convertTextToOutlines: boolean;
	/** Whether to convert all strokes to outlines. */
	convertStrokesToOutlines: boolean;
	/** Whether to clip complex regions. */
	clipComplexRegions: boolean;
	/** Overprint. */
	overprint: PDFOverprint;
	
}

/**
 * Options which may be supplied when capturing a portion of 
 * the artwork as an 24 bit PNG file.
 * @class
 */
export declare class ImageCaptureOptions {
	/** The resolution of the captured image file. */
	resolution: number;
	/** Should the resulting image use transparency. */
	transparency: boolean;
	/** Should the artboard be matted with a color. */
	matte: boolean;
	/** The color to use when matting the artboard (default: white) */
	matteColor: RGBColor;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	
}

/**
 * The document raster effects settings.
 * @class
 */
export declare class RasterEffectOptions {
	/** The color model for the rasterization. */
	colorModel: RasterizationColorModel;
	/** The rasterization resolution in dots-per-inch (dpi) */
	resolution: number;
	/** Should the resulting image use transparency. */
	transparency: boolean;
	/** Should the resulting image be antialiased. */
	antiAliasing: boolean;
	/** Should a clipping mask be created for the resulting image. */
	clippingMask: boolean;
	/**
	 * Whether to convert all spot colors to process colors in the 
	 * resulting image.
	 */
	convertSpotColors: boolean;
	/**
	 * The amount of white space (in points) to be added around the 
	 * object during rasterization.
	 */
	padding: number;
	
}

/**
 * Options which may be supplied when rasterizing the artwork.
 * @class
 */
export declare class RasterizeOptions {
	/** The color model for the rasterization. */
	colorModel: RasterizationColorModel;
	/** The rasterization resolution in dots-per-inch (dpi) */
	resolution: number;
	/** Should the resulting image use transparency. */
	transparency: boolean;
	/** The type of antialiasing method. */
	antiAliasingMethod: AntiAliasingMethod;
	/** Should a clipping mask be created for the resulting image. */
	clippingMask: boolean;
	/**
	 * Whether to convert all spot colors to process colors in the 
	 * resulting image.
	 */
	convertSpotColors: boolean;
	/**
	 * Should all text be converted to outlines before 
	 * rasterization.
	 */
	convertTextToOutlines: boolean;
	/**
	 * Should the resulting image incorporates the layer attributes 
	 * (such as opacity and blend mode)
	 */
	includeLayers: boolean;
	/**
	 * Should rasterize against a black background instead of 
	 * white.
	 */
	backgroundBlack: boolean;
	/**
	 * The amount of white space (in points) to be added around the 
	 * object during rasterization.
	 */
	padding: number;
	
}

/**
 * The Adobe Illustrator application.
 * @class
 */
export declare class Application {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The application's name. */
	name: string;
	/** Path specification for the application. */
	path: File;
	/** The active document. */
	activeDocument: Document;
	/** The current users adobe id. */
	userAdobeID: string;
	/** The current user's GUID. */
	userGUID: string;
	/** The version of the Adobe Illustrator application. */
	version: string;
	/** The build number of the Adobe Illustrator application. */
	buildNumber: string;
	/** The Locale of the Adobe Illustrator application. */
	locale: string;
	/** The version of the Scripting plugin. */
	scriptingVersion: string;
	/**
	 * The amount of unused memory within the Adobe Illustrator 
	 * partition.
	 */
	freeMemory: number;
	/** Is a web browser available? */
	browserAvailable: boolean;
	/** The selection visible to the user. */
	selection: any;
	/** Is the application visible. */
	visible: boolean;
	/**
	 * What level of interaction with the user should be allowed 
	 * when handling script commands.
	 */
	userInteractionLevel: UserInteractionLevel;
	/** Coordinate System used by script. */
	coordinateSystem: CoordinateSystem;
	/** Preferences for Illustrator. */
	preferences: Preferences;
	/** The list of installed printers. */
	printerList: Printer;
	/**
	 * The list of PPD files currently available for use. For 
	 * performance reasons, the PPDFile entry only contains the 
	 * model name and file spec of each PPD file.
	 */
	PPDFileList: PPDFile;
	/** The list of print preset names currently available for use. */
	printPresetsList: string;
	/** The list of presets available for creating a new document. */
	startupPresetsList: string;
	/** The list of PDF preset names currently available for use. */
	PDFPresetsList: string;
	/**
	 * The list of flattener style names currently available for 
	 * use.
	 */
	flattenerPresetsList: string;
	/**
	 * The list of tracing preset names currently available for 
	 * use.
	 */
	tracingPresetsList: string;
	/**
	 * The list of color settings files currently available for 
	 * use.
	 */
	colorSettingsList: File;
	/**
	 * The default color settings file for the current application 
	 * locale.
	 */
	defaultColorSettings: File;
	/** Does paste operation remember layers structure? */
	pasteRemembersLayers: boolean;
	/** The open documents. */
	documents: Documents;
	/** Installed fonts. */
	textFonts: TextFonts;
	/** Returns the JSON Data required by Hello. */
	getHelloJSONData(): string;
	/**
	 * Returns the JSON Data required by CCX Welcome.
	 * @param {string} mode - Mode for which the data is to be 
	 * provided.
	 */
	getCCXUserJSONData(mode: string): string;
	/**
	 * Launch cep Extension given its ID.
	 * @param {string} extensionID - Arguments for Launching 
	 * Extension - ID of extension in manifest.xml of corresponding 
	 * extension.
	 */
	launchExtension(extensionID: string): number;
	/**
	 * Runs API Tests from the TestAPI Plug-in.
	 * @param {string} testName - Arguments for Running Tests - eg. 
	 * Name of Test/Suite.
	 */
	runAPITest(testName: string): void;
	/** Loads the aat model to the editor. */
	aATLoadModel(): string;
	/** Loads a UI description as an extension to the editor. */
	aATLoadUIExtension(): string;
	/** Loads a session file as an extension to the editor. */
	aATLoadLibExtension(): string;
	/** Executes the active session in the sequencer. */
	aATExecuteSession(): void;
	/**
	 * Executes the active session in the sequencer.
	 * @param {File} file - Execute a session file.
	 */
	aATExecuteSessionFromFile(file: File): void;
	/** Retrieves a file path to the AAT editor swf. */
	aATGetEditorDialogFile(): File;
	/** Retrieves a string representing the AAT version. */
	getVersionString(): string;
	/** Retrieves a file path to the AAT error dialog swf. */
	aATGetErrorDialogFile(): File;
	/**
	 * Retrieves a boolean indicating the presence of errors in the 
	 * last script to execute.
	 */
	aATErrorsExist(): boolean;
	/**
	 * Retrieves a string containing the results of the last script 
	 * to execute.
	 */
	getExecutionOutput(): string;
	/** Clear the sequencer. */
	aATClear(): string;
	/** Get the active session for the sequncer. */
	aATGetSession(): string;
	/** Saves the active session in the sequencer to a file. */
	aATSaveSession(): string;
	/** Saves the active session in the sequencer to a new file. */
	aATSaveAsSession(): string;
	/** Loads a session into the sequencer. */
	aATLoadSessionFile(): string;
	/**
	 * Add the specified to the sequencer.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to add.
	 * @param {number} destinationSequenceID - The UID for the 
	 * owning sequence.
	 * @param {number} destinationIndex - The item UID where to 
	 * insert.
	 * @param {string} srcItemIDData - The item ID of the item to 
	 * construct.
	 * @param {string} _type - The source of the item to construct.
	 */
	aATAddItem(sessionIndex: number, destinationSequenceID: number, destinationIndex: number, srcItemIDData: string, _type: string): string;
	/**
	 * Moves the specified in the sequencer.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to move.
	 * @param {string} moveThisID - The UID of the item to replace.
	 * @param {number} newSessionIndex - The index in the session 
	 * of the destination top-most sequence.
	 * @param {string} destinationSequenceID - The UID for the 
	 * owning sequence.
	 * @param {number} destinationIndex - The index where to 
	 * insert.
	 */
	aATMoveItem(sessionIndex: number, moveThisID: string, newSessionIndex: number, destinationSequenceID: string, destinationIndex: number): string;
	/**
	 * Replaces the specified to the sequencer.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to add.
	 * @param {number} replaceThisID - The UID of the item to 
	 * replace.
	 * @param {string} srcItemIDData - The item ID of the item to 
	 * construct.
	 * @param {string} _type - The source of the item to construct.
	 */
	aATReplaceItem(sessionIndex: number, replaceThisID: number, srcItemIDData: string, _type: string): string;
	/**
	 * Removes the specified item from the sequencer.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to add.
	 * @param {string} item - The item UID.
	 */
	aATRemoveItem(sessionIndex: number, item: string): string;
	/**
	 * Duplicates the specified item(s) from the sequencer.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to add.
	 * @param {string} item - The item UID(s)
	 */
	aATDuplicateItem(sessionIndex: number, item: string): string;
	/**
	 * Opens the specified item from the sequencer in the item 
	 * editor.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to add.
	 * @param {string} item - The item UID.
	 */
	aATEditItem(sessionIndex: number, item: string): string;
	/**
	 * Applies the data used in the item editor to the item.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to edit.
	 * @param {string} item - The item UID.
	 * @param {string} data - The data to apply in XML format.
	 */
	applyDataToItem(sessionIndex: number, item: string, data: string): string;
	/**
	 * Applies data to the specified item from the sequencer in the 
	 * item editor.
	 * @param {number} sessionIndex - The index in the session of 
	 * the top-most sequence for the item to add.
	 * @param {string} item - The item UID.
	 * @param {string} dataID - The data to apply in XML format.
	 * @param {string} data - The data to apply in XML format.
	 */
	applySingleDataPointToItem(sessionIndex: number, item: string, dataID: string, data: string): boolean;
	/**
	 * Returns a string translated from the key and source data 
	 * passed in.
	 * @param {string} key - The string to translate.
	 * @param {string} source - The plugin name from the source of 
	 * the key.
	 */
	translateString(key: string, source: string): string;
	/**
	 * Prompts the user to save a file or choose a file or 
	 * directory and returns a relative path string to the file.
	 * @param {string} path - The path relative to the folder 
	 * specified by Relative.
	 * @param {string} relative - The current relative path token.
	 * @param {string} _type - The type of dialog to show in string 
	 * format.
	 */
	aATFileSaveDialog(path: string, relative: string, _type: string): string;
	/**
	 * Switches a files relative token and path.
	 * @param {string} path - The path relative to the folder 
	 * specified by Relative.
	 * @param {string} relative - The current relative path token.
	 * @param {string} newRelative - The new relative path token.
	 */
	aATFileRelativeChanged(path: string, relative: string, newRelative: string): string;
	/**
	 * Gets an XML string listing the relative paths and the UI 
	 * strings to display them.
	 */
	aATGetListOfRelativePaths(): string;
	/** Starts the automation tests for the Sync Settings feature. */
	beginSyncSettingsAutomationTest(): boolean;
	/** Starts the automation tests for the Typekit Font feature. */
	beginTypekitFontAutomationTest(): boolean;
	/** Cut current selection to the clipboard. */
	cut(): void;
	/** Copy current selection to the clipboard. */
	copy(): void;
	/** Paste clipboard into the current document. */
	paste(): void;
	/** Checks if fill is active or not. */
	isFillActive(): boolean;
	/** Checks if stroke is active or not. */
	isStrokeActive(): boolean;
	/**
	 * Invokes application's color picker.
	 * @param {Color} color - The color to load in the color picker 
	 * initially.
	 */
	showColorPicker(color: Color): Color;
	/**
	 * For Internal Use.
	 * @param {File} assetURL - For Internal use.
	 * @param {File} thumbnailURL - For Internal use.
	 * @param {any} options - For internal use.
	 */
	openCloudLibraryAssetForEditing(assetURL: File, thumbnailURL: File, options: any): Document;
	/**
	 * For Internal Use.
	 * @param {any} options - Options for the PNG24 export.
	 */
	setThumbnailOptionsForCloudLibrary(options: any): void;
	/** Undo the last transaction. */
	undo(): void;
	/** Redo the last transaction. */
	redo(): void;
	/**
	 * Play an action from the Actions Palette.
	 * @param {string} action - The name of the action to play 
	 * (note that the case of letters in the Action name is 
	 * important and must match the case of the name in the Actions 
	 * palette)
	 * @param {string} _from - The name of the action set 
	 * containing the action being played (note that the case of 
	 * letters in the Action Set name is important and must match 
	 * the case of the name in the Actions palette)
	 * @param {boolean} dialogs - Are dialog boxes associated with 
	 * the action to be presented?
	 */
	doScript(action: string, _from: string, dialogs: boolean): void;
	/**
	 * Executes a menu command using the menu shortcut string.
	 * @param {string} menuCommandString - Menu command shortcut.
	 */
	executeMenuCommand(menuCommandString: string): void;
	/**
	 * Given a preset type, returns the full path to the 
	 * application's default document profile for the type.
	 * @param {DocumentPresetType} presetType - The preset type.
	 */
	getPresetFileOfType(presetType: DocumentPresetType): File;
	/**
	 * Load an action into action palette.
	 * @param {File} actionFilePath - The path on the system of the 
	 * action file to be loaded.
	 */
	loadAction(actionFilePath: File): void;
	/**
	 * Unloads an action into action palette.
	 * @param {string} setName - Name of the set to be unloaded.
	 * @param {string} actionName - Name of the action to be 
	 * unloaded.
	 */
	unloadAction(setName: string, actionName: string): void;
	/**
	 * Sends the script message to the required plugin.
	 * @param {string} pluginName - Plugin to which message needs 
	 * to be sent.
	 * @param {string} messageSelector - Functionality that is to 
	 * be executed.
	 * @param {string} inputString - Pass any data encoded in a 
	 * string.
	 */
	sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
	/**
	 * Given a preset name, tries and retrieves the settings from 
	 * the preset template.
	 * @param {string} preset - The name of the preset.
	 */
	getPresetSettings(preset: string): DocumentPreset;
	/** Force Illustrator to redraw its window(s) */
	redraw(): void;
	/**
	 * Invert a matrix.
	 * @param {Matrix} matrix - The matrix to invert.
	 */
	invertMatrix(matrix: Matrix): Matrix;
	/**
	 * Tests if a matrix is singular (cannot be inverted)
	 * @param {Matrix} matrix - The matrix to check.
	 */
	isSingularMatrix(matrix: Matrix): boolean;
	/**
	 * Concatenate a translation to a transformation matrix.
	 * @param {Matrix} matrix - The matrix that is to be added to.
	 * @param {number} deltaX - Horizontal transformation.
	 * @param {number} deltaY - Vertical transformation.
	 */
	concatenateTranslationMatrix(matrix: Matrix, deltaX: number, deltaY: number): Matrix;
	/**
	 * Concatenate a scale matrix to a transformation matrix.
	 * @param {Matrix} matrix - The matrix that is to be added to.
	 * @param {number} scaleX - Horizontal scaling factor expressed 
	 * as a percentage (100 = 100%)
	 * @param {number} scaleY - Vertical scaling factor expressed 
	 * as a percentage (100 = 100%)
	 */
	concatenateScaleMatrix(matrix: Matrix, scaleX: number, scaleY: number): Matrix;
	/**
	 * Concatenate a rotation matrix to a transformation matrix.
	 * @param {Matrix} matrix - The matrix that is to be added to.
	 * @param {number} angle - Angle of rotation (in degrees)
	 */
	concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix;
	/**
	 * Concatenate two transformation matrices.
	 * @param {Matrix} matrix - The matrix that is to be added to.
	 * @param {Matrix} secondMatrix - Second transformation matrix.
	 */
	concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix;
	/**
	 * Compares two matrices for equality.
	 * @param {Matrix} matrix - First transformation matrix to 
	 * compare.
	 * @param {Matrix} secondMatrix - Second transformation matrix.
	 */
	isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean;
	/** Returns an identity matrix. */
	getIdentityMatrix(): Matrix;
	/**
	 * Returns a rotation transformation matrix.
	 * @param {number} angle - Angle of rotation (in degrees)
	 */
	getRotationMatrix(angle: number): Matrix;
	/**
	 * Returns a scale transformation matrix.
	 * @param {number} scaleX - Horizontal scaling factor expressed 
	 * as a percentage (100 = 100%)
	 * @param {number} scaleY - Vertical scaling factor expressed 
	 * as a percentage (100 = 100%)
	 */
	getScaleMatrix(scaleX: number, scaleY: number): Matrix;
	/**
	 * Returns a translation matrix.
	 * @param {number} deltaX - Horizontal transformation.
	 * @param {number} deltaY - Vertical transformation.
	 */
	getTranslationMatrix(deltaX: number, deltaY: number): Matrix;
	/**
	 * Open the specified document file.
	 * @param {File} file - The file to be opened.
	 * @param {DocumentColorSpace} documentColorSpace - Choose 
	 * color space only for documents saved with multiple color 
	 * models (pre-Illustrator 9)
	 * @param {any} options - Options for opening a particular type 
	 * of file.
	 */
	open(file: File, documentColorSpace: DocumentColorSpace, options: any): Document;
	/**
	 * Dump the PGF portion of ai file to txt file.
	 * @param {File} file - The AI file to be opened.
	 * @param {DocumentColorSpace} documentColorSpace - Choose 
	 * color space only for documents saved with multiple color 
	 * models (pre-Illustrator 9)
	 * @param {File} pGFFile - Folder to save the output PGF file.
	 */
	dumpPGFFile(file: File, documentColorSpace: DocumentColorSpace, pGFFile: File): boolean;
	/** Quit the application. */
	quit(): void;
	beep(): void;
	/**
	 * Translate the placeholder text to regular text. A method to 
	 * enter unicode points in hex values.
	 * @param {string} text - The placeholder text to be 
	 * translated.
	 */
	translatePlaceholderText(text: string): string;
	/**
	 * Get presets from the file.
	 * @param {File} fileSpec - File spec to import from.
	 */
	showPresets(fileSpec: File): string;
	/**
	 * Load the color settings from the file. If the file is an 
	 * empty file spec, the color management will be turned off.
	 * @param {File} fileSpec - File spec for the color settings.
	 */
	loadColorSettings(fileSpec: File): void;
	/**
	 * Get detailed info from the specified PPD file.
	 * @param {string} name - The model name of the PPD file.
	 */
	getPPDFileInfo(name: string): PPDFileInfo;
	/**
	 * Get the scriptable help group object that represents the 
	 * search widget in the app bar.
	 */
	getScriptableHelpGroup(): any;
	/**
	 * Converts a sample-component color from one color space to 
	 * another.
	 * @param {ImageColorSpace} sourceColorSpace - The source color 
	 * space.
	 * @param {number} sourceColor - The color to convert, an array 
	 * of color components. First location of the array should 
	 * contain alpha if source-has-alpha is true.
	 * @param {ImageColorSpace} destColorSpace - The destination 
	 * color space.
	 * @param {ColorConvertPurpose} colorConvertPurpose - The 
	 * parameter which passes the purpose of conversion.
	 * @param {boolean} sourceHasAlpha - True if alpha channel is 
	 * present in source color.
	 * @param {boolean} destHasAlpha - True if alpha channel is 
	 * present in destination color.
	 */
	convertSampleColor(sourceColorSpace: ImageColorSpace, sourceColor: number, destColorSpace: ImageColorSpace, colorConvertPurpose: ColorConvertPurpose, sourceHasAlpha: boolean, destHasAlpha: boolean): number;
	/**
	 * Generate Creative Suite ActionScript Wrappers in specified 
	 * directory.
	 * @param {File} outputFolder - Location for the output files.
	 */
	reflectCSAW(outputFolder: File): void;
	/**
	 * Switches between workspaces.
	 * @param {string} workspaceName - Workspace Name.
	 */
	switchWorkspace(workspaceName: string): boolean;
	/**
	 * Deletes an existing workspace.
	 * @param {string} workspaceName - Workspace Name.
	 */
	deleteWorkspace(workspaceName: string): boolean;
	/**
	 * Saves a new workspace.
	 * @param {string} workspaceName - Workspace Name.
	 */
	saveWorkspace(workspaceName: string): boolean;
	/** Resets the current workspace. */
	resetWorkspace(): boolean;
	/** Is In Touch Workspace. */
	isTouchWorkspace(): boolean;
	/** Is user sharing the application usage data. */
	isUserSharingAppUsageData(): boolean;
}

/**
 * A document.
 * @class
 */
export declare class Document {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Is the file a stationery file? */
	stationery: boolean;
	/** The file associated with the document. */
	fullName: File;
	/** The active layer. */
	activeLayer: Layer;
	/** The document's current view. */
	activeView: View;
	/** The bounds of the illustration excluding stroke width. */
	geometricBounds: Rect;
	/**
	 * The visible bounds of the illustration including stroke 
	 * width.
	 */
	visibleBounds: Rect;
	rulerOrigin: Point;
	rulerUnits: RulerUnits;
	pageOrigin: Point;
	cropBox: Rect;
	cropStyle: CropOptions;
	width: number;
	height: number;
	showPlacedImages: boolean;
	outputResolution: number;
	printTiles: boolean;
	/** The selection within the document. */
	selection: any;
	splitLongPaths: boolean;
	tileFullPages: boolean;
	useDefaultScreen: boolean;
	/** The color space used for the document. */
	documentColorSpace: DocumentColorSpace;
	/** The document's name. */
	name: string;
	/** Path specification for the document. */
	path: File;
	/** Has the document been saved? */
	saved: boolean;
	/** Should a new path be filled? */
	defaultFilled: boolean;
	/** Default fill color. */
	defaultFillColor: Color;
	/** Will art beneath a filled object be overprinted by default? */
	defaultFillOverprint: boolean;
	/** Should a new path be stroked? */
	defaultStroked: boolean;
	/** Default stroke color. */
	defaultStrokeColor: Color;
	/**
	 * Will art beneath a stroked object be overprinted by default?
	 */
	defaultStrokeOverprint: boolean;
	/** Default width of stroke. */
	defaultStrokeWidth: number;
	/** Default dash lengths (set to {} for a solid line) */
	defaultStrokeDashes: number;
	/**
	 * The default distance into the dash pattern at which the 
	 * pattern should be started.
	 */
	defaultStrokeDashOffset: number;
	/** Default type of line capping. */
	defaultStrokeCap: StrokeCap;
	/** Default type of joints. */
	defaultStrokeJoin: StrokeJoin;
	/**
	 * Specifies whether a join is mitered (pointed) or beveled 
	 * (squared-off) by default.
	 */
	defaultStrokeMiterLimit: number;
	/** The active data set. */
	activeDataSet: DataSet;
	/** The locked variables. */
	variablesLocked: boolean;
	/** The XMP packet string associated with the document. */
	XMPString: string;
	/** The document raster effects settings. */
	rasterEffectSettings: RasterEffectOptions;
	/** The name of the color profile of the document. */
	colorProfileName: string;
	/** All artboards in the document. */
	artboards: Artboards;
	/** The compound path artwork in this collection. */
	compoundPathItems: CompoundPathItems;
	/** The layers in this document. */
	layers: Layers;
	/** All the artwork in this document. */
	pageItems: PageItems;
	/** The path artwork in this document. */
	pathItems: PathItems;
	/** The tags in this document. */
	tags: Tags;
	/** The views in this document. */
	views: Views;
	/** The raster art items in this document. */
	rasterItems: RasterItems;
	/** The placed art items in this document. */
	placedItems: PlacedItems;
	/** The embedded art items in this layer. */
	embeddedItems: EmbeddedItems;
	/** The mesh art items in this document. */
	meshItems: MeshItems;
	/** The plugin art items in this document. */
	pluginItems: PluginItems;
	/** The graph art items in this document. */
	graphItems: GraphItems;
	/** The non-native art items in this document. */
	nonNativeItems: NonNativeItems;
	/** The group items in this document. */
	groupItems: GroupItems;
	/** The text frame items in this document. */
	textFrames: TextFrameItems;
	/** The story items in this document. */
	stories: Stories;
	/** The list of character styles in this document. */
	characterStyles: CharacterStyles;
	/** The list of paragraph styles in this document. */
	paragraphStyles: ParagraphStyles;
	/** The Kinsoku set. */
	kinsokuSet: string;
	/** The Mojikumi set. */
	mojikumiSet: string;
	/** The swatches in this document. */
	swatches: Swatches;
	/** The Swatch Groups in this document. */
	swatchGroups: SwatchGroups;
	/** The gradients available in this document. */
	gradients: Gradients;
	/** The patterns available in this document. */
	patterns: Patterns;
	/** The custom spot colors available in this document. */
	spots: Spots;
	/** The symbols defined in this document. */
	symbols: Symbols;
	/** The symbol items in this document. */
	symbolItems: SymbolItems;
	/** The brushes defined in this document. */
	brushes: Brushes;
	/** The graphic styles defined in this document. */
	graphicStyles: ArtStyles;
	/** The variables defined in this document. */
	variables: Variables;
	/** The list of inks in this document. */
	inkList: Ink;
	/** The data sets defined in this document. */
	dataSets: DataSets;
	/** The text frame items in this story. */
	legacyTextItems: LegacyTextItems;
	/**
	 * Close the specified document(s)
	 * @param {SaveOptions} saving - Specifies whether changes 
	 * should be saved before closing.
	 */
	close(saving: SaveOptions): void;
	/**
	 * Process a gesture based on input points.
	 * @param {string} gesturePointsFile - File Path containing 
	 * points constituting the gesture.
	 */
	processGesture(gesturePointsFile: string): void;
	/** Save the document. */
	save(): void;
	/**
	 * Save the document with specific save options.
	 * @param {File} saveIn - The file to save the document in.
	 * @param {any} options - Options for the file type specified.
	 */
	saveAs(saveIn: File, options: any): void;
	/**
	 * Print the document.
	 * @param {PrintOptions} options - Print options.
	 */
	print(options: PrintOptions): void;
	/**
	 * Export the specified document(s)
	 * @param {File} exportFile - The file to export the document 
	 * to.
	 * @param {ExportType} exportFormat - The file type to export 
	 * the document as.
	 * @param {any} options - Options for the file type specified.
	 */
	exportFile(exportFile: File, exportFormat: ExportType, options: any): void;
	/**
	 * Export the selection as PNG file.
	 * @param {File} exportFile - The file to export the selection 
	 * to.
	 * @param {any} options - Options for the PNG24 export.
	 */
	exportSelectionAsPNG(exportFile: File, options: any): void;
	/**
	 * Export the selection as Ai file.
	 * @param {File} exportFile - The file to export the selection 
	 * to.
	 */
	exportSelectionAsAi(exportFile: File): void;
	/**
	 * Import the file into current Ai document.
	 * @param {File} importFile - The file to import in the current 
	 * document.
	 * @param {boolean} isLinked - Is AssetLiveLinked.
	 * @param {string} libraryName - For Internal Use.
	 * @param {string} itemName - For Internal Use.
	 * @param {string} elementRef - For Internal Use.
	 * @param {number} modifiedTime - For Internal Use.
	 * @param {number} creationTime - For Internal Use.
	 * @param {string} adobeStockId - For Internal Use.
	 * @param {string} adobeStockLicense - For Internal Use.
	 */
	importFile(importFile: File, isLinked: boolean, libraryName: string, itemName: string, elementRef: string, modifiedTime: number, creationTime: number, adobeStockId: string, adobeStockLicense: string): void;
	/** Activate the first window associated with the document. */
	activate(): void;
	/**
	 * Import a library containing datasets, variables and their 
	 * associated dynamic data. Importing variables will overwrite 
	 * existing variables and datasets.
	 * @param {File} fileSpec - File spec to import from.
	 */
	importVariables(fileSpec: File): void;
	/**
	 * Save datasets into an XML library. The datasets contain 
	 * variables and their associated dynamic data.
	 * @param {File} file - File spec to export to.
	 */
	exportVariables(file: File): void;
	/**
	 * Load the character styles from the Illustrator file.
	 * @param {File} fileSpec - File spec to import from.
	 */
	importCharacterStyles(fileSpec: File): void;
	/**
	 * Load the paragraph styles from the Illustrator file.
	 * @param {File} fileSpec - File spec to import from.
	 */
	importParagraphStyles(fileSpec: File): void;
	/**
	 * Apply the named print preset from the file to the current 
	 * print setting.
	 * @param {string} printPreset - The name of a print preset to 
	 * import.
	 * @param {File} fileSpec - File to import from.
	 */
	importPrintPreset(printPreset: string, fileSpec: File): void;
	/**
	 * Export the current print setting to the preset file.
	 * @param {File} file - File to export to.
	 */
	exportPrintPreset(file: File): void;
	/**
	 * Load all PDF presets from a file.
	 * @param {File} fileSpec - File to import from.
	 * @param {boolean} replacingPreset - Should existing editable 
	 * presets be replaced?
	 */
	importPDFPreset(fileSpec: File, replacingPreset: boolean): void;
	/**
	 * Save all PDF presets to a file.
	 * @param {File} file - File to export to.
	 */
	exportPDFPreset(file: File): void;
	/**
	 * Loads mentioned perspective grid preset, if preset name is 
	 * specified, else loads all(if no preset name is specified) 
	 * presets, from the specified file.
	 * @param {File} fileSpec - File to import from.
	 * @param {string} perspectivePreset - Name of perspective grid 
	 * preset.
	 */
	importPerspectiveGridPreset(fileSpec: File, perspectivePreset: string): void;
	/**
	 * Saves all perspective grid presets to a file.
	 * @param {File} file - File to export to.
	 */
	exportPerspectiveGridPreset(file: File): void;
	/**
	 * Capture the artwork content inside the clip bound as raster 
	 * image, and write out the captured image data into the target 
	 * image file.
	 * @param {File} imageFile - The file to which the captured 
	 * image should be written.
	 * @param {Rect} clipBounds - The rectangular region of the 
	 * artwork for image capture. If the parameter is omitted, the 
	 * entire artwork bound is captured.
	 * @param {ImageCaptureOptions} options - Describes the image 
	 * capture options.
	 */
	imageCapture(imageFile: File, clipBounds: Rect, options: ImageCaptureOptions): void;
	/**
	 * Capture the current document window to the target TIFF image 
	 * file.
	 * @param {File} imageFile - The TIFF file to which the 
	 * captured image should be written.
	 * @param {Point} windowSize - The size to make the window 
	 * before capture.
	 */
	windowCapture(imageFile: File, windowSize: Point): void;
	/**
	 * Rasterize the source art(s) within the specified clip 
	 * bounds. The source art(s) are disposed as a result of the 
	 * rasterization.
	 * @param {any} sourceArt - The page item(s) to be rasterized.
	 * @param {Rect} clipBounds - The rectangular region of the 
	 * artwork for the rasterization. If the parameter is omitted, 
	 * the bounds of the source art(s) is used instead.
	 * @param {RasterizeOptions} options - Describes the 
	 * rasterization options.
	 */
	rasterize(sourceArt: any, clipBounds: Rect, options: RasterizeOptions): PageItem;
	/**
	 * Rearrange Artboards in the document.
	 * @param {DocumentArtboardLayout} artboardLayout - Layout of 
	 * artboards for rearrangement.
	 * @param {number} artboardRowsOrCols - Number of rows (for 
	 * rows layout) OR column(for column layouts)of artboards.Range 
	 * is 1 to (docNumArtboards - 1) or 1 for single row or column 
	 * layouts.
	 * @param {number} artboardSpacing - Spacing between artboards.
	 * @param {boolean} artboardMoveArtwork - Whether to move 
	 * artwork with artboards.
	 */
	rearrangeArtboards(artboardLayout: DocumentArtboardLayout, artboardRowsOrCols: number, artboardSpacing: number, artboardMoveArtwork: boolean): boolean;
	/** Select art objects in active artboard. */
	selectObjectsOnActiveArtboard(): boolean;
	/**
	 * Change the artboard to selected art bounds.
	 * @param {number} index - The index of the artboard to update.
	 */
	fitArtboardToSelectedArt(index: number): boolean;
	/**
	 * Converts the coordinate system of a single point from one 
	 * coordinate system to another.
	 * @param {Point} coordinate - The Coordinate to convert.
	 * @param {CoordinateSystem} source - The source coordinate 
	 * system.
	 * @param {CoordinateSystem} destination - The destination 
	 * coordinate system.
	 */
	convertCoordinate(coordinate: Point, source: CoordinateSystem, destination: CoordinateSystem): Point;
	/**
	 * Selects a predefined preset to define grid for the current 
	 * document.
	 * @param {string} perspectivePreset - Name of perspective grid 
	 * preset.
	 */
	selectPerspectivePreset(perspectivePreset: string): boolean;
	/**
	 * Shows the current active perspective grid for the document, 
	 * if no active perspective grid then shows the default 
	 * perspective grid for the document.
	 */
	showPerspectiveGrid(): boolean;
	/**
	 * Hides the current active perspective grid for the document, 
	 * if there is visible perspective grid.
	 */
	hidePerspectiveGrid(): boolean;
	/**
	 * Gets the active plane of the active perspective grid of the 
	 * document.
	 */
	getPerspectiveActivePlane(): PerspectiveGridPlaneType;
	/**
	 * Sets the active perspective plane for the active grid of the 
	 * document.
	 * @param {PerspectiveGridPlaneType} perspectiveGridPlane - 
	 * Type of perspective grid plane.
	 */
	setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean;
}

/**
 * A layer.
 * @class
 */
export declare class Layer {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Is the layer visible? */
	visible: boolean;
	/** Is the layer editable? */
	locked: boolean;
	/** Is the layer printable? */
	printable: boolean;
	/**
	 * Is any artwork in this layer selected? Setting this property 
	 * to false deselects all artwork in the layer.
	 */
	hasSelectedArtwork: boolean;
	/** Is the layer rendered in preview mode? */
	preview: boolean;
	/** Is rendered as dimmed in this layer? */
	dimPlacedImages: boolean;
	/** Color used when outlining artwork in this layer. */
	color: RGBColor;
	/** The layer's name. */
	name: string;
	/** The layer's opacity (between 0.0 and 100.0) */
	opacity: number;
	/** The drawing order of the layer. */
	zOrderPosition: number;
	/** The absolute drawing order of the layer. */
	absoluteZOrderPosition: number;
	/** Is the layer sliced (default: false) */
	sliced: boolean;
	/** The mode used when compositing an object. */
	blendingMode: BlendModes;
	/** Is the artwork isolated. */
	isIsolated: boolean;
	/** Is the artwork used to create a knockout. */
	artworkKnockout: KnockoutState;
	/** The compound path artwork in this layer. */
	compoundPathItems: CompoundPathItems;
	/** All the artwork in this layer. */
	pageItems: PageItems;
	/** The path artwork in this layer. */
	pathItems: PathItems;
	/** The raster art items in this layer. */
	rasterItems: RasterItems;
	/** The placed art items in this layer. */
	placedItems: PlacedItems;
	/** The mesh art items in this layer. */
	meshItems: MeshItems;
	/** The plugin art items in this layer. */
	pluginItems: PluginItems;
	/** The graph art items in this layer. */
	graphItems: GraphItems;
	/** The non-native art items in this layer. */
	nonNativeItems: NonNativeItems;
	/** The group items in this layer. */
	groupItems: GroupItems;
	/** The text frame items in this layer. */
	textFrames: TextFrameItems;
	/** Nested layers. */
	layers: Layers;
	/** The symbol items in this layer. */
	symbolItems: SymbolItems;
	/** The text frame items in this story. */
	legacyTextItems: LegacyTextItems;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): Layer;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Arranges the layer relative to other layers.
	 * @param {ZOrderMethod} zOrderCmd - How to arrange the layer.
	 */
	zOrder(zOrderCmd: ZOrderMethod): void;
}

/**
 * A view.
 * @class
 */
export declare class View {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The bounding rectangle of this view. */
	bounds: Rect;
	/** The center point of this view. */
	centerPoint: Point;
	/** The zoom factor of this view. */
	zoom: number;
	/** The mode of display. */
	screenMode: ScreenMode;
	
}

/**
 * A gradient.
 * @class
 */
export declare class Gradient {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The gradient type. */
	type: GradientType;
	/** The gradient's name. */
	name: string;
	/** The stops in this gradient. */
	gradientStops: GradientStops;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A gradient stop.
 * @class
 */
export declare class GradientStop {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Midpoint key value in percent. */
	midPoint: number;
	/** Location of color in the blend (in percent) */
	rampPoint: number;
	/** The color linked to this gradient stop. */
	color: Color;
	/**
	 * The opacity (between 0.0 and 100.0) value for the gradient 
	 * stop.
	 */
	opacity: number;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Preferences for Illustrator.
 * @class
 */
export declare class Preferences {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Options to use when opening or placing a Photoshop file. */
	photoshopFileOptions: OpenOptionsPhotoshop;
	/** Options to use when opening or placing a PDF file. */
	PDFFileOptions: OpenOptionsPDF;
	/** Options to use when opening or placing a AutoCAD file. */
	AutoCADFileOptions: OpenOptionsAutoCAD;
	/**
	 * Retrieve the value of the application preference key as 
	 * boolean.
	 * @param {string} key - The preference key.
	 */
	getBooleanPreference(key: string): boolean;
	/**
	 * Set the value of the application preference key as boolean.
	 * @param {string} key - The preference key.
	 * @param {boolean} value - The boolean value of the preference 
	 * key.
	 */
	setBooleanPreference(key: string, value: boolean): void;
	/**
	 * Retrieve the value of the application preference key as 
	 * integer.
	 * @param {string} key - The preference key.
	 */
	getIntegerPreference(key: string): number;
	/**
	 * Set the value of the application preference key as integer.
	 * @param {string} key - The preference key.
	 * @param {number} value - The boolean value of the preference 
	 * key.
	 */
	setIntegerPreference(key: string, value: number): void;
	/**
	 * Retrieve the value of the application preference key as real 
	 * number.
	 * @param {string} key - The preference key.
	 */
	getRealPreference(key: string): number;
	/**
	 * Set the value of the application preference key as real 
	 * number.
	 * @param {string} key - The preference key.
	 * @param {number} value - The real value of the preference 
	 * key.
	 */
	setRealPreference(key: string, value: number): void;
	/**
	 * Retrieve the value of the application preference key as 
	 * string type.
	 * @param {string} key - The preference key.
	 */
	getStringPreference(key: string): string;
	/**
	 * Set the value of the application preference key as string 
	 * type.
	 * @param {string} key - The preference key.
	 * @param {string} value - The string value of the preference 
	 * key.
	 */
	setStringPreference(key: string, value: string): void;
	/**
	 * Delete the application preference key.
	 * @param {string} key - The preference key.
	 */
	removePreference(key: string): void;
}

/**
 * A custom color.
 * @class
 */
export declare class Spot {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The custom color's name. */
	name: string;
	color: Color;
	/** Type of the custom color. */
	colorType: ColorModel;
	/**
	 * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the 
	 * name of color kind contained in spot.
	 */
	spotKind: SpotColorKind;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Gets the internal color of a spot. */
	getInternalColor(): number;
}

/**
 * Dynamic object used to create data-driven graphics.
 * @class
 */
export declare class Variable {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The variable's type. */
	kind: VariableKind;
	/** The name of this variable. */
	name: string;
	/** All the artwork in this document. */
	pageItems: PageItems;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A set of variables and their associated dynamic data which 
 * will be used for dynamic publishing.
 * @class
 */
export declare class DataSet {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The name of this dataset. */
	name: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Displays the dynamic data that has been captured in the 
	 * dataset.
	 */
	display(): void;
	/**
	 * Re-apply the dynamic data of the active dataset to the 
	 * artboard.
	 */
	update(): void;
}

/**
 * A color swatch.
 * @class
 */
export declare class Swatch {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The swatch's name. */
	name: string;
	/** The color information of the swatch. */
	color: Color;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A Swatch group.
 * @class
 */
export declare class SwatchGroup {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Name of the swatch group. */
	name: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Add a swatch to the group.
	 * @param {Swatch} swatch - The swatch to be added to the 
	 * group.
	 */
	addSwatch(swatch: Swatch): void;
	/** Get all swatches in the swatch group. */
	getAllSwatches(): Swatch;
	/**
	 * Add a spot swatch to the group.
	 * @param {Spot} spot - The spot swatch to be added to the 
	 * group.
	 */
	addSpot(spot: Spot): void;
}

/**
 * A pattern.
 * @class
 */
export declare class Pattern {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The pattern's name. */
	name: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A symbol.
 * @class
 */
export declare class Symbol {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The symbol's name. */
	name: string;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Symbol;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A brush.
 * @class
 */
export declare class Brush {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The brush's name. */
	name: string;
	/**
	 * Apply a brush or art style to object(s)
	 * @param {any} artItem - The page item(s) to apply to.
	 */
	applyTo(artItem: any): void;
}

/**
 * An art style.
 * @class
 */
export declare class ArtStyle {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The art style's name. */
	name: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Apply a brush or art style to object(s)
	 * @param {any} artItem - The page item(s) to apply to.
	 */
	applyTo(artItem: any): void;
	/**
	 * Merge an art style to object(s) current style(s)
	 * @param {any} artItem - The page item(s) to merge to.
	 */
	mergeTo(artItem: any): void;
}

/**
 * An installed font.
 * @class
 */
export declare class TextFont {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The font's full name. */
	name: string;
	/** The font's family name. */
	family: string;
	/** The font's style name. */
	style: string;
	
}

/**
 * A page item object.
 * @class
 */
export declare class PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * The value of the Adobe URL tag assigned to this artwork 
	 * item.
	 */
	URL: string;
	/** The note assigned to this artwork item. */
	note: string;
	/** The layer to which this artwork belongs. */
	layer: Layer;
	/** Is this artwork item locked? */
	locked: boolean;
	/** Is this artwork item hidden? */
	hidden: boolean;
	/** Is this artwork item selected? */
	selected: boolean;
	/** The position of the top left corner of the art item. */
	position: Point;
	/** The width of the art item. */
	width: number;
	/** The height of the art item. */
	height: number;
	/** The bounds of the artwork excluding stroke width. */
	geometricBounds: Rect;
	/** The visible bounds of the artwork including stroke width. */
	visibleBounds: Rect;
	/**
	 * The bounds of the artwork including stroke width and 
	 * controls.
	 */
	controlBounds: Rect;
	/** The item's name. */
	name: string;
	/** The mode used when compositing an object. */
	blendingMode: BlendModes;
	/** The object's opacity (between 0.0 and 100.0) */
	opacity: number;
	/** Is the artwork isolated. */
	isIsolated: boolean;
	/** Is the artwork used to create a knockout. */
	artworkKnockout: KnockoutState;
	/** The drawing order of the art within it's group or layer. */
	zOrderPosition: number;
	/** The absolute drawing order of the layer. */
	absoluteZOrderPosition: number;
	/** Can the art item be modified. */
	editable: boolean;
	/** Is the art item sliced (default: false) */
	sliced: boolean;
	/** The top position of the art item. */
	top: number;
	/** The left position of the art item. */
	left: number;
	/** The visibility variable bound to this page item. */
	visibilityVariable: any;
	/** The collection of tags associated with this page item. */
	tags: Tags;
	/** Is this artwork item aligned to Pixel Grid? */
	pixelAligned: boolean;
	/**
	 * Wrap text frame objects around this object (text frame must 
	 * be above the object)
	 */
	wrapped: boolean;
	/** Use this offset when wrapping text around this object. */
	wrapOffset: number;
	/** Should the text frame object be wrapped inside this object? */
	wrapInside: boolean;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): PageItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PageItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Reposition art object(s)
	 * @param {number} deltaX - Horizontal transformation.
	 * @param {number} deltaY - Vertical transformation.
	 * @param {boolean} transformObjects - Are art object positions 
	 * and orientations affected?
	 * @param {boolean} transformFillPatterns - Are the fill 
	 * patterns assigned to paths to be transformed?
	 * @param {boolean} transformFillGradients - Are the fill 
	 * gradients assigned to paths to be transformed?
	 * @param {boolean} transformStrokePattern - Are the stroke 
	 * patterns assigned to paths to be transformed?
	 */
	translate(deltaX: number, deltaY: number, transformObjects: boolean, transformFillPatterns: boolean, transformFillGradients: boolean, transformStrokePattern: boolean): void;
	/**
	 * Scale art object(s)
	 * @param {number} scaleX - Horizontal scaling factor expressed 
	 * as a percentage (100 = 100%)
	 * @param {number} scaleY - Vertical scaling factor expressed 
	 * as a percentage (100 = 100%)
	 * @param {boolean} changePositions - Are art object positions 
	 * and orientations effected?
	 * @param {boolean} changeFillPatterns - Are the fill patterns 
	 * assigned to paths to be transformed?
	 * @param {boolean} changeFillGradients - Are the fill 
	 * gradients assigned to paths to be transformed?
	 * @param {boolean} changeStrokePattern - Are the stroke 
	 * patterns assigned to paths to be transformed?
	 * @param {number} changeLineWidths - The amount line widths 
	 * are to be scaled (expressed as a percentage)
	 * @param {Transformation} scaleAbout - The point on the art 
	 * item's bounding box to which the scale is applied.
	 */
	resize(scaleX: number, scaleY: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, scaleAbout: Transformation): void;
	/**
	 * Rotate art object(s)
	 * @param {number} angle - Angle of rotation (in degrees). 
	 * Rotation is performed counter-clock wise.
	 * @param {boolean} changePositions - Are art object positions 
	 * and orientations effected?
	 * @param {boolean} changeFillPatterns - Are the fill patterns 
	 * assigned to paths to be transformed?
	 * @param {boolean} changeFillGradients - Are the fill 
	 * gradients assigned to paths to be transformed?
	 * @param {boolean} changeStrokePattern - Are the stroke 
	 * patterns assigned to paths to be transformed?
	 * @param {Transformation} rotateAbout - The point on the art 
	 * item's bounding box to which the rotation is applied.
	 */
	rotate(angle: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, rotateAbout: Transformation): void;
	/**
	 * Transform art object(s) using a transformation matrix.
	 * @param {Matrix} transformationMatrix - The transformation 
	 * matrix to be applied to the objects.
	 * @param {boolean} changePositions - Are art object positions 
	 * and orientations effected?
	 * @param {boolean} changeFillPatterns - Are the fill patterns 
	 * assigned to paths to be transformed?
	 * @param {boolean} changeFillGradients - Are the fill 
	 * gradients assigned to paths to be transformed?
	 * @param {boolean} changeStrokePattern - Are the stroke 
	 * patterns assigned to paths to be transformed?
	 * @param {number} changeLineWidths - The amount line widths 
	 * are to be scaled (expressed as a percentage)
	 * @param {Transformation} transformAbout - The point on the 
	 * art item's bounding box to which scale and rotation 
	 * operations apply.
	 */
	transform(transformationMatrix: Matrix, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, transformAbout: Transformation): void;
	/**
	 * Place art object(s)in perspective grid at spedified 
	 * perspective plane and coordinate.
	 * @param {number} positionX - Position towards X direction of 
	 * specified or active perspective grid plane.
	 * @param {number} positionY - Position towards Y direction of 
	 * specified or active perspective grid plane.
	 * @param {PerspectiveGridPlaneType} perspectiveGridPlane - 
	 * Type of perspective grid plane.
	 */
	bringInPerspective(positionX: number, positionY: number, perspectiveGridPlane: PerspectiveGridPlaneType): void;
	/**
	 * Arranges the art relative to other art in the group or 
	 * layer.
	 * @param {ZOrderMethod} zOrderCmd - How to arrange the art.
	 */
	zOrder(zOrderCmd: ZOrderMethod): void;
	/**
	 * Apply effect to selected artItem.
	 * @param {string} liveEffectXML
	 */
	applyEffect(liveEffectXML: string): void;
	/**
	 * Sends the script message to the required plugin.
	 * @param {string} pluginName - Plugin to which message needs 
	 * to be sent.
	 * @param {string} messageSelector - Functionality that is to 
	 * be executed.
	 * @param {string} inputString - Pass any data encoded in a 
	 * string.
	 */
	sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
}

/**
 * Compound path artwork item.
 * @class
 * @extends PageItem
 */
export declare class CompoundPathItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The path artwork in this compound path. */
	pathItems: PathItems;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): CompoundPathItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): CompoundPathItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A tag associated with a piece of artwork.
 * @class
 */
export declare class Tag {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The tag's name. */
	name: string;
	/** The data stored in this tag. */
	value: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * An artwork path item.
 * @class
 * @extends PageItem
 */
export declare class PathItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Is this path closed? */
	closed: boolean;
	/** The area of this path in square points. */
	area: number;
	/** The length of this path in points. */
	length: number;
	/** Is this path a guide object? */
	guides: boolean;
	/** Should the path be filled? */
	filled: boolean;
	/** Fill color. */
	fillColor: Color;
	/** Will art beneath a filled object be overprinted? */
	fillOverprint: boolean;
	/** Should the path be stroked? */
	stroked: boolean;
	/** Stroke color. */
	strokeColor: Color;
	/** Will art beneath a stroked object be overprinted? */
	strokeOverprint: boolean;
	/** Width of stroke. */
	strokeWidth: number;
	/** Dash lengths (set to {} for a solid line) */
	strokeDashes: number;
	/**
	 * The default distance into the dash pattern at which the 
	 * pattern should be started.
	 */
	strokeDashOffset: number;
	/** Type of line capping. */
	strokeCap: StrokeCap;
	/** Type of joints. */
	strokeJoin: StrokeJoin;
	/**
	 * Whether a join is mitered (pointed) or beveled (squared-off)
	 */
	strokeMiterLimit: number;
	/** Should this be used as a clipping path? */
	clipping: boolean;
	/** Should the even-odd rule be used to determine insideness? */
	evenodd: boolean;
	/** The resolution of the path. */
	resolution: number;
	/** All the selected points in the path. */
	selectedPathPoints: ObjectArray;
	/** The polarity the path. */
	polarity: PolarityValues;
	pathPoints: PathPoints;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): PathItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PathItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Set the path using the provided array of path point (x, y) 
	 * coordinate pairs.
	 * @param {any} pathPoints - Array of (x, y) coordinate pairs 
	 * for the path points.
	 */
	setEntirePath(pathPoints: any): void;
}

/**
 * A point on a path.
 * @class
 */
export declare class PathPoint {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The position (coordinates) of the anchor point. */
	anchor: Point;
	/** Location of the left direction point (in position) */
	leftDirection: Point;
	/** Location of the right direction point (out position) */
	rightDirection: Point;
	/** The type of point: smooth/corner. */
	pointType: PointType;
	/** The path point selected state. */
	selected: PathPointSelection;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Raster artwork item.
 * @class
 * @extends PageItem
 */
export declare class RasterItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The file containing the raster artwork. */
	file: File;
	/** The transformation matrix of the raster art object. */
	matrix: Matrix;
	/**
	 * Dimensions of raster art object regardless of 
	 * transformations.
	 */
	boundingBox: Rect;
	/** The color space of the raster image. */
	imageColorSpace: ImageColorSpace;
	/** Is the raster art embedded within the illustration? */
	embedded: boolean;
	/** Is the raster art overprinting? */
	overprint: boolean;
	/** Is the raster art a colorized grayscale image? */
	colorizedGrayscale: boolean;
	/** Is the raster art transparent? */
	transparent: boolean;
	/** The number of image channels. */
	channels: number;
	/** The number of bits per channel. */
	bitsPerChannel: number;
	/** List of colorant names. */
	colorants: string;
	/** Status of the linked image. */
	status: RasterLinkState;
	/** The content variable bound to this raster art object. */
	contentVariable: any;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): RasterItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): RasterItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Colorize the RasterItem with a CMYK or RGB Color.
	 * @param {Color} rasterColor - The color to use for coloring 
	 * the TIFF image.
	 */
	colorize(rasterColor: Color): void;
	/**
	 * Trace this raster object using default options. Reorders 
	 * this raster to the source art.
	 */
	trace(): PluginItem;
}

/**
 * Placed artwork item.
 * @class
 * @extends PageItem
 */
export declare class PlacedItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The file containing the placed artwork. */
	file: File;
	/** The transformation matrix of the placed art object. */
	matrix: Matrix;
	/**
	 * Dimensions of placed art object, regardless of 
	 * transformations.
	 */
	boundingBox: Rect;
	/** The content variable bound to this placed art object. */
	contentVariable: any;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): PlacedItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PlacedItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Embed the placed art within the illustration. */
	embed(): void;
	/**
	 * Trace this raster object using default options. Reorders 
	 * this placed to the source art.
	 */
	trace(): PluginItem;
	/**
	 * Relink the placed art with supplied art from file.
	 * @param {File} fileSpec - File spec to relink from.
	 */
	relink(fileSpec: File): void;
}

/**
 * Embedded artwork item.
 * @class
 * @extends PageItem
 */
export declare class EmbedItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The file containing the placed artwork. */
	file: File;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): EmbedItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): EmbedItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Graph artwork item.
 * @class
 * @extends PageItem
 */
export declare class GraphItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The content variable bound to this graph. */
	contentVariable: any;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): GraphItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): GraphItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Non-native artwork item.
 * @class
 * @extends PageItem
 */
export declare class NonNativeItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): NonNativeItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): NonNativeItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Mesh artwork item.
 * @class
 * @extends PageItem
 */
export declare class MeshItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): MeshItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): MeshItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Plugin artwork item.
 * @class
 * @extends PageItem
 */
export declare class PluginItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Is the plugin group a tracing? */
	isTracing: boolean;
	/** The tracing object associated with this plugin item. */
	tracing: TracingObject;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): PluginItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PluginItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * An artwork group item.
 * @class
 * @extends PageItem
 */
export declare class GroupItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Are the group elements clipped to the clipping path? */
	clipped: boolean;
	/** The group items in this group. */
	groupItems: GroupItems;
	/** All the artwork in this group. */
	pageItems: PageItems;
	/** The compound path artwork in this group. */
	compoundPathItems: CompoundPathItems;
	/** The path artwork in this group. */
	pathItems: PathItems;
	/** The raster art items in this group. */
	rasterItems: RasterItems;
	/** The placed art items in this group. */
	placedItems: PlacedItems;
	/** The mesh art items in this group. */
	meshItems: MeshItems;
	/** The plugin art items in this group. */
	pluginItems: PluginItems;
	/** The graph art items in this group. */
	graphItems: GraphItems;
	/** The non-native art items in this group. */
	nonNativeItems: NonNativeItems;
	/** The text frame items in this group. */
	textFrames: TextFrameItems;
	/** The symbol items in this group. */
	symbolItems: SymbolItems;
	/** The text frame items in this story. */
	legacyTextItems: LegacyTextItems;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): GroupItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): GroupItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * An instance of a Symbol.
 * @class
 * @extends PageItem
 */
export declare class SymbolItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The symbol that was used to create this symbol item. */
	symbol: Symbol;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): SymbolItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): SymbolItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Break link to the symbol. */
	breakLink(): void;
}

/**
 * A text path item.
 * @class
 */
export declare class TextPath {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The position of the top left corner of the text path. */
	position: Point;
	/** The width of the text path. */
	width: number;
	/** The height of the text path. */
	height: number;
	/** The mode used when compositing an object. */
	blendingMode: BlendModes;
	/** The object's opacity (between 0.0 and 100.0) */
	opacity: number;
	/** Can the text path be modified. */
	editable: boolean;
	/** The top position of the text path. */
	top: number;
	/** The left position of the text path. */
	left: number;
	/** Is this path closed? */
	closed: boolean;
	/** The area of this path in square points. */
	area: number;
	/** Is this path a guide object? */
	guides: boolean;
	/** Should the path be filled? */
	filled: boolean;
	/** Fill color. */
	fillColor: Color;
	/** Will art beneath a filled object be overprinted? */
	fillOverprint: boolean;
	/** Should the path be stroked? */
	stroked: boolean;
	/** Stroke color. */
	strokeColor: Color;
	/** Will art beneath a stroked object be overprinted? */
	strokeOverprint: boolean;
	/** Width of stroke. */
	strokeWidth: number;
	/** Dash lengths (set to {} for a solid line) */
	strokeDashes: number;
	/**
	 * The default distance into the dash pattern at which the 
	 * pattern should be started.
	 */
	strokeDashOffset: number;
	/** Type of line capping. */
	strokeCap: StrokeCap;
	/** Type of joints. */
	strokeJoin: StrokeJoin;
	/**
	 * Whether a join is mitered (pointed) or beveled (squared-off)
	 */
	strokeMiterLimit: number;
	/** Should this be used as a clipping path? */
	clipping: boolean;
	/** Should the even-odd rule be used to determine insideness? */
	evenodd: boolean;
	/** The resolution of the path. */
	resolution: number;
	/** Note assigned to the path. */
	note: string;
	/** All the selected points in the path. */
	selectedPathPoints: ObjectArray;
	/** The polarity the path. */
	polarity: PolarityValues;
	pathPoints: PathPoints;
	/**
	 * Set the path using the provided array of anchor points.
	 * @param {any} pathPoints - Array of anchor values for the 
	 * path points.
	 */
	setEntirePath(pathPoints: any): void;
}

/**
 * A contiguous block of text.
 * @class
 */
export declare class Story {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The text range of the story. */
	textRange: TextRange;
	/** The text frame items in this story. */
	textFrames: TextFrameItems;
	/** The selected text (ranges) in the story. */
	textSelection: TextRange;
	/** All the characters in this text range. */
	characters: Characters;
	/** All the words in this text range. */
	words: Words;
	/** All the lines in this text range. */
	lines: Lines;
	/** All the paragraphs in this text range. */
	paragraphs: Paragraphs;
	/** All the text in this text range. */
	textRanges: TextRanges;
	/** All the insertion points in this text range. */
	insertionPoints: InsertionPoints;
	/** The number of characters in the story. */
	length: number;
	
}

/**
 * Text frame item.
 * @class
 * @extends PageItem
 */
export declare class TextFrameItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The story of the text frame. */
	story: Story;
	/** The text contents of this text frame. */
	contents: string;
	/** The text range of the text frame. */
	textRange: TextRange;
	/** The selected text (ranges) in the story. */
	textSelection: TextRange;
	/** The row count in the text frame (area text only) */
	rowCount: number;
	/** The column count in the text frame (area text only) */
	columnCount: number;
	/** The row gutter in the text frame (area text only) */
	rowGutter: number;
	/** The column gutter in the text frame (area text only) */
	columnGutter: number;
	/**
	 * Flow text between linked frame horizontally first. (area 
	 * text only)
	 */
	flowLinksHorizontally: boolean;
	/** The amount of spacing (path text only) */
	spacing: number;
	/** Is the optical alignment active? */
	opticalAlignment: boolean;
	/** The type of a text frame item. */
	kind: TextType;
	/** The content variable bound to this text art item. */
	contentVariable: any;
	/** The orientation of the text in the frame. */
	orientation: TextOrientation;
	/** The path for the text frame (area and path text) */
	textPath: TextPath;
	/**
	 * The position of the anchor point (start of base line for 
	 * point text)
	 */
	anchor: Point;
	/**
	 * The start position of text along a path, as a value relative 
	 * to the path's segments (path text only)
	 */
	startTValue: number;
	/**
	 * The end position of text along a path, as a value relative 
	 * to the path's segments (path text only)
	 */
	endTValue: number;
	/** The linked text frame preceding this one. */
	previousFrame: TextFrameItem;
	/** The linked text frame following this one. */
	nextFrame: TextFrameItem;
	/** The transformation matrix of the text frame object. */
	matrix: Matrix;
	/** The type of a text anti-aliasing on text frame item. */
	antialias: TextAntialias;
	/**
	 * The first baseline offset type for text frame item (for Area 
	 * Text only)
	 */
	firstBaseline: FirstBaselineType;
	/**
	 * The first baseline offset minimum value for text frame item 
	 * (for Area Text only)
	 */
	firstBaselineMin: number;
	/** All the characters in this text range. */
	characters: Characters;
	/** All the words in this text range. */
	words: Words;
	/** All the lines in this text range. */
	lines: Lines;
	/** All the paragraphs in this text range. */
	paragraphs: Paragraphs;
	/** All the text in this text range. */
	textRanges: TextRanges;
	/** All the insertion points in this text range. */
	insertionPoints: InsertionPoints;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): TextFrameItem;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): TextFrameItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Convert text item to path items. */
	createOutline(): GroupItem;
	/** Convert Area Type Text Object To Point Type Object. */
	convertAreaObjectToPointObject(): TextFrameItem;
	/** Convert Point Type Text Object To Area Type Object. */
	convertPointObjectToAreaObject(): TextFrameItem;
	/**
	 * Generates the thumbnail with the properties of first 
	 * character in the text frame.
	 * @param {string} textString - The text string which is to be 
	 * used in the thumbnail generation.
	 * @param {number} fontSize - The size in points of the text 
	 * string.
	 * @param {Color} textColor - The color of the text string.
	 * @param {File} destinationPath - The location at which the 
	 * thumbnail is to be stored.
	 */
	generateThumbnailWithTextFrameProperties(textString: string, fontSize: number, textColor: Color, destinationPath: File): void;
}

/**
 * Unconverted legacy text items from documents in pre-version 
 * 11 formats.
 * @class
 * @extends PageItem
 */
export declare class LegacyTextItem extends PageItem {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * Has the legacy text item been updated to a native text frame 
	 * item?
	 */
	converted: boolean;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): LegacyTextItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Create a native text frame from a legacy text item. The 
	 * original legacy text item is deleted.
	 */
	convertToNative(): GroupItem;
}

/**
 * A range of characters from a text item.
 * @class
 */
export declare class TextRange {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * Offset of the first character of the range from the 
	 * beginning of the story, in characters.
	 */
	characterOffset: number;
	/** Length of text range. */
	length: number;
	/** The text string. */
	contents: string;
	/** Controls the spacing between two characters (in milli-ems) */
	kerning: number;
	/** The story of the text range. */
	story: Story;
	/** The selected text (ranges) in the text range. */
	textSelection: TextRange;
	/** All the characters in this text range. */
	characters: Characters;
	/** All the words in this text range. */
	words: Words;
	/** All the lines in this text range. */
	lines: Lines;
	/** All the paragraphs in this text range. */
	paragraphs: Paragraphs;
	/** All the text in this text range. */
	textRanges: TextRanges;
	/** All the insertion points in this text range. */
	insertionPoints: InsertionPoints;
	/** List of referenced character styles in the text range. */
	characterStyles: CharacterStyles;
	/** List of referenced paragraph styles in the text range. */
	paragraphStyles: ParagraphStyles;
	/** The character properties for the text range. */
	characterAttributes: CharacterAttributes;
	/** The paragraph properties for the text range. */
	paragraphAttributes: ParagraphAttributes;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): TextRange;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): TextRange;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Select the text range.
	 * @param {boolean} addToDocument - Whether to add the text 
	 * range to the document text selection.
	 */
	select(addToDocument: boolean): void;
	/** Deselect the text range. */
	deSelect(): void;
	/**
	 * Change the capitalization of text.
	 * @param {CaseChangeType} _type - The type of case.
	 */
	changeCaseTo(_type: CaseChangeType): void;
}

/**
 * A location between characters, used to insert new text 
 * objects.
 * @class
 */
export declare class InsertionPoint {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The story of the text range. */
	story: Story;
	/** All the characters in this text range. */
	characters: Characters;
	/** All the words in this text range. */
	words: Words;
	/** All the lines in this text range. */
	lines: Lines;
	/** All the paragraphs in this text range. */
	paragraphs: Paragraphs;
	/** All the text in this text range. */
	textRanges: TextRanges;
	
}

/**
 * A named style that remembers character attributes.
 * @class
 */
export declare class CharacterStyle {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The character style's name. */
	name: string;
	/** The character properties for the text range. */
	characterAttributes: CharacterAttributes;
	/** Adds an element. */
	add(): CharacterStyle;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Apply the character style to text object(s)
	 * @param {any} textItem - The text object(s) to apply the 
	 * style to.
	 * @param {boolean} clearingOverrides - Whether to clear any 
	 * text attributes before apply the style.
	 */
	applyTo(textItem: any, clearingOverrides: boolean): void;
	/** Remove all the attributes from this character style. */
	clear(): void;
}

/**
 * A named style that remembers paragraph attributes.
 * @class
 */
export declare class ParagraphStyle {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The paragraph style's name. */
	name: string;
	/** The character properties for the text range. */
	characterAttributes: CharacterAttributes;
	/** The paragraph properties for the text range. */
	paragraphAttributes: ParagraphAttributes;
	/** Adds an element. */
	add(): ParagraphStyle;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Apply the paragraph style to text object(s)
	 * @param {any} textItem - The text object(s) to apply the 
	 * style to.
	 * @param {boolean} clearingOverrides - Whether to clear any 
	 * text attributes before apply the style.
	 */
	applyTo(textItem: any, clearingOverrides: boolean): void;
	/** Remove all the attributes from this paragraph style. */
	clear(): void;
}

/**
 * Properties of a character.
 * @class
 */
export declare class CharacterAttributes {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The text font. */
	textFont: TextFont;
	/** Font size in points. */
	size: number;
	/**
	 * Character horizontal scaling factor expressed as a 
	 * percentage (100 = 100%)
	 */
	horizontalScale: number;
	/**
	 * Character vertical scaling factor expressed as a percentage 
	 * (100 = 100%)
	 */
	verticalScale: number;
	/** Whether to use automatic leading. */
	autoLeading: boolean;
	/** The amount of space between two lines of text (in points) */
	leading: number;
	/** The tracking or range kerning amount in thousands of an em. */
	tracking: number;
	/** The amount of shift (in points) of the text baseline. */
	baselineShift: number;
	/** The character rotation angle (in degrees) */
	rotation: number;
	/** The automatic kerning method to use. */
	kerningMethod: AutoKernType;
	/** The case of text. */
	capitalization: FontCapsOption;
	/** The baseline position of text. */
	baselinePosition: FontBaselineOption;
	/** The OpenType baseline position. */
	openTypePosition: FontOpenTypePositionOption;
	/** Whether the ligature should be used. */
	ligature: boolean;
	/** Whether the discretionary ligature should be used. */
	discretionaryLigature: boolean;
	/** Whether the contextual ligature should be used. */
	contextualLigature: boolean;
	/** Whether the OpenType fractions should be used. */
	fractions: boolean;
	/** Whether the OpenType ordinals should be used. */
	ordinals: boolean;
	/** Whether the OpenType swash should be used. */
	swash: boolean;
	/** Whether the OpenType titling alternates should be used. */
	titling: boolean;
	/** Whether the OpenType connection forms should be used. */
	connectionForms: boolean;
	/** Whether the OpenType stylistic alternates should be used. */
	stylisticAlternates: boolean;
	/** Whether the OpenType ornaments should be used. */
	ornaments: boolean;
	/** Which figure style to use in OpenType font. */
	figureStyle: FigureStyleType;
	/** Does the Japanese OpenType support proportional font? */
	proportionalMetrics: boolean;
	/** Does the Japanese OpenType support italics? */
	italics: boolean;
	/** The Japanese text baseline direction. */
	baselineDirection: BaselineDirectionType;
	/** The language of text. */
	language: LanguageType;
	/** The alternate glyphs form. */
	alternateGlyphs: AlternateGlyphsForm;
	/**
	 * The percentage of space reduction around a Japanese 
	 * character (100 = 100%)
	 */
	Tsume: number;
	/** The character alignment type. */
	alignment: StyleRunAlignmentType;
	/** Whether WariChu is enabled. */
	wariChuEnabled: boolean;
	/**
	 * The number of Wari-Chu (multiple text lines fit into a space 
	 * meant for one) lines.
	 */
	wariChuLines: number;
	/** The Wari-Chu line gap. */
	wariChuLineGap: number;
	/** The Wari-Chu scale. */
	wariChuScale: number;
	wariChuCharactersBeforeBreak: number;
	wariChuCharactersAfterBreak: number;
	wariChuJustification: WariChuJustificationType;
	/** The Tate-Chu-Yoko vertical adjustment in points. */
	tateChuYokoVertical: number;
	/** The Tate-Chu-Yoko horizontal adjustment in points. */
	tateChuYokoHorizontal: number;
	/** The em amount of left aki. */
	akiLeft: number;
	/** The em amount of right aki amount. */
	akiRight: number;
	/** Whether line breaks are allowed. */
	noBreak: boolean;
	/** The color of the text fill. */
	fillColor: Color;
	/** The color of the text stroke. */
	strokeColor: Color;
	/** Whether to overprint the stroke of the text. */
	overprintStroke: boolean;
	/** Whether to overprint the fill of the text. */
	overprintFill: boolean;
	/** Line width of stroke. */
	strokeWeight: number;
	/** Whether to underline the text. */
	underline: boolean;
	/** Whether to draw a strike through line over the text. */
	strikeThrough: boolean;
	
}

/**
 * Properties of a paragraph.
 * @class
 */
export declare class ParagraphAttributes {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Paragraph justification. */
	justification: Justification;
	/** First line left indent expressed in points. */
	firstLineIndent: number;
	/** Left indent of margin expressed in points. */
	leftIndent: number;
	/** Right indent of margin expressed in points. */
	rightIndent: number;
	/** Spacing before paragraph in points. */
	spaceBefore: number;
	/** Spacing after paragraph in points. */
	spaceAfter: number;
	/** Is hyphenation enabled for the paragraph? */
	hyphenation: boolean;
	/** Minimum hyphenated word size. */
	minimumHyphenatedWordSize: number;
	/** Minimum number of characters before a hyphen. */
	minimumBeforeHyphen: number;
	/** Minimum number of characters after a hyphen. */
	minimumAfterHyphen: number;
	/** Maximum number of consecutive hypenated lines. */
	maximumConsecutiveHyphens: number;
	/** Size of the hyphenation zone. */
	hyphenationZone: number;
	/** Is hyphenation enabled for the capitalized words? */
	hyphenateCapitalizedWords: boolean;
	/**
	 * Hyphenation preference scale for better spacing (0) or fewer 
	 * hyphens (1)
	 */
	hyphenationPreference: number;
	/** Desired word spacing expressed as a percentage. */
	desiredWordSpacing: number;
	/** Maximum word spacing expressed as a percentage. */
	maximumWordSpacing: number;
	/** Minimum word spacing expressed as a percentage. */
	minimumWordSpacing: number;
	/** Desired letter spacing expressed as a percentage. */
	desiredLetterSpacing: number;
	/** Maximum letter spacing expressed as a percentage. */
	maximumLetterSpacing: number;
	/** Minimum letter spacing expressed as a percentage. */
	minimumLetterSpacing: number;
	/** Desired glyph scaling expressed as a percentage. */
	desiredGlyphScaling: number;
	/** Maximum glyph scaling expressed as a percentage. */
	maximumGlyphScaling: number;
	/** Minimum glyph scaling expressed as a percentage. */
	minimumGlyphScaling: number;
	/** Single word justification. */
	singleWordJustification: Justification;
	/** Auto leading amount (in percentage) */
	autoLeadingAmount: number;
	/** Auto leading type. */
	leadingType: AutoLeadingType;
	/** Tab stop settings. */
	tabStops: TabStopInfo;
	/** Is Roman hanging punctuation enabled? */
	romanHanging: boolean;
	/** Is BunriKinshi enabled? */
	bunriKinshi: boolean;
	/** The Burasagari type. */
	burasagariType: BurasagariTypeEnum;
	/** The preferred Kinsoku order. */
	kinsokuOrder: KinsokuOrderEnum;
	/** Is KurikaeshiMojiShori enabled? */
	kurikaeshiMojiShori: boolean;
	/** The Kinsoku Shori name. */
	kinsoku: string;
	/** The Mojikumi name. */
	mojikumi: string;
	/**
	 * Whether to enable every line composer (as opposed to single 
	 * line composer)?
	 */
	everyLineComposer: boolean;
	
}

/**
 * Options which are applied when opening or placing a 
 * Photoshop file.
 * @class
 */
export declare class OpenOptionsPhotoshop {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * Should layers be Preserve when the document is converted 
	 * (default: true)
	 */
	preserveLayers: boolean;
	/**
	 * Should image maps be preserved when the document is 
	 * converted (default: true)
	 */
	preserveImageMaps: boolean;
	/**
	 * Should slices be preserved when the document is converted 
	 * (default: true)
	 */
	preserveSlices: boolean;
	/**
	 * Should hidden layers be preserved when the document is 
	 * converted (default: false)
	 */
	preserveHiddenLayers: boolean;
	/** Should use the specified LayerComp. */
	layerComp: string;
	
}

/**
 * Options which may be supplied when opening a PDF file.
 * @class
 */
export declare class OpenOptionsPDF {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * What page should be used when opening a multipage document 
	 * (default: 1)
	 */
	pageToOpen: number;
	/**
	 * What box should be used when placing a multipage document 
	 * (default: PDF media box)
	 */
	pDFCropToBox: PDFBoxType;
	
}

/**
 * Options which may be supplied when opening a AutoCAD file.
 * @class
 */
export declare class OpenOptionsAutoCAD {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/**
	 * How to scale the AutoCAD drawing on import (default: Fit 
	 * Artboard)
	 */
	globalScaleOption: AutoCADGlobalScaleOption;
	/**
	 * Percentage scaling to apply globally on the AutoCAD drawing 
	 * (default: 1.0)
	 */
	globalScalePercent: number;
	/**
	 * Ratio by which to scale while mapping the units (default: 
	 * 1.0)
	 */
	unitScaleRatio: number;
	/** Units to which to map (default: Millimeters) */
	unit: AutoCADUnit;
	/** Name of layout in the AutoCAD drawing to import. */
	selectedLayoutName: string;
	/**
	 * To center the created artwork on the artboard (default: 
	 * true)
	 */
	centerArtwork: boolean;
	/** To merge the layers of the artwork (default: false) */
	mergeLayers: boolean;
	/**
	 * To scale lineweights by the same amount as rest of the 
	 * drawing (default: false)
	 */
	scaleLineweights: boolean;
	
}

/**
 * Tracing options that guide the tracing process.
 * @class
 */
export declare class TracingOptions {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The name of the preset in use. Read-only. */
	preset: string;
	/** The visualization mode. */
	viewMode: ViewType;
	/** The tracing mode: color, gray, black and white. */
	tracingMode: TracingModeType;
	/**
	 * Color Type used for tracing, TracingLimitedColor or 
	 * TracingFullColor .
	 */
	tracingColorTypeValue: TracingColorType;
	/**
	 * The color palette (Library) name used for tracing. Use 
	 * 'Document Library' or any other imported library name.
	 */
	palette: string;
	/**
	 * The color group name used for tracing. Use 'All' or any 
	 * color group name available in color Palette (library).
	 */
	colorGroup: string;
	/**
	 * Maximum number of colors allowed for tracing when 
	 * TracingColorTypeValue is TracingLimitedColor.
	 */
	tracingColors: number;
	/**
	 * ColorFidelity when TracingColorTypeValue is 
	 * TracingFullColor.
	 */
	colorFidelity: number;
	/** The threshold value for a black and white mode tracing. */
	threshold: number;
	/** The gray levels for a grayscale mode tracing.. */
	grayLevels: number;
	/** Path fidelity for tracing. */
	pathFidelity: number;
	/** Corner fidelity for tracing. */
	cornerFidelity: number;
	/** Specifies minimum area of pixels to be vectorized. */
	noiseFidelity: number;
	/** Method for tracing, either abutting or adjoining paths. */
	tracingMethod: TracingMethodType;
	/** Tracing with fills. Fills, Strokes or both must be on. */
	fills: boolean;
	/** Tracing with strokes. Fills, Strokes or both must be on. */
	strokes: boolean;
	/** Maximum stroke weight (stroke only). */
	maxStrokeWeight: number;
	/** Controls whether to snap curve to lines. */
	snapCurveToLines: boolean;
	/**
	 * Controls whether to ignore white fill color. Works only if 
	 * TracingMethod is TracingMethodAbutting and mode is Black and 
	 * white.
	 */
	ignoreWhite: boolean;
	/**
	 * Load options from preset.
	 * @param {string} presetName - The name of the preset.
	 */
	loadFromPreset(presetName: string): boolean;
	/**
	 * Store options to a preset kAiVectorizeSuite. Will overwrite 
	 * an existing (unlocked) preset if names match.
	 * @param {string} presetName - The name of the preset.
	 */
	storeToPreset(presetName: string): boolean;
}

/**
 * A tracing object.
 * @class
 */
export declare class TracingObject {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** The source art used when creating a new tracing object. */
	sourceArt: PageItem;
	/** The options used when tracing the artwork. */
	tracingOptions: TracingOptions;
	/** The number of paths in the tracing result. */
	pathCount: number;
	/** The number of anchors in the tracing result. */
	anchorCount: number;
	/** The number of colors used in the tracing result. */
	usedColorCount: number;
	/**
	 * Release the source artwork for the tracing object. Deletes 
	 * this tracing object.
	 */
	releaseTracing(): PageItem;
	/**
	 * Expand the tracing to paths. Deletes this tracing object.
	 * @param {boolean} viewed - Expand as viewed with the raster 
	 * and vector view modes.
	 */
	expandTracing(viewed: boolean): GroupItem;
}

/**
 * An artboard object.
 * @class
 */
export declare class Artboard {
	/** The object's container. */
	parent: Object;
	/** The class name of the object. */
	typename: string;
	/** Size and position of artboard. */
	artboardRect: Rect;
	/**
	 * Pixel aspect ratio, used in ruler visualization if the units 
	 * are pixels.
	 */
	rulerPAR: number;
	/** Show center mark. */
	showCenter: boolean;
	/** Show cross hairs. */
	showCrossHairs: boolean;
	/** Show title and action safe areas (for video) */
	showSafeAreas: boolean;
	/**
	 * Ruler origin of artboard.It is relative to left-bottom 
	 * corner of the Artboard.
	 */
	rulerOrigin: Point;
	/** The name of the artboard. */
	name: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * Describes a point. This class is also a two-element 
 * collection.
 * @class
 */
export declare class Point {
	/** The left coordinate. */
	x: number;
	/** The top coordinate. */
	y: number;
	/** The left coordinate. */
	left: number;
	/** The top coordinate. */
	top: number;
	/** The array length. */
	length: number;
	
}

/**
 * Describes a rectangle. This class is also a four-element 
 * collection.
 * @class
 */
export declare class Rectangle {
	/** The left coordinate. */
	x: number;
	/** The top coordinate. */
	y: number;
	/** The width. */
	width: number;
	/** The height. */
	height: number;
	/** The left coordinate. */
	left: number;
	/** The right coordinate. */
	right: number;
	/** The top coordinate. */
	top: number;
	/** The bottom coordinate. */
	bottom: number;
	/** The array length. */
	length: number;
	
}
