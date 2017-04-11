/**
 * Assigning error text to this property generates a run-time 
 * error; however, the preferred way to generate a run-time 
 * error is to throw an Error object.
 * @summary The $ object provides a number of debugging 
 * facilities and informational methods.
 * @class
 */
export declare class $ {
	/**
	 * Assigning error text to this property generates a run-time 
	 * error; however, the preferred way to generate a run-time 
	 * error is to throw an Error object.
	 * @summary The most recent run-time error information.
	 */
	error: Error;
	/**
	 * Formatted as a three-part number and description; for 
	 * example: "3.92.95 (debug)".
	 * @summary The version number of the ExtendScript engine.
	 */
	readonly version: string;
	/** The ExtendScript build information. */
	readonly build: string;
	/** The ExtendScript build date. */
	readonly buildDate: Date;
	/**
	 * A reference to the global object, which contains the 
	 * JavaScript global namespace.
	 */
	readonly global: Object;
	/** The current stack trace. */
	readonly stack: string;
	/**
	 * One of 0 (no debugging), 1 (break on runtime errors), or 2 
	 * (full debug mode).
	 * @summary The current debugging level, which enables or 
	 * disables the JavaScript debugger.
	 */
	level: number;
	/**
	 * A logical AND of bit flag values:
	 * 0x0002 (2): Displays each line with its line number as it is 
	 * executed.
	 * 0x0040 (64): Enables excessive garbage collection. Usually, 
	 * garbage collection starts when the number of objects has 
	 * increased by a certain amount since the last garbage 
	 * collection. This flag causes ExtendScript to garbage collect 
	 * after almost every statement. This impairs performance 
	 * severely, but is useful when you suspect that an object gets 
	 * released too soon.
	 * 0x0080 (128): Displays all calls with their arguments and 
	 * the return value.
	 * 0x0100 (256): Enables extended error handling (see strict).
	 * 0x0200 (512): Enables the localization feature of the 
	 * toString method. Equivalent to the localize property.
	 * @summary Gets or sets low-level debug output flags.
	 */
	flags: number;
	/**
	 * When true, any attempt to write to a read-only property 
	 * causes a runtime error. Some objects do not permit the 
	 * creation of new properties when true.
	 * @summary Sets or clears strict mode for object modification.
	 */
	strict: any;
	/**
	 * The string contains five characters in the form LL_RR, where 
	 * LL is an ISO 639 language specifier, and RR is an ISO 3166 
	 * region specifier.Initially, this is the value that the 
	 * application or the platform returns for the current user. 
	 * You can set it to temporarily change the locale for testing. 
	 * To return to the application or platform setting, set to 
	 * undefined, null, or the empty string.
	 * @summary Gets or sets the current locale.
	 */
	locale: string;
	/**
	 * Set to true to enable the extended localization features of 
	 * the built-in toString() method.
	 */
	localize: boolean;
	/**
	 * The character used as the decimal point character in 
	 * formatted numeric output.
	 */
	decimalPoint: string;
	/** The ExtendScript memory cache size, in bytes. */
	memCache: number;
	/**
	 * Each object has the properties left, top, right, bottom, 
	 * which contain the four corners of each screen in global 
	 * coordinates.A property primary is true if that object 
	 * describes the primary display.
	 * @summary An array of objects containing information about 
	 * the display screens attached to your computer.
	 */
	readonly screens: Object;
	/** The current operating system version information. */
	readonly os: string;
	/** The file name of the current script. */
	readonly fileName: string;
	/** The current line number of the currently executing script. */
	readonly line: number;
	/**
	 * A high-resolution timer, measuring the time in microseconds. 
	 * The timer starts when ExtendScript is
	 * initialized during the application startup sequence. Every 
	 * read access resets the timer to Zero.
	 */
	readonly hiresTimer: number;
	/** The name of the current ExtendScript engine, if set. */
	readonly engineName: string;
	/** The path for include files for the current script. */
	readonly includePath: string;
	/**
	 * Shows an About box for the ExtendScript component, and 
	 * returns the text for the box.
	 */
	about(): string;
	/** Converts this object to a string. */
	toString(): string;
	/**
	 * Prints text to the Console.
	 * @param {any} text - The text to print. All arguments are 
	 * concatenated.
	 */
	write(text: any): void;
	/**
	 * Prints text to the Console, and adds a newline character.
	 * @param {any} text - The text to print. All arguments are 
	 * concatenated.
	 */
	writeln(text: any): void;
	/**
	 * Breaks execution at the current position.
	 * @param {any} condition - A string containing a JavaScript 
	 * statement to be used as a condition. If the statement 
	 * evaluates to true or nonzero when this point is reached, 
	 * execution stops.
	 */
	bp(condition?: any): void;
	/**
	 * Retrieves the value of an environment variable.
	 * @param {string} name - The name of the variable.
	 */
	getenv(name: string): string;
	/**
	 * Sets the value of an environment variable.
	 * @param {string} name - The name of the variable.
	 * @param {string} value - The value of the variable.
	 */
	setenv(name: string, value: string): void;
	/**
	 * During a sleep period, checks at 100 millisecond intervals 
	 * to see whether the sleep should be terminated. This can 
	 * happen if there is a break request, or if the script timeout 
	 * has expired.
	 * @summary Suspends the calling thread for a number of 
	 * milliseconds.
	 * @param {number} msecs - Number of milliseconds to sleep.
	 */
	sleep(msecs: number): void;
	/**
	 * Invokes the platform-specific color selection dialog, and 
	 * returns the selected color.
	 * @param {number} color - The color to be preselected in the 
	 * dialog, as 0xRRGGBB, or -1 for the platform default.
	 */
	colorPicker(color: number): number;
	/**
	 * Loads and evaluates a file.
	 * @param {File} file - The file to load.
	 * @param {number} timeout - An optional timeout in 
	 * milliseconds.
	 */
	evalFile(file: File, timeout?: number): any;
	/** Initiates garbage collection in the ExtendScript engine. */
	gc(): void;
}

/**
 * Note that this property is treated as an XML element in the 
 * XML class.
 * @summary The base class of all JavaScript objects.
 * @class
 */
export declare class Object {
	/**
	 * Note that this property is treated as an XML element in the 
	 * XML class.
	 * @summary Points to the prototype object for this object.
	 */
	readonly prototype: Object;
	/**
	 * Note that this property is treated as an XML element in the 
	 * XML class.
	 * @summary Points to the constructor function that created 
	 * this object.
	 * @constructor
	 */
	readonly constructor();
	/**
	 * Note that this property is treated as an XML element in the 
	 * XML class.
	 * @summary Retrieves and returns the Reflection object 
	 * associated with this method or a property.
	 */
	readonly reflect: Reflection;
	/**
	 * Creates and returns a new object of a given type.
	 * @param {any} what - The object type.
	 */
	Object(what: any): Object;
	/**
	 * Reports whether an object is still valid.
	 * @param {Object} what - The object to check.
	 */
	isValid(what: Object): boolean;
	/**
	 * Many objects (such as Date) override this method in favor of 
	 * their own implementation. If an object has no string value 
	 * and no user-defined toString() method, the default method 
	 * returns [object type], where type is the object type or the 
	 * name of the constructor function that created the object.
	 * @summary Creates and returns a string representing this 
	 * object.
	 */
	toString(): string;
	/**
	 * Creates and returns a string representing this object, 
	 * localized for the current locale. See toString().
	 */
	toLocaleString(): string;
	/**
	 * Reports whether a given property is defined with an instance 
	 * or within the prototype chain.
	 * @param {string} name - The name of the property to check.
	 */
	hasOwnProperty(name: string): boolean;
	/**
	 * Reports whether a given property is enumerable.
	 * @param {string} name - The name of the property to check.
	 */
	propertyIsEnumerable(name: string): boolean;
	/**
	 * Checks whether the given object is a prototype of this 
	 * object.
	 * @param {Object} what - The object to check.
	 */
	isPrototypeOf(what: Object): boolean;
	/**
	 * If the object has no primitive value, returns the object 
	 * itself.  Note that you rarely need to call this method 
	 * yourself.  The JavaScript interpreter automatically invokes 
	 * it when encountering an object where a primitive value is 
	 * expected.
	 * @summary Retrieves and returns the primitive value of this 
	 * object.
	 */
	valueOf(): Object;
	/**
	 * This function serializes the object, so that it can, for 
	 * example, be passed between engines. Pass the returned string 
	 * back to eval() to recreate the object. Works only with 
	 * built-in classes.
	 * @summary Creates and returns a string representation of this 
	 * object.
	 */
	toSource(): string;
	/**
	 * Removes the watch function of a property.
	 * @param {string} name - The name of the property to unwatch.
	 */
	unwatch(name: string): void;
	/**
	 * This function can accept, modify, or reject a new value that 
	 * the user, application, or a script has attempted to place in 
	 * a property.
	 * @summary Adds a watch function to a property, which is 
	 * called when the value changes.
	 * @param {string} name - The name of the property to watch.
	 * @param {Function} func - The function to be called when the 
	 * value of this property changes. / This function must three 
	 * arguments, and return as its result the value to be stored 
	 * in the property. The arguments are:
	 * name: the name of the property that changes.
	 * oldValue: The old property value.
	 * newValue: The new property value that was specified.
	 */
	watch(name: string, func: Function): void;
}

/**
 * Takes any number of parameters, which become the elements of 
 * the array, or a single value which becomes the length of an 
 * empty array. Note that you cannot create a one-element 
 * array, as the single parameter value is interpreted as the 
 * length. Returns the new array.
 * @summary An array with integer indexing and 
 * a length property.
 * @class
 */
export declare class Array {
	/** The length of the array */
	length: number;
	/**
	 * Takes any number of parameters, which become the elements of 
	 * the array, or a single value which becomes the length of an 
	 * empty array. Note that you cannot create a one-element 
	 * array, as the single parameter value is interpreted as the 
	 * length. Returns the new array.
	 * @summary Creates and returns a new array.
	 * @param {number} length - If no other parameters are passed, 
	 * the initial length of the empty array. / Otherwise, the 
	 * first element.
	 * @param {any} element - If there is more than one parameter, 
	 * the array is initialized with the given parameters.
	 */
	Array(length: number, element?: any): any[];
	/**
	 * The original array is unchanged.  If an array is provided as 
	 * a parameter to concat(), each of its elements are appended 
	 * as separate array elements at the end of the new array.  
	 * Returns a new array, the result of concatenation the given 
	 * values to the end of the original array.
	 * @summary Returns a new array created by concatenating the 
	 * given values to the end of the original array.
	 * @param {any} value - Any number of values to be added to the 
	 * end of the array. / Can also be arrays.
	 */
	concat(value: any): any[];
	/**
	 * Returns the string containing the joined elements and 
	 * delimiters.
	 * @summary Joins all elements of the array into a string; 
	 * optionally, each element is separated by delimiter.
	 * @param {string} delimiter - A string used to separate each 
	 * element of the array. / If omitted, the array elements are 
	 * separated with a comma.
	 */
	join(delimiter?: string): string;
	/**
	 * Returns the reversed array.
	 * @summary Reverses the order of the elements in the array.
	 */
	reverse(): any[];
	/**
	 * The slice begins with the index start, and continues up to, 
	 * but not including the index, end.  If start or end is a 
	 * negative number, the indexed is resolved counting backwards 
	 * from the end of the array resulting in the element 
	 * array[array. length + negativeIndex]. Returns a new array 
	 * containing elements array[start] through array[end-1].
	 * @summary Creates a new array, which contains a subset of the 
	 * original array's elements.
	 */
	slice(): any[];
	/**
	 * If no function is provided, the elements are sorted 
	 * alphabetically.  Returns no return value.
	 * @summary Sorts the elements of the array in place, using the 
	 * given function to compare to elements.
	 * @param {Function} userFunction - A user-supplied function of 
	 * the form userFunction(a, b) which returns less than 0 if a 
	 * is greater than b, 0 if a and b are equal, and greater than 
	 * 0 if b is greater than a.
	 */
	sort(userFunction: Function): void;
	/**
	 * Returns the value of the deleted array element.
	 * @summary Removes the last element from the array, decreases 
	 * the length by 1, and returns the value of the element.
	 */
	pop(): any;
	/**
	 * Returns the new length of the array.
	 * @summary Places one or more values onto the end of the array 
	 * and increases length by n.
	 * @param {number} value - Any number of values to be pushed 
	 * onto the end of the array.
	 */
	push(value: number): number;
	/**
	 * Optionally insert new elements beginning at index start.  To 
	 * ensure contiguity, elements are moved up to fill in any 
	 * gaps.  Returns a new array containing any elements deleted 
	 * from the original array.
	 * @summary Removes num elements from the array beginning with 
	 * index, start.
	 * @param {number} start - The index of the first element to 
	 * remove. Negative values are relative to the end of the 
	 * array. / 
	 * @param {number} num - The number of array elements to 
	 * remove, including start. If omitted, all elements from array 
	 * index start to the end of the array are removed. / 
	 * @param {any} value - A list of one or more values to be 
	 * added to the array starting at index start. / Must specify a 
	 * value for num, to use this argument.
	 */
	splice(start: number, num?: number, value?: any): any[];
	/**
	 * Returns the value of the deleted array element.
	 * @summary Removes the first element from the array, decreases 
	 * the length by 1, and returns the value of the element.
	 */
	shift(): any;
	/**
	 * Yields the same result as array. join() when called without 
	 * a parameter.  Returns a comma-separated list of all the 
	 * elements of the array.
	 * @summary Converts an array to a string and returns the 
	 * string.
	 */
	toString(): string;
	/**
	 * Converts an array to a string and returns the string 
	 * (localized).
	 */
	toLocaleString(): string;
	/**
	 * Returns the new array length.
	 * @summary Adds one or more elements to the beginning of the 
	 * array.
	 * @param {any} value - The values of one or more elements to 
	 * be added to the beginning of the array.
	 */
	unshift(value: any): number;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * built-in classes.
	 */
	toSource(): string;
}

/**
 * A global object containing a set of math functions and 
 * constants.
 * @class
 */
export declare class Math {
	/** Euler's constant and the base of natural logarithms. */
	readonly E: number;
	/** The natural logarithm of 10. */
	readonly LN10: number;
	/** The natural logarithm of 2. */
	readonly LN2: number;
	/** The base 2 logarithm of e. */
	readonly LOG2E: number;
	/** The base 10 logarithm of e. */
	readonly LOG10E: number;
	/** The ratio of the circumference of a circle to its diameter. */
	readonly PI: number;
	/** The reciprocal of the square root of 1/2. */
	readonly SQRT1_2: number;
	/** The square root of 2. */
	readonly SQRT2: number;
	/**
	 * Returns the absolute value of a number.
	 * @param {number} x - A number.
	 */
	abs(x: number): number;
	/**
	 * Returns the arc cosine(in radians) of a number.
	 * @param {number} x - A number.
	 */
	acos(x: number): number;
	/**
	 * Returns the arc sin(in radians) of a number.
	 * @param {number} x - A number.
	 */
	asin(x: number): number;
	/**
	 * Returns the arc tangent(in radians) of a number.
	 * @param {number} x - A number.
	 */
	atan(x: number): number;
	/**
	 * Returns the arc tangent of the quotient of its arguments 
	 * (y/x).
	 * @param {number} y - A number.
	 * @param {number} x - A number.
	 */
	atan2(y: number, x: number): number;
	/**
	 * Rounds the number up to the nearest integer.
	 * @param {number} x - A number.
	 */
	ceil(x: number): number;
	/**
	 * Returns the cosine of an angle provided in radians.
	 * @param {number} x - An angle, in radians.
	 */
	cos(x: number): number;
	/**
	 * Returns Math.E raised to the power of a number.
	 * @param {number} x - A number.
	 */
	exp(x: number): number;
	/**
	 * Rounds a number down to the nearest integer.
	 * @param {number} x - A number.
	 */
	floor(x: number): number;
	/**
	 * Returns the natural logarithm of a number.
	 * @param {number} x - A number.
	 */
	log(x: number): number;
	/**
	 * Returns the largest of zero or more numbers.
	 * @param {number} value - Numbers.
	 */
	max(value: number): number;
	/**
	 * Returns the smallest of zero or more numbers.
	 * @param {number} value - Numbers.
	 */
	min(value: number): number;
	/**
	 * Returns x raised to the power of y.
	 * @param {number} x - Numbers.
	 * @param {number} y
	 */
	pow(x: number, y: number): number;
	/**
	 * Returns a pseudo-random number from 0.0 up to but not 
	 * including 1.0.
	 */
	random(): number;
	/**
	 * Rounds a number to the nearest integer.
	 * @param {number} x - A number.
	 */
	round(x: number): number;
	/**
	 * Returns the sine of an angle provided in radians.
	 * @param {number} x - An angle, in radians.
	 */
	sin(x: number): number;
	/**
	 * Returns the square root of a number.
	 * @param {number} x - A number.
	 */
	sqrt(x: number): number;
	/**
	 * Returns the tangent of an angle provided in radians.
	 * @param {number} x - An angle, in radians.
	 */
	tan(x: number): number;
}

/**
 * If parameters are supplied, returns a new Date object 
 * holding the supplied date and time.
 * @summary A date/time object.
 * @class
 */
export declare class Date {
	/**
	 * If parameters are supplied, returns a new Date object 
	 * holding the supplied date and time.
	 * @summary Returns a new Date object holding the current date 
	 * and time.
	 * @param {number} year - The year expressed in four digits.
	 * @param {number} month - An integer value from 0 (Jan) to 11 
	 * (Dec).
	 * @param {number} day - An integer value from 1 to 31, If this 
	 * argument is not supplied, its value is set to 0.
	 * @param {number} hours - An integer value from 0 (midnight) 
	 * to 23 (11 PM). If this argument is not supplied, its value 
	 * is set to 0.
	 * @param {number} min - An integer value from 0 to 59. If this 
	 * argument is not supplied, its value is set to 0.
	 * @param {number} sec - An Integer value from 0 to 59. If this 
	 * argument is not supplied, its value is set to 0.
	 * @param {number} ms - An integer value from 0 to 999. If this 
	 * argument is not supplied, its value is set to 0.
	 */
	Date(year: number, month?: number, day?: number, hours?: number, min?: number, sec?: number, ms?: number): Date;
	/**
	 * Parses a string, returning a new Date object. The string 
	 * should be similar to the string returned bt toString().
	 * @param {string} text - The string to parse.
	 */
	parse(text: string): Date;
	/**
	 * To indicate for a year from 1900 to 1999, you can specify a 
	 * value from 0 to 99.
	 * @summary Returns the number of milliseconds between midnight 
	 * January 1, 1970, UTC, and the specified time.
	 * @param {number} year - The year expressed in four digits, 
	 * for example, 2001. / To indicate for a year from 1900 to 
	 * 1999, you can specify a value from 0 to 99.
	 * @param {number} month - An integer value from 0 (Jan) to 11 
	 * (Dec).
	 * @param {number} day - An integer value from 1 to 31, If this 
	 * argument is not supplied, its value is set to 0.
	 * @param {number} hours - An integer value from 0 (midnight) 
	 * to 23 (11 PM). If this argument is not supplied, its value 
	 * is set to 0.
	 * @param {number} min - An integer value from 0 to 59. If this 
	 * argument is not supplied, its value is set to 0.
	 * @param {number} sec - An Integer value from 0 to 59. If this 
	 * argument is not supplied, its value is set to 0.
	 * @param {number} ms - An integer value from 0 to 999. If this 
	 * argument is not supplied, its value is set to 0.
	 */
	UTC(year: number, month?: number, day?: number, hours?: number, min?: number, sec?: number, ms?: number): Date;
	/**
	 * Returns the day of the month of the specified Date object in 
	 * local time.
	 */
	getDate(): number;
	/**
	 * This is an integer from 0 (Sunday) to 6 (Saturday).  Returns 
	 * the day of the week for date.
	 * @summary Returns the day of the week for the specified Date 
	 * object in local time.
	 */
	getDay(): number;
	/**
	 * Returns the year of the specified Date object, as a 
	 * difference from 1900, in local time.
	 */
	getYear(): number;
	/**
	 * Returns the four digit year of the specified Date object in 
	 * local time.
	 */
	getFullYear(): number;
	/**
	 * Returns the hour of the specified Date object in local time.
	 */
	getHours(): number;
	/**
	 * Returns the milliseconds of the specified Date object in 
	 * local time.
	 */
	getMilliseconds(): number;
	/**
	 * Returns the minutes of the specified Date object in local 
	 * time.
	 */
	getMinutes(): number;
	/**
	 * Returns the month of the specified Date object in local 
	 * time.
	 */
	getMonth(): number;
	/**
	 * Returns the seconds of the specified Date object in local 
	 * time.
	 */
	getSeconds(): number;
	/**
	 * Returns the number of milliseconds since midnight January 
	 * 1,1970 UTC for the specified Date object.
	 */
	getTime(): number;
	/**
	 * Returns the difference in minutes between the computer's 
	 * local time and UTC.
	 */
	getTimezoneOffset(): number;
	/**
	 * Returns the day of the month of the specified Date object 
	 * according to UTC.
	 */
	getUTCDate(): number;
	/**
	 * Returns the day of the week for the specified Date object 
	 * according to UTC.
	 */
	getUTCDay(): number;
	/**
	 * Returns the four digit year of the specified Date object 
	 * according to UTC.
	 */
	getUTCFullYear(): number;
	/**
	 * Returns the hour of the specified Date object according to 
	 * UTC.
	 */
	getUTCHours(): number;
	/**
	 * Returns the milliseconds of the specified Date object 
	 * according to UTC.
	 */
	getUTCMilliseconds(): number;
	/**
	 * Returns the minutes of the specified Date object according 
	 * to UTC.
	 */
	getUTCMinutes(): number;
	/**
	 * Returns the month of the specified Date object according to 
	 * UTC.
	 */
	getUTCMonth(): number;
	/**
	 * Returns the seconds of the specified Date object according 
	 * to UTC.
	 */
	getUTCSeconds(): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970.
	 * @summary Sets the day of the month of a specified Date 
	 * object according to local time.
	 * @param {number} date - An integer from 1 to 31 indicating 
	 * the day of the month. / 
	 */
	setDate(date: number): number;
	/**
	 * This method can also set month and date if those arguments 
	 * are specified. Returns the number of milliseconds between 
	 * the new date and midnight, January 1, 1970.
	 * @summary Sets the year of a specified Date object according 
	 * to local time.
	 * @param {number} year - A four-digit integer value indicating 
	 * the year to set. / 
	 */
	setFullYear(year: number): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970.
	 * @summary Sets the hours of a specified Date object according 
	 * to local time.
	 * @param {number} hour - An integer value from 0 (midnight) to 
	 * 23 (11 PM). / 
	 */
	setHours(hour: number): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970.
	 * @summary Sets the milliseconds of a specified Date object 
	 * according to local time.
	 * @param {number} ms - An integer value from 0 to 999.
	 */
	setMilliseconds(ms: number): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970.
	 * @summary Sets the minutes of a specified Date object 
	 * according to local time.
	 * @param {number} minutes - An integer value from 0 to 59.
	 */
	setMinutes(minutes: number): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970.
	 * @summary Sets the seconds of a specified Date object 
	 * according to local time.
	 * @param {number} seconds - An integer value from 0 to 59.
	 */
	setSeconds(seconds: number): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970.
	 * @summary Sets the month of a specified Date object according 
	 * to local time.
	 * @param {number} month - An integer value from 0 (Jan) to 11 
	 * (Dec). / 
	 */
	setMonth(month: number): number;
	/**
	 * Returns the number of milliseconds between the new date and 
	 * midnight, January 1, 1970 in UTC time.
	 * @summary Sets the date of a specified Date object according 
	 * to universal time.
	 * @param {number} date - An integer from 1 to 31 indicating 
	 * the day of the month. / 
	 */
	setUTCDate(date: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970, in UTC.
	 * @summary Sets the year of a specified Date object according 
	 * to UTC, can also set the month and date.
	 * @param {number} year - The year expressed in four digits. / 
	 */
	setUTCFullYear(year: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970, in UTC.
	 * @summary Sets the hours of a specified Date object according 
	 * to UTC.
	 * @param {number} hours - An integer value from 0 (midnight) 
	 * to 23 (11 PM) indicating the hour to be set. / 
	 */
	setUTCHours(hours: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970, in UTC.
	 * @summary Sets the milliseconds of a specified Date object 
	 * according to UTC.
	 * @param {number} ms - An integer value in the range of 0 to 
	 * 999 indicating the number of milliseconds to set. / 
	 */
	setUTCMilliseconds(ms: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970, in UTC.
	 * @summary Sets the minutes of a specified Date object 
	 * according to UTC.
	 * @param {number} min - An integer value in the range 0 to 59 
	 * indicating the number of minutes to be set. / 
	 */
	setUTCMinutes(min: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970, in UTC.
	 * @summary Sets the seconds of a specified Date object 
	 * according to UTC.
	 * @param {number} sec - An integer value in the range 0 to 59 
	 * indicating the number of seconds to set. / 
	 */
	setUTCSeconds(sec: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970, in UTC.
	 * @summary Sets the month of a specified Date object according 
	 * to UTC.
	 * @param {number} month - An integer value in the range 0 
	 * (Jan.) to 11 (Dec.) indicating the month to set.
	 */
	setUTCMonth(month: number): number;
	/**
	 * Returns the value of ms.
	 * @summary Sets the date of a specified Date object in 
	 * milliseconds since midnight, January 1, 1970.
	 * @param {number} ms - An integer indicating the number of 
	 * milliseconds between the date set and midnight, January 1, 
	 * 1970. / 
	 */
	setTime(ms: number): number;
	/**
	 * Returns the number of milliseconds between the date set and 
	 * midnight, January 1, 1970.
	 * @summary Sets the year of a specified Date object according 
	 * to local time, as a difference between the current year and 
	 * 1900.
	 * @param {number} year - An integer value indicating the year 
	 * to set. / The method interprets a 1- or 2- digit value to 
	 * mean the 1900s; for example, 13 is interpreted to mean 1913.
	 */
	setYear(year: number): number;
	/** Returns the date as a string. */
	toDateString(): string;
	/** Returns the time as a string. */
	toTimeString(): string;
	/**
	 * Returns a string value representing the date and time stored 
	 * in the Date object in human readable format (localized).
	 */
	toLocaleString(): string;
	/** Returns the date as a localized string. */
	toLocaleDateString(): string;
	/** Returns the time as a localized string. */
	toLocaleTimeString(): string;
	/**
	 * Returns the date and time adjusted to GMT (UTC) as a string.
	 */
	toGMTString(): string;
	/** Returns the date and time adjusted to UTC as a string. */
	toUTCString(): string;
	/**
	 * Returns the following string is an example of the format 
	 * returned by this method: Mon Aug 13, 10:54:21 GMT-0700 2001.
	 * @summary Returns a string value representing the date and 
	 * time stored in the Date object in human readable format.
	 */
	toString(): string;
	/**
	 * @summary The valueOf() method returns the number of 
	 * milliseconds that have passed since midnight, Returns an 
	 * integer.
	 */
	valueOf(): number;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * built-in classes.
	 */
	toSource(): string;
}

/**
 * The Function constructor parses the argument list and 
 * creates a Function object.
 * @summary Wraps a built-in or JavaScript function.
 * @class
 */
export declare class Function {
	/**
	 * This property is deprecated; use the arguments property 
	 * within the function body.
	 * @summary The function arguments, packed into an array.
	 * @deprecated
	 */
	arguments: Object;
	/** The number of formal arguments. */
	readonly length: number;
	/**
	 * This property is deprecated; use the length property 
	 * instead.
	 * @summary The number of formal arguments.
	 * @deprecated
	 */
	readonly arity: number;
	/** The function name. */
	readonly name: string;
	/**
	 * The Function constructor parses the argument list and 
	 * creates a Function object.
	 * @summary The list of formal arguments, separated by commas.
	 * @param {string} _arguments - The list of formal arguments, 
	 * separated by commas. / The formal arguments can also be 
	 * supplied one by one; in this case, the last argument to the 
	 * Function constructor is considered to be the function body.
	 * @param {string} body - The body of the function to create.
	 */
	Function(_arguments: string, body: string): Function;
	/**
	 * This function is different from call(); here, the arguments 
	 * are suppliedas an Array object.
	 * @summary Apply a this object and an argument list to a 
	 * function.
	 * @param {Object} thisObj - The object to be used as this.
	 * @param {any[]} args - An array of arguments.
	 */
	apply(thisObj: Object, args: any[]): any;
	/**
	 * This function is different from apply(); here, the arguments 
	 * are supplied one by one.
	 * @summary Apply a this object and arguments to a function.
	 * @param {Object} thisObj - The object to be used as this.
	 * @param {any} argument - The first agument to the function. 
	 * Add as many as needed.
	 */
	call(thisObj: Object, argument: any): any;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * JavaScript functions.
	 */
	toSource(): string;
	/** Returns the function definition as a string. */
	toString(): string;
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
 * @summary The global methods and properties for ExtendScript.
 * @class
 */
export declare class global {
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
	 * into the string. There may be more than one argument.
	 */
	localize(what: string, argument?: any): string;
	/**
	 * Returns true if the supplied string is a valid XML name.
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
 * @summary A character string. Each character is adressable by 
 * index.
 * @class
 */
export declare class String {
	/** The length of the string. */
	readonly length: number;
	/**
	 * @summary Returns a string representation of the value given 
	 * as an argument.
	 * @param {any} value - A number, variable, or object to 
	 * convert to a string. / 
	 */
	String(value: any): string;
	/**
	 * Returns a string created by concatenation one or more 
	 * characters specified as ASCII values.
	 * @param {number} value1 - One or more ASCII values.
	 */
	fromCharCode(value1: number): string;
	/** Returns itself. */
	toString(): string;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * built-in classes.
	 */
	toSource(): string;
	/** Returns itself. */
	valueOf(): string;
	/**
	 * Returns the character at the specified index.
	 * @param {number} index - An integer between 0 and 
	 * string.length -1, specifying the character to return.
	 */
	charAt(index: number): string;
	/**
	 * Returns the Unicode value of the character at the given 
	 * index.
	 * @param {number} index - An integer between 0 and 
	 * string.length -1, specifying the character.
	 */
	charCodeAt(index: number): number;
	/**
	 * Those values are concatenated with the original string, the 
	 * result is returned. The original string is not effected.  
	 * Returns the concatenated string.
	 * @summary If necessary, converts the one or more given values 
	 * to strings.
	 * @param {string} value - The values to be concatenated with 
	 * the given string.
	 */
	concat(value: string): string;
	/**
	 * Returns the index within the string of the first occurrence 
	 * of the specified string, starting the search at fromIndex if 
	 * provided.
	 * @param {string} searchValue - The string for which to 
	 * search.
	 * @param {number} offset - The starting offset of the search.
	 */
	indexOf(searchValue: string, offset?: number): number;
	/**
	 * The string is searched backward, starting at fromIndex.  
	 * Returns the index within the string where the last 
	 * occurrence of searchValue was found, or -1 if it was not 
	 * found.
	 * @summary Returns the index within the string of the last 
	 * occurrence of the specified value.
	 * @param {string} searchValue - The string for which to 
	 * search.
	 * @param {number} offset - The starting offset of the search.
	 */
	lastIndexOf(searchValue: string, offset?: number): number;
	/**
	 * The substring begins at startSlice, and includes all 
	 * characters up to, but not including the character at the 
	 * index endSlice.   A negative value indexes from the end of 
	 * the string.  For example, a negative value for startSlice is 
	 * resolved as: string. length + startSlice.  The original 
	 * string is unchanged.  Returns a substring of characters from 
	 * the given string, starting at startSlice and ending with 
	 * endSlice-1.
	 * @summary Extracts a substring of the given string and 
	 * returns it as a new string.
	 * @param {number} startSlice - The index at which to begin 
	 * extraction. / 
	 * @param {number} endSlice - The index at which to end 
	 * extraction. / If omitted, slice extracts to the end of the 
	 * string.
	 */
	slice(startSlice: number, endSlice?: number): string;
	/**
	 * The original string is unchanged.
	 * @summary Returns a new string which contains all the 
	 * characters of the original string converted to lowercase.
	 */
	toLowerCase(): string;
	/**
	 * The original string is unchanged.
	 * @summary Returns a new string which contains all the 
	 * characters of the original string converted to uppercase.
	 */
	toUpperCase(): string;
	/**
	 * The original string is unchanged.
	 * @summary Returns a new string which contains all the 
	 * characters of the original string converted to lowercase 
	 * (localized).
	 */
	toLocaleLowerCase(): string;
	/**
	 * The original string is unchanged.
	 * @summary Returns a new string which contains all the 
	 * characters of the original string converted to uppercase 
	 * (localized).
	 */
	toLocaleUpperCase(): string;
	/**
	 * Performs a localized comparison of two strings.
	 * @param {string} what - The string to compare with.
	 */
	localeCompare(what: string): number;
	/**
	 * Matches a string against a regular expression.
	 * @param {RegExp} regexp - The regular expression to use.
	 */
	match(regexp: RegExp): any[];
	/**
	 * @param {any} what
	 * @param {string} _with
	 */
	replace(what: any, _with: string): string;
	/**
	 * @param {RegExp} search
	 */
	search(search: RegExp): number;
	/**
	 * The substrings are created by breaking the original string 
	 * at places that match delimiter, the delimiter characters are 
	 * removed.  Returns an array whose elements are the 
	 * substrings.
	 * @summary Splits a string into a group of substrings, places 
	 * those strings in an array, and returns the array.
	 * @param {string} delimiter - Specifies the string to use for 
	 * delimiting. / If delimiter is omitted, the array returned 
	 * contains one element, consisting of the entire string.
	 * @param {number} limit
	 */
	split(delimiter: string, limit: number): string;
	/**
	 * The original string is unchanged.  Returns a string 
	 * containing the extracted characters.
	 * @summary Returns a string containing the characters 
	 * beginning at the specified index, start, through the 
	 * specified number of characters.
	 * @param {number} start - Location at which to begin 
	 * extracting characters. / 
	 * @param {number} length - (OptIonal) The number of characters 
	 * to extract. / 
	 */
	substr(start: number, length: number): string;
	/**
	 * The original string is unchanged.  Returns a substring of 
	 * characters from the given string, starting at indexA and 
	 * ending with indexB-1.
	 * @summary Returns a substring of the given string by 
	 * extracting characters from indexA up to but not including 
	 * indexB.
	 * @param {number} indexA - The index to begin extracting. / 
	 * @param {number} indexB - (Optional) The index at which to 
	 * end extraction. / If omitted, slice extracts to the end of 
	 * the string.
	 */
	substring(indexA: number, indexB: number): string;
	/**
	 * Returns a string consisting of this string enclosed in a <a> 
	 * tag.
	 * @param {string} name - The text to be stored in the anchors' 
	 * name attribute.
	 */
	anchor(name: string): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <big> tag.
	 */
	big(): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <blink> tag.
	 */
	blink(): string;
	/**
	 * Returns a string consisting of this string enclosed in a <b> 
	 * tag.
	 */
	bold(): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <tt> tag.
	 */
	fixed(): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <font> tag.
	 * @param {string} color - The value to be stored in the tag's 
	 * color attribute.
	 */
	fontcolor(color: string): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <font> tag.
	 * @param {number} size - The value to be stored in the tag's 
	 * size attribute.
	 */
	fontsize(size: number): string;
	/**
	 * Returns a string consisting of this string enclosed in a <i> 
	 * tag.
	 */
	italics(): string;
	/**
	 * Returns a string consisting of this string enclosed in a <a> 
	 * tag.
	 * @param {string} href - The value to be stored in the tag's 
	 * href attribute.
	 */
	link(href: string): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <small> tag.
	 */
	small(): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <strike> tag.
	 */
	strike(): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <sub> tag.
	 */
	sub(): string;
	/**
	 * Returns a string consisting of this string enclosed in a 
	 * <sup> tag.
	 */
	sup(): string;
}

/**
 * @summary Wraps a numeric value.
 * @class
 */
export declare class Number {
	/** A constant representing the smallest representable number. */
	readonly MIN_VALUE: number;
	/** A constant representing the largest representable number. */
	readonly MAX_VALUE: number;
	/** A constant representing the special "Not a Number" value. */
	readonly NaN: number;
	/** A constant representing negative infinity. */
	readonly NEGATIVE_INFINITY: number;
	/** A constant representing positive infinity. */
	readonly POSITIVE_INFINITY: number;
	/**
	 * @summary Returns a new Number object set to the value of the 
	 * argument converted to a number.
	 * @param {any} value - The value of the object being created. 
	 * / 
	 */
	Number(value: any): number;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * built-in classes.
	 */
	toSource(): number;
	/**
	 * Returns the value of a Number object converted to a string.
	 * @param {number} radix - The optional conversion radix.
	 */
	toString(radix?: number): number;
	/**
	 * Returns the value of a Number object converted to a string, 
	 * using localized conventions.
	 */
	toLocaleString(): number;
	/**
	 * Converts the Number object to a string with fixed decimals.
	 * @param {number} decimals - The number of decimals.
	 */
	toFixed(decimals: number): number;
	/**
	 * Converts the Number object to a string in scientific 
	 * notation.
	 * @param {number} decimals - The number of decimals.
	 */
	toExponential(decimals: number): number;
	/**
	 * Converts the Number object to a string in either scientific 
	 * or fixed notation, epending on its value.
	 * @param {number} decimals - The number of decimals.
	 */
	toPrecision(decimals: number): number;
	/** Returns the value of a Number object as a primitive number. */
	valueOf(): number;
}

/**
 * @summary Wraps a Boolean value.
 * @class
 */
export declare class Boolean {
	/**
	 * @summary Creates and returns a new Boolean object set to the 
	 * value of the argument converted to a boolean.
	 * @param {any} value - The value to be converted to a Boolean. 
	 * / 
	 */
	Boolean(value: any): boolean;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * built-in classes.
	 */
	toSource(): string;
	/**
	 * The method returns the string true if the primitive value of 
	 * bool is true; otherwise it returns the string false.
	 * @summary Returns the string representation of the value of 
	 * bool.
	 */
	toString(): string;
	/**
	 * The method returns true if the primitive value of bool is 
	 * true; otherwise it returns false.
	 * @summary Returns the primitive value of bool.
	 */
	valueOf(): boolean;
}

/**
 * A string containing any combination of the letters i, m, g:
 * "i" -- ignore case in pattern matching
 * "m" -- treat the string as multiple lines
 * "g" -- do global pattern matching
 * @summary Wraps a regular expression.
 * @class
 */
export declare class RegExp {
	/** The matched subexpression #1. */
	readonly $1: string;
	/** The matched subexpression #2. */
	readonly $2: string;
	/** The matched subexpression #3. */
	readonly $3: string;
	/** The matched subexpression #4. */
	readonly $4: string;
	/** The matched subexpression #5. */
	readonly $5: string;
	/** The matched subexpression #6. */
	readonly $6: string;
	/** The matched subexpression #7. */
	readonly $7: string;
	/** The matched subexpression #8. */
	readonly $8: string;
	/** The matched subexpression #9. */
	readonly $9: string;
	/** The last match. */
	readonly lastMatch: string;
	/** The value of the last matched subexpression. */
	readonly lastParen: string;
	/** The string before the match. */
	readonly leftContext: string;
	/** The string after the match. */
	readonly rightContext: string;
	/** Indicates whether the match is a global match. */
	global: boolean;
	/** Indicates whether the match is not case sensitive. */
	ignoreCase: boolean;
	/** Indicates whether the match matches multiple lines. */
	multiline: boolean;
	/** The original input string. */
	input: string;
	/**
	 * A string containing any combination of the letters i, m, g:
	 * "i" -- ignore case in pattern matching
	 * "m" -- treat the string as multiple lines
	 * "g" -- do global pattern matching
	 * @summary Creates and returns a new RegExp object set to the 
	 * value of the argument converted to a regular expression.
	 * @param {string} pattern - The pattern to convert.
	 * @param {string} flags - Flags that control how the 
	 * conversion is performed. / A string containing any 
	 * combination of the letters i, m, g:
	 * "i" -- ignore case in pattern matching
	 * "m" -- treat the string as multiple lines
	 * "g" -- do global pattern matching
	 */
	RegExp(pattern: string, flags?: string): RegExp;
	/** Converts this RegExp object to a string. */
	toString(): string;
	/**
	 * Compiles a string to a regular expression. Returns true if 
	 * the compilation was successful.
	 * @param {string} pattern - The pattern to compile.
	 */
	compile(pattern: string): boolean;
	/**
	 * The return value is an array of matches, with the first 
	 * element containing the match, and successive elements 
	 * containing the results of any matching subexpression in 
	 * their order of appearance. If there is no match, the result 
	 * is null.
	 * @summary Execute a regular expression.
	 * @param {string} text - The string to match.
	 */
	exec(text: string): any[];
	/**
	 * Execute a regular expression, and return true if there is a 
	 * match.
	 * @param {string} text - The string to match.
	 */
	test(text: string): boolean;
}

/**
 * Wraps a runtime error.
 * @class
 */
export declare class Error {
	/** The error message. */
	description: string;
	/**
	 * Creates a new Error object.
	 * @param {string} msg - The error message.
	 * @param {string} file - The name of the file.
	 * @param {number} line - The line number.
	 */
	Error(msg: string, file?: string, line?: number): Error;
	/** Convert this object to a string. */
	toString(): string;
	/**
	 * Creates a string representation of this object that can be 
	 * fed back to eval() to re-create an object. Works only with 
	 * built-in classes.
	 */
	toSource(): string;
}

/**
 * The value stored in the object is the absolute path. The 
 * file that the path refers to does not need to exist.If the 
 * path refers to an existing folder:
 * The File function returns a Folder object instead of a File 
 * object.
 * The new operator returns a File object for a nonexisting 
 * file with the same name.
 * @summary Represents a file in the local file system in a 
 * platform-independent manner.
 * @class
 */
export declare class File {
	/**
	 * This is a class property accessed through the File 
	 * constructor. Valid values are "Windows", "Macintosh", and 
	 * "Unix".
	 * @summary The name of the file system.
	 */
	readonly fs: string;
	/**
	 * If true, the object refers to a file system alias or 
	 * shortcut.
	 */
	readonly alias: boolean;
	/**
	 * The creation date of the referenced file, or null if the 
	 * object does not refer to a file on disk.
	 */
	readonly created: Date;
	/**
	 * Typically set by the file system, but a script can set it. 
	 * Setting this value clears any error message and resets the 
	 * error bit for opened files. Contains the empty string if 
	 * there is no error.
	 * @summary A string containing a message describing the most 
	 * recent file system error.
	 */
	error: string;
	/**
	 * If true, this object refers to a file or file-system alias 
	 * that actually exists in the file system.
	 */
	readonly exists: boolean;
	/**
	 * The platform-specific full path name for the referenced 
	 * file.
	 */
	readonly fsName: string;
	/** The full path name for the referenced file in URI notation. */
	readonly fullName: string;
	/** The full path name for the referenced file in URI notation. */
	readonly absoluteURI: string;
	/**
	 * The path name for the object in URI notation, relative to 
	 * the current folder.
	 */
	readonly relativeURI: string;
	/**
	 * The date of the referenced file's last modification, or null 
	 * if the object does not refer to a file on the disk.
	 */
	readonly modified: Date;
	/**
	 * The file name portion of the absolute URI for the referenced 
	 * file, without the path specification.
	 */
	readonly name: string;
	/**
	 * The localized name of the referenced file, without the path 
	 * specification.
	 */
	readonly displayName: string;
	/**
	 * The path portion of the absolute URI for the referenced 
	 * file, without the file name.
	 */
	readonly path: string;
	/** The Folder object for the folder that contains this file. */
	readonly parent: Folder;
	/**
	 * In Mac OS, the Mac OS file type.
	 * In Windows, "appl" for .EXE files, "shlb" for .DLL files and 
	 * "TEXT" for any other file.
	 * @summary The file type as a four-character string.
	 */
	readonly type: string;
	/**
	 * In Mac OS, the file creator as a four-character string. In 
	 * Windows or UNIX, value is "????".
	 */
	readonly creator: string;
	/**
	 * If the object references a file-system alias or shortcut, 
	 * the flag is altered on the alias, not on the original file.
	 * @summary When true, the file is not shown in the 
	 * platform-specific file browser.
	 */
	hidden: boolean;
	/**
	 * If the referenced file is a file-system alias or shortcut, 
	 * the flag is altered on the alias, not on the original file.
	 * @summary When true, prevents the file from being altered or 
	 * deleted.
	 */
	readonly: boolean;
	/**
	 * One of the values "Windows", "Macintosh", or "Unix".
	 * @summary How line feed characters are written in the file 
	 * system.
	 */
	lineFeed: string;
	/**
	 * Can be set only for a file that is not open, in which case 
	 * it truncates or pads the file with 0-bytes to the new 
	 * length.
	 * @summary The size of the file in bytes.
	 */
	length: number;
	/**
	 * One of the encoding constants listed in the JavaScript Tools 
	 * Guide. If the value is not recognized, uses the system 
	 * default encoding.A special encoder, BINARY, is used to read 
	 * binary files. It stores each byte of the file as one Unicode 
	 * character regardless of any encoding. When writing, the 
	 * lower byte of each Unicode character is treated as a single 
	 * byte to write.
	 * @summary Gets or sets the encoding for subsequent read/write 
	 * operations.
	 */
	encoding: string;
	/**
	 * When true, a read attempt caused the current position to be 
	 * at the end of the file, or the file is not open.
	 */
	readonly eof: boolean;
	/**
	 * The value stored in the object is the absolute path. The 
	 * file that the path refers to does not need to exist.If the 
	 * path refers to an existing folder:
	 * The File function returns a Folder object instead of a File 
	 * object.
	 * The new operator returns a File object for a nonexisting 
	 * file with the same name.
	 * @summary Creates and returns a new File object referring to 
	 * a given file system location.
	 * @param {string} path - The full or partial path name of the 
	 * file,  in platform-specific or URI format. / The value 
	 * stored in the object is the absolute path. The file that the 
	 * path refers to does not need to exist.If the path refers to 
	 * an existing folder:
	 * The File function returns a Folder object instead of a File 
	 * object.
	 * The new operator returns a File object for a nonexisting 
	 * file with the same name.
	 */
	File(path?: string): File;
	/**
	 * All special characters are encoded in UTF-8 and stored as 
	 * escaped characters starting with the percent sign followed 
	 * by two hexadecimal digits. For example, the string "my file" 
	 * is encoded as "my%20file".
	 * Special characters are those with a numeric value greater 
	 * than 127, except the following: / - _ . ! ~ * ' ( )
	 * See also encodeURI().
	 * @summary Encodes a string as required by RFC 2396, and 
	 * returns the encoded string.
	 * @param {string} name - The string to encode.
	 */
	encode(name: string): string;
	/**
	 * See also String.decodeURI().
	 * @summary Decodes a UTF-8 encoded string as required by RFC 
	 * 2396, and returns the decoded string.
	 * @param {string} uri - The UTF-8 encoded string to decode.
	 */
	decode(uri: string): string;
	/**
	 * Typical values are "ASCII", "binary", or "UTF-8".  For a 
	 * complete list of supported encodings, see the JavaScript 
	 * Tools Guide.
	 * @summary Reports whether a given encoding is available.
	 * @param {string} name - The encoding name. / Typical values 
	 * are "ASCII", "binary", or "UTF-8".  For a complete list of 
	 * supported encodings, see the JavaScript Tools Guide.
	 */
	isEncodingAvailable(name: string): boolean;
	/**
	 * Opens the built-in platform-specific file-browsing dialog in 
	 * which a user can select an existing file or multiple files, 
	 * and creates new File objects to represent the selected 
	 * files.
	 * If the user clicks OK, returns a File object for the 
	 * selected file, or an array of objects if multiple files are 
	 * selected.
	 * If the user cancels, returns null.
	 * @summary Opens a dialog so the user can select one or more 
	 * files to open.
	 * @param {string} prompt - The prompt text, displayed if the 
	 * dialog allows a prompt.
	 * @param {any} filter - A filter that limits the types of 
	 * files displayed in the dialog. / In Windows,  a filter 
	 * expression such as "Javascript files:*.jsx;All files:*.*".
	 * In Mac OS, a filter function that takes a File instance and 
	 * returns true if the file should be included in the display, 
	 * false if it should not.
	 * @param {boolean} multiSelect - When true, the user can 
	 * select multiple files and the return value is an array.
	 */
	openDialog(prompt: string, filter?: any, multiSelect?: boolean): File;
	/**
	 * Opens the built-in platform-specific file-browsing dialog in 
	 * which a user can select an existing file location to which 
	 * to save information, and creates a new File object to 
	 * represent the selected file location.
	 * If the user clicks OK, returns a File object for the 
	 * selected file location.
	 * If the user cancels, returns null.
	 * @summary Opens a dialog so the user can select a file name 
	 * to save to.
	 * @param {string} prompt - The prompt text, displayed if the 
	 * dialog allows a prompt.
	 * @param {any} filter - In Windows only, a filter that limits 
	 * the types of files displayed in the dialog. / In Windows 
	 * only,  a filter expression such as "Javascript 
	 * files:*.jsx;All files:*.*". Not used In Mac OS.
	 */
	saveDialog(prompt: string, filter?: any): File;
	/**
	 * If successful, creates and returns a new File object that 
	 * points to the resolved file system element. Returns null if 
	 * this object does not refer to an alias, or if the alias 
	 * could not be resolved.
	 * @summary Attempts to resolve the file-system alias or 
	 * shortcut that this object refers to.
	 */
	resolve(): File;
	/**
	 * Does not resolve aliases, but renames the referenced alias 
	 * or shortcut file itself. Returns true if the file was 
	 * successfully renamed.
	 * @summary Renames the associated file.
	 * @param {string} newName - The new file name, with no path 
	 * information.
	 */
	rename(newName: string): boolean;
	/**
	 * Does not resolve aliases; instead, deletes the referenced 
	 * alias or shortcut file itself. Returns true if the file was 
	 * successfully removed.
	 * IMPORTANT: Cannot be undone. It is recommended that you 
	 * prompt the user for permission before deleting.
	 * @summary Deletes the file associated with this object from 
	 * disk immediately, without moving it to the system trash.
	 */
	remove(): boolean;
	/**
	 * Changes the path specification of the referenced file.
	 * @param {string} path - A string containing the new path, 
	 * absolute or relative to the current folder.
	 */
	changePath(path: string): boolean;
	/**
	 * If no base path is supplied, the URI is relative to the path 
	 * of the current folder.  Returns a string containing the 
	 * relative URI.
	 * @summary Retrieves and returns the path for this file, 
	 * relative to the specified base path, in URI notation.
	 * @param {string} basePath - A base path in URI notation.
	 */
	getRelativeURI(basePath: string): string;
	/**
	 * You can use this method to run scripts, launch applications, 
	 * and so on.Returns true immediately if the application launch 
	 * was successful.
	 * @summary Executes or opens this file using the appropriate 
	 * application, as if it had been double-clicked in a file 
	 * browser.
	 */
	execute(): boolean;
	/**
	 * Differs from the class method openDialog() in that it 
	 * presets the current folder to this File object’s parent 
	 * folder and the current file to this object’s associated 
	 * file.
	 * If the user clicks OK, returns a File or Folder object for 
	 * the selected file or folder, or an array of objects.
	 * If the user cancels, returns null.
	 * @summary Opens the built-in platform-specific file-browsing 
	 * dialog, in which the user can select an existing file or 
	 * files, and creates new File objects to represent the 
	 * selected files.
	 * @param {string} prompt - A string containing the prompt 
	 * text, if the dialog allows a prompt.
	 * @param {any} filter - A filter that limits the types of 
	 * files displayed in the dialog. / In Windows,  a filter 
	 * expression such as "Javascript files:*.jsx;All files:*.*".
	 * In Mac OS, a filter function that takes a File instance and 
	 * returns true if the file should be included in the display, 
	 * false if it should not.
	 * @param {boolean} multiSelect - When true, the user can 
	 * select multiple files and the return value is an array.
	 */
	openDlg(prompt: string, filter?: any, multiSelect?: boolean): File;
	/**
	 * Differs from the class method saveDialog() in that it 
	 * presets the current folder to this File object’s parent 
	 * folder and the file to this object’s associated file.
	 * If the user clicks OK, returns a File object for the 
	 * selected file.
	 * If the user cancels, returns null.
	 * @summary Opens the built-in platform-specific file-browsing 
	 * dialog, in which the user can select an existing file 
	 * location to which to save information, and creates a new 
	 * File object to represent the selected file.
	 * @param {string} prompt - A string containing the prompt 
	 * text, if the dialog allows a prompt.
	 * @param {any} filter - In Windows only, a filter that limits 
	 * the types of files displayed in the dialog. / In Windows 
	 * only,  a filter expression such as "Javascript 
	 * files:*.jsx;All files:*.*". Not used In Mac OS.
	 */
	saveDlg(prompt: string, filter?: any): File;
	/** Converts this object to a string. */
	toString(): string;
	/**
	 * Pass the resulting string to eval() to recreate the object.
	 * @summary Creates and returns a serialized string 
	 * representation of this object.
	 */
	toSource(): string;
	/**
	 * The referenced file for this object must not yet exist on 
	 * disk. Returns true if the operation was successful.
	 * @summary Makes this file a file-system alias or shortcut to 
	 * the specified file.
	 * @param {string} path - A string containing the path of the 
	 * target file.
	 */
	createAlias(path: string): void;
	/**
	 * Returns true if the file was opened successfully.The method 
	 * attempts to detect the encoding of the open file. It reads a 
	 * few bytes at the current location and tries to detect the 
	 * Byte Order Mark character 0xFFFE. If found, the current 
	 * position is advanced behind the detected character and the 
	 * encoding property is set to one of the strings UCS-2BE, 
	 * UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character 
	 * is not found, it checks for zero bytes at the current 
	 * location and makes an assumption about one of the above 
	 * formats (except UTF-8). If everything fails, the encoding 
	 * property is set to the system encoding.
	 * IMPORTANT: Be careful about opening a file more than once. 
	 * The operating system usually permits you to do so, but if 
	 * you start writing to the file using two different File 
	 * objects, you can destroy your data.
	 * @summary Opens the referenced file for subsequent read/write 
	 * operations. The method resolves any aliases to find the 
	 * file.
	 * @param {string} mode - The read-write mode, a 
	 * single-character string. / One of these characters:
	 * r (read) Opens for reading. If the file does not exist or 
	 * cannot be found, the call fails.
	 * w (write) Opens a file for writing. If the file exists, its 
	 * contents are destroyed. If the file does not exist, creates 
	 * a new, empty file.
	 * e (edit) Opens an existing file for reading and writing.
	 * a (append) Opens an existing file for reading and writing, 
	 * and moves the current position to the end of the file.
	 * @param {string} _type - In Mac OS, the type of a newly 
	 * created file, a 4-character string. Ignored in Windows and 
	 * UNIX.
	 * @param {string} creator - In Mac OS, the creator of a newly 
	 * created file, a 4-character string. Ignored in Windows and 
	 * UNIX.
	 */
	open(mode: string, _type?: string, creator?: string): boolean;
	/**
	 * Returns true if the file was closed successfully, false if 
	 * an I/O error occurred.
	 * @summary Closes this open file.
	 */
	close(): boolean;
	/**
	 * Returns a string that contains up to the specified number of 
	 * characters. If a number of characters is not supplied, reads 
	 * from the current position to the end of the file. If the 
	 * file is encoded, multiple bytes might be read to create 
	 * single Unicode characters.
	 * @summary Reads the contents of the file, starting at the 
	 * current position.
	 * @param {number} chars - An integer specifying the number of 
	 * characters to read.
	 */
	read(chars?: number): string;
	/**
	 * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.  If 
	 * the file is encoded, multiple bytes might be read to create 
	 * a single Unicode character. Returns a string that contains 
	 * the character.
	 * @summary Reads a single text character from the file at the 
	 * current position.
	 */
	readch(): string;
	/**
	 * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.. If 
	 * the file is encoded, multiple bytes might be read to create 
	 * single Unicode characters. Returns a string that contains 
	 * the text.
	 * @summary Reads a single line of text from the file at the 
	 * current position.
	 */
	readln(): string;
	/**
	 * You can supply multiple text values; the strings are 
	 * concatenated to form a single string.For encoded files, 
	 * writing a single Unicode character may write multiple bytes. 
	 * Returns true if the write was successful.IMPORTANT: Be 
	 * careful not to write to a file that is open in another 
	 * application or object, as this can overwrite existing data.
	 * @summary Writes the specified text to the file at the 
	 * current position.
	 * @param {string} text - A text string to be written.
	 */
	write(text: string): boolean;
	/**
	 * You can supply multiple text values. The strings are 
	 * concatenated into a single string, which is written in the 
	 * file followed by one line-feed sequence, of the style 
	 * specified by this object's linefeed property.For encoded 
	 * files, writing a single Unicode character may write multiple 
	 * bytes.  Returns true if the write was successful.IMPORTANT: 
	 * Be careful not to write to a file that is open in another 
	 * application or object, as this can overwrite existing data.
	 * @summary Writes a string to the file at the current position 
	 * and appends a line-feed sequence.
	 * @param {string} text - A text string to be written.
	 */
	writeln(text: string): boolean;
	/**
	 * The new position cannot be less than 0 or greater than the 
	 * current file size. Returns true if the position was changed.
	 * @summary Seeks to a given position in the file.
	 * @param {number} pos - The new current position in the file 
	 * as an offset in bytes from the start, current position, or 
	 * end, depending on the mode.
	 * @param {number} mode - The seek mode. / One of:
	 * 0: Seek to absolute position, where pos=0 is the first byte 
	 * of the file. This is the default.
	 * 1: Seek relative to the current position.
	 * 2. Seek backward from the end of the file.
	 */
	seek(pos: number, mode?: number): boolean;
	/**
	 * Returns a number, the position index.
	 * @summary Retrieves the current position as a byte offset 
	 * from the start of the file.
	 */
	tell(): number;
	/**
	 * Resolves any aliases to find the source file. If a file 
	 * exists at the target location, it is overwritten.
	 * Returns true if the copy was successful.
	 * @summary Copies this object’s referenced file to the 
	 * specified target location.
	 * @param {string} target - A string with the URI path to the 
	 * target location, or a File object that references the target 
	 * location.
	 */
	copy(target: string): boolean;
}

/**
 * If the path name refers to an already existing disk file, a 
 * File object is returned instead.  Returns the new Folder 
 * object.
 * @summary Represents a file-system folder or directory in a 
 * platform-independent manner.
 * @class
 */
export declare class Folder {
	/**
	 * One of "Windows", "Macintosh", or "Unix".
	 * @summary The name of the current file system.
	 */
	readonly fs: string;
	/**
	 * Assign a Folder object or a string containing the new path 
	 * name to set the current folder. This is a class property 
	 * accessed through the Folder constructor.
	 * @summary A Folder object for the current folder.
	 */
	current: Folder;
	/**
	 * A Folder object for the folder containing the executable 
	 * image of the running application.
	 */
	readonly startup: Folder;
	/**
	 * In Mac OS, a Folder object for the folder containing the 
	 * bundle of the running application.
	 */
	readonly appPackage: Folder;
	/**
	 * In Windows, the value of %windir% (by default, C:\\Windows)
	 * In Mac OS, /System
	 * @summary A Folder object for the folder containing the 
	 * operating system files.
	 */
	readonly system: Folder;
	/**
	 * A Folder object for the folder containing deleted items. On 
	 * Windows, the trash folder is a virtual
	 * folder containing a database; therefore, the property value 
	 * is null on Windows.
	 */
	readonly trash: Folder;
	/** A Folder object for the default folder for temporary files. */
	readonly temp: Folder;
	/**
	 * In Windows, the value of %USERDATA% (by default, 
	 * C:\\Documents and Settings\\username\\Application Data)
	 * In Mac OS,  ~/Library/Application Support.
	 * @summary A Folder object for the folder containing the 
	 * user's application data.
	 */
	readonly userData: Folder;
	/**
	 * In Windows, the value of %APPDATA% (by default, 
	 * C:\\Documents and Settings\\All Users\\Application Data)
	 * In Mac OS, /Library/Application Support
	 * @summary The folder containing the application data for all 
	 * users.
	 */
	readonly appData: Folder;
	/**
	 * In Windows, the value of %CommonProgramFiles% (by default, 
	 * C:\\Program Files\\Common Files)
	 * In Mac OS, /Library/Application Support
	 * @summary A Folder object for the folder containing common 
	 * files for all programs installed by the user.
	 */
	readonly commonFiles: Folder;
	/**
	 * In Windows, C:\\Documents and Settings\\username\\My 
	 * Documents
	 * In Mac OS,  ~/Documents
	 * @summary A folder pointing to the user's My Documents 
	 * folder.
	 */
	readonly myDocuments: Folder;
	/**
	 * In Windows, C:\\Documents and Settings\\username\\Desktop
	 * In Mac OS, ~/Desktop
	 * @summary A Folder object for the folder that contains the 
	 * user’s desktop.
	 */
	readonly desktop: Folder;
	/**
	 * When true, the object refers to a file system alias or 
	 * shortcut.
	 */
	readonly alias: boolean;
	/**
	 * The creation date of the referenced folder, or null if the 
	 * object does not refer to a folder on disk.
	 */
	readonly created: Date;
	/**
	 * Typically set by the file system, but a script can set it. 
	 * Setting this value clears any error message and resets the 
	 * error bit for opened files. Contains the empty string if 
	 * there is no error.
	 * @summary A message describing the most recent file system 
	 * error.
	 */
	error: string;
	/**
	 * When true, this object refers to a folder that currently 
	 * exists in the file system.
	 */
	readonly exists: boolean;
	/**
	 * The platform-specific name of the referenced folder as a 
	 * full path name.
	 */
	readonly fsName: string;
	/**
	 * The full path name for the referenced folder in URI 
	 * notation. .
	 */
	readonly fullName: string;
	/**
	 * The full path name for the referenced folder in URI 
	 * notation.
	 */
	readonly absoluteURI: string;
	/**
	 * The path name for the referenced folder in URI notation, 
	 * relative to the current folder.
	 */
	readonly relativeURI: string;
	/**
	 * The date of the referenced folder's last modification, or 
	 * null if the object does not refer to a folder on disk.
	 */
	readonly modified: Date;
	/**
	 * The folder name portion of the absolute URI for the 
	 * referenced file, without the path specification.
	 */
	readonly name: string;
	/**
	 * The localized name portion of the absolute URI for the 
	 * referenced folder, without the path specification.
	 */
	readonly displayName: string;
	/**
	 * The path portion of the object absolute URI for the 
	 * referenced file, without the folder name.
	 */
	readonly path: string;
	/**
	 * TThe Folder object for the folder that contains this folder, 
	 * or null if this object refers to the root folder of a 
	 * volume.
	 */
	readonly parent: Folder;
	/**
	 * If the path name refers to an already existing disk file, a 
	 * File object is returned instead.  Returns the new Folder 
	 * object.
	 * @summary Creates and returns a new Folder object referring 
	 * to a given file-system location.
	 * @param {string} path - The absolute or relative path to the 
	 * folder associated with this object, specified in URI format. 
	 * / The value stored in the object is the absolute path.The 
	 * path need not refer to an existing folder. If the path 
	 * refers to an existing file, rather than a folder:
	 * The Folder() function returns a File object instead of a 
	 * Folder object.
	 * The new operator returns a Folder object for a nonexisting 
	 * folder with the same name.
	 */
	Folder(path?: string): Folder;
	/**
	 * All special characters are encoded in UTF-8 and stored as 
	 * escaped characters starting with the percent sign followed 
	 * by two hexadecimal digits. For example, the string "my file" 
	 * is encoded as "my%20file".
	 * Special characters are those with a numeric value greater 
	 * than 127, except the following: / - _ . ! ~ * ' ( )
	 * See also encodeURI().
	 * @summary Encodes a string as required by RFC 2396, and 
	 * returns the encoded string.
	 * @param {string} name - The string to encode.
	 */
	encode(name: string): string;
	/**
	 * See also String.decodeURI().
	 * @summary Decodes a UTF-8 encoded string as required by RFC 
	 * 2396, and returns the decoded string.
	 * @param {string} uri - The UTF-8 string to decode.
	 */
	decode(uri: string): string;
	/**
	 * Typical values are "ASCII", "binary", or "UTF-8".  For a 
	 * complete list of supported encodings, see the JavaScript 
	 * Tools Guide.
	 * @summary Reports whether a given encoding is available.
	 * @param {string} name - The encoding name. / Typical values 
	 * are "ASCII", "binary", or "UTF-8".  For a complete list of 
	 * supported encodings, see the JavaScript Tools Guide.
	 */
	isEncodingAvailable(name: string): boolean;
	/**
	 * Differs from the object method selectDlg() in that it does 
	 * not preselect a folder.
	 * If the user clicks OK, returns a File or Folder object for 
	 * the selected file or folder.
	 * If the user cancels, returns null.
	 * @summary Opens the built-in platform-specific file-browsing 
	 * dialog, and creates a new File or Folder object for the 
	 * selected file or folder.
	 * @param {string} prompt - The prompt text, if the dialog 
	 * allows a prompt.
	 */
	selectDialog(prompt: string): Folder;
	/**
	 * If successful, creates and returns a new Folder object that 
	 * points to the resolved file system element. Returns null if 
	 * this object does not refer to an alias, or if the alias 
	 * could not be resolved.
	 * @summary Attempts to resolve the file-system alias or 
	 * shortcut that this object refers to.
	 */
	resolve(): Folder;
	/**
	 * Does not resolve aliases, but renames the referenced alias 
	 * or shortcut file itself. Returns true if the folder was 
	 * successfully renamed.
	 * @summary Renames the associated folder.
	 * @param {string} newName - The new folder name, with no path 
	 * information.
	 */
	rename(newName: string): boolean;
	/**
	 * Folders must be empty before they can be deleted. Does not 
	 * resolve aliases; instead, deletes the referenced alias or 
	 * shortcut file itself. Returns true if the file was 
	 * successfully removed.
	 * IMPORTANT: Cannot be undone. It is recommended that you 
	 * prompt the user for permission before deleting.
	 * @summary Deletes the folder associated with this object from 
	 * disk immediately, without moving it to the system trash.
	 */
	remove(): boolean;
	/**
	 * Changes the path specification of the referenced folder.
	 * @param {string} path - A string containing the new path, 
	 * absolute or relative to the current folder.
	 */
	changePath(path: string): boolean;
	/**
	 * If no base path is supplied, the URI is relative to the path 
	 * of the current folder.  Returns a string containing the 
	 * relative URI.
	 * @summary Retrieves and returns the path for this file, 
	 * relative to the specified base path, in URI notation.
	 * @param {string} basePath - A base path in URI notation.
	 */
	getRelativeURI(basePath?: string): string;
	/**
	 * Returns true immediately if the folder was opened 
	 * successfully.
	 * @summary Opens this folder in the platform-specific file 
	 * browser (as if it had been double-clicked in the file 
	 * browser).
	 */
	execute(): boolean;
	/** Converts this object to a string. */
	toString(): string;
	/**
	 * Pass the resulting string to eval() to recreate the object.
	 * @summary Creates and returns a serialized string 
	 * representation of this object.
	 */
	toSource(): string;
	/**
	 * Differs from the class method selectDialog() in that it 
	 * preselects this folder.
	 * If the user clicks OK, returns a File or Folder object for 
	 * the selected file or folder.
	 * If the user cancels, returns null.
	 * @summary Opens the built-in platform-specific file-browsing 
	 * dialog, and creates a new File or Folder object for the 
	 * selected file or folder.
	 * @param {string} prompt - The prompt text, if the dialog 
	 * allows a prompt.
	 */
	selectDlg(prompt: string): Folder;
	/**
	 * Returns an array of File and Folder objects, or null if this 
	 * object's referenced folder does not exist.
	 * @summary Retrieves the contents of this folder, filtered by 
	 * the supplied mask.
	 * @param {any} mask - A search mask for file names, specified 
	 * as a string or a function. / A mask string can contain 
	 * question mark (?) and asterisk (*) wild cards. Default is 
	 * "*", which matches all file names.
	 * Can also be the name of a function that takes a File or 
	 * Folder object as its argument. It is called for each file or 
	 * folder found in the search; if it returns true, the object 
	 * is added to the return array.
	 * NOTE: In Windows, all aliases end with the extension .lnk. 
	 * ExtendScript strips this from the file name when found, in 
	 * order to preserve compatibility with other operating 
	 * systems. You can search for all aliases by supplying the 
	 * search mask "*.lnk", but note that such code is not 
	 * portable.
	 */
	getFiles(mask: any): any[];
	/**
	 * Returns true if the folder was created.
	 * @summary Creates a folder at the location given by this 
	 * object's path property.
	 */
	create(): boolean;
}

/**
 * If the connection is shut down or does not exist, the 
 * property contains the empty string.
 * @summary Creates a TCP/IP connection, or establishes a 
 * TCP/IP server.
 * @class
 */
export declare class Socket {
	/**
	 * If the connection is shut down or does not exist, the 
	 * property contains the empty string.
	 * @summary The name of the remote computer when a connection 
	 * is established.
	 */
	readonly host: string;
	/**
	 * Typical values are "ASCII", "BINARY", or "UTF-8".
	 * @summary Sets or retrieves the name of the encoding used to 
	 * transmit data.
	 */
	encoding: string;
	/**
	 * A message describing the most recent error. Setting this 
	 * value clears any error message.
	 */
	error: string;
	/** When true, the receive buffer is empty. */
	readonly eof: boolean;
	/** When true, the connection is active. */
	readonly connected: boolean;
	/**
	 * The timeout in seconds to be applied to read or write 
	 * operations.
	 */
	timeout: number;
	/** Creates a new Socket object. */
	Socket(): Socket;
	/**
	 * The call to open() and the call to listen() are mutually 
	 * exclusive. Call one function or the other, not both.
	 * @summary Opens the connection for subsequent read/write 
	 * operations.
	 * @param {string} host - The server to connect to. / This can 
	 * be a DNS name, an IPv4 address, or an IPv6 address, followed 
	 * by a colon and a port number.
	 * @param {string} encoding - The encoding to be used for the 
	 * connection / Typical values are "ASCII", "binary", or 
	 * "UTF-8".
	 */
	open(host: string, encoding?: string): boolean;
	/**
	 * The call to open() and the call to listen()are mutually 
	 * exclusive. Call one function or the other, not both.
	 * @summary Instructs the object to start listening for an 
	 * incoming connection.
	 * @param {number} port - The TCP/IP port number to listen on. 
	 * / Valid port numbers are 1 to 65535. Typical values are 80 
	 * for a Web server, 23 for a Telnet server and so on.
	 * @param {string} encoding - The encoding to be used for the 
	 * connection / Typical values are "ASCII", "BINARY", or 
	 * "UTF-8".
	 */
	listen(port: number, encoding?: string): boolean;
	/**
	 * Returns true if the connection was closed, false on I/O 
	 * errors.
	 * Deleting the object also closes the connection, but not 
	 * until JavaScript garbage-collects the object. The connection 
	 * might stay open longer than you wish if you do not close it 
	 * explicitly.
	 * @summary Terminates the open connection.
	 */
	close(): boolean;
	/**
	 * Returns a string that contains up to the number of 
	 * characters that were supposed to be read, or the number of 
	 * characters read before the connection closed or timed out.
	 * @summary Reads up to the specified number of characters from 
	 * the connection. CR characters are ignored unless the 
	 * encoding is set to "BINARY".
	 * @param {number} count - The number of characters to read. / 
	 * If not supplied, the connection attempts to read as many 
	 * characters it can get and returns immediately.
	 */
	read(count?: number): string;
	/**
	 * Line feeds are recognized as LF or CRLF pairs. CR characters 
	 * are ignored. Returns a string containing the characters.
	 * @summary Reads one line of text up to the next line feed.
	 */
	readln(): string;
	/**
	 * Concatenates all arguments into a single string and writes 
	 * that string to the connection.
	 * @param {string} text - Any number of string values. All 
	 * arguments are concatenated to form the string to be written. 
	 * CRLF sequences are converted to LFs unless the encoding is 
	 * set to "BINARY".
	 */
	write(text: string): boolean;
	/**
	 * Concatenates all arguments into a single string, appends a 
	 * LF character, and writes that string to the connection.
	 * @param {string} text - Any number of string values. All 
	 * arguments are concatenated to form the string to be written. 
	 * CRLF sequences are converted to LFs unless the encoding is 
	 * set to "BINARY".
	 */
	writeln(text: string): boolean;
	/**
	 * If a connection request was detected, the method returns a 
	 * new Socket object that wraps the new connection. Use this 
	 * connection object to communicate with the remote computer. 
	 * After use, close the connection and delete the JavaScript 
	 * object. If no new connection request was detected, the 
	 * method returns null.
	 * @summary Checks a listening object for a new incoming 
	 * connection.
	 */
	poll(): Socket;
}

/**
 * One of unknown, readonly, readwrite, createonly, method or 
 * parameter.
 * @summary Provides information about a method, a property or 
 * a method parameters.
 * @class
 */
export declare class ReflectionInfo {
	/** The class object that this element belongs to. */
	readonly parent: Reflection;
	/** The element name. */
	readonly name: string;
	/**
	 * One of unknown, readonly, readwrite, createonly, method or 
	 * parameter.
	 * @summary The element type.
	 */
	readonly type: string;
	/** The data type. */
	readonly dataType: string;
	/** The description of method or function arguments. */
	readonly arguments: ReflectionInfo;
	/** The minimum value. */
	readonly min: number;
	/** The maximum value. */
	readonly max: number;
	/** The default value. */
	readonly defaultValue: any;
	/** Contains true if the class describes a collection class. */
	readonly isCollection: boolean;
	/** The long description text. */
	readonly description: string;
	/** The short description text. */
	readonly help: string;
	/** Sample code, if present. */
	readonly sampleCode: string;
	/** A file containing sample code. May be null. */
	readonly sampleFile: File;
}

/**
 * Provides information about a class.
 * @class
 */
export declare class Reflection {
	/** The class name. */
	readonly name: string;
	/** An array of method descriptions. */
	readonly methods: ReflectionInfo;
	/** An array of property descriptions. */
	readonly properties: ReflectionInfo;
	/** An array of class method descriptions. */
	readonly staticMethods: ReflectionInfo;
	/** An array of class property descriptions. */
	readonly staticProperties: ReflectionInfo;
	/** The long description text. */
	readonly description: string;
	/** The short description text. */
	readonly help: string;
	/** Sample code, if present. */
	readonly sampleCode: string;
	/** A file containing sample code. May be null. */
	readonly sampleFile: File;
	/**
	 * Finds an element description by name.
	 * @param {string} name - The name of the element to find.
	 */
	find(name: string): ReflectionInfo;
	/** Returns this class information as XML in OMV format. */
	toXML(): XML;
}

/**
 * If this is a Namespace object, the URI is set to the 
 * namespace URI, and there is no local name.
 * If this is a QName object, the URI and localName is set to 
 * those of that object.
 * If this is a string, the URI is set to that string.
 * @summary A qualified XML name, containing the URI and the 
 * local name.
 * @class
 */
export declare class QName {
	/** The URI part of the qualified name. */
	readonly uri: string;
	/** The local name part of the qualified name. */
	readonly localName: string;
	/**
	 * If this is a Namespace object, the URI is set to the 
	 * namespace URI, and there is no local name.
	 * If this is a QName object, the URI and localName is set to 
	 * those of that object.
	 * If this is a string, the URI is set to that string.
	 * @summary Creates a QName object.
	 * @param {any} uri - The URI, specified as a Namespace object, 
	 * an existing QName object, or string. / If this is a 
	 * Namespace object, the URI is set to the namespace URI, and 
	 * there is no local name.
	 * If this is a QName object, the URI and localName is set to 
	 * those of that object.
	 * If this is a string, the URI is set to that string.
	 * @param {string} name - The local name. Used only if URI is 
	 * given as a string.
	 */
	QName(uri: any, name?: string): QName;
}

/**
 * If this is a Namespace or a QName object, the URI and prefix 
 * are set to that of the object.
 * If this is a string, the prefix is set to that string, and 
 * the URI must be specified.
 * @summary A XML namespace object.
 * @class
 */
export declare class Namespace {
	/** The named prefix. */
	readonly prefix: string;
	/** The URI. */
	readonly uri: string;
	/**
	 * If this is a Namespace or a QName object, the URI and prefix 
	 * are set to that of the object.
	 * If this is a string, the prefix is set to that string, and 
	 * the URI must be specified.
	 * @summary Creates a Namespace object.
	 * @param {any} prefix - The URI  prefix, specified as an 
	 * existing Namespace object, QName object, or string. / If 
	 * this is a Namespace or a QName object, the URI and prefix 
	 * are set to that of the object.
	 * If this is a string, the prefix is set to that string, and 
	 * the URI must be specified.
	 * @param {string} uri - The URI if the prefix is specified as 
	 * a string.
	 */
	Namespace(prefix: any, uri?: string): Namespace;
}

/**
 * If the argument is not XML, creates a new XML element 
 * containing the argument as text. The element name of that 
 * new XML is the same as the last element in the original XML.
 * @summary Wraps XML into an object.
 * @class
 */
export declare class XML {
	/**
	 * Controls whether XML comments should be parsed (false) or 
	 * ignored (true).
	 */
	ignoreComments: boolean;
	/**
	 * Controls whether XML preprocessing instructions should be 
	 * parsed (false) or ignored (true).
	 */
	ignoreProcessingInstructions: boolean;
	/**
	 * Controls whether whitespace should be parsed (false) or 
	 * ignored (true).
	 */
	ignoreWhitespace: boolean;
	/**
	 * When true, XML is pretty-printed when converting to a 
	 * string.
	 */
	prettyPrinting: boolean;
	/** The number of spaces used to indent pretty-printed XML. */
	prettyIndent: number;
	/**
	 * Parses an XML string. Throws an error if the XML is 
	 * incorrect.
	 * @param {string} text - The text to parse.
	 */
	XML(text: string): XML;
	/**
	 * Returns an object containing the current parsing and print 
	 * settings for XML.
	 */
	settings(): Object;
	/**
	 * Sets the parsing and print setting for XML using an object 
	 * returned by the settings() method.
	 * @param {Object} obj - The object containing the settings to 
	 * set.
	 */
	setSettings(obj: Object): void;
	/**
	 * Returns an object containing the default parsing and print 
	 * settings for XML.
	 */
	defaultSettings(): Object;
	/**
	 * Adds a namespace declaration to the node. Returns the XML 
	 * object itself.
	 * @param {Namespace} namespace - The namespace to add.
	 */
	addNamespace(namespace: Namespace): XML;
	/**
	 * If the argument is not XML, creates a new XML element 
	 * containing the argument as text. The element name of that 
	 * new XML is the same as the last element in the original XML.
	 * @summary Appends the given XML to this XML as a child. 
	 * Returns the XML object itself.
	 * @param {XML} child - The child XML to add.
	 */
	appendChild(child: XML): XML;
	/**
	 * Returns a list containing all attribute elements matching 
	 * the given name.
	 * @param {string} name - The attribute name to look for.
	 */
	attribute(name: string): XML;
	/** Returns a list containing all attribute elements. */
	attributes(): XML;
	/**
	 * If the argument is a number, uses the number as index into 
	 * the array of children.
	 * @summary Returns a list containing all children of this XML 
	 * matching the given element name.
	 * @param {string} name - The name or the index of the child 
	 * element.
	 */
	child(name: string): XML;
	/**
	 * Returns a number representing the ordinal position of this 
	 * XML object within the context of its parent.
	 */
	childIndex(): number;
	/**
	 * Returns an XML object containing all the properties of this 
	 * XML object in order.
	 */
	children(): XML;
	/**
	 * Returns an XML object containing the properties of this XML 
	 * object that represent XML comments.
	 */
	comments(): XML;
	/**
	 * Checks if this XML object contains the given XML object.
	 * @param {XML} xml - The XML to search for.
	 */
	contains(xml: XML): boolean;
	/** Creates a copy of this XML object. */
	copy(): XML;
	/**
	 * If the name parameter is omitted, returns all descendants of 
	 * this XML object.
	 * @summary Returns all the XML-valued descendants of this XML 
	 * object with the given name.
	 * @param {string} name - The name of the descendant to find.
	 */
	descendants(name?: string): XML;
	/**
	 * Returns a list of XML children that are elements with a 
	 * given name, or all children that are XML elements.
	 * @param {string} name - The element name. If not supplied, 
	 * gets all children that are XML elements.
	 */
	elements(name?: string): XML;
	/**
	 * An XML object is considered to contain complex content if it 
	 * represents an XML element that has child elements. XML 
	 * objects representing attributes, comments, processing 
	 * instructions and text nodes do not have complex content. The 
	 * existence of attributes, comments, processing instructions 
	 * and text nodes within an XML object is not significant in 
	 * determining if it has complex content.
	 * @summary Reports whether this XML object contains complex 
	 * content.
	 */
	hasComplexContent(): boolean;
	/**
	 * An XML object is considered to contain simple content if it 
	 * represents a text node, represents an attribute node or if 
	 * it represents an XML element that has no child elements. XML 
	 * objects representing comments and processing instructions do 
	 * not have simple content. The existence of attributes, 
	 * comments, processing instructions and text nodes within an 
	 * XML object is not significant in determining if it has 
	 * simple content.
	 * @summary Reports whether this XML object contains simple 
	 * content.
	 */
	hasSimpleContent(): boolean;
	/**
	 * The last element of the  returned array is the default 
	 * namespace.
	 * @summary Returns an array of Namespace objects mirroring the 
	 * current list of valid namespaces at this element.
	 */
	inScopeNamespaces(): any[];
	/**
	 * If child1 is null, the method inserts child2 before all 
	 * children of this XML object (that is, after none of them). 
	 * If child1 does not exist in this XML object, the method 
	 * returns without modifying this XML object.
	 * @summary Inserts the given child2 after the given child1 in 
	 * this XML object and returns this XML object.
	 * @param {XML} child1 - The child to insert the other child 
	 * after. / If null, the method inserts child2 before all 
	 * children of this XML object.
	 * @param {XML} child2 - The XML to insert.
	 */
	insertChildAfter(child1: XML, child2: XML): void;
	/**
	 * If child1 is null, the method inserts child2 after all 
	 * children of this XML object (that is, before none of them). 
	 * If child1 does not exist in this XML object, the method 
	 * returns without modifying this XML object.
	 * @summary Inserts the given child2 before the given child1 in 
	 * this XML object and returns this XML object.
	 * @param {XML} child1 - The child to search for. / If null, 
	 * the method inserts child2 after all children of this XML 
	 * object.
	 * @param {XML} child2 - The XML to insert.
	 */
	insertChildBefore(child1: XML, child2: XML): void;
	/**
	 * Returns the number of elements contained in an XML list. If 
	 * this XML object is not a list, returns 1.
	 */
	length(): number;
	/**
	 * This value corresponds to the element name unless the name 
	 * has a namespace prefix. For example, if the element has the 
	 * name "ns:tag", the return value is "tag".
	 * @summary Returns the local name of this XML object.
	 */
	localName(): string;
	/**
	 * Returns a QName object containing the URI and the local name 
	 * of the element.
	 */
	name(): QName;
	/**
	 * Returns a Namespace object containing the namespace URI of 
	 * the current element.
	 */
	namespace(): Namespace;
	/**
	 * Returns an array containing all namespace declarations of 
	 * this XML object.
	 */
	namespaceDeclarations(): any[];
	/**
	 * Returns the type of this XML object as one of the strings 
	 * "element", "attribute", "comment", "processing-instruction", 
	 * or "text".
	 */
	nodeKind(): string;
	/**
	 * Puts all text nodes in this and all descendant XML objects 
	 * into a normal form by merging adjacent text nodes and 
	 * eliminating empty text nodes. Returns this XML object.
	 */
	normalize(): XML;
	/**
	 * The root object, as returned by the XML constructor, does 
	 * not have a parent and returns null. Note that the E4X 
	 * standard does not define what happens if this XML object is 
	 * a list containing elements with multiple parents.
	 * @summary Returns the parent object of this XML object.
	 */
	parent(): XML;
	/**
	 * Collects processing-instructions with the given name, if 
	 * supplied. Otherwise, returns an XML list containing all the 
	 * children of this XML object that are processing-instructions 
	 * regardless of their name.
	 * @summary Returns a list of preprocessing instructions.
	 * @param {string} name - The name of the preprocessing 
	 * instruction to return.
	 */
	processingInstructions(name?: string): XML;
	/**
	 * Inserts a given child into this object before its existing 
	 * XML properties, and returns this XML object.
	 * @param {XML} child - The XML to insert.
	 */
	prependChild(child: XML): XML;
	/**
	 * Removes the given namespace from this XML, and returns this 
	 * XML.
	 * @param {Namespace} namespace - The namespace to remove.
	 */
	removeNamespace(namespace: Namespace): XML;
	/**
	 * This method acts like the assignment operator.
	 * @summary Replaces the value of specified XML properties of 
	 * this XML object returns this XML object.
	 * @param {string} name - The property name. / Can be a numeric 
	 * property name, a name for a set of XML elements, or the 
	 * properties wildcard “*”. If this XML object contains no 
	 * properties that match the name, the method returns without 
	 * modifying this XML object.
	 * @param {XML} value - The XML with which to replace the value 
	 * of the matching property. / Can be an XML object, XML list 
	 * or any value that can be converted to a String with 
	 * toString().
	 */
	replace(name: string, value: XML): XML;
	/**
	 * Replaces all of the XML-valued properties in this object 
	 * with a new value, and returns this XML object.
	 * @param {XML} value - The new value, which can be a single 
	 * XML object or an XML list.
	 */
	setChildren(value: XML): XML;
	/**
	 * The local name is any part behind a colon character. If 
	 * there is no colon, it is the entire name.
	 * @summary Replaces the local name of this XML object  with a 
	 * string constructed from the given name
	 * @param {string} name - The name to set.
	 */
	setLocalName(name: string): void;
	/**
	 * Replaces the name of this XML object with the given QName 
	 * object.
	 * @param {QName} name - The fully qualified name.
	 */
	setName(name: QName): void;
	/**
	 * If the namespace has not been declared in the tree above 
	 * this element, adds a namespace declaration.
	 * @summary Sets the namespace for this XML element.
	 * @param {Namespace} namespace - The namespace to set.
	 */
	setNamespace(namespace: Namespace): void;
	/**
	 * Returns an XML list containing all XML properties of this 
	 * XML object that represent XML text nodes.
	 */
	text(): XML;
	/**
	 * For text and attribute nodes, this is the textual value of 
	 * the node; for other elements, this is the result of calling 
	 * the toXMLString() method. If this XML object is a list, 
	 * concatenates the result of calling toString() on each 
	 * element.
	 * @summary Returns the string representation of this object.
	 */
	toString(): string;
	/**
	 * Always includes the start tag, attributes and end tag of the 
	 * XML object regardless of its content. It is provided for 
	 * cases when the default XML to string conversion rules are 
	 * not desired. Interprets the global settings XML.prettyPrint 
	 * and XML.prettyIndent.
	 * @summary Returns an XML-encoded string representation of 
	 * this XML object.
	 */
	toXMLString(): string;
	/**
	 * Evaluates the given XPath expression in accordance with the 
	 * W3C XPath recommendation, using this XML object as the 
	 * context node.
	 * @param {string} expr - The XPath expression to use.
	 */
	xpath(expr: string): XML;
}

/**
 * In this implementation, an XMLList object is synonymous to 
 * the XML object. The constructor accepts an XML list, but 
 * everything else works like the  XML object.
 * @summary An XML list object.
 * @class
 */
export declare class XMLList {
}

/**
 * Note that this object is not available in all applications.
 * @summary Represents a measurement as a combination of values 
 * and unit.
 * @class
 */
export declare class UnitValue {
	/** The base unit for all conversions. */
	baseUnit: UnitValue;
	/** The unit name. */
	readonly type: string;
	/** The numeric value. */
	value: number;
	/**
	 * Converts this instance to a different unit.
	 * @param {string} unitName - The unit name.
	 */
	convert(unitName: string): any;
	/**
	 * Returns this instance as a different unit.
	 * @param {string} unitName - The unit name.
	 */
	as(unitName: string): UnitValue;
}
