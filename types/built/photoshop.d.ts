/**
 * Document formats that Photoshop can open.
 * @enum
 */
export declare enum OpenDocumentType {
	/** Photoshop format. */
	PHOTOSHOP = 1,
	/** BMP format. */
	BMP = 2,
	/** CompuServe GIF format. */
	COMPUSERVEGIF = 3,
	/** EPS document produced by Photoshop. */
	PHOTOSHOPEPS = 4,
	/** Filmstrip format. */
	FILMSTRIP = 5,
	/** JPEG format. */
	JPEG = 6,
	/** PCX format. */
	PCX = 7,
	/** PDF document produced by Photoshop. */
	PHOTOSHOPPDF = 8,
	/** Photo CD format. */
	PHOTOCD = 9,
	/** PICT file format. */
	PICTFILEFORMAT = 10,
	/** PICT resource format. */
	PICTRESOURCEFORMAT = 11,
	/** Pixar format. */
	PIXAR = 12,
	/** PNG format. */
	PNG = 13,
	/** Raw format. */
	RAW = 14,
	/** Scitex CT format. */
	SCITEXCT = 15,
	/** Targa format. */
	TARGA = 16,
	/** TIFF format. */
	TIFF = 17,
	/** Photoshop DCS 1.0 format. */
	PHOTOSHOPDCS_1 = 18,
	/** Photoshop DCS 2.0 format. */
	PHOTOSHOPDCS_2 = 19,
	/** Generic PDF format. */
	PDF = 21,
	/** Generic EPS format. */
	EPS = 22,
	/** EPS format with embedded PICT Preview. */
	EPSPICTPREVIEW = 23,
	/** EPS format with embedded TIFF Preview. */
	EPSTIFFPREVIEW = 24,
	/** Alias PIX format. */
	ALIASPIX = 25,
	/** Electric format. */
	ELECTRICIMAGE = 26,
	/** Portable Bitmap format. */
	PORTABLEBITMAP = 27,
	/** Wavefront RLA format. */
	WAVEFRONTRLA = 28,
	/** SGI RGB format. */
	SGIRGB = 29,
	/** SoftImage format. */
	SOFTIMAGE = 30,
	/** Wireless Bitmap format (WBMP) */
	WIRELESSBITMAP = 31,
	/** Camera RAW format. */
	CAMERARAW = 32,
	/** DICOM format. */
	DICOM = 33
}

/**
 * Document formats that Photoshop can save to.
 * @enum
 */
export declare enum SaveDocumentType {
	/** Photoshop format. */
	PHOTOSHOP = 1,
	/** BMP format. */
	BMP = 2,
	/** CompuServe GIF format. */
	COMPUSERVEGIF = 3,
	/** EPS document produced by Photoshop. */
	PHOTOSHOPEPS = 4,
	/** JPEG format. */
	JPEG = 6,
	/** PCX format. */
	PCX = 7,
	/** PDF document produced by Photoshop. */
	PHOTOSHOPPDF = 8,
	/** PICT file format. */
	PICTFileFORMAT = 10,
	/** PICT resource format. */
	PICTRESOURCEFORMAT = 11,
	/** Pixar format. */
	PIXAR = 12,
	/** PNG format. */
	PNG = 13,
	/** Raw format. */
	RAW = 14,
	/** Scitex CT format. */
	SCITEXCT = 15,
	/** Targa format. */
	TARGA = 16,
	/** TIFF format. */
	TIFF = 17,
	/** Photoshop DCS 1.0 format. */
	PHOTOSHOPDCS_1 = 18,
	/** Photoshop DCS 2.0 format. */
	PHOTOSHOPDCS_2 = 19,
	/** Alias PIX format. */
	ALIASPIX = 25,
	/** Electric format. */
	ELECTRICIMAGE = 26,
	/** Portable Bitmap format. */
	PORTABLEBITMAP = 27,
	/** Wavefront RLA format. */
	WAVEFRONTRLA = 28,
	/** SGI RGB format. */
	SGIRGB = 29,
	/** SoftImage format. */
	SOFTIMAGE = 30,
	/** Wireless Bitmap format (WBMP) */
	WIRELESSBITMAP = 31
}

/**
 * The save options for closing a file.
 * @enum
 */
export declare enum SaveOptionsType {
	/** Save changes. */
	SAVECHANGES = 1,
	/** Do not save changes. */
	DONOTSAVECHANGES = 2,
	/** Ask the user whether to save. */
	PROMPTTOSAVECHANGES = 3
}

/**
 * Controls whether Photoshop displays dialogs during scripts.
 * @enum
 */
export declare enum DialogModes {
	/** Show all dialogs. */
	ALL = 1,
	/** Show only dialogs related to errors. */
	ERROR = 2,
	/** Show no dialogs. */
	NO = 3
}

/**
 * Position of document when printing.
 * @enum
 */
export declare enum DocPositionStyle {
	/** Print image centered on page. */
	PRINTCENTERED = 1,
	/** Resize image to fit on page when printing. */
	SIZETOFIT = 2,
	/** Print using user defined spacing. */
	USERDEFINED = 3
}

/**
 * Color conversion type when printing.
 * @enum
 */
export declare enum PrintColorHandling {
	/** Printer manages color conversions. */
	PRINTERMANAGED = 1,
	/** Photoshop manages color conversions. */
	PHOTOSHOPMANAGED = 2,
	/** Print each channel separately without color conversions. */
	SEPARATIONS = 3
}

/**
 * The document's color mode.
 * @enum
 */
export declare enum DocumentMode {
	/** Grayscale. */
	GRAYSCALE = 1,
	/** RGB. */
	RGB = 2,
	/** CMYK. */
	CMYK = 3,
	/** Lab. */
	LAB = 4,
	/**
	 * Bitmap, which uses one of two color values (black or white) 
	 * to represent the pixels in an image.
	 */
	BITMAP = 5,
	/**
	 * Indexed color, in which the number of colors in the image is 
	 * at most 256, the standard number of colors supported by the 
	 * GIF and PNG-8 formats and many multimedia applications.
	 */
	INDEXEDCOLOR = 6,
	/** Image with multiple color channels. */
	MULTICHANNEL = 7,
	/**
	 * Duotone mode, which creates monotone, duotone (two-color), 
	 * tritone (three-color), and quadtone (four-color) grayscale 
	 * images using one to four custom inks.
	 */
	DUOTONE = 8
}

/**
 * This conversion reduces file size by deleting color 
 * information from the image. To convert to indexed color, you 
 * must start with an image that is 8 bits per channel and in 
 * either Grayscale or RGB mode.
 * @summary The destination color mode. Note: Color images must 
 * be changed to Grayscale mode before you can change them to 
 * Bitmap mode.
 * @enum
 */
export declare enum ChangeMode {
	/** Grayscale. */
	GRAYSCALE = 1,
	/** RGB. */
	RGB = 2,
	/** CMYK. */
	CMYK = 3,
	/** Lab. */
	LAB = 4,
	/**
	 * Bitmap. Note: Color images must be changed to Grayscale mode 
	 * before you can change them to Bitmap mode.
	 */
	BITMAP = 5,
	/**
	 * This conversion reduces file size by deleting color 
	 * information from the image. To convert to indexed color, you 
	 * must start with an image that is 8 bits per channel and in 
	 * either Grayscale or RGB mode.
	 * @summary Indexed color, in which the number of colors in the 
	 * image is reduced to at most 256, the standard number of 
	 * colors supported by the GIF and PNG-8 formats and many 
	 * multimedia applications.
	 */
	INDEXEDCOLOR = 6,
	/**
	 * Uses 256 levels of gray in each channel. Useful for 
	 * specialized printing. Color channels in the original image 
	 * become spot color channels in the converted image. A CMYK 
	 * image converted to Multichannel mode creates cyan, magenta, 
	 * yellow, and black spot channels. An RGB image converted 
	 * Multichannel mode creates cyan, magenta, and yellow spot 
	 * channels. The new grayscale information is based on the 
	 * color values of the pixels in each channel. Multichannel 
	 * mode images can be saved in Photoshop, Photoshop 2.0, 
	 * Photoshop Raw, or Photoshop DCS 2.0 format. To export a 
	 * multichannel image, save it in Photoshop DCS 2.0 format.
	 * @summary Image with multiple color channels.
	 */
	MULTICHANNEL = 7
}

/**
 * The type of color model that defines the document's working 
 * space.
 * @enum
 */
export declare enum ColorProfileType {
	/** The document is not color managed. */
	NONE = 1,
	/**
	 * Color manages this document using the working color profile.
	 */
	WORKING = 2,
	/** Color manages this document using a custom color profile. */
	CUSTOM = 3
}

/**
 * The document window fill type.
 * @enum
 */
export declare enum DocumentFill {
	/** White. */
	WHITE = 1,
	/** The background color as displayed in the toolbox. */
	BACKGROUNDCOLOR = 2,
	/** Transparent. */
	TRANSPARENT = 3
}

/**
 * The editorial urgency status of the artwork.
 * @enum
 */
export declare enum Urgency {
	/** No urgency. */
	NONE = 0,
	/** Low. */
	LOW = 1,
	/** Level 2 (second highest) */
	TWO = 2,
	/** Level 3 (third highest) */
	THREE = 3,
	/** Level 4 (fourth highest) */
	FOUR = 4,
	/** Medium urgency. */
	NORMAL = 5,
	/** Level 6 (third lowest) */
	SIX = 6,
	/** Level 7 (second lowest) */
	SEVEN = 7,
	/** Highest level of urgency. */
	HIGH = 8
}

/**
 * The image orientation on the media.
 * @enum
 */
export declare enum Orientation {
	/** Landscape. */
	LANDSCAPE = 1,
	/** Portrait. */
	PORTRAIT = 2
}

/**
 * Suitable for photographic images with a lot of out of gamut 
 * colors. This is the standard rendering intent for the 
 * Japanese printing industry.
 * @summary The color conversion intent.
 * @enum
 */
export declare enum Intent {
	/**
	 * Suitable for photographic images with a lot of out of gamut 
	 * colors. This is the standard rendering intent for the 
	 * Japanese printing industry.
	 * @summary Gives priority to colors for which the human eye 
	 * has greater sensitivity.
	 */
	PERCEPTUAL = 1,
	/**
	 * Suitable for business graphics like graphs or charts, where 
	 * bright saturated colors are more important than the exact 
	 * relationship between colors.
	 * @summary Tries to produce vivid colors in an image at the 
	 * expense of color accuracy.
	 */
	SATURATION = 2,
	/**
	 * The standard rendering intent for printing in North America 
	 * and Europe.
	 * @summary Compares the extreme highlight of the source color 
	 * space to that of the destination color space and shifts all 
	 * colors accordingly. Out of gamut colors are shifted to the 
	 * closest reproducible color in the destination color space.
	 */
	RELATIVECOLORIMETRIC = 3,
	/**
	 * Leaves colors that fall inside the destination gamut 
	 * unchanged. Out of gamut colors are clipped. No scaling of 
	 * colors to destination white point is performed.
	 * @summary Aims to maintain color accuracy at the expense of 
	 * preserving relationships between colors and is suitable for 
	 * proofing to simulate the output of a particular device. This 
	 * intent is particularly useful for previewing how paper color 
	 * affects printed colors.
	 */
	ABSOLUTECOLORIMETRIC = 4
}

/**
 * The orientation of the object.
 * @enum
 */
export declare enum Direction {
	/** Horizontal. */
	HORIZONTAL = 1,
	/** Vertical. */
	VERTICAL = 2
}

/**
 * The cache to be targeted in a purge operation.
 * @enum
 */
export declare enum PurgeTarget {
	/** Clears the undo cache. */
	UNDOCACHES = 1,
	/** Deletes all history states from the History palette. */
	HISTORYCACHES = 2,
	/** Clears the clipboard. */
	CLIPBOARDCACHE = 3,
	/** Clears all caches. */
	ALLCACHES = 4
}

/**
 * The point around which to transform the object.
 * @enum
 */
export declare enum AnchorPosition {
	/** The top left corner of the object. */
	TOPLEFT = 1,
	/** The middle point on the top of the object. */
	TOPCENTER = 2,
	/** The top right corner of the object. */
	TOPRIGHT = 3,
	/** The middle point on the left side of the object. */
	MIDDLELEFT = 4,
	/** The center of the object. */
	MIDDLECENTER = 5,
	/** The middle point on the right side of the object. */
	MIDDLERIGHT = 6,
	/** The bottom left corner of the object. */
	BOTTOMLEFT = 7,
	/** The middle point of the bottom of the object. */
	BOTTOMCENTER = 8,
	/** The bottom right corner of the object. */
	BOTTOMRIGHT = 9
}

/**
 * Significantly reduces the conversion time compared with 
 * downsampling but results in images that are less smooth and 
 * continuous.
 * @summary The method to use to resample the image.
 * @enum
 */
export declare enum ResampleMethod {
	/** Does not resample. */
	NONE = 1,
	/**
	 * Significantly reduces the conversion time compared with 
	 * downsampling but results in images that are less smooth and 
	 * continuous.
	 * @summary Chooses a pixel in the center of the sample area 
	 * and replaces the entire area with that pixel color. Same as 
	 * subsampling.
	 */
	NEARESTNEIGHBOR = 2,
	/**
	 * Averages the pixels in a sample area and replaces the entire 
	 * area with the average pixel color at the specified 
	 * resolution. Same as average downsampling.
	 */
	BILINEAR = 3,
	/**
	 * The slowest but most precise method, resulting in the 
	 * smoothest gradations.
	 * @summary Uses a weighted average to determine pixel color, 
	 * which usually yields better results than the simple 
	 * averageing method of downsampling.
	 */
	BICUBIC = 4,
	/**
	 * A good method for reducing the size of an image based on 
	 * Bicubic interpolation with enhanced sharpening. Maintains 
	 * the detail in a resampled image.
	 */
	BICUBICSHARPER = 5,
	/**
	 * A good method for enlarging images based on Bicubic 
	 * interpolation but designed to produce smoother results.
	 */
	BICUBICSMOOTHER = 6,
	BICUBICAUTOMATIC = 7,
	AUTOMATIC = 8,
	PRESERVEDETAILS = 9
}

/**
 * The operating system.
 * @enum
 */
export declare enum OperatingSystem {
	/** Mac OS/2 operating system. */
	OS2 = 1,
	/** Windows operating system. */
	WINDOWS = 2
}

/**
 * The colors whose inclusion to force in the color table.
 * @enum
 */
export declare enum ForcedColors {
	/** No forced colors. */
	NONE = 1,
	/** Forces pure black and white. */
	BLACKWHITE = 2,
	/**
	 * Forces red, green, blue, cyan, magenta, yellow, black, and 
	 * white.
	 */
	PRIMARIES = 3,
	/** Forces the 216 web-safe colors. */
	WEB = 4
}

/**
 * Because the image's palette contains all colors in the 
 * image, there is no dithering.
 * @summary The palette type for converting an image to indexed 
 * color.
 * @enum
 */
export declare enum PaletteType {
	/**
	 * Because the image's palette contains all colors in the 
	 * image, there is no dithering.
	 * @summary The palette uses the exact colors appearing in the 
	 * RGB image; available only if the image uses 256 or fewer 
	 * colors.
	 */
	EXACT = 1,
	/**
	 * The Mac OS default 8-bit palette, whch is based on a uniform 
	 * sampling of RGB colors.
	 */
	MACOSPALETTE = 2,
	/**
	 * The Windows system's default 8-bit palette, whch is based on 
	 * a uniform sampling of RGB colors.
	 */
	WINDOWSPALETTE = 3,
	/**
	 * A subset of the Mac OS 8-bit palette. Use this option to 
	 * avoid browser dither when viewing images on a monitor 
	 * display limited to 256 colors.
	 * @summary The 216-color palette that web browsers, regardless 
	 * of platform, use to display images on a monitor limited to 
	 * 256 colors.
	 */
	WEBPALETTE = 4,
	/**
	 * For example, if Photoshop takes six evenly spaced color 
	 * levels each of red, green, and blue, the combination 
	 * produces a uniform palette of 216 colors (6 cubed = 6 x 6 x 
	 * 6 = 216). The total number of colors displayed in an image 
	 * corresponds to the nearest perfect cube (8, 27, 64, 125, or 
	 * 216) that is less than the value in the Colors text box.
	 * @summary Creates a palette by uniformly sampling colors from 
	 * the RGB color cube.
	 */
	UNIFORM = 5,
	/**
	 * Creates a custom palette by giving priority to colors for in 
	 * the image which the human eye has greater sensitivity.
	 */
	LOCALPERCEPTUAL = 6,
	/**
	 * Usually produces images with the greatest color integrity.
	 * @summary Creates a color table similar to the Perceptual 
	 * color table, but favoring broad areas of color in the image 
	 * and the preservation of web colors.
	 */
	LOCALSELECTIVE = 7,
	/**
	 * For example, an RGB image with only the colors green and 
	 * blue produces a palette made primarily of greens and blues.
	 * @summary Creates a palette by sampling the colors from the 
	 * spectrum appearing most commonly in the image.
	 */
	LOCALADAPTIVE = 8,
	/**
	 * Creates a custom palette by giving priority to colors in a 
	 * group of open images with the same color palette for which 
	 * the human eye has greater sensitivity.
	 */
	MASTERPERCEPTUAL = 9,
	/**
	 * Creates a color table similar to the Master Perceptual color 
	 * table, but favoring broad areas of color and the 
	 * preservation of web colors.
	 */
	MASTERSELECTIVE = 10,
	/**
	 * Creates a palette by sampling the colors from the spectrum 
	 * appearing most commonly in a group of open images that share 
	 * the same color palette.
	 */
	MASTERADAPTIVE = 11,
	/**
	 * Uses the custom palette from the previous conversion, making 
	 * it easy to convert several images with the same custom 
	 * palette.
	 */
	PREVIOUSPALETTE = 12
}

/**
 * The type of dither.
 * @enum
 */
export declare enum DitherType {
	/** No dither is used. */
	NONE = 1,
	/**
	 * Diffuses dither effects in random patterns across adjacent 
	 * pixels.
	 */
	DIFFUSION = 2,
	/** Applies a halftone-like square pattern. */
	PATTERN = 3,
	/**
	 * Applies a random pattern but without diffusing the pattern 
	 * across adjacent pixels; prevents the appearance of seams.
	 */
	NOISE = 4
}

/**
 * The type of image to use as a low-resolution preview in the 
 * destination application.
 * @enum
 */
export declare enum MacPreviewType {
	/** Does not use a preview. */
	NONE = 1,
	/** Monochrome TIFF. */
	MONOCHROMETIFF = 2,
	/** 8-bit TIFF. */
	EIGHTBITTIFF = 3,
	/** Monochrome. */
	MACOSMONOCHROME = 4,
	/** 8-bit. */
	MACOSEIGHTBIT = 5,
	/** JPEG. */
	MACOSJPEG = 6
}

/**
 * The encoding to use when saving documents.
 * @enum
 */
export declare enum SaveEncoding {
	/** ASCII. */
	ASCII = 3,
	/** Binary. */
	BINARY = 1,
	/** Low quality JPEG encoding (high amount of compression). */
	JPEGLOW = 2,
	/** Medium quality JPEG encoding (medium compression). */
	JPEGMEDIUM = 4,
	/** High quality JPEG encoding. */
	JPEGHIGH = 5,
	/** Maximum quality JPEG encoding (very little compression). */
	JPEGMAXIMUM = 6
}

/**
 * The options for saving a JPEG file.
 * @enum
 */
export declare enum FormatOptionsType {
	/** Baseline (Standard). Recognized by most web browsers. */
	STANDARDBASELINE = 1,
	/**
	 * Baseline (Optimized). Optimized color and a slightly reduced 
	 * file size.
	 */
	OPTIMIZEDBASELINE = 2,
	/**
	 * Displays a series of increasingly detailed scans as the 
	 * image downloads.
	 */
	PROGRESSIVE = 3
}

/**
 * The type of compression to use when saving a document in PDF 
 * format.
 * @enum
 */
export declare enum PDFEncodingType {
	/** No encoding. */
	NONE = 0,
	/** Zip compression. */
	PDFZIP = 1,
	/** JPEG compression. */
	JPEG = 2,
	/** Zip compression with 4-bit image quality. */
	PDFZIP4BIT = 3,
	/** JPEG compression with high image quality. */
	JPEGHIGH = 4,
	/** JPEG compression with medium high image quality. */
	JPEGMEDHIGH = 5,
	/** JPEG compression with medium image quality. */
	JPEGMED = 6,
	/** JPEG compression with medium low image quality. */
	JPEGMEDLOW = 7,
	/** JPEG compression with low image quality. */
	JPEGLOW = 8,
	/** JPEG2000 compression with high image quality. */
	JPEG2000HIGH = 9,
	/** JPEG2000 compression with medium high image quality. */
	JPEG2000MEDHIGH = 10,
	/** JPEG2000 compression with medium image quality. */
	JPEG2000MED = 11,
	/** JPEG2000 compression with medium low image quality. */
	JPEG2000MEDLOW = 12,
	/** JPEG2000 compression with low image quality. */
	JPEG2000LOW = 13,
	/** JPEG2000 lossless compression. */
	JPEG2000LOSSLESS = 14
}

/**
 * PDF/X compliant files must contain information describing 
 * the printing condition for which they are prepared.
 * @summary The PDF/X standard with which the document 
 * complies.
 * @enum
 */
export declare enum PDFStandardType {
	/** The document does not use the PDF/X standard. */
	NONE = 0,
	/**
	 * PDF/X-1a standard, which requires all fonts to be embedded, 
	 * the appropriate PDF bounding boxes to be specified, and 
	 * color to appear as CMYK, spot colors, or both; can be opened 
	 * in Acrobat 4.0 and Acrobat Reader 4.0 and later.
	 */
	PDFX1A2001 = 1,
	/**
	 * PDF/X-1a standard, which requires all fonts to be embedded, 
	 * the appropriate PDF bounding boxes to be specified, and 
	 * color to appear as CMYK, spot colors, or both; can be opened 
	 * in Acrobat 4.0 and Acrobat Reader 4.0 and later.
	 */
	PDFX1A2003 = 2,
	/**
	 * PDF/X-3 standard, which requires all fonts to be embedded 
	 * and the appropriate PDF bounding boxes to be specified, and 
	 * for color allows either the use of color management and 
	 * device-independent color (CIE L*a*b, ICC-based color spaces, 
	 * CalRGB, and CalGray) or CMYK, spot colors, or both; can be 
	 * opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
	 */
	PDFX32002 = 3,
	/**
	 * PDF/X-3 standard, which requires all fonts to be embedded 
	 * and the appropriate PDF bounding boxes to be specified, and 
	 * for color allows either the use of color management and 
	 * device-independent color (CIE L*a*b, ICC-based color spaces, 
	 * CalRGB, and CalGray) or CMYK, spot colors, or both; can be 
	 * opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
	 */
	PDFX32003 = 4,
	/**
	 * PDF/X-4 standard, which requires all fonts to be embedded 
	 * and the appropriate PDF bounding boxes to be specified, and 
	 * for color allows either the use of color management and 
	 * device-independent color (CIE L*a*b, ICC-based color spaces, 
	 * CalRGB, and CalGray) or CMYK, spot colors, or both; can be 
	 * opened in Acrobat 8.0 and Acrobat Reader 8.0 and later.
	 */
	PDFX42008 = 5
}

/**
 * The PDF version with which to make the document compatible.
 * @enum
 */
export declare enum PDFCompatibilityType {
	/** PDF 1.3 (Acrobat 4 or higher). */
	PDF13 = 1,
	/** PDF 1.4 (Acrobat 5 or higher). */
	PDF14 = 2,
	/** PDF 1.5 (Acrobat 6 or higher). */
	PDF15 = 3,
	/** PDF 1.6 (Acrobat 7 or higher) */
	PDF16 = 4,
	/** PDF 1.7 (Acrobat 9 or higher) */
	PDF17 = 5
}

/**
 * Downsampling options when saving as PDF.
 * @enum
 */
export declare enum PDFResampleType {
	/** Does not downsample. */
	NONE = 0,
	/**
	 * Averages the pixels in a sample area and replaces the entire 
	 * area with the average pixel color at the specified 
	 * resolution.
	 */
	PDFAVERAGE = 1,
	/**
	 * Chooses a pixel in the center of the sample area and 
	 * replaces the entire area with that pixel color; 
	 * significantly reduces conversion time but results in images 
	 * that are less smooth and continuous.
	 */
	PDFSUBSAMPLE = 2,
	/**
	 * Uses a weighted average to determine pixel color, which 
	 * usually yields better results than the simple averaging 
	 * method of downsampling. The slowest but most precise method, 
	 * resulting in the smoothest gradations.
	 */
	PDFBICUBIC = 3
}

/**
 * The compression type to use whan saving as PICT.
 * @enum
 */
export declare enum PICTCompression {
	/** No compression. */
	NONE = 1,
	/** Low quality JPEG encoding (high amount of compression). */
	JPEGLOWPICT = 2,
	/**
	 * Medium quality JPEG encoding (medium amount of compression).
	 */
	JPEGMEDIUMPICT = 4,
	/** High quality JPEG encoding. */
	JPEGHIGHPICT = 5,
	/** Maximum quality JPEG encoding (very little compression). */
	JPEGMAXIMUMPICT = 6
}

/**
 * The formatting for the filename extension.
 * @enum
 */
export declare enum MacExtensionType {
	/** Does not use an extension. */
	NONE = 1,
	/** The extension is in lowercase letters. */
	LOWERCASE = 2,
	/** The extension is in uppercase letters. */
	UPPERCASE = 3
}

/**
 * The encoding to use when saving to TIFF format.
 * @enum
 */
export declare enum TiffEncodingType {
	/** No compression. */
	NONE = 1,
	/**
	 * LZW compression, which is lossless and most useful for 
	 * images with large areas of single color.
	 */
	TIFFLZW = 2,
	/**
	 * JPEG compression, which is lossy and recommended for 
	 * continuous-tone images, such as photographs.
	 */
	JPEG = 3,
	/**
	 * Zip compression, which is lossless and most effective for 
	 * images that contain large areas of single color.
	 */
	TIFFZIP = 4
}

/**
 * The layer compression type.
 * @enum
 */
export declare enum LayerCompressionType {
	/** Run Length Encoding, which is lossless. */
	RLE = 1,
	/**
	 * Zip compression, which is lossless and most effective for 
	 * images that contain large areas of single color.
	 */
	ZIP = 2
}

/**
 * The platform-specific order in which bytes will be read.
 * @enum
 */
export declare enum ByteOrderType {
	/** IBM PC. */
	IBM = 1,
	/** Mac OS. */
	MACOS = 2
}

/**
 * The DCS format.
 * @enum
 */
export declare enum DCSType {
	/** Does not create a composite file. */
	NOCOMPOSITE = 1,
	/**
	 * Creates a grayscale composite file in addition to DCS files.
	 */
	GRAYSCALECOMPOSITE = 2,
	/** Creates a color composite file in addition to DCS files. */
	COLORCOMPOSITE = 3
}

/**
 * The type of pixels to trim around an image.
 * @enum
 */
export declare enum TrimType {
	/**
	 * Trims away transparency at the edges of the image, leaving 
	 * the smallest image containing nontransparent pixels.
	 */
	TRANSPARENT = 0,
	/**
	 * Removes from the image an area the color of the upper left 
	 * pixel.
	 */
	TOPLEFT = 1,
	/**
	 * Removes from the image an area the color of the lower right 
	 * pixel.
	 */
	BOTTOMRIGHT = 9
}

/**
 * The color picker to use.
 * @enum
 */
export declare enum ColorPicker {
	/** The Adobe Color Picker. */
	ADOBE = 1,
	/** The built-in Apple color picker. */
	APPLE = 2,
	/** The built-in Windows color picker. */
	WINDOWS = 3,
	/** An installed plug-in color picker. */
	PLUGIN = 4
}

/**
 * The type of object(s) to reset to default settings.
 * @enum
 */
export declare enum ResetTarget {
	/** Warning dialogs. */
	ALLWARNINGS = 1,
	/** Tools. */
	ALLTOOLS = 2,
	/** All targets. */
	EVERYTHING = 3
}

/**
 * The application's behavior regarding image previews and file 
 * extensions when a save method is called.
 * @enum
 */
export declare enum SaveBehavior {
	/** Never save the item with the file. */
	NEVERSAVE = 1,
	/** Always save the item with the file. */
	ALWAYSSAVE = 2,
	/** Prompt the user whether to save the item with the file. */
	ASKWHENSAVING = 3
}

/**
 * Brush size cursors may not appear for very large brushes.
 * @summary The pointer for the following tools: Marquee, 
 * Lasso, Polygonal Lasso, Magic Wand, Crop, Slice, Patch 
 * Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic 
 * Lasso, Magnetic Pen, Freeform Pen, Measure, and Color 
 * Sampler.
 * @enum
 */
export declare enum PaintingCursors {
	/** Displays pointers as tool icons. */
	STANDARD = 1,
	/** Displays pointers as cross hairs. */
	PRECISE = 2,
	/**
	 * Brush size cursors may not appear for very large brushes.
	 * @summary Displays cursors as brush shapes representing the 
	 * size of the current brush. Valid only for painting cursors.
	 */
	BRUSHSIZE = 3
}

/**
 * The pointer for the following tools: Eraser, Pencil, 
 * Paintbrush, Healing Brush, Rubber Stamp, Pattern Stamp, 
 * Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
 * @enum
 */
export declare enum OtherPaintingCursors {
	/** Displays pointers as tool icons. */
	STANDARDOTHER = 1,
	/** Displays pointers as cross hairs. */
	PRECISEOTHER = 2
}

/**
 * The size of grid squares.
 * @enum
 */
export declare enum GridSize {
	/** No grid is displayed. */
	NONE = 1,
	/** Small grid squares. */
	SMALL = 2,
	/** Medium grid squares. */
	MEDIUM = 3,
	/** Large grid squares. */
	LARGE = 4
}

/**
 * The measurement unit for ruler increments.
 * @enum
 */
export declare enum Units {
	/** Pixels. */
	PIXELS = 1,
	/** Inches. */
	INCHES = 2,
	/** Centimeters. */
	CM = 3,
	/** Millimeters. */
	MM = 4,
	/** Points. */
	POINTS = 5,
	/** Picas. */
	PICAS = 6,
	/** Percent. */
	PERCENT = 7
}

/**
 * The measurement unit for type.
 * @enum
 */
export declare enum TypeUnits {
	/** Pixels. */
	PIXELS = 1,
	/** Millimeters. */
	MM = 4,
	/** Points. */
	POINTS = 5
}

/**
 * The point type.
 * @enum
 */
export declare enum PointType {
	/** 72 points per inch. */
	POSTSCRIPT = 1,
	/** 72.27 points per inch. */
	TRADITIONAL = 2
}

/**
 * The line style for nonprinting grids displayed over images.
 * @enum
 */
export declare enum GridLineStyle {
	/** Solid. */
	SOLID = 1,
	/** Dashed. */
	DASHED = 2,
	/** Dotted. */
	DOTTED = 3
}

/**
 * The line style for nonprinting guides displayed over images.
 * @enum
 */
export declare enum GuideLineStyle {
	/** Solid. */
	SOLID = 1,
	/** Dashed. */
	DASHED = 2
}

/**
 * Valid only for layer sets. To restrict blend modes of the 
 * layers within a set, change the layer set's blend mode to 
 * Normal.
 * @summary Controls how pixels in the image are blended.
 * @enum
 */
export declare enum BlendMode {
	/**
	 * Valid only for layer sets. To restrict blend modes of the 
	 * layers within a set, change the layer set's blend mode to 
	 * Normal.
	 * @summary Allows any blend modes, advanced blending options, 
	 * and opacity and fill values applied to layers within a set 
	 * to affect layers below the set in the Layers palette.
	 */
	PASSTHROUGH = 1,
	/**
	 * Edits or paints each pixel to make it the result color. 
	 * (Called "Threshold" when you’re working with a bitmapped or 
	 * indexed-color image.)
	 */
	NORMAL = 2,
	/**
	 * Edits or paints each pixel to make it the result color. 
	 * However, the result color is a random replacement of the 
	 * pixels with the base color or the blend color, depending on 
	 * the opacity at any pixel location.
	 */
	DISSOLVE = 3,
	/**
	 * Looks at the color information in each channel and selects 
	 * the base or blend color—whichever is darker—as the result 
	 * color. Pixels lighter than the blend color are replaced, and 
	 * pixels darker than the blend color do not change.
	 */
	DARKEN = 4,
	/**
	 * Looks at the color information in each channel and 
	 * multiplies the base color by the blend color. The result 
	 * color is always a darker color. Multiplying any color with 
	 * black produces black. Multiplying any color with white 
	 * leaves the color unchanged. When you’re painting with a 
	 * color other than black or white, successive strokes with a 
	 * painting tool produce progressively darker colors. The 
	 * effect is similar to drawing on the image with multiple 
	 * marking pens.
	 */
	MULTIPLY = 5,
	/**
	 * Looks at the color information in each channel and darkens 
	 * the base color to reflect the blend color by increasing the 
	 * contrast. Blending with white produces no change.
	 */
	COLORBURN = 6,
	/**
	 * Looks at the color information in each channel and darkens 
	 * the base color to reflect the blend color by decreasing the 
	 * brightness. Blending with white produces no change.
	 */
	LINEARBURN = 7,
	/**
	 * Looks at the color information in each channel and selects 
	 * the base or blend color—whichever is lighter—as the result 
	 * color. Pixels darker than the blend color are replaced, and 
	 * pixels lighter than the blend color do not change.
	 */
	LIGHTEN = 8,
	/**
	 * Looks at each channel’s color information and multiplies the 
	 * inverse of the blend and base colors. The result color is 
	 * always a lighter color. Screening with black leaves the 
	 * color unchanged. Screening with white produces white. The 
	 * effect is similar to projecting multiple photographic slides 
	 * on top of each other.
	 */
	SCREEN = 9,
	/**
	 * Looks at the color information in each channel and brightens 
	 * the base color to reflect the blend color by decreasing the 
	 * contrast. Blending with black produces no change.
	 */
	COLORDODGE = 10,
	/**
	 * Looks at the color information in each channel and brightens 
	 * the base color to reflect the blend color by increasing the 
	 * brightness. Blending with black produces no change.
	 */
	LINEARDODGE = 11,
	/**
	 * Multiplies or screens the colors, depending on the base 
	 * color. Patterns or colors overlay the existing pixels while 
	 * preserving the highlights and shadows of the base color. The 
	 * base color is not replaced but is mixed with the blend color 
	 * to reflect the lightness or darkness of the original color.
	 */
	OVERLAY = 12,
	/**
	 * Darkens or lightens the colors, depending on the blend 
	 * color. The effect is similar to shining a diffused spotlight 
	 * on the image. If the blend color (light source) is lighter 
	 * than 50% gray, the image is lightened as if it were dodged. 
	 * If the blend color is darker than 50% gray, the image is 
	 * darkened as if it were burned in. Painting with pure black 
	 * or white produces a distinctly darker or lighter area but 
	 * does not result in pure black or white.
	 */
	SOFTLIGHT = 13,
	/**
	 * Multiplies or screens the colors, depending on the blend 
	 * color. The effect is similar to shining a harsh spotlight on 
	 * the image. If the blend color (light source) is lighter than 
	 * 50% gray, the image is lightened, as if it were screened. 
	 * This is useful for adding highlights to an image. If the 
	 * blend color is darker than 50% gray, the image is darkened, 
	 * as if it were multiplied. This is useful for adding shadows 
	 * to an image. Painting with pure black or white results in 
	 * pure black or white.
	 */
	HARDLIGHT = 14,
	/**
	 * Burns or dodges the colors by increasing or decreasing the 
	 * contrast, depending on the blend color. If the blend color 
	 * (light source) is lighter than 50% gray, the image is 
	 * lightened by decreasing the contrast. If the blend color is 
	 * darker than 50% gray, the image is darkened by increasing 
	 * the contrast.
	 */
	VIVIDLIGHT = 15,
	/**
	 * Burns or dodges the colors by decreasing or increasing the 
	 * brightness, depending on the blend color. If the blend color 
	 * (light source) is lighter than 50% gray, the image is 
	 * lightened by increasing the brightness. If the blend color 
	 * is darker than 50% gray, the image is darkened by decreasing 
	 * the brightness.
	 */
	LINEARLIGHT = 16,
	/**
	 * Replaces the colors, depending on the blend color. If the 
	 * blend color (light source) is lighter than 50% gray, pixels 
	 * darker than the blend color are replaced, and pixels lighter 
	 * than the blend color do not change. If the blend color is 
	 * darker than 50% gray, pixels lighter than the blend color 
	 * are replaced, and pixels darker than the blend color do not 
	 * change. This is useful for adding special effects to an 
	 * image.
	 */
	PINLIGHT = 17,
	/**
	 * Looks at the color information in each channel and subtracts 
	 * either the blend color from the base color or the base color 
	 * from the blend color, depending on which has the greater 
	 * brightness value. Blending with white inverts the base color 
	 * values; blending with black produces no change.
	 */
	DIFFERENCE = 18,
	/**
	 * Creates an effect similar to but lower in contrast than the 
	 * Difference mode. Blending with white inverts the base color 
	 * values. Blending with black produces no change.
	 */
	EXCLUSION = 19,
	SUBTRACT = 29,
	DIVIDE = 30,
	/**
	 * Creates a result color with the luminance and saturation of 
	 * the base color and the hue of the blend color.
	 */
	HUE = 20,
	/**
	 * Creates a result color with the luminance and hue of the 
	 * base color and the saturation of the blend color. Painting 
	 * with this mode in an area with no (0) saturation (gray) 
	 * causes no change.
	 */
	SATURATION = 21,
	/**
	 * Creates a result color with the luminance of the base color 
	 * and the hue and saturation of the blend color. This 
	 * preserves the gray levels in the image and is useful for 
	 * coloring monochrome images and for tinting color images.
	 */
	COLORBLEND = 22,
	/**
	 * Creates a result color with the hue and saturation of the 
	 * base color and the luminance of the blend color. This mode 
	 * creates an inverse effect from that of the Color mode.
	 */
	LUMINOSITY = 23,
	/**
	 * Lighter colors lighten the result, and darker colors darken 
	 * the result. 50% gray as a blend color has no effect on the 
	 * result color. Lowering the fill opacity creates less 
	 * posterization/thresholding.
	 */
	HARDMIX = 26,
	/**
	 * Lighter colors lighten the result, and darker colors darken 
	 * the result. 50% gray as a blend color has no effect on the 
	 * result color. Lowering the fill opacity creates less 
	 * posterization/thresholding.
	 */
	LIGHTERCOLOR = 27,
	/**
	 * Lighter colors lighten the result, and darker colors darken 
	 * the result. 50% gray as a blend color has no effect on the 
	 * result color. Lowering the fill opacity creates less 
	 * posterization/thresholding.
	 */
	DARKERCOLOR = 28
}

/**
 * The color blend mode type.
 * @enum
 */
export declare enum ColorBlendMode {
	/**
	 * Edits or paints each pixel to make it the result color. 
	 * (Called "Threshold" when you’re working with a bitmapped or 
	 * indexed-color image.)
	 */
	NORMAL = 2,
	/**
	 * Edits or paints each pixel to make it the result color, 
	 * which is a random replacement of the pixels with the base 
	 * color or the blend color, depending on the opacity at any 
	 * pixel location.
	 */
	DISSOLVE = 3,
	/**
	 * Edits or paints only on the transparent part of a layer. 
	 * Works only in layers in which transparent pixels locked = 
	 * false and is analogous to painting on the back of 
	 * transparent areas on a sheet of acetate.
	 */
	BEHIND = 24,
	/**
	 * Edits or paints each pixel and makes it transparent. Works 
	 * only in layers in which transparent pixels locked = false.
	 */
	CLEAR = 25,
	/**
	 * Looks at the color information in each channel and selects 
	 * the base or blend color—whichever is darker—as the result 
	 * color. Pixels lighter than the blend color are replaced, and 
	 * pixels darker than the blend color do not change.
	 */
	DARKEN = 4,
	/**
	 * Looks at the color information in each channel and 
	 * multiplies the base color by the blend color. The result 
	 * color is always a darker color. Multiplying any color with 
	 * black produces black. Multiplying any color with white 
	 * leaves the color unchanged. When you’re painting with a 
	 * color other than black or white, successive strokes with a 
	 * painting tool produce progressively darker colors. The 
	 * effect is similar to drawing on the image with multiple 
	 * marking pens.
	 */
	MULTIPLY = 5,
	/**
	 * Looks at the color information in each channel and darkens 
	 * the base color to reflect the blend color by increasing the 
	 * contrast. Blending with white produces no change.
	 */
	COLORBURN = 6,
	/**
	 * Looks at the color information in each channel and darkens 
	 * the base color to reflect the blend color by decreasing the 
	 * brightness. Blending with white produces no change.
	 */
	LINEARBURN = 7,
	/**
	 * Looks at the color information in each channel and selects 
	 * the base or blend color—whichever is lighter—as the result 
	 * color. Pixels darker than the blend color are replaced, and 
	 * pixels lighter than the blend color do not change.
	 */
	LIGHTEN = 8,
	/**
	 * Looks at each channel’s color information and multiplies the 
	 * inverse of the blend and base colors. The result color is 
	 * always a lighter color. Screening with black leaves the 
	 * color unchanged. Screening with white produces white. The 
	 * effect is similar to projecting multiple photographic slides 
	 * on top of each other.
	 */
	SCREEN = 9,
	/**
	 * Looks at the color information in each channel and brightens 
	 * the base color to reflect the blend color by decreasing the 
	 * contrast. Blending with black produces no change.
	 */
	COLORDODGE = 10,
	/**
	 * Looks at the color information in each channel and brightens 
	 * the base color to reflect the blend color by increasing the 
	 * brightness. Blending with black produces no change.
	 */
	LINEARDODGE = 11,
	/**
	 * Multiplies or screens the colors, depending on the base 
	 * color. Patterns or colors overlay the existing pixels while 
	 * preserving the highlights and shadows of the base color. The 
	 * base color is not replaced but is mixed with the blend color 
	 * to reflect the lightness or darkness of the original color.
	 */
	OVERLAY = 12,
	/**
	 * Darkens or lightens the colors, depending on the blend 
	 * color. The effect is similar to shining a diffused spotlight 
	 * on the image. If the blend color (light source) is lighter 
	 * than 50% gray, the image is lightened as if it were dodged. 
	 * If the blend color is darker than 50% gray, the image is 
	 * darkened as if it were burned in. Painting with pure black 
	 * or white produces a distinctly darker or lighter area but 
	 * does not result in pure black or white.
	 */
	SOFTLIGHT = 13,
	/**
	 * Multiplies or screens the colors, depending on the blend 
	 * color. The effect is similar to shining a harsh spotlight on 
	 * the image. If the blend color (light source) is lighter than 
	 * 50% gray, the image is lightened, as if it were screened. 
	 * This is useful for adding highlights to an image. If the 
	 * blend color is darker than 50% gray, the image is darkened, 
	 * as if it were multiplied. This is useful for adding shadows 
	 * to an image. Painting with pure black or white results in 
	 * pure black or white.
	 */
	HARDLIGHT = 14,
	/**
	 * Burns or dodges the colors by increasing or decreasing the 
	 * contrast, depending on the blend color. If the blend color 
	 * (light source) is lighter than 50% gray, the image is 
	 * lightened by decreasing the contrast. If the blend color is 
	 * darker than 50% gray, the image is darkened by increasing 
	 * the contrast.
	 */
	VIVIDLIGHT = 15,
	/**
	 * Burns or dodges the colors by decreasing or increasing the 
	 * brightness, depending on the blend color. If the blend color 
	 * (light source) is lighter than 50% gray, the image is 
	 * lightened by increasing the brightness. If the blend color 
	 * is darker than 50% gray, the image is darkened by decreasing 
	 * the brightness.
	 */
	LINEARLIGHT = 16,
	/**
	 * Replaces the colors, depending on the blend color. If the 
	 * blend color (light source) is lighter than 50% gray, pixels 
	 * darker than the blend color are replaced, and pixels lighter 
	 * than the blend color do not change. If the blend color is 
	 * darker than 50% gray, pixels lighter than the blend color 
	 * are replaced, and pixels darker than the blend color do not 
	 * change. This is useful for adding special effects to an 
	 * image.
	 */
	PINLIGHT = 17,
	/**
	 * Looks at the color information in each channel and subtracts 
	 * either the blend color from the base color or the base color 
	 * from the blend color, depending on which has the greater 
	 * brightness value. Blending with white inverts the base color 
	 * values; blending with black produces no change.
	 */
	DIFFERENCE = 18,
	/**
	 * Creates an effect similar to but lower in contrast than the 
	 * Difference mode. Blending with white inverts the base color 
	 * values. Blending with black produces no change.
	 */
	EXCLUSION = 19,
	SUBTRACT = 29,
	DIVIDE = 30,
	/**
	 * Creates a result color with the luminance and saturation of 
	 * the base color and the hue of the blend color.
	 */
	HUE = 20,
	/**
	 * Creates a result color with the luminance and hue of the 
	 * base color and the saturation of the blend color. Painting 
	 * with this mode in an area with no (0) saturation (gray) 
	 * causes no change.
	 */
	SATURATION = 21,
	/**
	 * Creates a result color with the luminance of the base color 
	 * and the hue and saturation of the blend color. This 
	 * preserves the gray levels in the image and is useful for 
	 * coloring monochrome images and for tinting color images.
	 */
	COLOR = 22,
	/**
	 * Creates a result color with the hue and saturation of the 
	 * base color and the luminance of the blend color. This mode 
	 * creates an inverse effect from that of the Color mode.
	 */
	LUMINOSITY = 23,
	/**
	 * Lighter colors lighten the result, and darker colors darken 
	 * the result. 50% gray as a blend color has no effect on the 
	 * result color. Lowering the fill opacity creates less 
	 * posterization/thresholding.
	 */
	HARDMIX = 26,
	LIGHTERCOLOR = 27,
	DARKERCOLOR = 28
}

/**
 * The type of the layer content to rasterize.
 * @enum
 */
export declare enum RasterizeType {
	/**
	 * Rasterizes the type on a type layer. Doesn't rasterize any 
	 * other vector data on the layer.
	 */
	TEXTCONTENTS = 1,
	/** Rasterizes a shape layer. */
	SHAPE = 2,
	/**
	 * Rasterizes the fill of a shape layer, leaving the vector 
	 * mask.
	 */
	FILLCONTENT = 3,
	/**
	 * Rasterizes the vector mask of a shape layer, turning it into 
	 * a layer mask.
	 */
	LAYERCLIPPINGPATH = 4,
	/** Rasterizes all vector data on the layer. */
	ENTIRELAYER = 5,
	/** Rasterizes the selected layers. */
	LINKEDLAYERS = 6
}

/**
 * The placement of paragraph text within the bounding box.
 * @enum
 */
export declare enum Justification {
	/** Aligns the left edges, leaving the right edge ragged. */
	LEFT = 1,
	/** Text is centered on each line. */
	CENTER = 2,
	/** Aligns the right edges, leaving the left edge ragged. */
	RIGHT = 3,
	/** Justifies all lines except the last, which is left-aligned. */
	LEFTJUSTIFIED = 4,
	/**
	 * Justifies all lines except the last, which is 
	 * center-aligned.
	 */
	CENTERJUSTIFIED = 5,
	/**
	 * Justifies all lines except the last, which is right-aligned.
	 */
	RIGHTJUSTIFIED = 6,
	/**
	 * Justifies all lines including the last, which is 
	 * force-justified.
	 */
	FULLYJUSTIFIED = 7
}

/**
 * The method to use to smooth edges by softening the color 
 * transition between edge pixels and background pixels.
 * @enum
 */
export declare enum AntiAlias {
	/** Does not use anti-aliasing. */
	NONE = 1,
	/** Makes type appear its sharpest. */
	SHARP = 2,
	/** Makes type appear somewhat sharp. */
	CRISP = 3,
	/** Makes type appear heavier. */
	STRONG = 4,
	/** Makes type appear smoother. */
	SMOOTH = 5
}

/**
 * The capitalization to use.
 * @enum
 */
export declare enum Case {
	/** Uses uppercase and lowercase letters. */
	NORMAL = 1,
	/** Uses all uppercase letters. */
	ALLCAPS = 2,
	/** Uses small caps for lowercase letters. */
	SMALLCAPS = 3
}

/**
 * The language to use.
 * @enum
 */
export declare enum Language {
	/** American English. */
	ENGLISHUSA = 1,
	/** British English. */
	ENGLISHUK = 2,
	/** French. */
	FRENCH = 3,
	/** Canadian French. */
	CANADIANFRENCH = 4,
	/** Finnish. */
	FINNISH = 5,
	/** German. */
	GERMAN = 6,
	/** Old German. */
	OLDGERMAN = 7,
	/** Swiss German. */
	SWISSGERMAN = 8,
	/** Italian. */
	ITALIAN = 9,
	/** Norwegian. */
	NORWEGIAN = 10,
	/** Nynorsk Norwegian. */
	NYNORSKNORWEGIAN = 11,
	/** Portuguese. */
	PORTUGUESE = 12,
	/** Brazillian Portuguese. */
	BRAZILLIANPORTUGUESE = 13,
	/** Spanish. */
	SPANISH = 14,
	/** Swedish. */
	SWEDISH = 15,
	/** Dutch. */
	DUTCH = 16,
	/** Danish. */
	DANISH = 17
}

/**
 * The type of text.
 * @enum
 */
export declare enum TextType {
	/** Text that does not wrap. */
	POINTTEXT = 1,
	/** Text that wraps within a bounding box. */
	PARAGRAPHTEXT = 2
}

/**
 * The warp style for text.
 * @enum
 */
export declare enum WarpStyle {
	/** No warp. */
	NONE = 1,
	/** The type is warped in the shape of an arc. */
	ARC = 2,
	/**
	 * Warp is heavier on the lower or left edge of the text than 
	 * on the upper or right edge.
	 */
	ARCLOWER = 3,
	/**
	 * Warp is heavier on the upper or right edge of the text than 
	 * on the lower or left edge.
	 */
	ARCUPPER = 4,
	/** Text is warped in the form of an arch. */
	ARCH = 5,
	/**
	 * Text is warped outward on both the upper and lower or right 
	 * and left edges.
	 */
	BULGE = 6,
	/**
	 * Text is warped downward or to the right in the shape of a 
	 * fan-like seashell.
	 */
	SHELLLOWER = 7,
	/**
	 * Text is warped upward or to the left in the shape of a 
	 * fan-like seashell.
	 */
	SHELLUPPER = 8,
	/** Text is warped in the shape of a waving flag. */
	FLAG = 9,
	/** Text is warped in the shape of a wave. */
	WAVE = 10,
	/** Text is warped in the shape of a fish. */
	FISH = 11,
	/** Text is warped in an undulating, rising pattern. */
	RISE = 12,
	/**
	 * Text bulges in the middle and is squeezed on the edges as if 
	 * viewed through a fisheye lens.
	 */
	FISHEYE = 13,
	/** Text is inflated. */
	INFLATE = 14,
	/** Text is squeezed. */
	SQUEEZE = 15,
	/** Text is twisted. */
	TWIST = 16
}

/**
 * Uses the following principles when considering a breakpoint: 
 * Compressed or expanded word spacing is preferable to 
 * hyphenation; Hyphenation is preferable to compressed or 
 * expanded letter spacing; If spacing must be adjusted, 
 * compression is better than expansion.
 * @summary The text composer.
 * @enum
 */
export declare enum TextComposer {
	/**
	 * Uses the following principles when considering a breakpoint: 
	 * Compressed or expanded word spacing is preferable to 
	 * hyphenation; Hyphenation is preferable to compressed or 
	 * expanded letter spacing; If spacing must be adjusted, 
	 * compression is better than expansion.
	 * @summary Offers a traditional approach to composing type one 
	 * line at a time. Useful if you prefer to have manual control 
	 * over how lines break.
	 */
	ADOBESINGLELINE = 1,
	/**
	 * The Adobe Every-line composer approaches composition by 
	 * identifying possible breakpoints, evaluating them, and 
	 * assigning a weighted penalty based on these principles: 
	 * Highest importance is given to evenness of letter and word 
	 * spacing; Possible breakpoints are evaluated and penalized 
	 * according to how much they deviate from optimal spacing; 
	 * Hyphenation is avoided when possible; Breakpoints that 
	 * require hyphenation are penalized more than those that 
	 * create uneven spacing; Good breakpoints are preferred over 
	 * bad breakpoints.
	 * @summary Considers a network of break points for a range of 
	 * lines and thus optimizes earlier lines in the paragraph to 
	 * eliminate especially unattractive breaks later on. Results 
	 * in more even spacing and fewer hyphens.
	 */
	ADOBEEVERYLINE = 2
}

/**
 * The type of kerning to use for characters.
 * @enum
 */
export declare enum AutoKernType {
	/** Allows manual kerning. */
	MANUAL = 1,
	/**
	 * Uses kern pairs, which contain information about the spacing 
	 * of specific pairs of letters.
	 */
	METRICS = 2,
	/**
	 * Adjusts the spacing between adjacent characters based on 
	 * their shapes.
	 */
	OPTICAL = 3
}

/**
 * The strikethrough style.
 * @enum
 */
export declare enum StrikeThruType {
	/** No strikethrough. */
	STRIKEOFF = 1,
	/**
	 * (For vertical type) The strikethrough is through the height 
	 * of the text.
	 */
	STRIKEHEIGHT = 2,
	/**
	 * (For vertical type) The strikethrough is through the em box.
	 */
	STRIKEBOX = 3
}

/**
 * The type of underline.
 * @enum
 */
export declare enum UnderlineType {
	/** No underline. */
	UNDERLINEOFF = 1,
	/**
	 * (For vertical type) The underline is to the right of the 
	 * text.
	 */
	UNDERLINERIGHT = 2,
	/**
	 * (For vertical type) The underline is to the left of the 
	 * text.
	 */
	UNDERLINELEFT = 3
}

/**
 * The selection behavior when a selection already exists.
 * @enum
 */
export declare enum SelectionType {
	/** Replace the selected area. */
	REPLACE = 1,
	/** Add the selection to an already selected area. */
	EXTEND = 2,
	/** Remove the selection from the already selected area. */
	DIMINISH = 3,
	/**
	 * Make the selection only the area where the new selection 
	 * intersects the already selected area.
	 */
	INTERSECT = 4
}

/**
 * The export options to use.
 * @enum
 */
export declare enum ExportType {
	/** Exports Photoshop paths as Adobe Illustrator files. */
	ILLUSTRATORPATHS = 1,
	/** Uses the save for web export options. */
	SAVEFORWEB = 2
}

/**
 * The paths to export.
 * @enum
 */
export declare enum IllustratorPathType {
	/** Exports the document bounds. */
	DOCUMENTBOUNDS = 1,
	/** Exports all paths. */
	ALLPATHS = 2,
	/**
	 * Exports the specified path. To specify the path, see the 
	 * path name property of the illustrator export options object.
	 */
	NAMEDPATH = 3
}

/**
 * The type of channel.
 * @enum
 */
export declare enum ChannelType {
	/** The channel related to the document color model. */
	COMPONENT = 1,
	/** The apha channel where color indicates a masked area. */
	MASKEDAREA = 2,
	/** The lpha channel where color indicates a selected area. */
	SELECTEDAREA = 3,
	/** The alpha channel to store a spot color. */
	SPOTCOLOR = 4
}

/**
 * The blur method to use.
 * @enum
 */
export declare enum RadialBlurMethod {
	/**
	 * Blurs along concentric circular lines at the specified 
	 * degree of rotation.
	 */
	SPIN = 1,
	/**
	 * Blurs along radial lines, as if zooming into or out of the 
	 * image.
	 */
	ZOOM = 2
}

/**
 * The radial blur quality.
 * @enum
 */
export declare enum RadialBlurQuality {
	/** Produces fast but grainy results. */
	DRAFT = 1,
	/** Produces good results. */
	GOOD = 2,
	/** Produces best results. */
	BEST = 3
}

/**
 * The smart blur quality.
 * @enum
 */
export declare enum SmartBlurQuality {
	/** Low quality. */
	LOW = 1,
	/** Medium quality. */
	MEDIUM = 2,
	/** High quality. */
	HIGH = 3
}

/**
 * Where significant contrast occurs, applies black-and-white 
 * edges.
 * @summary The method to use for smart blurring.
 * @enum
 */
export declare enum SmartBlurMode {
	/** Blur is applied to entire image. */
	NORMAL = 1,
	/**
	 * Where significant contrast occurs, applies black-and-white 
	 * edges.
	 * @summary Blur is applied only to edges of color transitions.
	 */
	EDGEONLY = 2,
	/**
	 * Where significant contrast occurs, applies white edges.
	 * @summary Blur is applied only to edges of color transitions.
	 */
	OVERLAYEDGE = 3
}

/**
 * The type of texture or glass surface image to load for a 
 * texturizer or glass filter.
 * @enum
 */
export declare enum TextureType {
	/** The image appears as if viewed through glass blocks. */
	BLOCKS = 1,
	/** The image appears as if painted on canvas. */
	CANVAS = 2,
	/** The image appears as if frosted. */
	FROSTED = 3,
	/**
	 * The image appears as if viewed through an array of tiny 
	 * lenses.
	 */
	TINYLENS = 4,
	/** Texture from an existing document. */
	FILE = 5
}

/**
 * The method of polar distortion to use.
 * @enum
 */
export declare enum PolarConversionType {
	/**
	 * The selection is converted from its rectangular to polar 
	 * coordinates.
	 */
	RECTANGULARTOPOLAR = 1,
	/**
	 * The selection is converted from its polar to rectangular 
	 * coordinates.
	 */
	POLARTORECTANGULAR = 2
}

/**
 * The size of undulations.
 * @enum
 */
export declare enum RippleSize {
	/** Small. */
	SMALL = 1,
	/** Medium. */
	MEDIUM = 2,
	/** Large. */
	LARGE = 3
}

/**
 * The method to use to treat undistorted areas or areas left 
 * blank in an image to which a filter in the Distort category 
 * has been applied.
 * @enum
 */
export declare enum UndefinedAreas {
	/**
	 * Fills the undefined space with content from the opposite 
	 * edge of the image.
	 */
	WRAPAROUND = 1,
	/**
	 * Extends the colors of pixels along the edge of the image in 
	 * the direction specified. Banding may result if the edge 
	 * pixels are different colors.
	 */
	REPEATEDGEPIXELS = 2
}

/**
 * The method to use to fill the empty space left by offsetting 
 * a an image or selection.
 * @enum
 */
export declare enum OffsetUndefinedAreas {
	/**
	 * For background layers, sets pixels to the background layer 
	 * color. For nonbackground layers, sets the pixels to 
	 * transparent.
	 */
	SETTOBACKGROUND = 1,
	/**
	 * Fills the undefined space with content from the opposite 
	 * edge of the image.
	 */
	WRAPAROUND = 2,
	/**
	 * Extends the colors of pixels along the edge of the image in 
	 * the direction specified. Banding may result if the edge 
	 * pixels are different colors.
	 */
	REPEATEDGEPIXELS = 3
}

/**
 * The curve (or stretch shape) to use for the distortion.
 * @enum
 */
export declare enum SpherizeMode {
	/** Distorts the image as if it is wrapped around a sphere. */
	NORMAL = 1,
	/**
	 * Distorts the image as if it is wrapped around a horizontal 
	 * cylinder.
	 */
	HORIZONTAL = 2,
	/**
	 * Distorts the image as if it is wrapped around a vertical 
	 * cylinder.
	 */
	VERTICAL = 3
}

/**
 * Describes how the displacement map fits the image if the 
 * image is not the same size as the map.
 * @enum
 */
export declare enum DisplacementMapType {
	/** The map is resized. */
	STRETCHTOFIT = 1,
	/** The selection is filled by repeating the map in a pattern. */
	TILE = 2
}

/**
 * The type of wave.
 * @enum
 */
export declare enum WaveType {
	/** Rolling. */
	SINE = 1,
	/** Triangular. */
	TRIANGULAR = 2,
	/** Square. */
	SQUARE = 3
}

/**
 * The method of zigzagging.
 * @enum
 */
export declare enum ZigZagType {
	/** Pixels are rotated around the center of the selection. */
	AROUNDCENTER = 1,
	/**
	 * Pixels are displaced toward or away from the center of the 
	 * selection.
	 */
	OUTFROMCENTER = 2,
	/** Pixels are displaced to the upper left or lower right. */
	PONDRIPPLES = 3
}

/**
 * The distribution method to use when applying an Add Noise 
 * filter.
 * @enum
 */
export declare enum NoiseDistribution {
	/**
	 * Distributes color values of noise using random numbers 
	 * between 0 and plus or minus the specified value, creating a 
	 * subtle effect.
	 */
	UNIFORM = 1,
	/**
	 * Distributes color values of noise along a bell-shaped curve, 
	 * creating a speckled effect.
	 */
	GAUSSIAN = 2
}

/**
 * The type of lens.
 * @enum
 */
export declare enum LensType {
	/** 50-300mm Zoom. */
	ZOOMLENS = 1,
	/** 35mm Prime. */
	PRIME35 = 2,
	/** 105mm Prime. */
	PRIME105 = 3,
	/** Movie Prime. */
	MOVIEPRIME = 5
}

/**
 * The type of fields to eliminate.
 * @enum
 */
export declare enum EliminateFields {
	/** Eliminate odd interlaced lines in a video image. */
	ODDFIELDS = 1,
	/** Eliminate even interlaced lines in a video image. */
	EVENFIELDS = 2
}

/**
 * The method for replacing eliminated fields.
 * @enum
 */
export declare enum CreateFields {
	/** Duplicates existing pixels. */
	DUPLICATION = 1,
	/**
	 * Assigns color values to any new pixels that Photoshop 
	 * creates based on the color values of existing pixels in the 
	 * image.
	 */
	INTERPOLATION = 2
}

/**
 * The pixel dimensions of the image.
 * @enum
 */
export declare enum PhotoCDSize {
	/** 64x96 image. */
	MINIMUM = 1,
	/** 128x192 image. */
	SMALL = 2,
	/** 256x384 image. */
	MEDIUM = 3,
	/** 512x768 image. */
	LARGE = 4,
	/** 1024x1536 image. */
	EXTRALARGE = 5,
	/** 2048x3072 image. */
	MAXIMUM = 6
}

/**
 * The number of bits per color channel.
 * @enum
 */
export declare enum BitsPerChannelType {
	/** 1 bit per channel. */
	ONE = 1,
	/** 8 bits per channel. */
	EIGHT = 8,
	/** 16 bits per channel. */
	SIXTEEN = 16,
	/** 32 bits per channel. */
	THIRTYTWO = 32
}

/**
 * The number of bits per pixel to use when compressing a PICT 
 * file.
 * @enum
 */
export declare enum PICTBitsPerPixels {
	/** 2 bits per pixel. */
	TWO = 2,
	/** 4 bits per pixel. */
	FOUR = 4,
	/** 8 bits per pixel. */
	EIGHT = 8,
	/** 16 bits per pixel. */
	SIXTEEN = 16,
	/** 32 bits per pixel. */
	THIRTYTWO = 32
}

/**
 * The resolution to use when saving an image in Targa format.
 * @enum
 */
export declare enum TargaBitsPerPixels {
	/** 16 bits per pixel. */
	SIXTEEN = 16,
	/** 24 bits per pixel. */
	TWENTYFOUR = 24,
	/** 32 bits per pixel. */
	THIRTYTWO = 32
}

/**
 * The value type of an object.
 * @enum
 */
export declare enum DescValueType {
	/** Integer. */
	INTEGERTYPE = 1,
	/** Double. */
	DOUBLETYPE = 2,
	/** Unit value of type double. */
	UNITDOUBLE = 3,
	/** String. */
	STRINGTYPE = 4,
	/** Boolean. */
	BOOLEANTYPE = 5,
	/** Action list. */
	LISTTYPE = 6,
	/** Object. */
	OBJECTTYPE = 7,
	/** Enumeration. */
	ENUMERATEDTYPE = 8,
	/** Reference. */
	REFERENCETYPE = 9,
	/** Class. */
	CLASSTYPE = 10,
	/** Alias. */
	ALIASTYPE = 11,
	/** Raw. */
	RAWTYPE = 12,
	LARGEINTEGERTYPE = 13
}

/**
 * The type of action reference object.
 * @enum
 */
export declare enum ReferenceFormType {
	/** Name. */
	NAME = 1,
	/** Index. */
	INDEX = 2,
	/** Identifier. */
	IDENTIFIER = 3,
	/** Offset. */
	OFFSET = 4,
	/** Enumerated. */
	ENUMERATED = 5,
	/** Property. */
	PROPERTY = 6,
	/** Class. */
	CLASSTYPE = 7
}

/**
 * The number of bits per channel (also called pixel depth or 
 * color depth). The number selected indicates the exponent of 
 * 2. For example, a pixel with a bit-depth of EIGHT has 
 * 2-to-the-8th, or 256, possible color values.
 * @enum
 */
export declare enum BMPDepthType {
	/** 1 bit depth. */
	ONE = 1,
	/** 4 bits depth. */
	FOUR = 4,
	/** 8 bits depth. */
	EIGHT = 8,
	/** 16 bits depth. */
	SIXTEEN = 16,
	/** 24 bits depth. */
	TWENTYFOUR = 24,
	/** 32 bits depth. */
	THIRTYTWO = 32,
	/**
	 * X1 R5 G5 B5 advanced bit depth specification (same as normal 
	 * 16 bit mode)
	 */
	BMP_X1R5G5B5 = 60,
	/** A1 R5 G5 B5 advanced bit depth specification. */
	BMP_A1R5G5B5 = 61,
	/** R5 G6 B5 advanced bit depth specification. */
	BMP_R5G6B5 = 62,
	/** X4 R4 G4 B4 advanced bit depth specification. */
	BMP_X4R4G4B4 = 63,
	/** A4 R4 G4 B4 advanced bit depth specification. */
	BMP_A4R4G4B4 = 64,
	/**
	 * R8 G8 B8 advanced bit depth specification (same as normal 24 
	 * bit mode)
	 */
	BMP_R8G8B8 = 65,
	/** X8 R8 G8 B8 advanced bit depth specification. */
	BMP_X8R8G8B8 = 66,
	/**
	 * A8 R8 G8 B8 advanced bit depth specification (same as normal 
	 * 32 bit mode)
	 */
	BMP_A8R8G8B8 = 67
}

/**
 * The copyright status of the document.
 * @enum
 */
export declare enum CopyrightedType {
	/** The document is copyrighted. */
	COPYRIGHTEDWORK = 1,
	/** The document is in the public domain. */
	PUBLICDOMAIN = 2,
	/** The copyright status is not indicated. */
	UNMARKED = 3
}

/**
 * May cause detectable seams to appear across slice 
 * boundaries. Linking slices diffuses the dither pattern 
 * across all linked slices, and eliminates the seams.
 * @summary The quality of an image converted to bitmap mode.
 * @enum
 */
export declare enum BitmapConversionType {
	/** 50% Threshold. */
	HALFTHRESHOLD = 1,
	/**
	 * Applies a halftone-like square pattern to determine the 
	 * value of pixels.
	 */
	PATTERNDITHER = 2,
	/**
	 * May cause detectable seams to appear across slice 
	 * boundaries. Linking slices diffuses the dither pattern 
	 * across all linked slices, and eliminates the seams.
	 * @summary Applies a random pattern that is usually less 
	 * noticeable than pattern dither. The dither effects are 
	 * diffused across adjacent pixels. If you select this 
	 * algorithm, specify a dither percentage to control the amount 
	 * of dithering applied to the image.
	 */
	DIFFUSIONDITHER = 3,
	/**
	 * Lets you convert a grayscale image to simulated halftone 
	 * dots.
	 */
	HALFTONESCREEN = 4,
	/**
	 * Simulates the effect of printing a grayscale image through a 
	 * custom halftone screen. This method lets you apply a screen 
	 * texture, such as a wood grain, to an image. To use this 
	 * option, you must first define a pattern.
	 */
	CUSTOMPATTERN = 5
}

/**
 * The shape of the dots (ink deposits) in the halftone screen.
 * @enum
 */
export declare enum BitmapHalfToneType {
	/** Round. */
	ROUND = 1,
	/** Diamond. */
	DIAMOND = 2,
	/** Ellipse. */
	ELLIPSE = 3,
	/** Line. */
	LINE = 4,
	/** Square. */
	SQUARE = 5,
	/** Cross. */
	CROSS = 6
}

/**
 * The color to use for matting.
 * @enum
 */
export declare enum MatteType {
	/** None. */
	NONE = 1,
	/** The current foreground color. */
	FOREGROUND = 2,
	/** The current background color. */
	BACKGROUND = 3,
	/** White. */
	WHITE = 4,
	/** Black. */
	BLACK = 5,
	/** 50% gray. */
	SEMIGRAY = 6,
	/** Gray. */
	NETSCAPE = 7
}

/**
 * Method to use for interpreting selective color adjustment 
 * specifications.
 * @enum
 */
export declare enum AdjustmentReference {
	/** A percentage of the existing color amount. */
	RELATIVE = 1,
	/** A percentage of the whole. */
	ABSOLUTE = 2
}

/**
 * The color profile to use.
 * @enum
 */
export declare enum OpenDocumentMode {
	/** Grayscale. */
	GRAYSCALE = 1,
	/** RGB. */
	RGB = 2,
	/** CMYK. */
	CMYK = 3,
	/** Lab. */
	LAB = 4
}

/**
 * The color profile to use.
 * @enum
 */
export declare enum NewDocumentMode {
	/** Grayscale. */
	GRAYSCALE = 1,
	/** RGB. */
	RGB = 2,
	/** CMYK. */
	CMYK = 3,
	/** Lab. */
	LAB = 4,
	/** Bitmap. */
	BITMAP = 5
}

/**
 * Deprecated.
 * @enum
 */
export declare enum PhotoCDColorSpace {
	/** RGB with 8 bits per channel. */
	RGB8 = 1,
	/** RGB with 16 bits per channel. */
	RGB16 = 2,
	/** Lab with 8 bits per channel. */
	LAB8 = 3,
	/** Lab with 16 bits per channel. */
	LAB16 = 4
}

/**
 * The placement of path or selection boundary strokes.
 * @enum
 */
export declare enum StrokeLocation {
	/**
	 * The border is placed inside the selection or layer 
	 * boundaries.
	 */
	INSIDE = 1,
	/**
	 * The border is placed in the center of the the selection or 
	 * layer boundaries.
	 */
	CENTER = 2,
	/**
	 * The border is placed outside the selection or layer 
	 * boundaries.
	 */
	OUTSIDE = 3
}

/**
 * Color models.
 * @enum
 */
export declare enum ColorModel {
	/** Grayscale. */
	GRAYSCALE = 1,
	/** RGB. */
	RGB = 2,
	/** CMYK. */
	CMYK = 3,
	/** Lab. */
	LAB = 4,
	/** HSB. */
	HSB = 5,
	/** The color model has not yet been assigned. */
	NONE = 50
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
	NEVER = 1,
	/** Show the JavaScript debugger if a runtime error occurs. */
	ONRUNTIMEERROR = 2,
	/**
	 * Show the JavaScript debugger when the first line of the 
	 * JavaScript executes.
	 */
	BEFORERUNNING = 3
}

/**
 * The color space for the source when printing.
 * @enum
 */
export declare enum SourceSpaceType {
	/** The document color space. */
	DOCUMENT = 1,
	/** The proof color space. */
	PROOF = 2
}

/**
 * The types of art layers.
 * @enum
 */
export declare enum LayerKind {
	/** Normal. */
	NORMAL = 1,
	/** Text. */
	TEXT = 2,
	/** Solid color. */
	SOLIDFILL = 3,
	/** Gradient fill. */
	GRADIENTFILL = 4,
	/** Pattern fill. */
	PATTERNFILL = 5,
	/** Levels adjustment layer. */
	LEVELS = 6,
	/** Curves adjustment layer. */
	CURVES = 7,
	/** Color balance adjustment layer. */
	COLORBALANCE = 8,
	/** Brightness contrast adjustment layer. */
	BRIGHTNESSCONTRAST = 9,
	/** Hue saturation adjustment laye. */
	HUESATURATION = 10,
	/** Selective color adjustment layer. */
	SELECTIVECOLOR = 11,
	/** Channel mixer adjustment layer. */
	CHANNELMIXER = 12,
	/** Gradient map adjustment laye. */
	GRADIENTMAP = 13,
	/** Invert adjustment layer. */
	INVERSION = 14,
	/** Threshold adjustment layer. */
	THRESHOLD = 15,
	/** Posterize adjustment layer. */
	POSTERIZE = 16,
	/** Smart object layer. */
	SMARTOBJECT = 17,
	/** Photo filter layer. */
	PHOTOFILTER = 18,
	/** Exposure layer. */
	EXPOSURE = 19,
	/** 3D layer. */
	LAYER3D = 20,
	/** Video layer. */
	VIDEO = 21,
	/** Black and white layer. */
	BLACKANDWHITE = 22,
	/** Vibrance layer. */
	VIBRANCE = 23,
	/** Color lookup layer. */
	COLORLOOKUP = 24
}

/**
 * PDF presentation transition types.
 * @enum
 */
export declare enum TransitionType {
	/**
	 * Images transition in horizontal stripes like Venetian 
	 * blinds.
	 */
	BLINDSHORIZONTAL = 1,
	/** Images transition in vertical stripes. */
	BLINDSVERTICAL = 2,
	/** One image dissolves into the next. */
	DISSOLVE = 3,
	/** Images transition using a shrinking box shape. */
	BOXIN = 4,
	/** Images transition using an expanding box shape. */
	BOXOUT = 5,
	/** Images dissolve top to bottom. */
	GLITTERDOWN = 6,
	/** Images dissolve left to right. */
	GLITTERRIGHT = 7,
	/** Images dissolve top-left to bottom-right. */
	GLITTERRIGHTDOWN = 8,
	/** Images change with no visible transition. */
	NONE = 9,
	/** Images transition using random effects. */
	RANDOM = 10,
	/**
	 * The new images roll in from the top and bottom of the 
	 * screen.
	 */
	SPLITHORIZONTALIN = 11,
	/**
	 * The new image spreads from the middle of the screen to the 
	 * top and bottom of the screen.
	 */
	SPLITHORIZONTALOUT = 12,
	/**
	 * The new image rolls in from the left and right edges of the 
	 * screen.
	 */
	SPLITVERTICALIN = 13,
	/**
	 * The new image rolls out from the middle of the screen to the 
	 * left and right edges of the screen.
	 */
	SPLITVERTICALOUT = 14,
	/** The new image rolls in from the top of the screen. */
	WIPEDOWN = 15,
	/** The new image rolls in from the right side of the screen. */
	WIPELEFT = 16,
	/** The new image rolls in from the left side of the screen. */
	WIPERIGHT = 17,
	/** The new image rolls in from the bottom of the screen. */
	WIPEUP = 18
}

/**
 * Fonts for web photo gallery text.
 * @enum
 */
export declare enum GalleryFontType {
	/** Arial font. */
	ARIAL = 1,
	/** Courier New font. */
	COURIERNEW = 2,
	/** Helvetica font. */
	HELVETICA = 3,
	/** Times New Roman font. */
	TIMESNEWROMAN = 4
}

/**
 * DEPRECATED. Constrain values for images.
 * @enum
 */
export declare enum GalleryConstrainType {
	/** Constrain width. */
	CONSTRAINWIDTH = 1,
	/** Constrain the height of the image. */
	CONSTRAINHEIGHT = 2,
	/** Constrain both the height and the width of the image. */
	CONSTRAINBOTH = 3
}

/**
 * DEPRECATED. Web photo gallery thumb size types.
 * @enum
 */
export declare enum GalleryThumbSizeType {
	/** Small thumbnail. */
	SMALL = 1,
	/** Medium thumbnail. */
	MEDIUM = 2,
	/** Large thumbnail. */
	LARGE = 3,
	/** Custom thumbnail. */
	CUSTOM = 4
}

/**
 * DEPRECATED. Web photo gallery security types.
 * @enum
 */
export declare enum GallerySecurityType {
	/** No security. */
	NONE = 1,
	/** Custom text security. */
	CUSTOMTEXT = 2,
	/** Filename security. */
	FILENAME = 3,
	/** Copyright security. */
	COPYRIGHT = 4,
	/** Caption security. */
	CAPTION = 5,
	/** Credit security. */
	CREDIT = 6,
	/** Title security. */
	TITLE = 7
}

/**
 * The function or meaning of text in a Picture Package.
 * @enum
 */
export declare enum PicturePackageTextType {
	/** No text. */
	NONE = 1,
	/** The text is user defined. */
	USER = 2,
	/** The text is the filename. */
	FILENAME = 3,
	/** The text is the copyright. */
	COPYRIGHT = 4,
	/** The text is a caption. */
	CAPTION = 5,
	/** The text is the credit. */
	CREDIT = 6,
	/** The text is the origin. */
	ORIGIN = 7
}

/**
 * The color to use for text displayed over gallery images as 
 * an antitheft deterrent.
 * @enum
 */
export declare enum GallerySecurityTextColorType {
	/** Black text. */
	BLACK = 1,
	/** White text. */
	WHITE = 2,
	/** Custom color. */
	CUSTOM = 3
}

/**
 * The position of the text displayed over gallery images as an 
 * antitheft deterrent.
 * @enum
 */
export declare enum GallerySecurityTextPositionType {
	/** Text is centered on each image. */
	CENTERED = 1,
	/** Text is in the upper left corner of each image. */
	UPPERLEFT = 2,
	/** Ltext is in the lower left corner of each image. */
	LOWERLEFT = 3,
	/** Text is in the upper right corner of each image. */
	UPPERRIGHT = 4,
	/** Text is in the lower right corner of each image. */
	LOWERRIGHT = 5
}

/**
 * DEPRECATED. web photo gallery security text rotation types.
 * @enum
 */
export declare enum GallerySecurityTextRotateType {
	/** No rotate. */
	ZERO = 1,
	/** Rotate 45 degrees clock wise. */
	CLOCKWISE45 = 2,
	/** Rotate 90 degrees clock wise. */
	CLOCKWISE90 = 3,
	/** Rotate 45 degrees counter clock wise. */
	COUNTERCLOCKWISE45 = 4,
	/** Rotate 90 degrees counter clock wise. */
	COUNTERCLOCKWISE90 = 5
}

/**
 * The permission state for queries.
 * @enum
 */
export declare enum QueryStateType {
	/** Always maximize compatibility. */
	ALWAYS = 1,
	/** Always ask about maximize compatibility. */
	ASK = 2,
	/** Never ask about maximize compatibility. */
	NEVER = 3
}

/**
 * The location of history log data.
 * @enum
 */
export declare enum SaveLogItemsType {
	/** Save history log in file metadata. */
	METADATA = 1,
	/** Save history log in a text file. */
	LOGFILE = 2,
	/** Save history log in file metadata and a text file. */
	LOGFILEANDMETADATA = 3
}

/**
 * The history log edit options.
 * @enum
 */
export declare enum EditLogItemsType {
	/** Save a history for only for the session. */
	SESSIONONLY = 1,
	/** Save a concise history log. */
	CONCISE = 2,
	/** Save a detailed history log. */
	DETAILED = 3
}

/**
 * The type of path.
 * @enum
 */
export declare enum PathKind {
	/** Normal path. */
	NORMALPATH = 1,
	/** Clipping path. */
	CLIPPINGPATH = 2,
	/** Workpath. */
	WORKPATH = 3,
	/** Vector mask path. */
	VECTORMASK = 4,
	/** Text mask path. */
	TEXTMASK = 5
}

/**
 * Specifies how to combine the shapes if the destination image 
 * already has a selection.
 * @enum
 */
export declare enum ShapeOperation {
	/** Adds the shapes. */
	SHAPEADD = 1,
	/**
	 * Replaces the shape in the destination image with the loaded 
	 * selection.
	 */
	SHAPEXOR = 2,
	/**
	 * The resulting shape is the area of intersection between the 
	 * two shapes.
	 */
	SHAPEINTERSECT = 3,
	/**
	 * Subtracts the loaded shape from the selection is the 
	 * destination image.
	 */
	SHAPESUBTRACT = 4
}

/**
 * The path point kind.
 * @enum
 */
export declare enum PointKind {
	/** The point can be a curve. */
	SMOOTHPOINT = 1,
	/** The point must be a corner. */
	CORNERPOINT = 2
}

/**
 * Tools for the stroke path command.
 * @enum
 */
export declare enum ToolType {
	/** Pencil. */
	PENCIL = 1,
	/** Brush. */
	BRUSH = 2,
	/** Eraser. */
	ERASER = 3,
	/** Background eraser. */
	BACKGROUNDERASER = 4,
	/** Clone stamp. */
	CLONESTAMP = 5,
	/** Pattern stamp. */
	PATTERNSTAMP = 6,
	/** Healing brush. */
	HEALINGBRUSH = 7,
	/** History brush. */
	HISTORYBRUSH = 8,
	/** Art history brush. */
	ARTHISTORYBRUSH = 9,
	/** Smudge. */
	SMUDGE = 10,
	/** Blur. */
	BLUR = 11,
	/** Sharpen. */
	SHARPEN = 12,
	/** Dodge. */
	DODGE = 13,
	/** Burn. */
	BURN = 14,
	/** Sponge. */
	SPONGE = 15,
	/** Color replacement tool. */
	COLORREPLACEMENTTOOL = 16
}

/**
 * The destination, if any, for batch-processed files.
 * @enum
 */
export declare enum BatchDestinationType {
	/** Leaves all files open. */
	NODESTINATION = 1,
	/** Saves changes and closes all files. */
	SAVEANDCLOSE = 2,
	/** Outputs files to a folder. */
	FOLDER = 3
}

/**
 * File naming options for the batch command.
 * @enum
 */
export declare enum FileNamingType {
	/** Use the document name in mixed case. */
	DOCUMENTNAMEMIXED = 1,
	/** Use the document name in lower case. */
	DOCUMENTNAMELOWER = 2,
	/** Use the document name in UPPER case. */
	DOCUMENTNAMEUPPER = 3,
	/** Use a 1-digit serial number. */
	SERIALNUMBER1 = 4,
	/** Use a 2-digit serial number. */
	SERIALNUMBER2 = 5,
	/** Use a 3-digit serial number. */
	SERIALNUMBER3 = 6,
	/** Use a 4-digit serial number. */
	SERIALNUMBER4 = 7,
	/** Use letter serial number lower case (a, b, c, ...) */
	SERIALLETTERLOWER = 8,
	/** Use letter serial number UPPER case (A, B, C, ...) */
	SERIALLETTERUPPER = 9,
	/** Uses the date formatted as mmddyy. */
	MMDDYY = 10,
	/** Uses the date formatted as mmdd. */
	MMDD = 11,
	/** Uses the date formatted as yyyymmdd. */
	YYYYMMDD = 12,
	/** Uses the date formatted as yymmdd. */
	YYMMDD = 13,
	/** Uses the date formatted as yyddmm. */
	YYDDMM = 14,
	/** Uses the date formatted as ddmmyy. */
	DDMMYY = 15,
	/** Uses the date formatted as ddmm. */
	DDMM = 16,
	/** Use the extension of the file in lower case. */
	EXTENSIONLOWER = 17,
	/** Use the extension of the file in UPPER case. */
	EXTENSIONUPPER = 18
}

/**
 * Depth map source options.
 * @enum
 */
export declare enum DepthMapSource {
	/** No depth map in use. */
	NONE = 1,
	/** Uses the transparency channel for the depth map. */
	TRANSPARENCYCHANNEL = 2,
	/** Uses the layer mask for the depth map. */
	LAYERMASK = 3,
	/** Uses the image highlight for the depth map. */
	IMAGEHIGHLIGHT = 4
}

/**
 * Geometric options for shapes, such as the iris shape in the 
 * Lens Blur Filter.
 * @enum
 */
export declare enum Geometry {
	/** Triangle. */
	TRIANGLE = 0,
	/** Pentagon. */
	PENTAGON = 1,
	/** Hexagon. */
	HEXAGON = 2,
	/** Square. */
	SQUARE = 3,
	/** Heptagon. */
	HEPTAGON = 4,
	/** Octagon. */
	OCTAGON = 5
}

/**
 * The color reduction algorithm.
 * @enum
 */
export declare enum ColorReductionType {
	/**
	 * Gives priority to colors for which the human eye has greater 
	 * sensitivity.
	 */
	PERCEPTUAL = 0,
	/**
	 * Gives priority to broad areas of color and the preservation 
	 * of web colors; usually produces images with the greatest 
	 * color integrity.
	 */
	SELECTIVE = 1,
	/**
	 * Samples color from the spectrum appearing most commonly in 
	 * the image.
	 */
	ADAPTIVE = 2,
	/**
	 * Uses the standard 216-color color table common to Windows 
	 * and Mac OS 8-bit (256-color or web-safe palette); ensures 
	 * that no browser dither is applied when the image is 
	 * displayed using 8-bit color.
	 */
	RESTRICTIVE = 3,
	/**
	 * Uses a color palette that is created or modified by the 
	 * user. If you open an existing GIF or PNG-8 file, it will 
	 * have a custom color palette.
	 */
	CUSTOM = 4,
	/** Uses a set palette of colors. */
	BLACKWHITE = 5,
	/** Uses a set palette of colors. */
	GRAYSCALE = 6,
	/** Uses a set palette of colors. */
	MACINTOSH = 7,
	/** Uses a set palette of colors. */
	WINDOWS = 8
}

/**
 * The default Camera RAW settings.
 * @enum
 */
export declare enum CameraRAWSettingsType {
	/** Use the settings of the camera. */
	CAMERA = 0,
	/** Use the settings of the selected image. */
	SELECTEDIMAGE = 1,
	/** Use the custom settings. */
	CUSTOM = 2
}

/**
 * The lighting conditions (affects color balance).
 * @enum
 */
export declare enum WhiteBalanceType {
	/** Use the settings of the camera as shot. */
	ASSHOT = 0,
	/** Automatically use the white balance settings. */
	AUTO = 1,
	/** Use the settings as shot in daylight. */
	DAYLIGHT = 2,
	/** Use the settings as shot on a cloudy day. */
	CLOUDY = 3,
	/** Use the settings as shot in the shade. */
	SHADE = 4,
	/** Use the settings as shot with tungsten lighting. */
	TUNGSTEN = 5,
	/** Use the settings as shot with fluorescent lighting. */
	FLUORESCENT = 6,
	/** Use the settings as shot with a flash. */
	FLASH = 7,
	/** Use the custom settings for the shot parameters. */
	CUSTOM = 8
}

/**
 * The type of color space.
 * @enum
 */
export declare enum ColorSpaceType {
	/** Use the Adobe RGB color space. */
	ADOBERGB = 0,
	/** Use the ColorMatch RGB color space. */
	COLORMATCHRGB = 1,
	/** Use the ProPhoto RGB color space. */
	PROPHOTORGB = 2,
	/** Use the sRGB color space. */
	SRGB = 3
}

/**
 * The camera RAW image size.
 * @enum
 */
export declare enum CameraRAWSize {
	/** 1536 x 1024 image. */
	MINIMUM = 0,
	/** 2048 x 1365 image. */
	SMALL = 1,
	/** 3072 x 2048 image. */
	MEDIUM = 2,
	/** 4096 x 2731 image. */
	LARGE = 3,
	/** 5120 x 3413 image. */
	EXTRALARGE = 4,
	/** 6144 x 4096 image. */
	MAXIMUM = 5
}

/**
 * The PDF magnification type.
 * @enum
 */
export declare enum MagnificationType {
	/** Displays the image at actual size. */
	ACTUALSIZE = 0,
	/** Fits the image to the page. */
	FITPAGE = 1
}

/**
 * The style to use when cropping a page.
 * @enum
 */
export declare enum CropToType {
	/** Crop to the bounding box. */
	BOUNDINGBOX = 0,
	/** Crop to the media box. */
	MEDIABOX = 1,
	/** Crop to the crop box. */
	CROPBOX = 2,
	/** Crop to the bleed box. */
	BLEEDBOX = 3,
	/** Crop to the trim box. */
	TRIMBOX = 4,
	/** Crop to the art box. */
	ARTBOX = 5
}

/**
 * The type size to use for font previews in the Type tool font 
 * menus.
 * @enum
 */
export declare enum FontPreviewType {
	/** No preview. */
	NONE = 0,
	/** Small type. */
	SMALL = 1,
	/** Medium type. */
	MEDIUM = 2,
	/** Large type. */
	LARGE = 3,
	/** Extra large preview. */
	EXTRALARGE = 4,
	/** Huge preview. */
	HUGE = 5
}

/**
 * Font size in panels and dialogs.
 * @enum
 */
export declare enum FontSize {
	/** Small size. */
	SMALL = 1,
	/** Medium size. */
	MEDIUM = 2,
	/** Large size. */
	LARGE = 3
}

/**
 * The source for recording measurements.
 * @enum
 */
export declare enum MeasurementSource {
	/** The measure selection. */
	MEASURESELECTION = 1,
	/** The measure count tool. */
	MEASURECOUNTTOOL = 2,
	/** The measure ruler tool. */
	MEASURERULERTOOL = 3
}

/**
 * The measurement upon which to take action.
 * @enum
 */
export declare enum MeasurementRange {
	/** All measurements. */
	ALLMEASUREMENTS = 1,
	/** Only active measurements. */
	ACTIVEMEASUREMENTS = 2
}

/**
 * A collection of documents.
 * @class
 */
export declare class Documents {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * A document.
	 * @param {UnitValue} width - The width of the document.
	 * @param {UnitValue} height - The height of the document.
	 * @param {number} resolution - The resolution of the document 
	 * (in pixels per inch)
	 * @param {string} name - The name of the document.
	 * @param {NewDocumentMode} mode - The document mode.
	 * @param {DocumentFill} initialFill - The initial fill of the 
	 * document.
	 * @param {number} pixelAspectRatio - The initial pixel aspect 
	 * ratio of the document.
	 * @param {BitsPerChannelType} bitsPerChannel - The number of 
	 * bits per channel.
	 * @param {string} colorProfileName - The name of color profile 
	 * for document.
	 */
	add(width?: UnitValue, height?: UnitValue, resolution?: number, name?: string, mode?: NewDocumentMode, initialFill?: DocumentFill, pixelAspectRatio?: number, bitsPerChannel?: BitsPerChannelType, colorProfileName?: string): Document;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Document;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: Document;
}

/**
 * The collection of layer objects, including art layer and 
 * layer set objects, in the document.
 * @class
 */
export declare class Layers {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Layer;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: Layer;
}

/**
 * The collection of layer set objects in the document.
 * @class
 */
export declare class LayerSets {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/** Adds an element. */
	add(): LayerSet;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): LayerSet;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: LayerSet;
}

/**
 * The collection of art layer objects in the document.
 * @class
 */
export declare class ArtLayers {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/** Adds an element. */
	add(): ArtLayer;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): ArtLayer;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: ArtLayer;
}

/**
 * The collection of channel objects in the document.
 * @class
 */
export declare class Channels {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/** Adds an element. */
	add(): Channel;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Channel;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: Channel;
}

/**
 * Guides associated with the document.
 * @class
 */
export declare class Guides {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * A guide.
	 * @param {Direction} direction - Indicates whether the guide 
	 * is vertical or horizontal.
	 * @param {UnitValue} coordinate - Location of the guide from 
	 * origin of image.
	 */
	add(direction: Direction, coordinate: UnitValue): Guide;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Guide;
}

/**
 * The history state objects associated with the document.
 * @class
 */
export declare class HistoryStates {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): HistoryState;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: HistoryState;
}

/**
 * The layer comp objects associated with the document.
 * @class
 */
export declare class LayerComps {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Adds a layer comp.
	 * @param {string} name - The name of the layer comp.
	 * @param {string} comment - The description of the layer comp.
	 * @param {boolean} appearance - If true, uses the layer 
	 * appearance or style for this layer comp.
	 * @param {boolean} position - If true, uses the layer position 
	 * for this layer comp.
	 * @param {boolean} visibility - If true, uses the layer 
	 * visibility for this layer comp.
	 */
	add(name: string, comment?: string, appearance?: boolean, position?: boolean, visibility?: boolean): LayerComp;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): LayerComp;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: LayerComp;
}

/**
 * A collection of fonts available on your computer.
 * @class
 */
export declare class TextFonts {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): TextFont;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: TextFont;
}

/**
 * The collection of path item objects in the document.
 * @class
 */
export declare class PathItems {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Creates a new path item.
	 * @param {string} name - The name for the new path.
	 * @param {SubPathInfo} entirePath - The item's sub paths.
	 */
	add(name: string, entirePath: SubPathInfo): PathItem;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PathItem;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: PathItem;
}

/**
 * An array of path point info objects that describes a 
 * straight or curved segment of a path. You do not use the sub 
 * path item object to create a sub path. Rather, you use the 
 * sub path item object to retrieve information about a sub 
 * path. To create sub paths, see sub path info.
 * @class
 */
export declare class SubPathItems {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): SubPathItem;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: SubPathItem;
}

/**
 * A collection of path point objects that comprises the path 
 * points property of the sub path item object.
 * @class
 */
export declare class PathPoints {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): PathPoint;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: PathPoint;
}

/**
 * A collection of notifier objects in the document.
 * @class
 */
export declare class Notifiers {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Creates a notifier.
	 * @param {string} event - The class id of the event, four 
	 * characters or a unique string.
	 * @param {File} eventFile - The script file to execute when 
	 * the event occurs.
	 * @param {string} eventClass - The class of the object the 
	 * event is applied to, four characters or a unique string. 
	 * When an event applies to multiple types of objects, you use 
	 * the event class parameter to distinguish which object this 
	 * Notifier applies to. For example, the Make event (“Mk“) 
	 * applies to documents (“Dcmn”), channels (“Chnl”) and other 
	 * objects.
	 */
	add(event: string, eventFile: File, eventClass?: string): Notifier;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): Notifier;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: Notifier;
}

/**
 * The collection of count items in the document.
 * @class
 */
export declare class CountItems {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Creates a count item.
	 * @param {UnitPoint} position - The position of origin.
	 */
	add(position: UnitPoint): CountItem;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): CountItem;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: CountItem;
}

/**
 * The collection of color samplers in the document.
 * @class
 */
export declare class ColorSamplers {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Number of elements in the collection. */
	readonly length: number;
	/**
	 * Creates a color sampler.
	 * @param {UnitPoint} position - The horizontal and vertical 
	 * (x,y) locations, respectively, of the color sampler.
	 */
	add(position: UnitPoint): ColorSampler;
	/**
	 * Get the first element in the collection with the provided 
	 * name.
	 * @param {string} name
	 */
	getByName(name: string): ColorSampler;
	/**
	 * Get an element in the collection with the provided index.
	 * @param {number} index
	 */
	[index: number]: ColorSampler;
}

/**
 * Options that can be specified when opening a document.
 * @class
 */
export declare class OpenOptions {
}

/**
 * DEPRECATED.
 * @class
 * @extends OpenOptions
 */
export declare class PhotoCDOpenOptions extends OpenOptions {
	/** The dimensions of the image. */
	pixelSize: PhotoCDSize;
	/** The profile to use when reading the image. */
	colorProfileName: string;
	/** The resolution of the image (in pixels per inch) */
	resolution: number;
	/** The color space for the image. */
	colorSpace: PhotoCDColorSpace;
	/** The image orientation. */
	orientation: Orientation;
}

/**
 * Options that can be specified when opening a document in RAW 
 * format.
 * @class
 * @extends OpenOptions
 */
export declare class RawFormatOpenOptions extends OpenOptions {
	/** The image height (in pixels) */
	height: number;
	/** The image width (in pixels) */
	width: number;
	/**
	 * The number of channels in the image. Valid only when 'bits 
	 * per channel' = 16. Range: 1 to 56.
	 */
	channelNumber: number;
	/** If true, color values are stored sequentially. */
	interleaveChannels: boolean;
	/** The number of bits for each channel. Valid values: 8 or 16. */
	bitsPerChannel: number;
	/**
	 * The order in which bytes will be read. Valid only when 'bits 
	 * per channel' = 16.
	 */
	byteOrder: ByteOrderType;
	/**
	 * The number of bytes of information that will appear in the 
	 * file before actual image information begins; that is, the 
	 * number of zeroes inserted at the beginning of the file as 
	 * placeholders. Range: 0 to 1919999.
	 */
	headerSize: number;
	/** If true, the header is retained when saving. */
	retainHeader: boolean;
}

/**
 * Options that can be specified when opening a generic PDF 
 * document.
 * @class
 * @extends OpenOptions
 */
export declare class GenericPDFOpenOptions extends OpenOptions {
	/** The resolution of the document (in pixels per inch) */
	resolution: number;
	/** The document mode. */
	mode: OpenDocumentMode;
	/** If true, anti-aliasing is used. */
	antiAlias: boolean;
	/** The number of the page or image to open. */
	page: number;
	/** The number of the 3d object to open. */
	object: number;
	/** DEPRECATED. */
	constrainProportions: boolean;
	/** DEPRECATED. */
	height: UnitValue;
	/** DEPRECATED. */
	width: UnitValue;
	/** The number of bits per channel. */
	bitsPerChannel: BitsPerChannelType;
	/**
	 * If true, the value specified in the page property refers to 
	 * a page number. If false, the value specifies an image 
	 * number.
	 */
	usePageNumber: boolean;
	/**
	 * If true, the value specified in the page property refers to 
	 * a page number. If false, the value specifies an image 
	 * number.
	 */
	use3DObjectNumber: boolean;
	/** The name of the document. */
	name: string;
	/** The cropping method to use. */
	cropPage: CropToType;
	/**
	 * If true, suppresses any warnings that may occur during 
	 * opening.
	 */
	suppressWarnings: boolean;
}

/**
 * Options that can be specified when opening a generic EPS 
 * document.
 * @class
 * @extends OpenOptions
 */
export declare class GenericEPSOpenOptions extends OpenOptions {
	/** The image height. */
	height: UnitValue;
	/** The image width. */
	width: UnitValue;
	/** The resolution of the document (in pixels per inch) */
	resolution: number;
	/** The document mode. */
	mode: OpenDocumentMode;
	/** If true, anti-aliasing is used. */
	antiAlias: boolean;
	/** If true, the image proportions are constrained. */
	constrainProportions: boolean;
}

/**
 * Options for opening a DICOM document.
 * @class
 * @extends OpenOptions
 */
export declare class DICOMOpenOptions extends OpenOptions {
	/** If true, patient information is anonymized. */
	anonymize: boolean;
	/** If true, overlays are shown (if present). */
	showOverlays: boolean;
	/** The number of rows in an n-up configuration. */
	rows: number;
	/** The number of columns in an n-up configuration. */
	columns: number;
	/** The brightness of the image in Houndsfield units. */
	windowWidth: number;
	/** The contrast of the image in Houndsfield units. */
	windowLevel: number;
	/** If true, the image is inverted. */
	reverse: boolean;
}

/**
 * Options for opening a camera RAW document.
 * @class
 * @extends OpenOptions
 */
export declare class CameraRAWOpenOptions extends OpenOptions {
	/** The image color space. */
	colorSpace: ColorSpaceType;
	/** The number of bits per channel. */
	bitsPerChannel: BitsPerChannelType;
	/** The size of the new document. */
	size: CameraRAWSize;
	/** The resolution of the document (in pixels per inch) */
	resolution: number;
	/** The global settings for all Camera RAW options. */
	settings: CameraRAWSettingsType;
	/** The white balance options for the image. */
	whiteBalance: WhiteBalanceType;
	/** The temperature of the shot. Range: 2000 to 50000. */
	temperature: number;
	/** The tint of the shot. Range: -150 to 150. */
	tint: number;
	/** The exposure of the shot. Range: -4.0 to 4.0. */
	exposure: number;
	/** The shadows of the shot. Range: 0 to 100. */
	shadows: number;
	/** The brightness of the shot. Range: 0 to 150. */
	brightness: number;
	/** The constrast of the shot. Range: -50 to 100. */
	contrast: number;
	/** The saturation of the shot. Range: -100 to 100. */
	saturation: number;
	/** The sharpness of the shot. Range: 0 to 100. */
	sharpness: number;
	/** The luminance smoothing of the shot. Range: 0 to 100. */
	luminanceSmoothing: number;
	/** The color noise reduction of the shot. Range: 0 to 100. */
	colorNoiseReduction: number;
	/**
	 * The chromatic aberration R/C of the shot. Range: -100 to 
	 * 100.
	 */
	chromaticAberrationRC: number;
	/**
	 * The chromatic aberration B/Y of the shot. Range: -100 to 
	 * 100.
	 */
	chromaticAberrationBY: number;
	/** The vignetting amount of the shot. Range: -100 to 100. */
	vignettingAmount: number;
	/** The vignetting mid point of the shot. Range: -100 to 100. */
	vignettingMidpoint: number;
	/** The shadow tint of the shot. Range: -100 to 100. */
	shadowTint: number;
	/** The red hue of the shot. Range: -100 to 100. */
	redHue: number;
	/** The red saturation of the shot. Range: -100 to 100. */
	redSaturation: number;
	/** The green hue of the shot. Range: -100 to 100. */
	greenHue: number;
	/** The green saturation of the shot. Range: -100 to 100. */
	greenSaturation: number;
	/** The blue hue of the shot. Range: -100 to 100. */
	blueHue: number;
	/** The blue saturation of the shot. Range: -100 to 100. */
	blueSaturation: number;
}

/**
 * Options for saving a file.
 * @class
 */
export declare class SaveOptions {
	/** Save changes. */
	static readonly SAVECHANGES: number;
	/** Do not save changes. */
	static readonly DONOTSAVECHANGES: number;
	/** Ask the user whether to save. */
	static readonly PROMPTTOSAVECHANGES: number;
}

/**
 * Options for saving a Photoshop document.
 * @class
 * @extends SaveOptions
 */
export declare class PhotoshopSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, the layers are saved. */
	layers: boolean;
	/** If true, the annotations are saved. */
	annotations: boolean;
	/** If true, spot colors are saved. */
	spotColors: boolean;
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
}

/**
 * Options for saving a document in BMP format.
 * @class
 * @extends SaveOptions
 */
export declare class BMPSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** The target operating system. */
	osType: OperatingSystem;
	/** The number of bits per sample. */
	depth: BMPDepthType;
	/** If true, RLE compression is used. */
	rleCompression: boolean;
	/** If true, the image is written from bottom to top. */
	flipRowOrder: boolean;
}

/**
 * Options for saving a document in GIF format.
 * @class
 * @extends SaveOptions
 */
export declare class GIFSaveOptions extends SaveOptions {
	/**
	 * The number of colors in palette. Not valid for all palette 
	 * types.
	 */
	colors: number;
	/** The type of dither. */
	dither: DitherType;
	/**
	 * The amount of dither. Valid only when 'dither type' is 
	 * diffusion. Range: 1 to 100.
	 */
	ditherAmount: number;
	/** The type of colors to force into the color palette. */
	forced: ForcedColors;
	/** If true, rows are interlaced. */
	interlaced: boolean;
	/**
	 * The color to use to fill anti-aliased edges adjacent to 
	 * transparent areas of the image. Default: white.
	 */
	matte: MatteType;
	/** The type of palette to use. */
	palette: PaletteType;
	/**
	 * If true, protects colors in the image that contain entries 
	 * in the color table from being dithered. Valid only when 
	 * 'dither' = diffusion.
	 */
	preserveExactColors: boolean;
	/**
	 * If true, preserves transparent ares of the image during GIF 
	 * conversion.
	 */
	transparency: boolean;
}

/**
 * Options for saving a document in EPS format.
 * @class
 * @extends SaveOptions
 */
export declare class EPSSaveOptions extends SaveOptions {
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The type of preview. */
	preview: MacPreviewType;
	/** The type of encoding to use for the document. */
	encoding: SaveEncoding;
	/** If true, includes the halftone screen. */
	halftoneScreen: boolean;
	/**
	 * If true, includes the transfer functions in the document to 
	 * compensate for dot gain between the image and film.
	 */
	transferFunction: boolean;
	/** If true, uses PostScript color management. */
	psColorManagement: boolean;
	/**
	 * If true, includes vector data. Valid only when the document 
	 * contains vector data (un-rasterized text).
	 */
	vectorData: boolean;
	/** If true, uses image interpolation. */
	interpolation: boolean;
	/**
	 * If true, displays white areas as transparent. Valid only for 
	 * documents in BitMap mode.
	 */
	transparentWhites: boolean;
}

/**
 * Options for saving a document in JPEG format.
 * @class
 * @extends SaveOptions
 */
export declare class JPEGSaveOptions extends SaveOptions {
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The download format to use. */
	formatOptions: FormatOptionsType;
	/**
	 * The color to use to fill anti-aliased edges adjacent to 
	 * transparent areas of the image. Default: white.
	 */
	matte: MatteType;
	/**
	 * The number of scans. Valid only for progressive type JPEG 
	 * files.
	 */
	scans: number;
	/** The quality of the produced image. */
	quality: number;
}

/**
 * Options for saving a document in PDF format.
 * @class
 * @extends SaveOptions
 */
export declare class PDFSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, the layers are saved. */
	layers: boolean;
	/** If true, the annotations are saved. */
	annotations: boolean;
	/** If true, the spot colors are saved. */
	spotColors: boolean;
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/**
	 * DEPRECATED, ( should the embedded color profile be 
	 * downgraded to version 2 )
	 */
	downgradeColorProfile: boolean;
	/** DEPRECATED. */
	transparency: boolean;
	/** DEPRECATED. ( use image interpolation? ) */
	interpolation: boolean;
	/** DEPRECATED. ( include vector data ) */
	vectorData: boolean;
	/**
	 * DEPRECATED. ( embed fonts? Only valid if a text layer is 
	 * included )
	 */
	embedFonts: boolean;
	/**
	 * DEPRECATED. ( use outlines for text? Only valid if vector 
	 * data is included )
	 */
	useOutlines: boolean;
	/** The encoding method to use. */
	encoding: PDFEncodingType;
	/**
	 * The quality of the produced image. Valid only for 
	 * JPEG-encoded PDF documents. Range: 0 to 12.
	 */
	jpegQuality: number;
	/**
	 * The preset file to use for settings; overrides other 
	 * settings.
	 */
	presetFile: string;
	/** The PDF standard to make the document compatible with. */
	PDFStandard: PDFStandardType;
	/** The PDF version to make the document compatible with. */
	PDFCompatibility: PDFCompatibilityType;
	/** Description of the save options in use. */
	description: string;
	/**
	 * If true, allows users to reopen the PDF in Photoshop with 
	 * native Photoshop data intact.
	 */
	preserveEditing: boolean;
	/** If true, includes a small preview image in Acrobat. */
	embedThumbnail: boolean;
	/** If true, improves performance of PDFs on Web servers. */
	optimizeForWeb: boolean;
	/** If true, opens the saved PDF in Acrobat. */
	view: boolean;
	/** The downsample method to use. */
	downSample: PDFResampleType;
	/**
	 * The size (in pixels per inch) to downsample images to if 
	 * they exceed the value specified for 'down sample size 
	 * limit'.
	 */
	downSampleSize: number;
	/**
	 * Limits downsampling or subsampling to images that exceed 
	 * this value (in pixels per inch).
	 */
	downSampleSizeLimit: number;
	/**
	 * The compression option. Valid only when encoding is 
	 * JPEG2000.
	 */
	tileSize: number;
	/**
	 * If true, converts a 16-bit image to 8-bit for better 
	 * compatibility with other applications.
	 */
	convertToEightBit: boolean;
	/**
	 * If true, converts the color profile to the destination 
	 * profile.
	 */
	colorConversion: boolean;
	/**
	 * Describes the final RGB or CMYK output device, such as a 
	 * monitor or press standard.
	 */
	destinationProfile: string;
	/** If true, shows which profiles to include. */
	profileInclusionPolicy: boolean;
	/**
	 * An optional comment field for inserting descriptions of the 
	 * output condition. The text is stored in the PDF/X file.
	 */
	outputCondition: string;
	/** The identifier for the output condition. */
	outputConditionID: string;
	/** The URL where the output condition is registered. */
	registryName: string;
}

/**
 * Options for saving a document in PICT format.
 * @class
 * @extends SaveOptions
 */
export declare class PICTFileSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The number of bits per pixel. */
	resolution: PICTBitsPerPixels;
	/** The compression method. */
	compression: PICTCompression;
}

/**
 * Options for saving a document as a PICT resource file.
 * @class
 * @extends SaveOptions
 */
export declare class PICTResourceSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The number of bits per pixel. */
	resolution: PICTBitsPerPixels;
	/** The compression type. */
	compression: PICTCompression;
	/** The ID of the PICT resource. */
	resourceID: number;
	/** The name of PICT resource. */
	name: string;
}

/**
 * Options for saving a document in Pixar format.
 * @class
 * @extends SaveOptions
 */
export declare class PixarSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
}

/**
 * Options for saving a document in PNG format.
 * @class
 * @extends SaveOptions
 */
export declare class PNGSaveOptions extends SaveOptions {
	/** If true, rows are interlaced. */
	interlaced: boolean;
	/** Compression used on the image. */
	compression: number;
}

/**
 * Options for saving a document in RAW format.
 * @class
 * @extends SaveOptions
 */
export declare class RawSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, spot colors are saved. */
	spotColors: boolean;
}

/**
 * Options for saving a document in SGI RGB format.
 * @class
 * @extends SaveOptions
 */
export declare class SGIRGBSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, the spot colors are saved. */
	spotColors: boolean;
}

/**
 * Options for saving a document in TGA (Targa) format.
 * @class
 * @extends SaveOptions
 */
export declare class TargaSaveOptions extends SaveOptions {
	/** The number of bits per pixel. */
	resolution: TargaBitsPerPixels;
	/** If true, RLE compression is used. */
	rleCompression: boolean;
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
}

/**
 * Options for saving a document in TIFF format.
 * @class
 * @extends SaveOptions
 */
export declare class TiffSaveOptions extends SaveOptions {
	/** If true, the alpha channels are saved. */
	alphaChannels: boolean;
	/** If true, the layers are saved. */
	layers: boolean;
	/** If true, the annotations are saved. */
	annotations: boolean;
	/** If true, spot colors are saved. */
	spotColors: boolean;
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The compression type. */
	imageCompression: TiffEncodingType;
	/**
	 * The quality of the produced image, which is inversely 
	 * proportionate to the amount of JPEG compression. Valid only 
	 * for JPEG compressed TIFF documents. Range: 0 to 12.
	 */
	jpegQuality: number;
	/**
	 * The order in which the bytes will be read. Default: Mac OS 
	 * when running in Mac OS, and IBM PC when running in Windows.
	 */
	byteOrder: ByteOrderType;
	/** If true, preserves multi-resolution information. */
	saveImagePyramid: boolean;
	/**
	 * If true, saves the transparency as an additional alpha 
	 * channel when the file is opened in another application.
	 */
	transparency: boolean;
	/**
	 * The method of compression to use when saving layers (as 
	 * opposed to saving composite data). Valid only when 'layers' 
	 * = true.
	 */
	layerCompression: LayerCompressionType;
	/** If true, the channels in the image are interleaved. */
	interleaveChannels: boolean;
}

/**
 * Options for saving a document in Photoshop DCS 1.0 format.
 * @class
 * @extends SaveOptions
 */
export declare class DCS1_SaveOptions extends SaveOptions {
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The type of preview. */
	preview: MacPreviewType;
	/** The DCS type. */
	DCS: DCSType;
	/** The type of encoding to use for the document. */
	encoding: SaveEncoding;
	/** If true, includes halftone screen. */
	halftoneScreen: boolean;
	/**
	 * If true, includes transfer functions in the document to 
	 * compensate for dot gain between the image and film.
	 */
	transferFunction: boolean;
	/**
	 * If true, includes vector data. Valid only if the document 
	 * contains vector data (un-rasterized text).
	 */
	vectorData: boolean;
	/** If true, image interpolation is used. */
	interpolation: boolean;
}

/**
 * Options for saving a document in Photoshop DCS 2.0 format.
 * @class
 * @extends SaveOptions
 */
export declare class DCS2_SaveOptions extends SaveOptions {
	/** If true, the spot colors are saved. */
	spotColors: boolean;
	/** If true, the color profile is embedded in the document. */
	embedColorProfile: boolean;
	/** The type of preview. */
	preview: MacPreviewType;
	/** The DCS type. */
	DCS: DCSType;
	/** If true, saves color channels as multiple files. */
	multiFileDCS: boolean;
	/** The type of encoding to use for document. */
	encoding: SaveEncoding;
	/** If true, includes halftone screen. */
	halftoneScreen: boolean;
	/**
	 * If true, includes transfer functions in the document to 
	 * compensate for dot gain between the image and film.
	 */
	transferFunction: boolean;
	/**
	 * If true, includes vector data. Valid only if the document 
	 * contains vector data (un-rasterized text).
	 */
	vectorData: boolean;
	/** If true, image interpolation is used. */
	interpolation: boolean;
}

/**
 * Options for exporting an object.
 * @class
 */
export declare class ExportOptions {
}

/**
 * Options for exporting Illustrator paths.
 * @class
 * @extends ExportOptions
 */
export declare class ExportOptionsIllustrator extends ExportOptions {
	/** The path to export. */
	path: IllustratorPathType;
	/** The name of the path to export. Valid only for named paths. */
	pathName: string;
}

/**
 * Options for exporting Save For Web files.
 * @class
 * @extends ExportOptions
 */
export declare class ExportOptionsSaveForWeb extends ExportOptions {
	/**
	 * The file format to use. Save For Web supports only 
	 * Compuserve GIF, JPEG, PNG-8, PNG-24, and BMP formats.
	 */
	format: SaveDocumentType;
	/**
	 * If true, uses 8 bits. If false, uses 24 bits. Valid only 
	 * when 'format' = PNG.
	 */
	PNG8: boolean;
	/** The amount of lossiness allowed. */
	lossy: number;
	/** The color reduction algorithm. */
	colorReduction: ColorReductionType;
	/** The number of colors in the palette. */
	colors: number;
	/** The type of dither. */
	dither: DitherType;
	/** The amount of dither. Valid only when 'dither' = diffusion. */
	ditherAmount: number;
	/**
	 * If true, transparent areas of the image are included in the 
	 * saved image.
	 */
	transparency: boolean;
	/** The transparency dither algorithm. */
	transparencyDither: DitherType;
	/**
	 * The amount of transparency dither. Valid only when 
	 * 'transparency' = true.
	 */
	transparencyAmount: number;
	/**
	 * If true, the image downloads in multiple passes, 
	 * progressive.
	 */
	interlaced: boolean;
	/** The colors to blend transparent pixels against. */
	matteColor: RGBColor;
	/**
	 * The tolerance amount within which to snap close colors to 
	 * web palette colors.
	 */
	webSnap: number;
	/** If true, creates smaller but less compatible files. */
	optimized: boolean;
	/**
	 * The quality of the produced image (as a percentage). Range: 
	 * 0 to 100.
	 */
	quality: number;
	/** If true, includes the document's embedded profile. */
	includeProfile: boolean;
	/**
	 * The amount of blur to apply to the image to reduce 
	 * artifacts.
	 */
	blur: number;
}

/**
 * Options for converting documents.
 * @class
 */
export declare class DocumentConversionOptions {
}

/**
 * Options for changing the document mode to Bitmap.
 * @class
 * @extends DocumentConversionOptions
 */
export declare class BitmapConversionOptions extends DocumentConversionOptions {
	/** The output resolution (in pixels per inch) */
	resolution: number;
	/** The conversion method. */
	method: BitmapConversionType;
	/**
	 * The name of the pattern to use. Valid only when 'method' = 
	 * custom.
	 */
	patternName: string;
	/**
	 * The number of printer dots per inch. Valid only when 
	 * 'method' = halftone screen. Range: 1.0 to 999.99.
	 */
	frequency: number;
	/**
	 * The angle (in degrees) at which to orient individual dots. 
	 * Valid only when 'method' = halftone screen. Range: -180 to 
	 * 180.
	 */
	angle: number;
	/** The dot shape. Valid only when 'method' = halftone screen. */
	shape: BitmapHalfToneType;
}

/**
 * Options for converting an RGB image to an indexed color 
 * model.
 * @class
 * @extends DocumentConversionOptions
 */
export declare class IndexedConversionOptions extends DocumentConversionOptions {
	/** The type of palette. */
	palette: PaletteType;
	/**
	 * The number of colors in the palette. Not valid for all 
	 * palette types.
	 */
	colors: number;
	/** The type of colors to force into the color palette. */
	forced: ForcedColors;
	/**
	 * If true, preserves transparent areas of the image during 
	 * conversion to GIF format.
	 */
	transparency: boolean;
	/** The type of dither. */
	dither: DitherType;
	/** The amount of dither. Valid only when 'dither' = diffusion. */
	ditherAmount: number;
	/**
	 * If true, protects colors in the image that contain entries 
	 * in the color table from being dithered. Valid only when 
	 * 'dither' = diffusion.
	 */
	preserveExactColors: boolean;
	/**
	 * The color to use to fill anti-aliased edges adjacent to 
	 * transparent areas of the image. When transparency = false, 
	 * the matte color is applied to transparent areas.
	 */
	matte: MatteType;
}

/**
 * A color value.
 * @class
 */
export declare class Color {
}

/**
 * A color definition used in the document.
 * @class
 */
export declare class SolidColor {
	/** The color model. */
	model: ColorModel;
	/** The RGB color model. */
	rgb: RGBColor;
	/** The grayscale color model. */
	gray: GrayColor;
	/** The CMYK color model. */
	cmyk: CMYKColor;
	/** The lab color model. */
	lab: LabColor;
	/** The HSB color model. */
	hsb: HSBColor;
	/** The nearest web color to the current color. */
	readonly nearestWebColor: RGBColor;
	/**
	 * Compares two colors.
	 * @param {SolidColor} color - Another color to compare with.
	 */
	isEqual(color: SolidColor): boolean;
}

/**
 * Options for defining a gray color.
 * @class
 * @extends Color
 */
export declare class GrayColor extends Color {
	/** The gray value. Range: 0.0 to 100.0. */
	gray: number;
}

/**
 * The definition of an RGB color mode.
 * @class
 * @extends Color
 */
export declare class RGBColor extends Color {
	/** The red color value. Range: 0.0 to 255.0. */
	red: number;
	/** The green color value. Range: 0.0 to 255.0. */
	green: number;
	/** The blue color value. Range: 0.0 to 255.0. */
	blue: number;
	/** The hex representation of this color. */
	hexValue: string;
}

/**
 * A CMYK color specification.
 * @class
 * @extends Color
 */
export declare class CMYKColor extends Color {
	/** The cyan color value. Range: 0.0 to 100.0. */
	cyan: number;
	/** The magenta color value. Range: 0.0 to 100.0. */
	magenta: number;
	/** The yellow color value. Range: 0.0 to 100.0. */
	yellow: number;
	/** The black color value. Range: 0.0 to 100.0. */
	black: number;
}

/**
 * A Lab color specification.
 * @class
 * @extends Color
 */
export declare class LabColor extends Color {
	/** The L-value. Range: 0.0 to 100.0. */
	L: number;
	/** The a-value. Range: -128.0 and 127.0. */
	A: number;
	/** The b-value. Range: -128.0 and 127.0. */
	B: number;
}

/**
 * An HSB color specification.
 * @class
 * @extends Color
 */
export declare class HSBColor extends Color {
	/** The hue value. Range: 0.0 to 360.0. */
	hue: number;
	/** The saturation value. Range: 0.0 to 100.0. */
	saturation: number;
	/** The brightness value. Range: 0.0 to 100.0. */
	brightness: number;
}

/**
 * Represents a missing color.
 * @class
 * @extends Color
 */
export declare class NoColor extends Color {
}

/**
 * Options for the PDF presentation command.
 * @class
 */
export declare class PresentationOptions {
	/**
	 * If true, the file type is presentation. If false, the file 
	 * type is Multi-Page document.
	 */
	presentation: boolean;
	/** If true, the presentation auto advances. */
	autoAdvance: boolean;
	/**
	 * The amount of time (in seconds) before auto advancing the 
	 * view. Valid only when 'auto advance' is true. Range: 1 to 
	 * 60.
	 */
	interval: number;
	/** If true, the presentation loops after the last page. */
	loop: boolean;
	/** The image transition type. */
	transition: TransitionType;
	/** The magnification type when viewing the image. */
	magnification: MagnificationType;
	/** If true, includes the file name for the image. */
	includeFilename: boolean;
	/** Options for creating the PDF file. */
	PDFFileOptions: PDFSaveOptions;
}

/**
 * Deprecated, the make photo gallery method has moved to 
 * Bridge.
 * @class
 */
export declare class GalleryOptions {
	/** The style to use for laying out the web page. */
	layoutStyle: string;
	/** The email address to show on the web page. */
	emailAddress: string;
	/**
	 * Short web page extension .htm or long web page extension 
	 * .html.
	 */
	useShortExtension: boolean;
	/** Web page should use UTF-8 encoding. */
	useUTF8Encoding: boolean;
	/** Include all files found in sub folders of the input folder. */
	includeSubFolders: boolean;
	/** Add width and height attributes for images. */
	addSizeAttributes: boolean;
	/** Save all of the metadata in the JPEG files. */
	preserveAllMetadata: boolean;
	/** Options related to banner settings. */
	bannerOptions: GalleryBannerOptions;
	/** Options related to images settings. */
	imagesOptions: GalleryImagesOptions;
	/** Options related to thumbnail settings. */
	thumbnailOptions: GalleryThumbnailOptions;
	/** Options related to custom color settings. */
	customColorOptions: GalleryCustomColorOptions;
	/** Options related to security settings. */
	securityOptions: GallerySecurityOptions;
}

/**
 * Deprecated, the make photo gallery method has moved to 
 * Bridge.
 * @class
 */
export declare class GalleryBannerOptions {
	/** Web photo gallery site name. */
	siteName: string;
	/** Web photo gallery photographer. */
	photographer: string;
	/** Web photo gallery contact info. */
	contactInfo: string;
	/** Web photo gallery date. */
	date: string;
	/** The font setting for the banner text. */
	font: GalleryFontType;
	/** The size of the font for the banner text. */
	fontSize: number;
}

/**
 * Deprecated, the make photo gallery method has moved to 
 * Bridge.
 * @class
 */
export declare class GalleryImagesOptions {
	/** Add numeric links. */
	numericLinks: boolean;
	/** Resize images data. */
	resizeImages: boolean;
	/** Resized image dimensions in pixels. */
	dimension: number;
	/** How should the image be constrained. */
	resizeConstraint: GalleryConstrainType;
	/** The quality setting for the JPEG image. */
	imageQuality: number;
	/** The amount of border pixels you want between your images. */
	border: number;
	/** Include the file name in the text for the gallery images. */
	includeFilename: boolean;
	/** Generate a caption for the images. */
	caption: boolean;
	/** Include the credits in the text for the gallery images. */
	includeCredits: boolean;
	/** Include the title in the text for the gallery images. */
	includeTitle: boolean;
	/** Include the copyright in the text for the gallery images. */
	includeCopyright: boolean;
	/** Font for the gallery images text. */
	font: GalleryFontType;
	/** Font size for the gallery images text. */
	fontSize: number;
}

/**
 * Deprecated, the make photo gallery method has moved to 
 * Bridge.
 * @class
 */
export declare class GalleryThumbnailOptions {
	/** Include file name for thumbnail. */
	includeFilename: boolean;
	/** With caption. */
	caption: boolean;
	/** Include credits for thumbnail. */
	includeCredits: boolean;
	/** Include title for thumbnail. */
	includeTitle: boolean;
	/** Include copyright for thumbnail. */
	includeCopyright: boolean;
	/** Web photo gallery font. */
	font: GalleryFontType;
	/** The size of the font for the thumbnail images text. */
	fontSize: number;
	/** The size of the thumbnail images. */
	size: GalleryThumbSizeType;
	/** Web photo gallery thumbnail dimension in pixels. */
	dimension: number;
	/** Web photo gallery thumbnail columns. */
	columnCount: number;
	/** Web photo gallery thumbnail rows. */
	rowCount: number;
	/**
	 * The amount of border pixels you want around your thumbnail 
	 * images.
	 */
	border: number;
}

/**
 * Deprecated, the make photo gallery method has moved to 
 * Bridge.
 * @class
 */
export declare class GalleryCustomColorOptions {
	/** Background color. */
	backgroundColor: RGBColor;
	/** Banner color. */
	bannerColor: RGBColor;
	/** Text color. */
	textColor: RGBColor;
	/** Active link color. */
	activeLinkColor: RGBColor;
	/** Link color. */
	linkColor: RGBColor;
	/** Visited link color. */
	visitedLinkColor: RGBColor;
}

/**
 * Deprecated, the make photo gallery method has moved to 
 * Bridge.
 * @class
 */
export declare class GallerySecurityOptions {
	/** Web photo gallery security content. */
	content: GallerySecurityType;
	/** Web photo gallery security custom text. */
	text: string;
	/** Web photo gallery security font. */
	font: GalleryFontType;
	/** Web photo gallery security font size. */
	fontSize: number;
	/** Web page security text color. */
	textColor: RGBColor;
	/** Web page security opacity as a percent. */
	opacity: number;
	/** Web photo gallery security text position. */
	textPosition: GallerySecurityTextPositionType;
	/** Web photo gallery security text rotate. */
	textRotate: GallerySecurityTextRotateType;
}

/**
 * Options that can be specified for a contact sheet.
 * @class
 */
export declare class ContactSheetOptions {
	/**
	 * The width (in pixels) of the resulting document. Range: 100 
	 * to 2900.
	 */
	width: number;
	/**
	 * The height (in pixels) of the resulting document. Range: 100 
	 * to 2900.
	 */
	height: number;
	/**
	 * The resolution of the document (in pixels per inch). Range: 
	 * 35 to 1200.
	 */
	resolution: number;
	/** The document color mode. */
	mode: NewDocumentMode;
	/** If true, flattens all layers in the final document. */
	flatten: boolean;
	/** If true, places the images horizontally first. */
	acrossFirst: boolean;
	/** If true, auto spaces the images in the contact sheet. */
	useAutoSpacing: boolean;
	/** The number of contact sheet columns. */
	columnCount: number;
	/** The number of contact sheet rows. */
	rowCount: number;
	/**
	 * The vertical spacing (in pixels) between images. Range: 0 to 
	 * 29000.
	 */
	vertical: number;
	/**
	 * The horizontal spacing (in pixels) between images. Range: 0 
	 * to 29000.
	 */
	horizontal: number;
	/** If true, rotates images for best fit. */
	bestFit: boolean;
	/** If true, uses the filename as a caption for the image. */
	caption: boolean;
	/** The font used for the caption. */
	font: GalleryFontType;
	/** The caption font size. */
	fontSize: number;
}

/**
 * Options that can be specified for a Picture Package.
 * @class
 */
export declare class PicturePackageOptions {
	/** The layout to use to generate the picture package. */
	layout: string;
	/** The resolution of the document (in pixels per inch) */
	resolution: number;
	/** The document color mode. */
	mode: NewDocumentMode;
	/** If true, flattens all layers in the final document. */
	flatten: boolean;
	/** The content information. */
	content: PicturePackageTextType;
	/** The picture package custom text. */
	text: string;
	/** The font used for security text. */
	font: GalleryFontType;
	/** The font size. */
	fontSize: number;
	/**
	 * The web page security text opacity (as a percentage) Range: 
	 * 0 to 100.
	 */
	opacity: number;
	/** The color of the security text. */
	textColor: RGBColor;
	/** The position of the security text. */
	textPosition: GallerySecurityTextPositionType;
	/** The orientation of the security text. */
	textRotate: GallerySecurityTextRotateType;
}

/**
 * Options to specify when running a Batch command.
 * @class
 */
export declare class BatchOptions {
	/** If true, overrides action open commands. */
	overrideOpen: boolean;
	/** If true, suppresses file open options dialogs. */
	suppressOpen: boolean;
	/** If true, suppresses color profile warnings. */
	suppressProfile: boolean;
	/** The type of destination for the processed files. */
	destination: BatchDestinationType;
	/**
	 * The folder location for the processed files. Valid only when 
	 * 'destination' = folder.
	 */
	destinationFolder: File;
	/**
	 * If true, overrides save as action steps with the specified 
	 * destination.
	 */
	overrideSave: boolean;
	/** A list of file naming options. Maximum: 6. */
	fileNaming: FileNamingType;
	/** The starting serial number to use in naming files. */
	startingSerial: number;
	/** If true, the final file names are Windows compatible. */
	windowsCompatible: boolean;
	/** If true, the final file names are Macintosh compatible. */
	macintoshCompatible: boolean;
	/** If true, the final file names are Unix compatible. */
	unixCompatible: boolean;
	/**
	 * The file in which to log errors encountered. To display 
	 * errors on the screen and stop batch processing when errors 
	 * occur, leave blank.
	 */
	errorFile: File;
}

/**
 * An array of path point info objects that describes a 
 * straight or curved segment of a path.
 * @class
 */
export declare class SubPathInfo {
	/** The sub path operation on other sub paths. */
	operation: ShapeOperation;
	/** If true, the path is closed. */
	closed: boolean;
	/** All of the sub path item's path points. */
	entireSubPath: PathPointInfo;
}

/**
 * A point on a path, expressed as an array of three coordinate 
 * arrays: the anchor point, left direction point, and right 
 * direction point. For paths that are straight segments (not 
 * curved), the coordinates of all three points are the same. 
 * For curved segements, the coordinates are different. The 
 * difference between the anchor point and the left or right 
 * direction points determines the arc of the curve. You use 
 * the left direction point to bend the curve "outward" or make 
 * it convex; you use the right direction point to bend the 
 * curve "inward" or make it concave.
 * @class
 */
export declare class PathPointInfo {
	/**
	 * The x and y coordinates of one end point of the path 
	 * segment.
	 */
	anchor: Point;
	/** The location of the left direction point ("in" position). */
	leftDirection: Point;
	/** The location of the right direction point ("out" position). */
	rightDirection: Point;
	/** The point type. */
	kind: PointKind;
}

/**
 * A record of key-value pairs for actions, such as those 
 * included on the Adobe Photoshop Actions menu. The 
 * ActionDescriptor class is part of the Action Manager 
 * functionality. For more details on the Action Manager, see 
 * the Photoshop Scripting Guide.
 * @class
 */
export declare class ActionDescriptor {
	/** The number of keys contained in the descriptor. */
	readonly count: number;
}

/**
 * The list of commands that comprise an Action (such as an 
 * Action created using the Actions palette in the Adobe 
 * Photoshop application). The action list object is part of 
 * the Action Manager functionality. For details on using the 
 * Action Manager, see the Photoshop Scripting Guide.
 * @class
 */
export declare class ActionList {
	/** The number of commands that comprise the action. */
	readonly count: number;
}

/**
 * Contains data describing a referenced Action. The action 
 * reference object is part of the Action Manager 
 * functionality. For details on using the Action Manager, see 
 * the Photoshop Scripting Guide.
 * @class
 */
export declare class ActionReference {
}

/**
 * This is the root of the object model, and provides access to 
 * all other objects. To access the properties and methods, you 
 * can use the pre-defined global variable app. For example:  
 * var currentDoc = app.activeDocument;
 * @summary The Adobe Photoshop application object, which 
 * contains all other Adobe Photoshop objects.
 * @class
 */
export declare class Application {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The name of the selected color setting's set. */
	colorSettings: any;
	/** The frontmost document. */
	activeDocument: Document;
	/** The application name. */
	readonly name: string;
	/**
	 * The full path of the location of the Adobe Photoshop 
	 * application.
	 */
	readonly path: File;
	/**
	 * The application preference settings (equivalent to selecting 
	 * Edit > Preferences in the Adobe Photoshop application in 
	 * Windows or Photoshop > Preferences in Mac OS).
	 */
	readonly preferences: Preferences;
	/** The version of the Scripting interface. */
	readonly scriptingVersion: string;
	/** The amount of unused memory available to Photoshop. */
	readonly freeMemory: number;
	/**
	 * The version of Adobe Photoshop application that you are 
	 * running.
	 */
	readonly version: string;
	/**
	 * The dialog mode for the document, which indicates whether or 
	 * not Photoshop displays dialogs when the script runs.
	 */
	displayDialogs: DialogModes;
	/**
	 * The default foreground color (used to paint, fill, and 
	 * stroke selections).
	 */
	foregroundColor: SolidColor;
	/**
	 * The default background color (used to paint, fill, and 
	 * stroke selections).
	 */
	backgroundColor: SolidColor;
	/**
	 * The playback options, which indicate the speed at which 
	 * Photoshop plays actions.
	 */
	playbackParameters: ActionDescriptor;
	/**
	 * The dialog mode for playback mode, which indicates whether 
	 * or not Photoshop displays dialogs in playback mode.
	 */
	playbackDisplayDialogs: DialogModes;
	/** If true, notifiers are enabled. */
	notifiersEnabled: boolean;
	/** A list of the image file extensions Photoshop can open. */
	readonly windowsFileTypes: string;
	/** A list of the image file types Photoshop can open. */
	readonly macintoshFileTypes: string;
	/** The full path to the preferences folder. */
	readonly preferencesFolder: File;
	/** The language locale of the application. */
	readonly locale: string;
	/** The collection of open documents. */
	readonly documents: Documents;
	/** The fonts installed on this system. */
	readonly fonts: TextFonts;
	/**
	 * The notifiers currently configured (in the Scripts Events 
	 * Manager menu in the application).
	 */
	readonly notifiers: Notifiers;
	/** The build date of the scripting interface. */
	readonly scriptingBuildDate: string;
	/** Files in the Recent Files list. */
	readonly recentFiles: FileArray;
	/** The build number of Adobe Photoshop application. */
	readonly build: string;
	/** System information of the host application and machine. */
	readonly systemInformation: string;
	/** The log of measurements taken. */
	readonly measurementLog: MeasurementLog;
	/** Name of the current tool. */
	currentTool: string;
	/**
	 * Check if the specified tool supports brushes.
	 * @param {string} tool - The name of the tool to check.
	 */
	toolSupportsBrushes(tool: string): boolean;
	/**
	 * PRIVATE - save the current tool brush to a file.
	 * @param {File} file - File to save the brush to.
	 */
	saveToolBrushToFile(file: File): void;
	/**
	 * PRIVATE - set the current tool brush from a file.
	 * @param {File} file - Brush file to apply.
	 */
	applyToolBrushFromFile(file: File): void;
	/**
	 * PRIVATE - write out a thumbnail file from a style file.
	 * @param {File} file - Style file to read.
	 * @param {File} dest - Thumb file to write.
	 * @param {number} thumbnailSize - Size of thumbnail to save.
	 * @param {number} backgroundValue - Background grayvalue.
	 */
	thumbnailStyleFile(file: File, dest: File, thumbnailSize?: number, backgroundValue?: number): void;
	/**
	 * PRIVATE - write out a thumbnail file from text parameters.
	 * @param {File} dest - Thumb file to write.
	 * @param {string} text - Text to render.
	 * @param {string} font - PostScript name of font.
	 * @param {number} size - Size of type.
	 * @param {SolidColor} color - Color of type.
	 */
	thumbnailText(dest: File, text?: string, font?: string, size?: number, color?: SolidColor): void;
	/**
	 * Performs a task with a progress bar. Other progress APIs 
	 * must be called periodically to update the progress bar and 
	 * allow cancelling.
	 * @param {string} progressString - String to show in the 
	 * progress window.
	 * @param {string} javaScriptString - JavaScriptString to 
	 * execute.
	 */
	doProgress(progressString: string, javaScriptString: string): void;
	/**
	 * Performs a task with a progress bar. Forces progress bar to 
	 * display, ignoring the normal heuristics that keep it from 
	 * showing unnecessarily (e.g. during very short tasks). Other 
	 * progress APIs must be called periodically to update the 
	 * progress bar and allow cancelling.
	 * @param {string} progressString - String to show in the 
	 * progress window.
	 * @param {string} javaScriptString - JavaScriptString to 
	 * execute.
	 */
	doForcedProgress(progressString: string, javaScriptString: string): void;
	/**
	 * Changes the text that appears in the progress window.
	 * @param {string} progressString - String to show in the 
	 * progress window.
	 */
	changeProgressText(progressString: string): void;
	/**
	 * Sections off a portion of the unused progress bar for 
	 * execution of a subtask. Returns false on cancel.
	 * @param {number} taskLength - Amount of the unused progress 
	 * bar to section off, between 0.0 and 1.0.
	 * @param {string} javaScriptString - JavaScriptString to 
	 * execute.
	 */
	doProgressTask(taskLength: number, javaScriptString: string): boolean;
	/**
	 * Sections off a portion of the unused progress bar for 
	 * execution of a subtask. Returns false on cancel. Use when 
	 * iterating a list of tasks with unequal run times.
	 * @param {number} segmentLength - The length of the current 
	 * task.
	 * @param {number} done - The total length of all completed 
	 * tasks.
	 * @param {number} total - The total length of all tasks.
	 * @param {string} javaScriptString - JavaScriptString to 
	 * execute.
	 */
	doProgressSegmentTask(segmentLength: number, done: number, total: number, javaScriptString: string): boolean;
	/**
	 * Sections off a portion of the unused progress bar for 
	 * execution of a subtask. Returns false on cancel. Use when 
	 * iterating a simple list of tasks with equal run times.
	 * @param {number} index - The 0-based index of the current 
	 * task.
	 * @param {number} limit - The total number of tasks.
	 * @param {string} javaScriptString - JavaScriptString to 
	 * execute.
	 */
	doProgressSubTask(index: number, limit: number, javaScriptString: string): boolean;
	/**
	 * Updates the progress bar started by doProgress. Use for 
	 * manual non-task based progress updating. Returns false on 
	 * cancel.
	 * @param {number} done - The number of tasks completed.
	 * @param {number} total - The total number of tasks.
	 */
	updateProgress(done: number, total: number): boolean;
	/** Toggle palette visibility. */
	togglePalettes(): void;
	/**
	 * Plays the specified action from the Actions palette.
	 * @param {string} action - The name of the action to play. 
	 * (Note that the action name is case-sensitive and must match 
	 * the name as it appears in the Actions palette.)
	 * @param {string} _from - The name of the action set 
	 * containing the action being played. (Note that the Action 
	 * Set name is case-sensitive and must match the name as it 
	 * appears in the Actions palette.)
	 */
	doAction(action: string, _from: string): void;
	/**
	 * Loads a support document.
	 * @param {File} document - The document to load.
	 */
	load(document: File): void;
	/**
	 * Opens the specified document file(s).
	 * @param {File} document - The document(s) to opend.
	 * @param {any} _as - The document type (The default is to let 
	 * Photoshop deduce the format).
	 * @param {boolean} asSmartObject - Creates a smart object 
	 * around the document.
	 */
	open(document: File, _as?: any, asSmartObject?: boolean): Document;
	/**
	 * Purges one or more caches.
	 * @param {PurgeTarget} target - The caches to purge.
	 */
	purge(target: PurgeTarget): void;
	/**
	 * DEPRECATED. Creates a web photo gallery.
	 * @param {any} inputFolder - Folder to process or an array of 
	 * files to process.
	 * @param {File} outputFolder - Location for output files.
	 * @param {GalleryOptions} options - Options for the web photo 
	 * gallery.
	 */
	makePhotoGallery(inputFolder: any, outputFolder: File, options?: GalleryOptions): string;
	/**
	 * Creates a PDF presentation file.
	 * @param {AliasArray} inputFiles - The input files to include 
	 * in the presentation.
	 * @param {File} outputFile - The location of the output file.
	 * @param {PresentationOptions} options - Options for the PDF 
	 * presentation.
	 */
	makePDFPresentation(inputFiles: AliasArray, outputFile: File, options?: PresentationOptions): string;
	/**
	 * DEPRECATED. Merges multiple files into one, user interaction 
	 * required.
	 * @param {AliasArray} inputFiles - List of input files to 
	 * include.
	 */
	makePhotomerge(inputFiles: AliasArray): string;
	/**
	 * Creates a contact sheet from multiple files.
	 * @param {AliasArray} inputFiles - The files to include.
	 * @param {ContactSheetOptions} options - Options for creating 
	 * the contact sheet.
	 */
	makeContactSheet(inputFiles: AliasArray, options?: ContactSheetOptions): string;
	/**
	 * Creates a picture package from multiple files.
	 * @param {AliasArray} inputFiles - The files to include.
	 * @param {PicturePackageOptions} options - Options for 
	 * creating a Picture Package.
	 */
	makePicturePackage(inputFiles: AliasArray, options?: PicturePackageOptions): string;
	/**
	 * Runs the batch automation routine; analogous to using the 
	 * Batch command in Photoshop.
	 * @param {AliasArray} inputFiles - The files to operate on.
	 * @param {string} action - The name of the action to play 
	 * (note that the Action name is case-sensitive and must match 
	 * the name in the Actions palette).
	 * @param {string} _from - The name of the action set 
	 * containing the action being played (note that the Action Set 
	 * name is case-sensitive and must match the name in the 
	 * Actions palette).
	 * @param {BatchOptions} options - Options for batch 
	 * automation.
	 */
	batch(inputFiles: AliasArray, action: string, _from: string, options?: BatchOptions): string;
	/** Makes Photoshop the active application. */
	bringToFront(): void;
	/** Pauses the script until the application refreshes. */
	refresh(): void;
	/** Force the font list to get refreshed. */
	refreshFonts(): void;
	/**
	 * Save user objects in the Photoshop registry.
	 * @param {string} key - The unique string ID for the user 
	 * object.
	 * @param {ActionDescriptor} customObject - The user-defined 
	 * custom object to save in the registry.
	 * @param {boolean} persistent - If true, the object persists 
	 * after the script has finished.
	 */
	putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void;
	/**
	 * Retrieves user objects from the Photoshop registry for the 
	 * ID with value key.
	 * @param {string} key - The unique string ID for the user 
	 * object.
	 */
	getCustomOptions(key: string): ActionDescriptor;
	/**
	 * Removes the specified user objects from the Photoshop 
	 * registry.
	 * @param {string} key - The unique string ID for user 
	 * object(s) to remove.
	 */
	eraseCustomOptions(key: string): void;
	/**
	 * If true, the specified feature is enabled.
	 * @param {string} name - The name of the feature.
	 */
	featureEnabled(name: string): boolean;
	/** Uses the Photoshop open dialog to select files. */
	openDialog(): FileArray;
	/**
	 * Run a menu item.
	 * @param {number} menuID - Id of menu to run.
	 */
	runMenuItem(menuID: number): void;
	/**
	 * Perform a system call.
	 * @param {string} callString - System call string.
	 */
	system(callString: string): number;
	/**
	 * Plays an ActionManager event.
	 * @param {number} eventID - The event to play.
	 * @param {ActionDescriptor} descriptor - The action descriptor 
	 * to play.
	 * @param {DialogModes} displayDialogs - The display 
	 * permissions for dialogs and alert messages.
	 */
	executeAction(eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes): ActionDescriptor;
	/**
	 * Obtains an action descriptor.
	 * @param {ActionReference} reference - The reference 
	 * specification of the property.
	 */
	executeActionGet(reference: ActionReference): ActionDescriptor;
	/**
	 * Converts from a string ID to a runtime ID.
	 * @param {string} stringID - The ID to convert.
	 */
	stringIDToTypeID(stringID: string): number;
	/**
	 * Converts from a runtime ID to a string ID.
	 * @param {number} typeID - The ID to convert.
	 */
	typeIDToStringID(typeID: number): string;
	/**
	 * Converts from a four character code to a runtime ID.
	 * @param {string} charID - The ID to convert.
	 */
	charIDToTypeID(charID: string): number;
	/**
	 * Converts from a runtime ID to a character ID.
	 * @param {number} typeID - The ID to convert.
	 */
	typeIDToCharID(typeID: number): string;
	/** Alerts the user. */
	beep(): void;
	/** Returns true if Quicktime is installed. */
	isQuicktimeAvailable(): boolean;
	/**
	 * Display color picker dialog. Returns false if dialog is 
	 * cancelled, true otherwise.
	 * @param {boolean} pickForeground - If true the foreground 
	 * color is chosen, if false the background color is chosen.
	 */
	showColorPicker(pickForeground?: boolean): boolean;
}

/**
 * Valid only when 'mode' = RGB, CMYK, or indexed.
 * @summary The active containment object for the layers and 
 * all other objects in the script; the basic canvas for the 
 * file.
 * @class
 */
export declare class Document {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The background layer for the document. */
	readonly backgroundLayer: ArtLayer;
	/** The number of bits per channel. */
	bitsPerChannel: BitsPerChannelType;
	/**
	 * The type of color model that defines the working space of 
	 * the document.
	 */
	colorProfileType: ColorProfileType;
	/**
	 * The name of the color profile. Valid only when no value is 
	 * specified for color profile kind (to indicate a custom color 
	 * profile).
	 */
	colorProfileName: string;
	/** The color profile. */
	readonly mode: DocumentMode;
	/** The color component channels for this document. */
	readonly componentChannels: Channel;
	/** The current history state for this document. */
	activeHistoryState: HistoryState;
	/** The history state to use with the history brush. */
	activeHistoryBrushSource: HistoryState;
	/** The selected layer. */
	activeLayer: Layer;
	/** The selected channels. */
	activeChannels: Channel;
	/** Metadata about the document. */
	readonly info: DocumentInfo;
	/** Document print settings. */
	readonly printSettings: DocumentPrintSettings;
	/** The full path name of the document. */
	readonly fullName: File;
	/** The height of the document. */
	readonly height: UnitValue;
	/** If true, the document is a workgroup document. */
	readonly managed: boolean;
	/** If true, the document been saved since the last change. */
	readonly saved: boolean;
	/** The document name. */
	readonly name: string;
	/** The path to the document. */
	readonly path: File;
	/** If true, the document is in Quick Mask mode. */
	quickMaskMode: boolean;
	/** The resolution of the document (in pixels per inch) */
	readonly resolution: number;
	/** The selected area of the document. */
	readonly selection: Selection;
	/** The width of the document. */
	readonly width: UnitValue;
	/**
	 * Valid only when 'mode' = RGB, CMYK, or indexed.
	 * @summary A histogram showing the number of pixels at each 
	 * color intensity level for the composite channel.
	 */
	readonly histogram: number;
	/**
	 * The (custom) pixel aspect ratio of the document. Range: 
	 * 0.100 to 10.000.
	 */
	pixelAspectRatio: number;
	/**
	 * The XMP properties of the document. The Camera RAW settings 
	 * are stored here.
	 */
	readonly xmpMetadata: XMPMetadata;
	/** The measurement scale of the document. */
	readonly measurementScale: MeasurementScale;
	/** The unique ID of this document. */
	readonly id: number;
	/** The layers collection in the document. */
	readonly layers: Layers;
	/** The layer sets collection in the document. */
	readonly layerSets: LayerSets;
	/** The art layers collection in the document. */
	readonly artLayers: ArtLayers;
	/** The channels collection in this document. */
	readonly channels: Channels;
	/** The guides in this document. */
	readonly guides: Guides;
	/** The history states collection in this document. */
	readonly historyStates: HistoryStates;
	/** The layer comps collection in this document. */
	readonly layerComps: LayerComps;
	/** The path items collection in this document. */
	readonly pathItems: PathItems;
	/** The current count items in the document. */
	readonly countItems: CountItems;
	/** The current color samplers associated with the document. */
	readonly colorSamplers: ColorSamplers;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Document;
	/**
	 * Closes the document.
	 * @param {SaveOptionsType} saving - Specifies whether changes 
	 * should be saved before closing.
	 */
	close(saving?: SaveOptionsType): void;
	/**
	 * Converts the document from using one color profile to using 
	 * another.
	 * @param {string} destinationProfile - The color profile to 
	 * convert to. Either a string specifying a color profile, one 
	 * of the working color spaces, or Lab color.
	 * @param {Intent} intent - The conversion intent.
	 * @param {boolean} blackPointCompensation - If true, black 
	 * point compensation is used.
	 * @param {boolean} dither - If true, dither is used.
	 */
	convertProfile(destinationProfile: string, intent: Intent, blackPointCompensation?: boolean, dither?: boolean): void;
	/**
	 * Changes the mode of the document.
	 * @param {ChangeMode} destinationMode - The mode to change to.
	 * @param {DocumentConversionOptions} options - Options for 
	 * changing the mode.
	 */
	changeMode(destinationMode: ChangeMode, options?: DocumentConversionOptions): void;
	/**
	 * Crops the document.
	 * @param {UnitRect} bounds - The area to crop.
	 * @param {number} angle - The angle of cropping bounds.
	 * @param {UnitValue} width - The width of the resulting 
	 * document.
	 * @param {UnitValue} height - The height of the resulting 
	 * document.
	 */
	crop(bounds: UnitRect, angle?: number, width?: UnitValue, height?: UnitValue): void;
	/**
	 * Exports the document.
	 * @param {File} exportIn - The file to export to.
	 * @param {ExportType} exportAs - The type of export.
	 * @param {ExportOptions} options - Options for the specified 
	 * export type.
	 */
	exportDocument(exportIn: File, exportAs?: ExportType, options?: ExportOptions): void;
	/**
	 * Flips the canvas horizontally or vertically.
	 * @param {Direction} direction - The direction in which to 
	 * flip the canvas.
	 */
	flipCanvas(direction: Direction): void;
	/**
	 * Imports annotations into the document.
	 * @param {File} file - The document to import annotations 
	 * from.
	 */
	importAnnotations(file: File): void;
	/** Flattens all layers. */
	flatten(): void;
	/** Flattens all visible layers in the document. */
	mergeVisibleLayers(): void;
	/**
	 * Pastes contents of the clipboard into the document.
	 * @param {boolean} intoSelection - If true, contents are 
	 * pasted into the current selection.
	 */
	paste(intoSelection?: boolean): ArtLayer;
	/**
	 * Prints the document.
	 * @param {SourceSpaceType} sourceSpace - The color space for 
	 * the source.
	 * @param {string} printSpace - The color space for the 
	 * printer. Can be "nothing" (meaning same as source); one of 
	 * the working spaces or Lab color; or a string specifying a 
	 * color space. Default: nothing.
	 * @param {Intent} intent - The color conversion intent.
	 * @param {boolean} blackPointCompensation - If true, black 
	 * point compensation is used.
	 */
	print(sourceSpace?: SourceSpaceType, printSpace?: string, intent?: Intent, blackPointCompensation?: boolean): void;
	/** Print one copy of the document. */
	printOneCopy(): void;
	/** Expands the document to show clipped sections. */
	revealAll(): void;
	/** Rasterizes all layers. */
	rasterizeAllLayers(): void;
	/**
	 * Records the measurements of document.
	 * @param {MeasurementSource} source - The source of the 
	 * measurements to record.
	 * @param {string} dataPoints - An array of identifiers of data 
	 * points to record. Any data points not appropriate for the 
	 * specified source are ignored.
	 */
	recordMeasurements(source?: MeasurementSource, dataPoints?: string): void;
	/**
	 * Rotates the canvas.
	 * @param {number} angle - The number of degrees to rotate. A 
	 * positive angle rotates the canvas clockwise; a negative 
	 * value rotates the canvas counter-clockwise.
	 */
	rotateCanvas(angle: number): void;
	/**
	 * Changes the size of the canvas.
	 * @param {UnitValue} width - The desired width of the canvas.
	 * @param {UnitValue} height - The desired height of the 
	 * canvas.
	 * @param {AnchorPosition} anchor - The anchor point to resize 
	 * around.
	 */
	resizeCanvas(width?: UnitValue, height?: UnitValue, anchor?: AnchorPosition): void;
	/**
	 * Changes the size of the image.
	 * @param {UnitValue} width - The desired width of the image.
	 * @param {UnitValue} height - The desired height of the image.
	 * @param {number} resolution - The resolution (in pixels per 
	 * inch)
	 * @param {ResampleMethod} resampleMethod - The downsample 
	 * method.
	 * @param {number} amount - Amount of noise value when using 
	 * preserve details (range: 0 - 100)
	 */
	resizeImage(width?: UnitValue, height?: UnitValue, resolution?: number, resampleMethod?: ResampleMethod, amount?: number): void;
	/** Splits the channels of the document. */
	splitChannels(): Document;
	/** Saves the document. */
	save(): void;
	/**
	 * Saves the document with the specified save options.
	 * @param {File} saveIn - The file to save to, specified as a 
	 * string containing the full file path or an alias. If not 
	 * specified, the document is saved to its existing file.
	 * @param {any} options - Options for the specified file type.
	 * @param {boolean} asCopy - Saves the document as a copy, 
	 * leaving the original open.
	 * @param {MacExtensionType} extensionType - Appends the 
	 * specified extension to the file name.
	 */
	saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: MacExtensionType): void;
	/**
	 * Provides a single history state for the entire script. 
	 * Allows a single undo for all actions taken in the script.
	 * @param {string} historyString - The string to use for the 
	 * history state.
	 * @param {string} javaScriptString - A string of JavaScript 
	 * code to execute during the suspension of history.
	 */
	suspendHistory(historyString: string, javaScriptString: string): void;
	/**
	 * Applies trapping to a CMYK document. Valid only when 'mode' 
	 * = CMYK.
	 * @param {number} width - The trap width in pixels.
	 */
	trap(width: number): void;
	/**
	 * Trims the transparent area around the image on the specified 
	 * sides of the canvas.
	 * @param {TrimType} _type - The color or type of pixels to 
	 * base the trim on.
	 * @param {boolean} top - If true, trims away the top of the 
	 * document.
	 * @param {boolean} left - If true, trims away the left of the 
	 * document.
	 * @param {boolean} bottom - If true, trims away the bottom of 
	 * the document.
	 * @param {boolean} right - If true, trims away the right of 
	 * the document.
	 */
	trim(_type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void;
	/**
	 * Counts the objects in the document.
	 * @param {Channel} channel - The channel to use for counting.
	 * @param {number} threshold - Threshold to use for counting. 
	 * Range: 0 to 255.
	 */
	autoCount(channel: Channel, threshold: number): void;
}

/**
 * Metadata about a document object. These values can be set by 
 * selecting File > File Info in the Adobe Photoshop 
 * application.
 * @class
 */
export declare class DocumentInfo {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The document title. */
	title: string;
	/** The author. */
	author: string;
	/** The author's position. */
	authorPosition: string;
	/** The caption. */
	caption: string;
	/** The caption author. */
	captionWriter: string;
	/** The job name. */
	jobName: string;
	/** The copyright status. */
	copyrighted: CopyrightedType;
	/** The copyright notice. */
	copyrightNotice: string;
	/** The url of the copyright info. */
	ownerUrl: string;
	/** A list of keywords. */
	keywords: string;
	/** The document category. */
	category: string;
	/** Other categories. */
	supplementalCategories: string;
	/** The creation date. */
	creationDate: string;
	/** The city. */
	city: string;
	/** The state or province. */
	provinceState: string;
	/** The country. */
	country: string;
	/** The author credit. */
	credit: string;
	/** The source. */
	source: string;
	/** The headline. */
	headline: string;
	/** Instructions for using or processing the image. */
	instructions: string;
	/** The transmission reference. */
	transmissionReference: string;
	/** The document urgency. */
	urgency: Urgency;
	/**
	 * For JPEG images, information stored with digital photographs 
	 * including camera type, date and time of photo, and file 
	 * size.
	 */
	readonly exif: any;
}

/**
 * Options to define for the preferences property of the 
 * application object, basically equivalent to selecting Edit > 
 * Preferences (Windows) or Photoshop > Preferences in the 
 * Adobe Photoshop application.
 * @class
 */
export declare class Preferences {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The color picker to use. */
	colorPicker: ColorPicker;
	/**
	 * The method to use to assign color values to any new pixels 
	 * created when an image is resampled or resized.
	 */
	interpolation: ResampleMethod;
	/**
	 * If true, retains Adobe Photoshop contents on the clipboard 
	 * after you exit the application.
	 */
	exportClipboard: boolean;
	/** If true, pop-up definitions are displayed on mouseover. */
	showToolTips: boolean;
	/**
	 * If true, automatically resizes the window when zooming in or 
	 * out using keyboard shortcuts.
	 */
	keyboardZoomResizesWindows: boolean;
	/** If true, automatically updates open documents. */
	autoUpdateOpenDocuments: boolean;
	/**
	 * If true, Asian text options are displayed in the Paragraph 
	 * palette.
	 */
	showAsianTextOptions: boolean;
	/** If true, alerts the user when a process finishes. */
	beepWhenDone: boolean;
	/** If true, dynamic color sliders appear in the Color palette. */
	dynamicColorSliders: boolean;
	/** If true, makes new palette locations the default location. */
	savePaletteLocations: boolean;
	/** If true, Asian font names are listed in English. */
	showEnglishFontNames: boolean;
	/** If true, enables cycling through a set of hidden tools. */
	useShiftKeyForToolSwitch: boolean;
	/** Size of the small font used in panels and dialogs. */
	textFontSize: FontSize;
	/** The number of history states to preserve. Range: 1 to 100. */
	numberOfHistoryStates: number;
	/**
	 * If true, automatically makes the first snapshot when a new 
	 * document is created.
	 */
	createFirstSnapshot: boolean;
	/** If true, allows non-linear history. */
	nonLinearHistory: boolean;
	/** If true, curly quote marks are used. */
	smartQuotes: boolean;
	/** The behavior mode to use when saving files. */
	imagePreviews: SaveBehavior;
	/** If true, shows the image preview as a thumbnail. */
	iconPreview: boolean;
	/** If true, shows the image preview as a full size image. */
	fullSizePreview: boolean;
	/**
	 * If true, creates a thumbnail when saving the image in Mac 
	 * OS.
	 */
	macOSThumbnail: boolean;
	/**
	 * If true, creates a thumbnail when saving the image in 
	 * Windows. (Requires hardware support.)
	 */
	windowsThumbnail: boolean;
	/** Save files with extensions on Windows. */
	appendExtension: SaveBehavior;
	/** If true, the file extension is lowercase. */
	useLowerCaseExtension: boolean;
	/**
	 * If true, asks the user to verify layer preservation options 
	 * when saving a file in TIFF format.
	 */
	askBeforeSavingLayeredTIFF: boolean;
	/**
	 * The behavior to use to check whether to maximize 
	 * compatibility when opening Adobe Photoshop (PSD) files.
	 */
	maximizeCompatibility: QueryStateType;
	/**
	 * The number of items in the recent file list. Range: 0 to 30.
	 */
	recentFileListLength: number;
	/**
	 * If true, displays component channels in the Channels palette 
	 * in color.
	 */
	colorChannelsInColor: boolean;
	/** If true, uses diffusion dither. */
	useDiffusionDither: boolean;
	/**
	 * If true, halves the resolution or (doubles the size of 
	 * pixels) to make previews display more quickly.
	 */
	pixelDoubling: boolean;
	/** The type of pointer to use. */
	paintingCursors: PaintingCursors;
	/** The type of pointer to use. */
	otherCursors: OtherPaintingCursors;
	/** The size of grid squares. */
	gridSize: GridSize;
	/**
	 * If true, enables Adobe Photoshop to send transparency 
	 * information to your computer’s video board. (Requires 
	 * hardware support.)
	 */
	useVideoAlpha: boolean;
	/**
	 * The opacity (as a percentage) of the warning color for 
	 * out-of-gamut colors. Range: 0 to 100.
	 */
	gamutWarningOpacity: number;
	/**
	 * The unit that the scripting system uses when receiving and 
	 * returning values.
	 */
	rulerUnits: Units;
	/**
	 * The unit type-size that the numeric inputs are assumed to 
	 * represent.
	 */
	typeUnits: TypeUnits;
	/** The width of columns (in points) */
	columnWidth: number;
	/** The gutter of columns (in points) */
	columnGutter: number;
	/** The point/pica size. */
	pointSize: PointType;
	/** The formatting style for non-printing guide lines. */
	guideStyle: GuideLineStyle;
	/** The formatting style for non-printing grid lines. */
	gridStyle: GridLineStyle;
	/** The value by which to subdivide the grid. */
	gridSubDivisions: number;
	/**
	 * If true, displays slice numbers in the document window when 
	 * using the Slice tool.
	 */
	showSliceNumber: boolean;
	/**
	 * If true, uses an additional folder for compatible plug-ins 
	 * stored with a different application.
	 */
	useAdditionalPluginFolder: boolean;
	/**
	 * The path to the additional plug-in folder. Valid only when 
	 * 'use additional plugin folder' = true.
	 */
	additionalPluginFolder: File;
	/** The number of images to hold in the cache. Range: 1 to 8. */
	imageCacheLevels: number;
	/**
	 * If true, shows the current image cache used to create the 
	 * histogram.
	 */
	imageCacheForHistograms: boolean;
	/** Maximum percentage of available RAM used by Photoshop. */
	maxRAMuse: number;
	/** Turn on and off the history logging. */
	useHistoryLog: boolean;
	/** Options for saving the history items. */
	saveLogItems: SaveLogItemsType;
	/** Options for edit log items. */
	editLogItems: EditLogItemsType;
	/** File to save the history log. */
	saveLogItemsFile: File;
	/** Show font previews in the type tool font menus. */
	fontPreviewSize: FontPreviewType;
}

/**
 * Print settings for a document.
 * @class
 */
export declare class DocumentPrintSettings {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Description field from File Info. */
	caption: boolean;
	/** Prints the document title. */
	labels: boolean;
	/** Print corner crop marks. */
	cornerCropMarks: boolean;
	/** Print center crop marks. */
	centerCropMarks: boolean;
	/** Print color calibration bars. */
	colorBars: boolean;
	/** Print registration marks. */
	registrationMarks: boolean;
	/** Invert the image colors. */
	negative: boolean;
	/** Flip the image horizontally. */
	flip: boolean;
	interpolate: boolean;
	/** Include vector data. */
	vectorData: boolean;
	/** Background color of page. */
	backgroundColor: SolidColor;
	/**
	 * Color conversion intent when print space is different from 
	 * the source space.
	 */
	renderIntent: Intent;
	/** Print a hard proof. */
	hardProof: boolean;
	/**
	 * Color space for printer. Can be nothing (meaning same as 
	 * source) or a string specifying a specific color profile.
	 */
	printSpace: string;
	/** Map blacks. */
	mapBlack: boolean;
	/** Width of the print border. */
	printBorder: UnitValue;
	/** Bleed width. */
	bleedWidth: UnitValue;
	/** Color handling. */
	colorHandling: PrintColorHandling;
	/** Number of copies. */
	copies: number;
	/** Position of image when printing. */
	readonly docPosition: DocPositionStyle;
	/** Y position of image on page. */
	readonly posY: UnitValue;
	/** X position of image on page. */
	readonly posX: UnitValue;
	/** Name of printer. */
	printerName: string;
	/** Scale of image on page. */
	readonly scale: number;
	/** Currently selected printer. */
	activePrinter: string;
	/** List of available printers. */
	readonly printers: string;
	/**
	 * Set the position of the image on the page.
	 * @param {DocPositionStyle} docPosition - Position of the 
	 * image on page when printing. Can be centered, scale to fit, 
	 * or user defined.
	 * @param {UnitValue} posX - X position of image on page.
	 * @param {UnitValue} posY - Y position of image on page.
	 * @param {number} scale - Position of the image on page when 
	 * printing. Can be centered, scale to fit, or user defined.
	 */
	setPagePosition(docPosition: DocPositionStyle, posX?: UnitValue, posY?: UnitValue, scale?: number): void;
}

/**
 * The selected area of the document or layer.
 * @class
 */
export declare class Selection {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The bounding rectangle of the entire selection. */
	readonly bounds: UnitRect;
	/** If true, the bounding rectangle a solid rectangle. */
	readonly solid: boolean;
	/** Clears the selection and does not copy it to the clipboard. */
	clear(): void;
	/**
	 * Copies the selection to the clipboard.
	 * @param {boolean} merge - If true the copy includes all 
	 * visible layers. If false, copies only from the current 
	 * layer.
	 */
	copy(merge?: boolean): void;
	/** Cuts the current selection to the clipboard. */
	cut(): void;
	/**
	 * Selects the selection border only (in the specified width); 
	 * subsequent actions do not affect the selected area within 
	 * the borders.
	 * @param {UnitValue} width - The width of the border 
	 * selection.
	 */
	selectBorder(width: UnitValue): void;
	/**
	 * Contracts the selection.
	 * @param {UnitValue} by - The amount to contract the 
	 * selection.
	 */
	contract(by: UnitValue): void;
	/**
	 * Fills the selection.
	 * @param {any} fillType - The color or history state with 
	 * which to fill the object.
	 * @param {ColorBlendMode} mode - The color blend mode.
	 * @param {number} opacity - The opacity as a percentage. 
	 * Range: 1 to 100.
	 * @param {boolean} preserveTransparency - If true, perserves 
	 * transparencies.
	 */
	fill(fillType: any, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void;
	/**
	 * Strokes the selection.
	 * @param {any} strokeColor - The color to stroke the selection 
	 * with.
	 * @param {number} width - The stroke width.
	 * @param {StrokeLocation} location - The stroke location.
	 * @param {ColorBlendMode} mode - The color blend mode.
	 * @param {number} opacity - The opacity of the stroke color as 
	 * a percentage. Range: 1 to 100.
	 * @param {boolean} preserveTransparency - If true, preserves 
	 * transparency.
	 */
	stroke(strokeColor: any, width: number, location?: StrokeLocation, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void;
	/** Selects the entire layer. */
	selectAll(): void;
	/** Deselects the current selection. */
	deselect(): void;
	/**
	 * Selects the specified region.
	 * @param {any} region - Array of x and y coordinates that 
	 * describe the corners of the selection, in the format [[x1, 
	 * y1], [x2,y2],[x3, y3], [x4,y4]]
	 * @param {SelectionType} _type - The method for combining the 
	 * new selection with the existing selection.
	 * @param {number} feather - The feather amount.
	 * @param {boolean} antiAlias - If true, anti-aliasing is used.
	 */
	select(region: any, _type?: SelectionType, feather?: number, antiAlias?: boolean): void;
	/**
	 * Expands the selection.
	 * @param {UnitValue} by - The amount to expand the selection.
	 */
	expand(by: UnitValue): void;
	/**
	 * Feathers the edges of the selection.
	 * @param {UnitValue} by - The amount to feather the edge.
	 */
	feather(by: UnitValue): void;
	/**
	 * Grows the selection to include all adjacent pixels falling 
	 * within the specified tolerance range.
	 * @param {number} tolerance - The tolerance range. Range: 0 to 
	 * 255.
	 * @param {boolean} antiAlias - If true, anti-aliasing is used.
	 */
	grow(tolerance: number, antiAlias: boolean): void;
	/** Inverts the selection. */
	invert(): void;
	/**
	 * Grows the selection to include pixels throughout the image 
	 * falling within the tolerance range.
	 * @param {number} tolerance - The tolerance range. Range: 0 to 
	 * 255.
	 * @param {boolean} antiAlias - If true, anti-aliasing is used.
	 */
	similar(tolerance: number, antiAlias: boolean): void;
	/**
	 * Cleans up stray pixels left inside or outside a color-based 
	 * selection (within the radius specified in pixels).
	 * @param {number} radius - The sample radius in pixels. Range: 
	 * 0 to 100.
	 */
	smooth(radius: number): void;
	/**
	 * Saves the selection as a channel.
	 * @param {Channel} into - The channel to save the selection 
	 * to.
	 * @param {SelectionType} combination - How to add the 
	 * selection to the existing contents of the channel.
	 */
	store(into: Channel, combination?: SelectionType): void;
	/**
	 * Loads the selection from the specified channel.
	 * @param {Channel} _from - The channel to load the selection 
	 * from.
	 * @param {SelectionType} combination - How to combine the 
	 * channel contents with the existing selection.
	 * @param {boolean} inverting - If true, selects the inverse of 
	 * the channel contents.
	 */
	load(_from: Channel, combination?: SelectionType, inverting?: boolean): void;
	/**
	 * Moves the object relative to its current position.
	 * @param {UnitValue} deltaX - The amount to move the object 
	 * horizontally.
	 * @param {UnitValue} deltaY - The amount to move the object 
	 * vertically.
	 */
	translate(deltaX?: UnitValue, deltaY?: UnitValue): void;
	/**
	 * Moves the boundary of selection relative to its current 
	 * position.
	 * @param {UnitValue} deltaX - The amount to move the object 
	 * horizontally.
	 * @param {UnitValue} deltaY - The amount to move the object 
	 * vertically.
	 */
	translateBoundary(deltaX?: UnitValue, deltaY?: UnitValue): void;
	/**
	 * Rotates the object.
	 * @param {number} angle - The number of degrees to rotate the 
	 * object.
	 * @param {AnchorPosition} anchor - The point to rotate about.
	 */
	rotate(angle: number, anchor?: AnchorPosition): void;
	/**
	 * Rotates the boundary of the selection.
	 * @param {number} angle - The rotation angle (in degrees)
	 * @param {AnchorPosition} anchor - The point to rotate about.
	 */
	rotateBoundary(angle: number, anchor?: AnchorPosition): void;
	/**
	 * Resizes the selected area to the specified dimensions and 
	 * anchor position.
	 * @param {number} horizontal - The amount to scale the 
	 * selection horizontally (as a percentage).
	 * @param {number} vertical - The amount to scale the selection 
	 * vertically (as a percentage).
	 * @param {AnchorPosition} anchor - The point to scale around.
	 */
	resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void;
	/**
	 * Scales the boundary of the selection.
	 * @param {number} horizontal - The amount to scale the object 
	 * horizontally (as a percentage).
	 * @param {number} vertical - The amount to scale the object 
	 * vertically (as a percentage).
	 * @param {AnchorPosition} anchor - The point to scale around.
	 */
	resizeBoundary(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void;
	/**
	 * Makes this selection item the workpath for this document.
	 * @param {number} tolerance - The tolerance in pixels.
	 */
	makeWorkPath(tolerance?: number): void;
}

/**
 * A group of layer objects, which can include art layer 
 * objects and other (nested) layer set objects. A single 
 * command or set of commands manipulates all layers in a layer 
 * set object.
 * @class
 * @extends Layer
 */
export declare class LayerSet extends Layer {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/**
	 * The channels that are enabled for the layer set. Must be a 
	 * list of component channels.
	 */
	enabledChannels: Channel;
	/** The layers in this layer set. */
	readonly layers: Layers;
	/** The layer sets contained within the layer set. */
	readonly layerSets: LayerSets;
	/** The art layers contained in this layer set. */
	readonly artLayers: ArtLayers;
	/** Adds an element. */
	add(): LayerSet;
	/** Merges the layer set. */
	merge(): ArtLayer;
}

/**
 * An object within a document that contains the visual 
 * elements of the image (equivalent to a layer in the Adobe 
 * Photoshop application).
 * @class
 * @extends Layer
 */
export declare class ArtLayer extends Layer {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The interior opacity of the layer. Range: 0.0 to 100.0. */
	fillOpacity: number;
	/** The density of the layer mask (between 0.0 and 100.0) */
	layerMaskDensity: number;
	/** The feather of the layer mask (between 0.0 and 250.0) */
	layerMaskFeather: number;
	/** The density of the vector mask (between 0.0 and 100.0) */
	vectorMaskDensity: number;
	/** The feather of the vector mask (between 0.0 and 250.0) */
	vectorMaskFeather: number;
	/** The density of the filter mask (between 0.0 and 100.0) */
	filterMaskDensity: number;
	/** The feather of the filter mask (between 0.0 and 250.0) */
	filterMaskFeather: number;
	/** If true, the layer is grouped with the layer below. */
	grouped: boolean;
	/** If true, the layer is a background layer. */
	isBackgroundLayer: boolean;
	/** If true, the pixels in the layer's image cannot be edited. */
	pixelsLocked: boolean;
	/**
	 * If true, the pixels in the layer's image cannot be moved 
	 * within the layer.
	 */
	positionLocked: boolean;
	/**
	 * If true, editing is confined to the opaque portions of the 
	 * layer.
	 */
	transparentPixelsLocked: boolean;
	/**
	 * Sets the layer kind (such as 'text layer') for an empty 
	 * layer. Valid only when the layer is empty and when 'is 
	 * background layer ' is false. You can use the 'kind ' 
	 * property to make a background layer a normal layer; however, 
	 * to make a layer a background layer, you must set 'is 
	 * background layer' to true.
	 */
	kind: LayerKind;
	/**
	 * The text that is associated with the layer. Valid only when 
	 * 'kind' is text layer.
	 */
	readonly textItem: TextItem;
	/** Adds an element. */
	add(): ArtLayer;
	/**
	 * Applies the specified style to the layer.
	 * @param {string} styleName - The layer style to apply.
	 */
	applyStyle(styleName: string): void;
	/**
	 * Style file to apply.
	 * @param {File} file - Style file to apply.
	 */
	applyStyleFile(file: File): void;
	/**
	 * File to save the style to.
	 * @param {File} file - File to save the style to.
	 * @param {File} thumbnail - File to save the style thumbnail 
	 * to.
	 * @param {number} thumbnailSize - Size of thumbnail to save.
	 * @param {number} backgroundValue - Background grayvalue.
	 */
	saveStyleFile(file: File, thumbnail?: File, thumbnailSize?: number, backgroundValue?: number): void;
	/** Cuts the layer without moving it to the clipboard. */
	clear(): void;
	/**
	 * Copies the layer to the clipboard.
	 * @param {boolean} merge - If true, the copy includes all 
	 * visible layers. If false, the copy only copies from the 
	 * current layer.
	 */
	copy(merge?: boolean): void;
	/** Cuts the layer to the clipboard. */
	cut(): void;
	/**
	 * Merges the layer down, removing the layer from the document. 
	 * Returns a reference to the art layer that this layer is 
	 * merged into.
	 */
	merge(): ArtLayer;
	/**
	 * Converts the targeted content in the layer into a flat, 
	 * raster image.
	 * @param {RasterizeType} target - What to rasterize.
	 */
	rasterize(target: RasterizeType): void;
	/** Applies the average filter. */
	applyAverage(): void;
	/**
	 * Applies the gaussian blur filter.
	 * @param {number} radius - The blur width in pixels. Range: 
	 * 1.0 to 250.0.
	 */
	applyGaussianBlur(radius: number): void;
	/**
	 * Apply the lens blur filter.
	 * @param {DepthMapSource} source - The source for the depth 
	 * map.
	 * @param {number} focalDistance - The blur focal distance (in 
	 * pixels) for the depth map. RangeL 0 to 255. Valid only when 
	 * 'source' is transparency or layer mask.
	 * @param {boolean} invertDepthMap - If true, inverts the depth 
	 * map.
	 * @param {Geometry} shape - The shape of the iris.
	 * @param {number} radius - The radius of the iris. Range: 0 to 
	 * 100.
	 * @param {number} bladeCurvature - The blade curvature of the 
	 * iris. Range: 0 to 100.
	 * @param {number} rotation - The rotation of the iris (in 
	 * degrees). Range: 0 to 360.
	 * @param {number} brightness - The brightness for the specular 
	 * highlights. Range: 0 to 100.
	 * @param {number} threshold - The threshold for the specular 
	 * highlights. Range: 0 to 255.
	 * @param {number} amount - The amount of noise. Range: 0 to 
	 * 100.
	 * @param {NoiseDistribution} distribution - The distribution 
	 * value for the noise.
	 * @param {boolean} monochromatic - If true, the noise is 
	 * monochromatic.
	 */
	applyLensBlur(source?: DepthMapSource, focalDistance?: number, invertDepthMap?: boolean, shape?: Geometry, radius?: number, bladeCurvature?: number, rotation?: number, brightness?: number, threshold?: number, amount?: number, distribution?: NoiseDistribution, monochromatic?: boolean): void;
	/** Applies the blur filter. */
	applyBlur(): void;
	/** Applies the blur more filter. */
	applyBlurMore(): void;
	/**
	 * Applies the motion blur filter.
	 * @param {number} angle - The angle (in degrees). Range: -360 
	 * to 360.
	 * @param {number} radius - The radius (in pixels). Range: 1 to 
	 * 999.
	 */
	applyMotionBlur(angle: number, radius: number): void;
	/**
	 * Applies the radial blur filter.
	 * @param {number} amount - The amount of blur. Range: 1 to 
	 * 100.
	 * @param {RadialBlurMethod} blurMethod - The blur method to 
	 * use.
	 * @param {RadialBlurQuality} blurQuality - The smoothness or 
	 * graininess of the blurred image.
	 * @param {UnitPoint} blurCenter - Position (unit value)
	 */
	applyRadialBlur(amount: number, blurMethod: RadialBlurMethod, blurQuality: RadialBlurQuality, blurCenter?: UnitPoint): void;
	/**
	 * Applies the smart blur filter.
	 * @param {number} radius - The blur radius. Range: 0 - 1000.
	 * @param {number} threshold - The blur threshold. Range: 0 - 
	 * 1000.
	 * @param {SmartBlurQuality} blurQuality - The smoothness or 
	 * graininess of the blurred image.
	 * @param {SmartBlurMode} mode - The smart blur mode.
	 */
	applySmartBlur(radius: number, threshold: number, blurQuality: SmartBlurQuality, mode: SmartBlurMode): void;
	/**
	 * Applies the diffuse glow filter.
	 * @param {number} graininess - The amount of graininess. 
	 * Range: 0 to 10.
	 * @param {number} glowAmount - The glow amount. Range: 0 to 
	 * 20.
	 * @param {number} clearAmount - The clear amount. Range: 0 to 
	 * 20.
	 */
	applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void;
	/**
	 * Applies the displace filter.
	 * @param {number} horizontalScale - The amount of horizontal 
	 * distortion. Range: -999 to 999.
	 * @param {number} verticalScale - The amount of vertical 
	 * distortion. Range: -999 to 999.
	 * @param {DisplacementMapType} displacementType - The 
	 * displacement type.
	 * @param {UndefinedAreas} undefinedAreas - The treatment of 
	 * undistorted areas.
	 * @param {File} displacementMapFile - The distortion image 
	 * map.
	 */
	applyDisplace(horizontalScale: number, verticalScale: number, displacementType: DisplacementMapType, undefinedAreas: UndefinedAreas, displacementMapFile: File): void;
	/**
	 * Applies the glass filter.
	 * @param {number} distortion - The amount of distortion. 
	 * Range: 0 to 20.
	 * @param {number} smoothness - The smoothness. Range: 1 to 15.
	 * @param {number} scaling - The amount of scaling. Range: 50 
	 * to 200.
	 * @param {boolean} invert - If true, the texture is inverted.
	 * @param {TextureType} texture - The type of texture.
	 * @param {File} textureFile - The file from which to load the 
	 * texture type.
	 */
	applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert?: boolean, texture?: TextureType, textureFile?: File): void;
	/**
	 * Applies the ocean ripple filter.
	 * @param {number} size - The ripple size. Range: 1 to 15.
	 * @param {number} magnitude - The ripple magnitude. Range: 0 
	 * to 20.
	 */
	applyOceanRipple(size: number, magnitude: number): void;
	/**
	 * Applies the pinch filter.
	 * @param {number} amount - The pinch amount. Range: -100 to 
	 * 100.
	 */
	applyPinch(amount: number): void;
	/**
	 * Applies the polar coordinates filter.
	 * @param {PolarConversionType} conversion - The conversion 
	 * type.
	 */
	applyPolarCoordinates(conversion: PolarConversionType): void;
	/**
	 * Applies the ripple filter.
	 * @param {number} amount - The ripple amount. Range: -999 to 
	 * 999.
	 * @param {RippleSize} size - The ripple size.
	 */
	applyRipple(amount: number, size: RippleSize): void;
	/**
	 * Applies the shear filter.
	 * @param {any} curve - Specification of the shear curve in 
	 * points as x,y coordinate pairs in the format [[x1, y1],[x2, 
	 * y2]]. Any number of coordinate pairs can be specified.
	 * @param {UndefinedAreas} undefinedAreas - The treatment of 
	 * areas left blank by the distortion.
	 */
	applyShear(curve: any, undefinedAreas: UndefinedAreas): void;
	/**
	 * Applies the spherize filter.
	 * @param {number} amount - The amount of distortion. Range: 
	 * -100 to 100.
	 * @param {SpherizeMode} mode - The distortion mode.
	 */
	applySpherize(amount: number, mode: SpherizeMode): void;
	/**
	 * Applies the twirl filter.
	 * @param {number} angle - The twirl angle. Range: -999 to 999.
	 */
	applyTwirl(angle: number): void;
	/**
	 * Applies the wave filter.
	 * @param {number} generatorNumber - The number of generators. 
	 * Range: 1 to 999.
	 * @param {number} minimumWavelength - The minimum wave length. 
	 * Range: 1 to 998.
	 * @param {number} maximumWavelength - The maximum wave length. 
	 * Range: 2 to (minimum wavelength + 1)
	 * @param {number} minimumAmplitude - The minimum amplitude. 
	 * Range: 1 to 998.
	 * @param {number} maximumAmplitude - The maximum amplitude. 
	 * Range: 2 to (minimum amplitude + 1)
	 * @param {number} horizontalScale - The amount of horizontal 
	 * scale (as a percentage). Range: 1 to 100.
	 * @param {number} verticalScale - The amount of vertical scale 
	 * (as a percentage). Range: 1 to 100.
	 * @param {WaveType} waveType - The wave type.
	 * @param {UndefinedAreas} undefinedAreas - The treatment of 
	 * areas left blank by the distortion.
	 * @param {number} randomSeed - The random seed.
	 */
	applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: WaveType, undefinedAreas: UndefinedAreas, randomSeed: number): void;
	/**
	 * Applies the zigzag filter.
	 * @param {number} amount - The amount of zigzag. Range: -100 
	 * to 100.
	 * @param {number} ridges - The ridge length.
	 * @param {ZigZagType} style - The zigzag style.
	 */
	applyZigZag(amount: number, ridges: number, style: ZigZagType): void;
	/**
	 * Applies the add noise filter.
	 * @param {number} amount - The amount of noise (as a 
	 * percentage). Range: 0.1 to 400.0.
	 * @param {NoiseDistribution} distribution - The noise 
	 * distribution type.
	 * @param {boolean} monochromatic - If true, applies the filter 
	 * only to the tonal elements in the image without changing the 
	 * colors.
	 */
	applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void;
	/** Applies the despeckle filter. */
	applyDespeckle(): void;
	/**
	 * Applies the dust and scratches filter.
	 * @param {number} radius - The size (in pixels) of the area 
	 * searched for dissimilar pixels. Range: 1 to 16.
	 * @param {number} threshold - Determines how dissimilar the 
	 * pixels should be before they are eliminated. Range: 0 to 
	 * 255.
	 */
	applyDustAndScratches(radius: number, threshold: number): void;
	/**
	 * Applies the median noise filter.
	 * @param {number} radius - The size of the area searched for 
	 * pixels of similar brightness. Range: 0 to 100.
	 */
	applyMedianNoise(radius: number): void;
	/** Applies the clouds filter. */
	applyClouds(): void;
	/** Applies the difference clouds filter. */
	applyDifferenceClouds(): void;
	/**
	 * Applies the lens flare filter.
	 * @param {number} brightness - The flare brightness. Range: 10 
	 * to 300.
	 * @param {UnitPoint} flareCenter - The position of the flare 
	 * center.
	 * @param {LensType} lensType - The lens type.
	 */
	applyLensFlare(brightness: number, flareCenter: UnitPoint, lensType: LensType): void;
	/**
	 * Applies the texture fill filter.
	 * @param {File} textureFile - The texture file. Must be a 
	 * grayscale Photoshop file.
	 */
	applyTextureFill(textureFile: File): void;
	/** Applies the sharpen filter. */
	applySharpen(): void;
	/** Applies the sharpen edges filter. */
	applySharpenEdges(): void;
	/** Applies the sharpen more filter. */
	applySharpenMore(): void;
	/**
	 * Applies the unsharp mask filter.
	 * @param {number} amount - The amount of sharpening (as a 
	 * percentage). Range: 1 to 500.
	 * @param {number} radius - The radius in pixels. Range: 0.1 to 
	 * 250.0.
	 * @param {number} threshold - The contrast threshold. Range: 0 
	 * to 255.
	 */
	applyUnSharpMask(amount: number, radius: number, threshold: number): void;
	/**
	 * Applies the de-interlace filter.
	 * @param {EliminateFields} eliminateFields - The fields to 
	 * eliminate.
	 * @param {CreateFields} createFields - The method to use to 
	 * replace eliminated fields.
	 */
	applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void;
	/** Applies the NTSC colors filter. */
	applyNTSC(): void;
	/**
	 * Applies the custom filter.
	 * @param {number} characteristics - The custom filter 
	 * characteristics. This is an array of 25 values that 
	 * corresponds to a left-to-right, top-to- bottom traversal of 
	 * the array presented in the Custom dialog in the user 
	 * interface (Filter > Other > Custom).
	 * @param {number} scale - The value by which to divide the sum 
	 * of the brightness values of the pixels included in the 
	 * calculation.
	 * @param {number} offset - The value to be added to the result 
	 * of the scale calculation.
	 */
	applyCustomFilter(characteristics: number, scale: number, offset: number): void;
	/**
	 * Applies the high pass filter.
	 * @param {number} radius - The width (in pixels) of the radius 
	 * where edge details are retained.
	 */
	applyHighPass(radius: number): void;
	/**
	 * Applies the maximum filter.
	 * @param {number} radius - The choke area (in pixels). Range: 
	 * 0 to 100.
	 */
	applyMaximum(radius: number): void;
	/**
	 * Applies the minimum filter.
	 * @param {number} radius - The spread area (in pixels). Range: 
	 * 0 to 100.
	 */
	applyMinimum(radius: number): void;
	/**
	 * Applies the offset filter.
	 * @param {UnitValue} horizontal - The amount (in pixels) to 
	 * move the selection horizontally (to the right). Range: -6144 
	 * to 6144.
	 * @param {UnitValue} vertical - The amount (in pixels) to move 
	 * the selection vertically (downward). Range: -6144 to 6144.
	 * @param {OffsetUndefinedAreas} undefinedAreas - The method 
	 * for filling areas left blank by the offset.
	 */
	applyOffset(horizontal: UnitValue, vertical: UnitValue, undefinedAreas: OffsetUndefinedAreas): void;
	/**
	 * Adjusts levels of the selected channels.
	 * @param {number} inputRangeStart - The input levels minimum. 
	 * Range: 0 to 253.
	 * @param {number} inputRangeEnd - The input levels maximum. 
	 * Range: (input range start + 2) to 253.
	 * @param {number} inputRangeGamma - The input levels gamma. 
	 * Range: 0.10 to 9.99.
	 * @param {number} outputRangeStart - The output levels 
	 * minimum. Range: 0 to 253.
	 * @param {number} outputRangeEnd - The output levels maximum. 
	 * Range: (output range start + 2) to 253.
	 */
	adjustLevels(inputRangeStart: number, inputRangeEnd: number, inputRangeGamma: number, outputRangeStart: number, outputRangeEnd: number): void;
	/**
	 * Adjust the levels of the selected channels using the auto 
	 * levels option.
	 */
	autoLevels(): void;
	/**
	 * Adjusts the contrast of the selected channels automatically.
	 */
	autoContrast(): void;
	/**
	 * Adjusts the tonal range of the selected channel using up to 
	 * fourteen points.
	 * @param {Point} curveShape - The curve points. The number of 
	 * points must be between 2 and 14.
	 */
	adjustCurves(curveShape: Point): void;
	/**
	 * Adjusts the brightness and constrast.
	 * @param {number} brightness - The brightness amount. Range: 
	 * -100 to 100.
	 * @param {number} contrast - The contrast amount. Range: -100 
	 * to 100.
	 */
	adjustBrightnessContrast(brightness: number, contrast: number): void;
	/**
	 * Adjusts the color balance of the layer's component channels.
	 * @param {number} shadows - The adjustments for the shadows. 
	 * The array must include three values (in the range -100 to 
	 * 100), which represent cyan or red, magenta or green, and 
	 * yellow or blue, when the document mode is CMYK or RGB.
	 * @param {number} midtones - The adjustments for the midtones. 
	 * The array must include three values (in the range -100 to 
	 * 100), which represent cyan or red, magenta or green, and 
	 * yellow or blue, when the document mode is CMYK or RGB.
	 * @param {number} highlights - The adjustments for the 
	 * highlights. The array must include three values (in the 
	 * range -100 to 100), which represent cyan or red, magenta or 
	 * green, and yellow or blue, when the document mode is CMYK or 
	 * RGB.
	 * @param {boolean} preserveLuminosity - If true, luminosity is 
	 * preserved.
	 */
	adjustColorBalance(shadows?: number, midtones?: number, highlights?: number, preserveLuminosity?: boolean): void;
	/**
	 * Converts a color image to a grayscale image in the current 
	 * color mode by assigning equal values of each component color 
	 * to each pixel.
	 */
	desaturate(): void;
	/**
	 * Modifies the amount of a process color in a specified 
	 * primary color without affecting the other primary colors.
	 * @param {AdjustmentReference} selectionMethod - Modifies the 
	 * amount of a process color in a specified primary color 
	 * without affecting the other primary colors.
	 * @param {number} reds - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} yellows - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} greens - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} cyans - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} blues - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} magentas - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} whites - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} neutrals - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 * @param {number} blacks - Array of 4 values: cyan, magenta, 
	 * yellow, black.
	 */
	selectiveColor(selectionMethod: AdjustmentReference, reds?: number, yellows?: number, greens?: number, cyans?: number, blues?: number, magentas?: number, whites?: number, neutrals?: number, blacks?: number): void;
	/**
	 * Modifies a targeted (output) color channel using a mix of 
	 * the existing color channels in the image. (output channels = 
	 * An array of channel specifications. For each component 
	 * channel, specify a list of adjustment values (-200 to 200) 
	 * followed by a 'constant' value (-200 to 200).) When 
	 * monochrome = true, the maximum number of channel value 
	 * specifications is 1. Valid only when 'document mode' = RGB 
	 * or CMYK. RGB arrays must include four doubles. CMYK arrays 
	 * must include five doubles.
	 * @param {any} outputChannels - A list of channel 
	 * specifications. For each component channel that the document 
	 * has, you must specify a list of adjustment values followed 
	 * by a 'constant' value.
	 * @param {boolean} monochrome - If true, uses monochrome 
	 * mixing. Note: If this is true, you can only specify one 
	 * channel value.
	 */
	mixChannels(outputChannels: any, monochrome?: boolean): void;
	/**
	 * Inverts the colors in the layer by converting the brightness 
	 * value of each pixel in the channels to the inverse value on 
	 * the 256-step color-values scale.
	 */
	invert(): void;
	/**
	 * Redistributes the brightness values of pixels in an image to 
	 * more evenly represent the entire range of brightness levels 
	 * within the image.
	 */
	equalize(): void;
	/**
	 * Converts grayscale or color images to high-contrast, B/W 
	 * images by converting pixels lighter than the specified 
	 * threshold to white and pixels darker than the threshold to 
	 * black.
	 * @param {number} level - The threshold level.
	 */
	threshold(level: number): void;
	/**
	 * Specifies the number of tonal levels for each channel and 
	 * then maps pixels to the closest matching level.
	 * @param {number} levels - The tonal levels. Range: 2 to 255.
	 */
	posterize(levels: number): void;
	/**
	 * Adjusts the layer's color balance and temperature as if a 
	 * color filter had been applied.
	 * @param {SolidColor} fillColor - The color to use for the 
	 * fill.
	 * @param {number} density - The density (as a percentage) of 
	 * the filter effect. Range: 1 to 100.
	 * @param {boolean} preserveLuminosity - If true, luminosity is 
	 * preserved.
	 */
	photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void;
	/**
	 * Adjusts the range of tones in the shadows and highlights.
	 * @param {number} shadowAmount - The shadow amount, as a 
	 * percentage. Range: 0 to 100.
	 * @param {number} shadowWidth - The shadow width, as a 
	 * percentage. Range: 0 to 100 for tonal width (0 = narrow), 
	 * (100 = broad).
	 * @param {number} shadowRaduis - The shadow radius (in 
	 * pixels). Range: 0 to 2500.
	 * @param {number} highlightAmount - The highlight amount, as a 
	 * percentage. Range: 0 to 100.
	 * @param {number} highlightWidth - The highlight width. Range: 
	 * 0 to 100 for tonal width (0 = narrow), (100 = broad).
	 * @param {number} highlightRaduis - The highlight radius (in 
	 * pixels). Range: 0 to 2500.
	 * @param {number} colorCorrection - The amount to adjust the 
	 * colors in the changed portion of the image. Range: -100 to 
	 * 100.
	 * @param {number} midtoneContrast - The amount of midtone 
	 * contrast. Range: -100 to 100.
	 * @param {number} blackClip - Fractions of whites to be 
	 * clipped. Range: 0.000 to 50.000.
	 * @param {number} whiteClip - Fractions of blacks to be 
	 * clipped. Range: 0.000 to 50.000.
	 */
	shadowHighlight(shadowAmount?: number, shadowWidth?: number, shadowRaduis?: number, highlightAmount?: number, highlightWidth?: number, highlightRaduis?: number, colorCorrection?: number, midtoneContrast?: number, blackClip?: number, whiteClip?: number): void;
}

/**
 * Layers may contain nested layers, which are called sublayers 
 * in the user interface. The layer object contains all of the 
 * page items in the specific layer as elements. Your script 
 * can access page items as elements of either the layer object 
 * or the document object.
 * @summary A layer object.
 * @class
 */
export declare class Layer {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The name of the layer. */
	name: string;
	/** If true, the layer's contents and settings are locked. */
	allLocked: boolean;
	/** The mode to use when compositing an object. */
	blendMode: BlendMode;
	/** The layers linked to this layer. */
	readonly linkedLayers: Layer;
	/**
	 * The layer's master opacity (as a percentage). Range: 0.0 to 
	 * 100.0.
	 */
	opacity: number;
	/** If true, the layer is visible. */
	visible: boolean;
	/** The unique ID of this layer. */
	readonly id: number;
	/**
	 * The layer index sans layer groups, how Photoshop would index 
	 * them.
	 */
	readonly itemIndex: number;
	/**
	 * If the Layer is a layer set, this property returns a 
	 * reference to the corresponding layer set object.
	 */
	readonly bounds: UnitRect;
	/** Bounding rectangle of the Layer not including effects. */
	readonly boundsNoEffects: UnitRect;
	/** XMP metadata associated with the Layer. */
	readonly xmpMetadata: XMPMetadata;
	/**
	 * Move the object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	move(relativeObject: Object, insertionLocation: ElementPlacement): Layer;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Layer;
	/**
	 * ...
	 * @param {LayerSet} layerSet
	 */
	moveToEnd(layerSet?: LayerSet): void;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Unlinks the layer. */
	unlink(): void;
	/**
	 * Links the layer with the specified layer.
	 * @param {Layer} _with - The layer to link to.
	 */
	link(_with: Layer): void;
	/**
	 * Moves the object relative to its current position.
	 * @param {UnitValue} deltaX - The amount to move the object 
	 * horizontally.
	 * @param {UnitValue} deltaY - The amount to move the object 
	 * vertically.
	 */
	translate(deltaX?: UnitValue, deltaY?: UnitValue): void;
	/**
	 * Rotates the object.
	 * @param {number} angle - The number of degrees to rotate the 
	 * object.
	 * @param {AnchorPosition} anchor - The point to rotate about.
	 */
	rotate(angle: number, anchor?: AnchorPosition): void;
	/**
	 * Scales the object.
	 * @param {number} horizontal - The amount to scale the object 
	 * horizontally (as a percentage).
	 * @param {number} vertical - The amount to scale the object 
	 * vertically (as a percentage).
	 * @param {AnchorPosition} anchor - The point to resize about.
	 */
	resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void;
}

/**
 * Object that stores information about a color element in the 
 * image, analogous to a plate in the printing process that 
 * applies a single color. The document's color mode determines 
 * the number of default channels. For example, an RGB document 
 * has four default channels: A composite channel: RGB; and 
 * three component channels: red, green, and blue. A channel 
 * can also be an alpha channel, which stores selections as 
 * masks; or a spot channel, which stores spot colors.
 * @class
 */
export declare class Channel {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** A histogram of the color of the channel. */
	readonly histogram: number;
	/** The channel name. */
	name: string;
	/** The type of channel. */
	kind: ChannelType;
	/**
	 * The opacity of alpha channels (called solidity for spot 
	 * channels). Range: 0 to 100. Valid only when 'type' = masked 
	 * area or selected area.
	 */
	opacity: number;
	/** If true, the channel is visible. */
	visible: boolean;
	/** The color of the channel. Not valid for component channels. */
	color: SolidColor;
	/** Adds an element. */
	add(): Channel;
	/**
	 * Duplicate this object.
	 * @param {Object} relativeObject
	 * @param {ElementPlacement} insertionLocation
	 */
	duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Channel;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Merges a spot channel into the component channels. */
	merge(): void;
}

/**
 * A guide in the document.
 * @class
 */
export declare class Guide {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** Indicates whether the guide is vertical or horizontal. */
	direction: Direction;
	/** Location of the guide from origin of image. */
	coordinate: UnitValue;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A version of the document stored automatically (and added to 
 * the history states collection, which preserves the document 
 * state each time the document is changed).
 * @class
 */
export declare class HistoryState {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The history state name. */
	readonly name: string;
	/** If true, the history state is a snapshot. */
	readonly snapshot: boolean;
}

/**
 * An installed font.
 * @class
 */
export declare class TextFont {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The font name. */
	readonly name: string;
	/** The PostScript name of the font. */
	readonly postScriptName: string;
	/** The font family. */
	readonly family: string;
	/** The font style. */
	readonly style: string;
}

/**
 * The text object contained in an art layer.
 * @class
 */
export declare class TextItem {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The method of anti-aliasing to use. */
	antiAliasMethod: AntiAlias;
	/** Options for auto kerning. */
	autoKerning: AutoKernType;
	/** The text color. */
	color: SolidColor;
	/** If true, uses the font's built-in leading information. */
	useAutoLeading: boolean;
	/**
	 * The amount of uniform spacing between multiple characters. 
	 * Range: -1000 to 10000.
	 */
	tracking: number;
	/**
	 * Character scaling (vertical) in proportion to horizontal 
	 * scale. Range: 0 - 1000 as a percentage.
	 */
	verticalScale: number;
	/**
	 * Character scaling (horizontal) in proportion to horizontal 
	 * scale. Range: 0 - 1000 as a percentage.
	 */
	horizontalScale: number;
	/** The amount of baseline offset of text. */
	baselineShift: UnitValue;
	/** The actual text in the layer. */
	contents: string;
	/** The text face of the character. */
	font: string;
	/** The leading amount. */
	leading: UnitValue;
	/** If true, ligatures are used. */
	ligatures: boolean;
	/** If true, alternate ligatures are used. */
	alternateLigatures: boolean;
	/** If true, old style is used. */
	oldStyle: boolean;
	/**
	 * The position of the origin for the text. The array must 
	 * contain two values. Setting this property is basically 
	 * equivalent to clicking the text tool at a point in the 
	 * document to create the point of origin for text.
	 */
	position: UnitPoint;
	/** The text orientation. */
	direction: Direction;
	/** The font size in points. */
	size: UnitValue;
	/** If true, faux bold is used. */
	fauxBold: boolean;
	/** If true, faux italic is used. */
	fauxItalic: boolean;
	/** The case of the text. */
	capitalization: Case;
	/** The strike through option to use. */
	strikeThru: StrikeThruType;
	/** Options for underlining the text. */
	underline: UnderlineType;
	/** The language. */
	language: Language;
	/**
	 * If true, words are not allowed to break at the end of a 
	 * line. When enacted on large amounts of consecutive 
	 * characters, can prevent word wrap and thus may prevent some 
	 * text from appearing on the screen.
	 */
	noBreak: boolean;
	/** The type of text. */
	kind: TextType;
	/** The paragraph justification. */
	justification: Justification;
	/**
	 * The amount to indent text from the left. Range: -1296 to 
	 * 1296.
	 */
	leftIndent: UnitValue;
	/**
	 * The amount to indent the first line of paragraphs. Range: 
	 * -1296 to 1296.
	 */
	firstLineIndent: UnitValue;
	/**
	 * The amount to indent text from the right. Range: -1296 to 
	 * 1296.
	 */
	rightIndent: UnitValue;
	/**
	 * The amount of space before each paragraph. Range: -1296 to 
	 * 1296.
	 */
	spaceBefore: UnitValue;
	/**
	 * The amount of space after each paragraph. Range: -1296 to 
	 * 1296.
	 */
	spaceAfter: UnitValue;
	/** If true, uses Roman hanging punctuation. */
	hangingPuntuation: boolean;
	/** The text composing engine to use. */
	textComposer: TextComposer;
	/** If true, hyphenation is used. */
	hyphenation: boolean;
	/**
	 * The minimum amount (as a percentage) to scale the horizontal 
	 * size of the text letters. Range: 50 - 200; at 100, the width 
	 * of characters is not scaled. Valid only for justified text.
	 */
	minimumGlyphScaling: number;
	/**
	 * The desired amount (as a percentage) to scale the horizontal 
	 * size of the text letters. Range: 50 - 200; at 100, the width 
	 * of characters is not scaled. Valid only for justified text.
	 */
	desiredGlyphScaling: number;
	/**
	 * The maximum amount (as a percentage) to scale the horizontal 
	 * size of the text letters. Range: 50 - 200; at 100, the width 
	 * of characters is not scaled. Valid only for justified text.
	 */
	maximumGlyphScaling: number;
	/**
	 * The minimum amount of space (as a percentage) between 
	 * letters. Range: 100 to 500; at 0, no space is added between 
	 * letters. Valid only for justified text.
	 */
	minimumLetterScaling: number;
	/**
	 * The amount of space (as a percentage) between letters. 
	 * Range: 100 - 500; at 0, no space is added between letters. 
	 * Valid only for justified text.
	 */
	desiredLetterScaling: number;
	/**
	 * The maximum amount (as a percentage) of space between 
	 * letters. Range: 100 - 500; at 0, no space is added between 
	 * letters. Valid only for justified text.
	 */
	maximumLetterScaling: number;
	/**
	 * The minimum amount (as a percentage) of space between words. 
	 * Range: 0 -1000; at 100, no additional space is added between 
	 * words. Valid only for justified text.
	 */
	minimumWordScaling: number;
	/**
	 * The amount (as a percentage) of space between words. Range: 
	 * 0 -1000; at 100, no additional space is added between words. 
	 * Valid only for justified text.
	 */
	desiredWordScaling: number;
	/**
	 * The maximum amount (as a percentage) of space between words 
	 * (0 -1000; at 100, no additional space is added between 
	 * words). Valid only for justified text.
	 */
	maximumWordScaling: number;
	/**
	 * The percentage to use for auto leading. Range: 0.01 to 
	 * 5000.00.
	 */
	autoLeadingAmount: number;
	/**
	 * The minimum number of letters a word must have in order for 
	 * hyphenation in word wrap to be allowed. Range: 2 to 25.
	 */
	hyphenateWordsLongerThan: number;
	/**
	 * The number of letters after which hyphenation in word wrap 
	 * is allowed. Range: 1 to 15.
	 */
	hyphenateAfterFirst: number;
	/**
	 * The number of letters before which hyphenation in word wrap 
	 * is allowed. Range: 1 to 15.
	 */
	hyphenateBeforeLast: number;
	/**
	 * The maximum number of consecutive lines that can end with a 
	 * hyphenated word.
	 */
	hyphenLimit: number;
	/**
	 * The distance at the end of a line that will cause a word to 
	 * break in unjustified type. Range: 0 - 720 picas.
	 */
	hyphenationZone: UnitValue;
	/** If true, capitalized words can be hyphenated. */
	hyphenateCapitalWords: boolean;
	/** The width of the bounding box for paragraph text. */
	width: UnitValue;
	/** The height of the bounding box for paragraph text. */
	height: UnitValue;
	/** The style of warp. */
	warpStyle: WarpStyle;
	/** The warp direction. */
	warpDirection: Direction;
	/** The warp bend percentage. Range: -100 to 100. */
	warpBend: number;
	/**
	 * The warp horizontal distortion percentage. Range: -100 to 
	 * 100.
	 */
	warpHorizontalDistortion: number;
	/**
	 * The warp vertical distortion percentage. Range: -100 to 100.
	 */
	warpVerticalDistortion: number;
	/**
	 * Creates a clipping path from the outlines of the actual text 
	 * items (such as letters or words).
	 */
	createPath(): void;
	/**
	 * Converts the text object and its containing layer to a fill 
	 * layer with the text changed to a clipping path.
	 */
	convertToShape(): void;
}

/**
 * A snapshot of a state of the layers in a document (can be 
 * used to view different page layouts or compostions).
 * @class
 */
export declare class LayerComp {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The name of the layer comp. */
	name: string;
	/** The description of the layer comp. */
	comment: any;
	/** If true, uses layer appearance (layer styles) settings. */
	appearance: boolean;
	/** If true, uses layer position. */
	position: boolean;
	/** If true, the layer comp is visible. */
	visibility: boolean;
	/** If true, the layer comp is currently selected. */
	readonly selected: boolean;
	/** Adds an element. */
	add(): LayerComp;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/** Applies the layer comp to the document. */
	apply(): void;
	/** Recaptures the current layer state(s) for this layer comp. */
	recapture(): void;
	/** Resets the layer comp state to the document state. */
	resetFromComp(): void;
}

/**
 * A path or drawing object, such as the outline of a shape or 
 * a straight or curved line, which contains sub paths that 
 * comprise its geometry.
 * @class
 */
export declare class PathItem {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The name of the path item. */
	name: string;
	/** The sub path objects for this path item. */
	readonly subPathItems: SubPathItems;
	/** The type of path. */
	kind: PathKind;
	/** Adds an element. */
	add(): PathItem;
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
	 * Makes a selection object, whose border is the path, from 
	 * this path item object.
	 * @param {number} feather - The feather amount in pixels. 
	 * Range: 0.0 to 250.0.
	 * @param {boolean} antiAlias - If true, the selection uses 
	 * anti-aliasing.
	 * @param {SelectionType} operation - The selection behavior 
	 * relative to the existing selection (when a selection already 
	 * exists).
	 */
	makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void;
	/**
	 * Fills the area enclosed by the path.
	 * @param {any} fillColor - The color of the fill for this 
	 * path.
	 * @param {ColorBlendMode} mode - The blending mode of the fill 
	 * for this path.
	 * @param {number} opacity - The opacity of the fill for this 
	 * path (as a percentage). Range: 0.0 to 100.0.
	 * @param {boolean} preserveTransparency - If true, 
	 * transparency is preserved.
	 * @param {number} feather - The feather amount in pixels. 
	 * Range: 0.0 to 250.0.
	 * @param {boolean} antiAlias - If true, uses anti-aliasing for 
	 * the selection.
	 * @param {boolean} wholePath - If true, uses all subpaths when 
	 * doing the fill.
	 */
	fillPath(fillColor?: any, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean, feather?: number, antiAlias?: boolean, wholePath?: boolean): void;
	/**
	 * Strokes the path.
	 * @param {ToolType} tool - The tool to use when stroking the 
	 * path.
	 * @param {boolean} simulatePressure - If true, simulates the 
	 * pressure when using the tool.
	 */
	strokePath(tool?: ToolType, simulatePressure?: boolean): void;
	/**
	 * Makes this path item the clipping path for this document.
	 * @param {number} flatness - Flatness in device pixels; tells 
	 * the PostScript printer how to approximate curves. Range: 0.2 
	 * to 100).
	 */
	makeClippingPath(flatness?: number): void;
	/** Makes this path item the active or selected path item. */
	select(): void;
	/** Unselects the selection, no path items are selected. */
	deselect(): void;
}

/**
 * Information about a path. You do not use the sub path item 
 * object to create a path. Rather, you create path segments 
 * using the sub path info object. Use the sub path item object 
 * to retrieve information about a path. All properties are 
 * read-only.
 * @class
 */
export declare class SubPathItem {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** If true, the path is closed. */
	readonly closed: boolean;
	/** The sub path operation on other sub paths. */
	readonly operation: ShapeOperation;
	/** The path points collection in the sub path. */
	readonly pathPoints: PathPoints;
}

/**
 * Information about an array of path point info objects. You 
 * do not use the path point object to create points that make 
 * up a path. Rather, you use the path point object to retrieve 
 * information about the points that describe path segments. To 
 * create path points, use the path point info object.
 * @class
 */
export declare class PathPoint {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The position (coordinates) of the anchor point. */
	readonly anchor: Point;
	/**
	 * The location of the left direction point (the "in" 
	 * position).
	 */
	readonly leftDirection: Point;
	/**
	 * The location of the right direction point (the "out" 
	 * position).
	 */
	readonly rightDirection: Point;
	/** The type of point. */
	readonly kind: PointKind;
}

/**
 * The log of measurements taken.
 * @class
 */
export declare class MeasurementLog {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/**
	 * Exports the specified measurements.
	 * @param {File} file - The file to export to. If not 
	 * specified, a 'file save' dialog is displayed.
	 * @param {MeasurementRange} range - The measurements to 
	 * export. Default: selected.
	 * @param {string} dataPoints - An array of identifiers of data 
	 * points to export. The order of the data points is respected 
	 * in the exported file. Defaults to data points visible in 
	 * Measurement Log palette.
	 */
	exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string): void;
	/**
	 * Deletes the specified measurements.
	 * @param {MeasurementRange} range - The measurements to 
	 * delete. Default: selected.
	 */
	deleteMeasurements(range?: MeasurementRange): void;
}

/**
 * The measurement scale for the document.
 * @class
 */
export declare class MeasurementScale {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The name of the scale. */
	name: string;
	/** The length (in pixels) to which this scale equates. */
	pixelLength: number;
	/** The logical length this scale equates to. */
	logicalLength: number;
	/** The logical units for this scale. */
	logicalUnits: string;
}

/**
 * An event-handler object that tells the script to execute 
 * specified code when a specified event occurs. For notifiers 
 * to work, they must be enabled. See the 'notifiers enabled' 
 * property of the Application object. Events that occur within 
 * scripts do not generally trigger notifiers, because they 
 * occur inside of a "play script" event.
 * @class
 */
export declare class Notifier {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/**
	 * The event ID in four characters or a unique string that the 
	 * notifier is associated with.
	 */
	readonly event: string;
	/**
	 * The path to the file to execute when the event 
	 * occurs/activates the notifier.
	 */
	readonly eventFile: File;
	/**
	 * The class ID associated with the event for the Notifier 
	 * object, four characters or a unique string.
	 */
	readonly eventClass: string;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A counted item in the document. The count item feature is 
 * available in the Extended Version only.
 * @class
 */
export declare class CountItem {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The position of count item in the document. */
	readonly position: UnitPoint;
	/** Adds an element. */
	add(): CountItem;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
}

/**
 * A color sampler in a document.
 * @class
 */
export declare class ColorSampler {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The position of the color sampler in the document. */
	readonly position: UnitPoint;
	/** The color of the color sampler. */
	readonly color: SolidColor;
	/** Adds an element. */
	add(): ColorSampler;
	/** Deletes this object. */
	remove(): void;
	/** Deletes all elements. */
	removeAll(): void;
	/**
	 * Moves the color sampler to a new location.
	 * @param {UnitPoint} position - Position of destination (unit 
	 * value)
	 */
	move(position: UnitPoint): void;
}

/**
 * Camera raw image file settings stored in an XMP file in the 
 * same folder as the raw file with the same base name and an 
 * XMP extension.
 * @class
 */
export declare class XMPMetadata {
	/** The object's container. */
	readonly parent: Object;
	/** The class name of the object. */
	readonly typename: string;
	/** The raw XML form of file information. */
	rawData: string;
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
	readonly length: number;
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
	readonly length: number;
}

/**
 * Create an UTF-8 ASCII encoded version of this string. The 
 * string is converted into UTF-8. Every non-alphanumeric 
 * character is encoded as a percent escape
 * character of the form %xx, where xx is the hex value of the 
 * character. After the conversion to UTF-8 encoding and 
 * escaping, it is guaranteed that the string does not contain 
 * characters codes greater than 127. The list of characters 
 * not to be encoded is -_.!~*'();/?:@&=+$,#. The method 
 * returns false on errors.
 * @summary The global methods and properties.
 * @class
 */
export declare class global {
	/** The application object */
	readonly app: Application;
	/**
	 * The NaN global property is a predefined variable with the 
	 * value NaN (Not-a-Number), as specified by the IEEE-754 
	 * standard.
	 */
	NaN: number;
	/**
	 * The Infinity global property is a predefined variable with 
	 * the value for infinity.
	 */
	Infinity: number;
	/**
	 * This global property is a predefined variable with the value 
	 * for an undefined value.
	 */
	undefined: undefined;
	/** The global BridgeTalk object. */
	BridgeTalk: BridgeTalk;
	/**
	 * Create an UTF-8 ASCII encoded version of this string. The 
	 * string is converted into UTF-8. Every non-alphanumeric 
	 * character is encoded as a percent escape
	 * character of the form %xx, where xx is the hex value of the 
	 * character. After the conversion to UTF-8 encoding and 
	 * escaping, it is guaranteed that the string does not contain 
	 * characters codes greater than 127. The list of characters 
	 * not to be encoded is -_.!~*'();/?:@&=+$,#. The method 
	 * returns false on errors.
	 * @summary Encodes a string after RFC2396.
	 * @param {string} text - The text to encode.
	 */
	encodeURI(text: string): string;
	/**
	 * Create an UTF-8 ASCII encoded version of this string. The 
	 * string is converted into UTF-8. Every non-alphanumeric 
	 * character is encoded as a percent escape
	 * character of the form %xx, where xx is the hex value of the 
	 * character. After the conversion to UTF-8 encoding and 
	 * escaping, it is guaranteed that the string does not contain 
	 * characters codes greater than 127. The list of characters 
	 * not to be encoded is -_.!~*'(). The method returns false on 
	 * errors.
	 * @summary Encodes a string after RFC2396.
	 * @param {string} text - The text to encode.
	 */
	encodeURIComponent(text: string): string;
	/**
	 * Decodes a string created with encodeURI().
	 * @param {string} uri - The text to decode.
	 */
	decodeURI(uri: string): string;
	/**
	 * Decodes a string created with encodeURIComponent().
	 * @param {string} uri - The text to decode.
	 */
	decodeURIComponent(uri: string): string;
	/**
	 * In the new string, characters of aString that require URL 
	 * encoding are replaced with the format %xx, where xx is the 
	 * hexadecimal value of the character code in the Unicode 
	 * character set.  This format is used to transmit information 
	 * appended to a URL during, for example, execution of the GET 
	 * method.  Use the unescape() global function to translate the 
	 * string back into its original format. Returns a string which 
	 * is aString URL-encoded.
	 * @summary Creates a URL-encoded string from aString.
	 * @param {string} aString - The string to be encoded. / 
	 */
	escape(aString: string): string;
	/**
	 * You can pass the result of an object's toSource() method to 
	 * reconstruct that object.
	 * @summary Evaluates its argument as a JavaScript script, and 
	 * returns the result of evaluation.
	 * @param {string} stringExpression - The string to evaluate. / 
	 */
	eval(stringExpression: string): any;
	/**
	 * Creates a source code representation of the supplied 
	 * argument, and returns it as a string.
	 * @param {any} what - The object to uneval.
	 */
	uneval(what: any): string;
	/**
	 * Returns true if the expression is a finite number, false 
	 * otherwise. False if the value is infinity or negative 
	 * infinity.
	 * @summary Evaluates an expression and reports whether the 
	 * result is a finite number.
	 * @param {number} expression - Any valid JavaScript 
	 * expression. / 
	 */
	isFinite(expression: number): boolean;
	/**
	 * Returns true if the result of evaluation is not a number 
	 * (NaN), false if the value is a number.
	 * @summary Evaluates an expression and reports whether the 
	 * result is "Not-a-Number" (NaN).
	 * @param {number} expression - Any valid JavaScript 
	 * expression. / 
	 */
	isNaN(expression: number): boolean;
	/**
	 * Parses a string to find the first set of characters, in a 
	 * specified base, that can be converted to an integer, and 
	 * returns that integer, or NaN if it does not encounter 
	 * characters that it can convert to a number.
	 * @summary Extracts an integer from a string.
	 * @param {string} text - The string from which to extract an 
	 * integer. / 
	 * @param {number} base - The base of the string to parse (from 
	 * base 2 to base 36). / If not supplied, base is determined by 
	 * the format of string.
	 */
	parseInt(text: string, base?: number): number;
	/**
	 * Parses a string to find the first set of characters that can 
	 * be converted to a floating point number, and returns that 
	 * number, or NaN if it does not encounter characters that it 
	 * can converted to a number.  The function supports 
	 * exponential notation.
	 * @summary Extracts a floating-point number from a string.
	 * @param {string} text - The string from which to extract a 
	 * floating point number. / 
	 */
	parseFloat(text: string): number;
	/**
	 * Use the escape() global function to URL-encode strings.
	 * @summary Translates URL-encoded string into a regular 
	 * string, and returns that string.
	 * @param {string} stringExpression - The URL-encoded string to 
	 * convert. / 
	 */
	unescape(stringExpression: string): string;
	/**
	 * Localizes a ZString-encoded string and merges additional 
	 * arguments into the string.
	 * @param {string} what - The string to localize. A 
	 * ZString-encoded string that can contain placeholder for 
	 * additional arguments in the form %1 to %n.
	 * @param {any} argument - Optional argument(s) to be merged 
	 * into the string.
	 */
	localize(what: string, argument?: any): string;
	/**
	 * Returns true is the supplied string is a valid XML name.
	 * @param {string} name - The XML name to test.
	 */
	isXMLName(name: string): boolean;
	/**
	 * This is a replacement function for the standard JavaScript 
	 * statement set default xml namespace.
	 * @summary Defines the default XML namespace.
	 * @param {Namespace} namespace - The namespace to use. / Omit 
	 * this parameter to return to the empty namespace. This is 
	 * either a Namespace object or a string.
	 */
	setDefaultXMLNamespace(namespace: Namespace): void;
	/**
	 * Displays an alert box
	 * @param {string} message - The text to display
	 * @param {string} title - The title of the alert; ignored on 
	 * the Macintosh
	 * @param {boolean} errorIcon - Display an Error icon; ignored 
	 * on the Macintosh
	 */
	alert(message: string, title?: string, errorIcon?: boolean): void;
	/**
	 * Displays an alert box with Yes and No buttons; returns true 
	 * for Yes
	 * @param {string} message - The text to display
	 * @param {boolean} noAsDefault - Set to true to set the No 
	 * button as the default button
	 * @param {string} title - The title of the alert; ignored on 
	 * the Macintosh
	 */
	confirm(message: string, noAsDefault: boolean, title?: string): boolean;
	/**
	 * Returns null if the user cancelled the dialog, the text 
	 * otherwise
	 * @summary Displays a dialog allowing the user to enter text
	 * @param {string} prompt - The text to display
	 * @param {string} _default - The default text to preset the 
	 * edit field with
	 * @param {string} title - The title of the dialog;
	 */
	prompt(prompt: string, _default?: string, title?: string): string;
}

/**
 * Controls where Photoshop places an element.
 * @enum
 */
export declare enum ElementPlacement {
	/** Place after an element. */
	PLACEAFTER = 1,
	/** Place before an element. */
	PLACEBEFORE = 2,
	/** Place an element at the end. */
	PLACEATEND = 3
}
