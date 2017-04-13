/**
 * The presence of ScriptUI.compatability.su1PanelCoordinates 
 * means that the application allows backward compatibility 
 * with the coordinate system of Panel elements in ScriptUI 
 * version 1.
 * @summary A global class containing central information about 
 * ScriptUI. Not instantiable.
 * @class
 */
export declare class ScriptUI {
	/** The font constants defined by the host application. */
	readonly applicationFonts: Object;
	/**
	 * The presence of ScriptUI.compatability.su1PanelCoordinates 
	 * means that the application allows backward compatibility 
	 * with the coordinate system of Panel elements in ScriptUI 
	 * version 1.
	 * @summary An object whose properties are the names of 
	 * compatability modes supported by the host application.
	 */
	readonly compatibility: Object;
	/**
	 * A string containing the internal version number of the 
	 * ScriptUI module.
	 */
	readonly coreVersion: string;
	/**
	 * An object whose properties define attributes of the 
	 * environment in which ScriptUI operates.
	 */
	readonly environment: Environment;
	/**
	 * It contains one function, createEvent(), which allows you to 
	 * create event objects in order to simulate user-interaction 
	 * event
	 * @summary An object whose properties and methods provide 
	 * access to objects used in the ScriptUI event system.
	 */
	readonly events: Events;
	/**
	 * A string containing the name of the UI component framework 
	 * with which this version of ScriptUI is compatible.
	 */
	readonly frameworkName: string;
	/**
	 * A string containing the version number of the ScriptUI 
	 * component framework
	 */
	readonly version: any;
	/**
	 * Predefined alignment values are: TOP, BOTTOM, LEFT, RIGHT, 
	 * FILL, CENTER
	 * @summary Collects the enumerated values that can be used in 
	 * the alignment and alignChildren properties of controls and 
	 * containers.
	 */
	readonly Alignment: string;
	/**
	 * Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.
	 * @summary Collects the enumerated values that can be used as 
	 * the style argument to the ScriptUI.newFont() method.
	 */
	readonly FontStyle: Object;
	/**
	 * If no string resource matches the given text, the text 
	 * itself is returned.
	 * @summary Finds and returns the resource for a given text 
	 * string from the host application's resource data.
	 * @param {string} text - The text to match.
	 */
	getResourceText(text: string): string;
	/**
	 * Creates a new global image object for use in controls that 
	 * can display images, loading the associated images from the 
	 * specified resources or image files.
	 * @summary Loads a new image from resources or disk files into 
	 * an image object.
	 * @param {string} normal - The resource name or the disk file 
	 * path to the image used for the normal state.
	 * @param {string} disabled - The resource name, or the disk 
	 * file path to the image used for the disabled state.
	 * @param {string} pressed - The resource name, or the 
	 * file-system path to the image used for the pressed state.
	 * @param {string} rollover - The resource name, or the 
	 * file-system path to the image used for the rollover state.
	 */
	newImage(normal: string, disabled?: string, pressed?: string, rollover?: string): ScriptUIImage;
	/**
	 * Creates a new font object for use in text controls and 
	 * titles.
	 * @param {string} name - The font name, or the font family 
	 * name.
	 * @param {string} style - The font style; can be string, or 
	 * one of the values of ScriptUI.FontStyle.
	 * @param {number} size - The font size in points.
	 */
	newFont(name: string, style: string, size: number): ScriptUIFont;
}

/**
 * The globally available Window object provides access to 
 * predefined and script-defined windows.
 * @summary The instance represents a top-level window or 
 * dialog box, which contains user-interface elements.
 * @class
 */
export declare class Window {
	/** Deprecated. Use ScriptUI.frameworkName instead. */
	readonly frameworkName: string;
	/** Deprecated. Use ScriptUI.version instead. */
	readonly version: any;
	/**
	 * The graphics object that can be used to customize the 
	 * window’s appearance, in response to the onDraw event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary When true, the element is shown, when false it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * The bounds of the window's drawable area, excluding the 
	 * frame, in screen coordinates.
	 */
	bounds: Bounds;
	/**
	 * The frame consists of the title bar and borders that enclose 
	 * the content region of a window, depending on the windowing 
	 * system.
	 * @summary The bounds of the window frame in screen 
	 * coordinates.
	 */
	readonly frameBounds: Bounds;
	/**
	 * The same as [frameBounds.x, frameBounds.y]. Set this value 
	 * to move the window frame to the specified location on the 
	 * screen. The frameBounds value changes accordingly.
	 * @summary The top left corner of the window frame in screen 
	 * coordinates.
	 */
	frameLocation: Point;
	/**
	 * The size and location of the window's frame in screen 
	 * coordinates.
	 */
	readonly frameSize: Dimension;
	/**
	 * The same as [bounds.x, bounds.y].
	 * @summary The upper left corner of the window's drawable 
	 * area.
	 */
	location: Point;
	/** The largest rectangle to which the window can be resized. */
	maximumSize: Dimension;
	/** The smallest rectangle to which the window can be resized. */
	minimumSize: Dimension;
	/**
	 * Used in automatic layout and resizing. To set a specific 
	 * value for only one dimension, specify the other dimension as 
	 * -1.
	 * @summary The preferred size of the window.
	 */
	preferredSize: Dimension;
	/**
	 * The current size and location of the content area of the 
	 * window in screen coordinates.
	 */
	size: Dimension;
	/**
	 * The bounds of this window relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * A number of characters for which to reserve space when 
	 * calculating the preferred size of the window.
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The default text justification style for child text 
	 * elements.
	 */
	justify: string;
	/**
	 * Does not apply to containers of type group.
	 * @summary The title, label, or displayed text, a localizeable 
	 * string.
	 */
	text: string;
	/**
	 * A modal dialog that is visible is by definition the active 
	 * dialog.
	 * An active palette is the front-most window.
	 * An active control is the one with focus—that is, the one 
	 * that accepts keystrokes, or in the case of a Button, be 
	 * selected when the user types  Return or Enter.
	 * @summary Set to true to make this window active.
	 */
	active: boolean;
	/**
	 * The keypress combination that invokes this 
	 * element's onShortcutKey() callback.
	 */
	shortcutKey: string;
	/**
	 * The cancellation key is the Esc key. By default, looks for a 
	 * button whose name or text is "cancel" (case disregarded).
	 * @summary For windows of type dialog, the UI element to 
	 * notify when the user presses a cancellation key combination.
	 */
	cancelElement: Object;
	/**
	 * By default, looks for a button whose name or text is "ok" 
	 * (case disregarded).
	 * @summary For windows of type dialog, the UI element to 
	 * notify when the user presses a Enter key.
	 */
	defaultElement: Object;
	/** True if the window is expanded. */
	maximized: boolean;
	/** True if the window is minimized or iconified. */
	minimized: boolean;
	/**
	 * Order of creation determines which children are at the top 
	 * of a column or the left of a row; the earlier a child is 
	 * created, the closer it is to the top or left of its column 
	 * or row. If defined, alignment for a child element overrides 
	 * the alignChildren setting for the parent container. See 
	 * alignment property for values.
	 * @summary Tells the layout manager how unlike-sized children 
	 * of this container should be aligned within a column or row.
	 */
	alignChildren: string;
	/**
	 * An array indexed by number or by a string containing an 
	 * element's name. The length property of this array is the 
	 * number of child elements for container elements, and is zero 
	 * for controls.
	 * @summary The collection of UI elements that have been added 
	 * to this container.
	 */
	readonly children: Object;
	/**
	 * The first time a container object is made visible, ScriptUI 
	 * invokes this layout manager by calling 
	 * its layout() function. Default is an instance of 
	 * the LayoutManager class that is automatically created when 
	 * the container element is created.
	 * @summary The layout manager for this container.
	 */
	layout: LayoutManager;
	/**
	 * You can specify different margins for each edge of the 
	 * container. The default value is based on the type of 
	 * container, and is chosen to match the standard Adobe UI 
	 * guidelines.
	 * @summary The number of pixels between the edges of a 
	 * container and the outermost child elements.
	 */
	margins: number;
	/**
	 * Interpreted by the layout manager for the container. The 
	 * default LayoutManager  Object accepts the (case-insensitive) 
	 * values row, column, or stack.  For window and panel, the 
	 * default is column, and for group the default is row. The 
	 * allowed values for the container’s alignChildren and its 
	 * children’s alignment properties depend on the orientation.
	 * @summary The layout orientation of children in a container.
	 */
	orientation: string;
	/**
	 * Because each container holds only a single row or column of 
	 * children, only a single spacing value is needed for a 
	 * container. The default value is based on the type of 
	 * container, and is chosen to match standard Adobe UI 
	 * guidelines.
	 * @summary The number of pixels separating one child element 
	 * from its adjacent sibling element.
	 */
	spacing: number;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for child elements of a 
	 * container. If defined, this value overrides the 
	 * alignChildren setting for the parent container.
	 */
	alignment: string;
	/**
	 * Creation properties of a Window object can include:
	 * resizeable: When true, the window can be resized by the 
	 * user. Default is false.
	 * su1PanelCoordinates: Photoshop only. When true, the child 
	 * panels of this window automatically adjust the positions of 
	 * their children for compatability with Photoshop CS (in which 
	 * the vertical coordinate was measured from outside the 
	 * frame). Default is false. Individual panels can override the 
	 * parent window’s setting.
	 * closeButton: Bridge only. When true, the title bar includes 
	 * a button to close the window, if the platform and window 
	 * type allow it. When false, it does not. Default is true. Not 
	 * used for dialogs.
	 * maximizeButton: Bridge only. When true, the title bar 
	 * includes a button to expand the window to its maximum size 
	 * (typically, the entire screen), if the platform and window 
	 * type allow it. When false, it does not. Default is false for 
	 * type palette, true for type window. Not used for dialogs.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/** The number of pixels to indent the element. */
	indent: number;
	/** The immediate parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "dialog", "palette", or "window". */
	readonly type: string;
	/**
	 * A value of 1.0 (the default) makes the window completely 
	 * opaque, a value of 0 makes it completely transparent. 
	 * Intermediate values make it partially transparent to any 
	 * degree.
	 * @summary The opacity of the window, in the range [0..1].
	 */
	opacity: number;
	/**
	 * One of:
	 * window: Creates a simple window that can be used as a main 
	 * window for an application. (Not supported by Photoshop CS3.)
	 * palette: Creates a modeless dialog, also called a floating 
	 * palette. (Not supported by Photoshop CS3.)
	 * dialog: Creates a modal dialog.
	 * This argument can also be a ScriptUI resource specification; 
	 * in that case, all other arguments are ignored.
	 * @summary Creates a new window.
	 * @param {string} _type - The window type. / One of:
	 * window: Creates a simple window that can be used as a main 
	 * window for an application. (Not supported by Photoshop CS3.)
	 * palette: Creates a modeless dialog, also called a floating 
	 * palette. (Not supported by Photoshop CS3.)
	 * dialog: Creates a modal dialog.
	 * This argument can also be a ScriptUI resource specification; 
	 * in that case, all other arguments are ignored.
	 * @param {string} title - The window title, a localizable 
	 * string.
	 * @param {Bounds} bounds - The window's position and size.
	 * @param {Object} properties - An object containing 
	 * creation-only properties. / Can contain any of these 
	 * properties:
	 * resizeable: When true, the window can be resized by the 
	 * user. Default is false.
	 * su1PanelCoordinates: Photoshop only. When true, the child 
	 * panels of this window automatically adjust the positions of 
	 * their children for compatability with Photoshop CS (in which 
	 * the vertical coordinate was measured from outside the 
	 * frame). Default is false. Individual panels can override the 
	 * parent window’s setting.
	 * closeButton:  When true, the title bar includes a button to 
	 * close the window, if the platform and window type allow it. 
	 * When false, it does not. Default is true. Not used for 
	 * dialogs.
	 * maximizeButton:  When true, the title bar includes a button 
	 * to expand the window to its maximum size (typically, the 
	 * entire screen), if the platform and window type allow it. 
	 * When false, it does not. Default is false for type palette, 
	 * true for type window. Not used for dialogs.
	 * minimizeButton: When true, the title bar includes a button 
	 * to minimize or iconify the window, if the platform and 
	 * window type allow it. When false, it does not. Default is 
	 * false for type palette, true for type window. Main windows 
	 * cannot have a minimize button in Mac OS. Not used for 
	 * dialogs.
	 * independent:  When true, a window of type window is 
	 * independent of other application windows, and can be hidden 
	 * behind them in Windows. In Mac OS, has no effect. Default is 
	 * false.
	 * borderless:  When true, the window has no title bar or 
	 * borders. Properties that control those features are ignored.
	 */
	Window(_type: string, title?: string, bounds?: Bounds, properties?: Object): void;
	/**
	 * This includes windows defined by ScriptUI resource strings, 
	 * windows already created by a script, and windows created by 
	 * the application (if the application supports this case). 
	 * This function is not supported by all applications. Returns 
	 * a Window object found or generated from the resource, or 
	 * null if no such window or resource exists.
	 * @summary Use this method to find an existing window.
	 * @param {string} _type - The name of a predefined resource 
	 * available to JavaScript in the current application; or the 
	 * window type. / If a title is specified, the type is used if 
	 * more than one window with that title is found. Can be null 
	 * or the empty string.
	 * @param {string} title - The window title.
	 */
	find(_type: string, title: string): Window;
	/**
	 * Ignored in Mac OS, which does not support titles for alert 
	 * dialogs. The default title string is "Script Alert".
	 * @summary Displays a platform-standard dialog containing a 
	 * short message and an OK button.
	 * @param {string} message - TThe string for the displayed 
	 * message.
	 * @param {string} title - A string to appear as the title of 
	 * the dialog, if the platform supports a title. / Ignored in 
	 * Mac OS, which does not support titles for alert dialogs. The 
	 * default title string is "Script Alert".
	 * @param {boolean} errorIcon - When true, the 
	 * platform-standard alert icon is replaced by the 
	 * platform-standard error icon in the dialog. / Ignored in Mac 
	 * OS, which does not support icons for alert dialogs.
	 */
	alert(message: string, title?: string, errorIcon?: boolean): void;
	/**
	 * Returns true if the user clicked Yes, false if the user 
	 * clicked No.
	 * @summary Displays a platform-standard dialog containing a 
	 * short message and two buttons labeled Yes and No.
	 * @param {string} message - The string for the displayed 
	 * message.
	 * @param {boolean} noAsDefault - When true, the No button is 
	 * the default choice, selected when the user types Enter. / 
	 * Default is false, meaning that Yes is the default choice.
	 * @param {string} title - A string to appear as the title of 
	 * the dialog, if the platform supports a title. / Ignored in 
	 * Mac OS, which does not support titles for alert dialogs. The 
	 * default title string is "Script Alert".
	 */
	confirm(message: string, noAsDefault: boolean, title?: string): boolean;
	/**
	 * Returns the value of the text edit field if the user clicked 
	 * OK, null if the user clicked Cancel.
	 * @summary Displays a modal dialog that returns the user’s 
	 * text input.
	 * @param {string} prompt - The string for the displayed 
	 * message.
	 * @param {string} _default - The initial value to be displayed 
	 * in the text edit field.
	 * @param {string} title - A string to appear as the title of 
	 * the dialog. / In Windows, this appears in the window’s 
	 * frame; in Mac OS it appears above the message. The default 
	 * title string is "Script Prompt".
	 */
	prompt(prompt: string, _default?: string, title?: string): string;
	/**
	 * If an onShow() callback is defined for a window, calls that 
	 * function before showing the window.When a window or 
	 * container is hidden, its children are also hidden, but when 
	 * it is shown again, the children retain their own visibility 
	 * states. For a modal dialog, opens the dialog and does not 
	 * return until the dialog is dismissed. If it is dismissed via 
	 * the close() method, this method returns any result value 
	 * passed to that method. Otherwise, returns 0.
	 * @summary Makes this window visible.
	 */
	show(): void;
	/**
	 * When a window is hidden, its children are also hidden, but 
	 * when it is shown again, the children retain their own 
	 * visibility states. For a modal dialog, closes the dialog and 
	 * sets its result to 0.
	 * @summary Hides this windows.
	 */
	hide(): void;
	/**
	 * One of: onClose, onMove, onMoving, onResize, onResizing, 
	 * onShow
	 * @summary Sends a notification message to all listeners, 
	 * simulating the specified user interaction event.
	 * @param {string} eventName - The event name; if omitted, the 
	 * default event is sent. / One of: onClose, onMove, onMoving, 
	 * onResize, onResizing, onShow
	 */
	notify(eventName?: string): void;
	/**
	 * Centers this window on screen or with repect to another 
	 * window.
	 * @param {Window} window - The relative window. If not 
	 * specified, centers on the screen.
	 */
	center(window?: Window): void;
	/**
	 * . If an onClose() callback is defined for the window, calls 
	 * that function before closing the window.
	 * @summary Closes this window.
	 * @param {any} _return - A number to be returned from the 
	 * show() method that invoked this window as a modal dialog.
	 */
	close(_return?: any): void;
	/**
	 * Control types are listed in the JavaScript Tools Guide.
	 * @summary Creates and returns a new control or container 
	 * object and adds it to the children of this window.
	 * @param {string} _type - The type of the child element, as 
	 * specified for the type property. / Control types are listed 
	 * in the JavaScript Tools Guide.
	 * @param {Bounds} bounds - A bounds specification that 
	 * describes the size and position of the new control or 
	 * container, relative to its parent. / If supplied, this value 
	 * creates a new Bounds object which is assigned to the new 
	 * object’s bounds property.
	 * @param {string} text - The text or label, a localizable 
	 * string. / Initial text to be displayed in the control as the 
	 * title, label, or contents, depending on the control type. If 
	 * supplied, this value is assigned to the new object’s text 
	 * property.
	 * @param {Object} properties - An object that contains one or 
	 * more creation properties of the new child (properties used 
	 * only when the element is created). / The creation properties 
	 * depend on the element type. See properties property of each 
	 * control type.
	 */
	add(_type: string, bounds?: Bounds, text?: string, properties?: Object): Object;
	/**
	 * No error results if the child does not exist.
	 * @summary Removes the specified child control from this 
	 * window’s children array.
	 * @param {any} what - The child control to remove, specified 
	 * by 0-based index, text property value, or as a control 
	 * object.
	 */
	remove(what: any): void;
	/**
	 * Predefined event names are: change, changing, move, moving, 
	 * resize, resizing, show , enterKey, focus, blur, keydown, 
	 * keyup, mousedown, mouseup, mousemove, mouseover, mouseout, 
	 * click (detail = 1 for single, 2 for double).
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this window.
	 * @param {string} eventName - The name of the event. / 
	 * Predefined event names are: change, changing, move, moving, 
	 * resize, resizing, show , enterKey, focus, blur, keydown, 
	 * keyup, mousedown, mouseup, mousemove, mouseover, mouseout, 
	 * click (detail = 1 for single, 2 for double).
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this window.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): UIEvent;
	/**
	 * Called when the user gives the window the keyboard focus by 
	 * clicking it or otherwise making it the active window.
	 * @summary An event-handler callback function, called when the 
	 * window acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active window to another window.
	 * @summary An event-handler callback function, called when the 
	 * window loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Called when a request is made to close the window, either by 
	 * an explicit call to the close() function or by a user action 
	 * (clicking the OS-specific close icon in the title bar). The 
	 * function is called before the window actually closes; it can 
	 * return false to cancel the close operation.
	 * @summary An event-handler callback function, called  when 
	 * the window is about to be closed.
	 */
	onClose(): boolean;
	/**
	 * An event-handler callback function, called  when the window  
	 * has been moved
	 */
	onMove(): void;
	/**
	 * Called while a window in being moved, each time the position 
	 * changes. A handler can monitor the move operation.
	 * @summary An event-handler callback function, called  when 
	 * the window is being moved
	 */
	onMoving(): void;
	/**
	 * An event-handler callback function, called after the window 
	 * has been resized
	 */
	onResize(): void;
	/**
	 * Called while a window is being resized, each time the height 
	 * or width changes. A handler can monitor the resize 
	 * operation.
	 * @summary An event-handler callback function, called while a 
	 * window is being resized
	 */
	onResizing(): void;
	/**
	 * In Windows only, an event-handler callback function, called 
	 * a shortcut-key sequence is typed that matches 
	 * the shortcutKey value for this window.
	 */
	onShortcutKey(): void;
	/**
	 * Called when a request is made to open the window using 
	 * the show() method, before the window is made visible, but 
	 * after automatic layout is complete. A handler can modify the 
	 * results of the automatic layout.
	 * @summary An event-handler callback function, called just 
	 * before the window is displayed
	 */
	onShow(): void;
}

/**
 * The subclass AutoLayoutManager implements the default 
 * automatic layout behavior.
 * @summary Controls the automatic layout behavior for a window 
 * or container.
 * @class
 */
export declare class LayoutManager {
	/**
	 * Adjusts sizes and positions of the child elements of this 
	 * window or container according to the placement and alignment 
	 * property values in the parent and children.
	 * Invoked automatically the first time the window is 
	 * displayed. Thereafter, the script must invoke it explicitly 
	 * to change the layout in case of changes in the size or 
	 * position of the parent or children.
	 * @summary Invokes the automatic layout behavior for the 
	 * managed container.
	 */
	layout(): void;
	/**
	 * Resizes the child elements of the managed container with a 
	 * given alignment type, after the window has been resized by 
	 * the user.
	 * @summary Performs a layout after a Window is resized, based 
	 * on the new size.
	 */
	resize(): void;
}

/**
 * Create with ScriptUIGraphics.newPen(). Use as a value of 
 *  foregroundColor properties, and pass as an argument 
 * to drawString() and strokePath() methods.
 * @summary A drawing pen that defines a color and line width 
 * used to stroke paths.
 * @class
 */
export declare class ScriptUIPen {
	/**
	 * The paint color to use when the type is SOLID_COLOR. An 
	 * array in the form [R, B, G, A] specifying the red, green, 
	 * blue values of the color and the opacity (alpha channel) 
	 * value as numbers in the range [0.0..1.0]. An opacity of 0 is 
	 * fully transparent, and an opacity of 1 is fully opaque.
	 * @summary The pen color.
	 */
	readonly color: number;
	/**
	 * The name of a color theme to use for drawing when the type 
	 * is THEME_COLOR. Theme colors are defined by the host 
	 * application.
	 * @summary The theme name.
	 */
	readonly theme: string;
	/**
	 * One of these constants: ScriptUIGraphics.PenType.SOLID_COLOR 
	 * or ScriptUIGraphics.PenType.THEME_COLOR
	 * @summary The pen type, solid or theme.
	 */
	readonly type: string;
	/** The pixel width of the drawing line. */
	lineWidth: number;
}

/**
 * Create with ScriptUIGraphics.newBrush(). Use as a value of 
 *  backgroundColor properties, and pass as an argument to 
 * the fillPath() method.
 * @summary A painting brush that encapsulates a color or 
 * pattern used to fill paths.
 * @class
 */
export declare class ScriptUIBrush {
	/**
	 * The paint color to use when the type is SOLID_COLOR. An 
	 * array in the form [R, B, G, A] specifying the red, green, 
	 * blue values of the color and the opacity (alpha channel) 
	 * value as numbers in the range [0.0..1.0]. An opacity of 0 is 
	 * fully transparent, and an opacity of 1 is fully opaque.
	 * @summary The brush color.
	 */
	readonly color: number;
	/**
	 * The name of a color theme to use for drawing when the type 
	 * is THEME_COLOR. Theme colors are defined by the host 
	 * application.
	 * @summary The theme name.
	 */
	readonly theme: string;
	/**
	 * One of these constants: 
	 * ScriptUIGraphics.BrushType.SOLID_COLOR or 
	 * ScriptUIGraphics.BrushType.THEME_COLOR
	 * @summary The brush type, solid or theme.
	 */
	readonly type: number;
}

/**
 * Create with the newPath(), moveto(), lineto(), rectPath(), 
 * and ellipsePath() methods.  Used as value of currentPath, 
 * where it is acted upon by methods such as closePath().  Pass 
 * as optional argument to fillPath() and strokePath(), which 
 * otherwise act upon the current path.
 * @summary A helper object that encapsulates a drawing path 
 * for a figure to be drawn into a window or control.
 * @class
 */
export declare class ScriptUIPath {
}

/**
 * Allows a script to customize aspects of the element’s 
 * appearance, such as the color and font. Use an onDraw 
 * callback function to set these properties or call the 
 * functions.All measurements are in pixels.
 * @summary An object used to draw custom graphics, found in 
 * the graphics property of window, container, and control 
 * objects.
 * @class
 */
export declare class ScriptUIGraphics {
	/**
	 * Type constants are: SOLID_COLOR, THEME_COLOR.
	 * @summary Contains the enumerated constants for the type 
	 * argument of newBrush().
	 */
	readonly BrushType: Object;
	/**
	 * Type constants are: SOLID_COLOR, THEME_COLOR.
	 * @summary Contains the enumerated constants for the type 
	 * argument of newPen().
	 */
	readonly PenType: Object;
	/**
	 * The paint color and style is defined in this brush 
	 * object.This property is only supported for controls like  
	 * dropdownlist, edittext, and listbox.
	 * @summary The background color for containers; for 
	 * non-containers, the parent background color.
	 */
	backgroundColor: ScriptUIBrush;
	/**
	 * The paint color and style is defined in this brush 
	 * object.This property is only supported for controls like  
	 * dropdownlist, edittext, and listbox.
	 * @summary The background color for containers when disabled 
	 * or inactive; for non-containers, the parent background 
	 * color.
	 */
	disabledBackgroundColor: ScriptUIBrush;
	/**
	 * The paint color and style is defined in this pen object.
	 * @summary The text color when the element is disabled or 
	 * inactive.
	 */
	disabledForegroundColor: ScriptUIPen;
	/** The default font to use for displaying text. */
	font: ScriptUIFont;
	/**
	 * The paint color and style is defined in this pen object.
	 * @summary The text color.
	 */
	foregroundColor: ScriptUIPen;
	/** The current drawing path, encapsulated in a path object. */
	readonly currentPath: ScriptUIPath;
	/** The current position in the current drawing path. */
	readonly currentPoint: Point;
	/**
	 * One of the constants ScriptUIGraphics.BrushType.SOLID_COLOR 
	 * or ScriptUIGraphics.BrushType.THEME_COLOR.
	 * @summary Creates a new painting brush object.
	 * @param {number} _type - The brush type, solid or theme. / 
	 * One of the constants ScriptUIGraphics.BrushType.SOLID_COLOR 
	 * or ScriptUIGraphics.BrushType.THEME_COLOR.
	 * @param {number} color - The brush color. / If type is 
	 * SOLID_COLOR, the color expressed as an array of three or 
	 * four values, in the form [R, B, G, A] specifying the red, 
	 * green, and blue values of the color and, optionally, the 
	 * opacity (alpha channel). All values are numbers in the range 
	 * [0.0..1.0]. An opacity of 0 is fully transparent, and an 
	 * opacity of 1 is fully opaque.
	 * If the type is THEME_COLOR, the name string of the theme. 
	 * Theme colors are defined by the host application.
	 */
	newBrush(_type: number, color: number): ScriptUIBrush;
	/**
	 * One of the constants ScriptUIGraphics.PenType.SOLID_COLOR or 
	 * ScriptUIGraphics.PenType.THEME_COLOR.
	 * @summary Creates a new drawing pen object.
	 * @param {number} _type - The pen type, solid or theme. / One 
	 * of the constants ScriptUIGraphics.PenType.SOLID_COLOR or 
	 * ScriptUIGraphics.PenType.THEME_COLOR.
	 * @param {number} color - The pen color. / If type is 
	 * SOLID_COLOR, the color expressed as an array of three or 
	 * four values, in the form [R, B, G, A] specifying the red, 
	 * green, and blue values of the color and, optionally, the 
	 * opacity (alpha channel). All values are numbers in the range 
	 * [0.0..1.0]. An opacity of 0 is fully transparent, and an 
	 * opacity of 1 is fully opaque.
	 * If the type is THEME_COLOR, the name string of the theme. 
	 * Theme colors are defined by the host application.
	 * @param {number} width - The width of the pen line in pixels. 
	 * / The line is centered around the current point. For 
	 * example, if the value is 2, drawing a line from (0, 10) to 
	 * (5, 10) paints the two rows of pixels directly above and 
	 * below y-position 10.
	 */
	newPen(_type: number, color: number, width: number): ScriptUIPen;
	/**
	 * Replaces any existing path in currentPath.
	 * @summary Creates a new, empty path object.
	 */
	newPath(): ScriptUIPath;
	/**
	 * Defines a line from the current postion (currentPoint) to 
	 * the start point of the current path (the value 
	 * of currentPath).
	 * @summary Closes the current path.
	 */
	closePath(): void;
	/**
	 * Returns the Point object which is the new value 
	 * of currentPoint.
	 * @summary Adds a given point to the currentPath, and makes it 
	 * the current drawing position.
	 * @param {number} x - The X coordinate for the new point, 
	 * relative to the origin of this element.
	 * @param {number} y - The Y coordinate for the new point, 
	 * relative to the origin of this element.
	 */
	moveTo(x: number, y: number): Point;
	/**
	 * The line is defined from the currentPoint to the specified 
	 * destination point. Returns the Point object  for the 
	 * destination point, which becomes the new value 
	 * of currentPoint.
	 * @summary Adds a path segment to the currentPath.
	 * @param {number} x - The X coordinate for the destination 
	 * point, relative to the origin of this element.
	 * @param {number} y - The Y coordinate for the destination 
	 * point, relative to the origin of this element.
	 */
	lineTo(x: number, y: number): Point;
	/**
	 * The rectangle can be filled using fillPath() or stroked 
	 * using strokePath().Returns the Point object  for the upper 
	 * left corner of the rectangle, which becomes the new value 
	 * of currentPoint.
	 * @summary Defines a rectangular path in 
	 * the currentPath object.
	 * @param {number} left - The left coordinate relative to the 
	 * origin of this element.
	 * @param {number} top - The top coordinate relative to the 
	 * origin of this element.
	 * @param {number} width - The width in pixels.
	 * @param {number} height - The height in pixels.
	 */
	rectPath(left: number, top: number, width: number, height: number): Point;
	/**
	 * Returns a Point object for the upper left corner of the 
	 * area, which is the new currentPoint.
	 * @summary Defines an elliptical path within a given 
	 * rectangular area in the currentPath object, which can be 
	 * filled using fillPath() or stroked using strokePath().
	 * @param {number} left - The left coordinate of the region, 
	 * relative to the origin of this element.
	 * @param {number} top - The top coordinate of the region, 
	 * relative to the origin of this element.
	 * @param {number} width - The width of the region in pixels.
	 * @param {number} height - The height of the region in pixels.
	 */
	ellipsePath(left: number, top: number, width: number, height: number): Point;
	/**
	 * Strokes the path segments of a path with a given drawing 
	 * pen.
	 * @param {ScriptUIPen} pen - The drawing pen that defines the 
	 * color and line width.
	 * @param {ScriptUIPath} path - The path object. Default is 
	 * the currentPath.
	 */
	strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void;
	/**
	 * Fills a path using a given painting brush.
	 * @param {ScriptUIBrush} brush - The brush object that defines 
	 * the fill color.
	 * @param {ScriptUIPath} path - The path object. Default is 
	 * the currentPath.
	 */
	fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void;
	/**
	 * Value is relative to the origin of this element.
	 * @summary Draws a focus ring within a region of this element.
	 * @param {number} left - The left coordinate of the region. / 
	 * Value is relative to the origin of this element.
	 * @param {number} top - The top coordinate of the region. / 
	 * Value is relative to the origin of this element.
	 * @param {number} width - The width of the region in pixels.
	 * @param {number} height - The height of the region in pixels.
	 */
	drawFocusRing(left: number, top: number, width: number, height: number): void;
	/**
	 * Uses the version of the image that is appropriate to the 
	 * element's current state.
	 * @summary Draws an image within a given region of the 
	 * element.
	 * @param {ScriptUIImage} image - The image to draw. / This 
	 * object contains different versions of an image appropriate 
	 * to various element states, such as a dimmed version for the 
	 * disabled state.
	 * @param {number} left - The left coordinate of the region, 
	 * relative to the origin of this element.
	 * @param {number} top - The top coordinate of the region, 
	 * relative to the origin of this element.
	 * @param {number} width - The width in pixels. If provided, 
	 * the image is stretched or shrunk to fit. If omitted, uses 
	 * the original image width.
	 * @param {number} height - The height in pixels. If provided, 
	 * the image is stretched or shrunk to fit. If omitted, uses 
	 * the original image height.
	 */
	drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void;
	/**
	 * Draw the platform-specific control associated with this 
	 * element.
	 */
	drawOSControl(): void;
	/**
	 * Draw a string of text starting at a given point in this 
	 * element, using a given drawing pen and font.
	 * @param {string} text - The text string.
	 * @param {ScriptUIPen} pen - The drawing pen to use.
	 * @param {number} x - The left coordinate, relative to the 
	 * origin of this element.
	 * @param {number} y - The top coordinate, relative to the 
	 * origin of this element.
	 * @param {ScriptUIFont} font - The font to use. Default is the 
	 *  font value in this object.
	 */
	drawString(text: string, pen: ScriptUIPen, x: number, y: number, font?: ScriptUIFont): void;
	/**
	 * Returns a Dimension object that contains the height and 
	 * width of the string in pixels.
	 * @summary Calculates the size needed to display a string 
	 * using the given font.
	 * @param {string} text - The text string to measure.
	 * @param {ScriptUIFont} font - The font to use. Default is 
	 * the font value in this object.
	 * @param {number} boundingWidth - The bounding width.
	 */
	measureString(text: string, font?: ScriptUIFont, boundingWidth?: number): Dimension;
}

/**
 * Contains properties that report whether the current control 
 * has the input focus, and the particular mouse button and 
 * keypress state. Passed in as argument 
 * to ScriptUIGraphics.onDraw().
 * @summary Describes an input state at the time of the 
 * triggering  ScriptUIGraphics.onDraw() event.
 * @class
 */
export declare class DrawState {
	/** True if the cursor is hovering over this element. */
	readonly mouseOver: boolean;
	/** True if the left mouse button is being pressed. */
	readonly leftButtonPressed: boolean;
	/** True if the middle mouse button is being pressed. */
	readonly middleButtonPressed: boolean;
	/** True if the right mouse button is being pressed. */
	readonly rightButtonPressed: boolean;
	/** True if the element has the input focus. */
	readonly hasFocus: boolean;
	/** True if the Shift key is being pressed. */
	readonly shiftKeyPressed: boolean;
	/** True if the Ctrl key is being pressed. */
	readonly ctrlKeyPressed: boolean;
	/** True if the Command key is being pressed (in Mac OS only). */
	readonly cmdKeyPressed: boolean;
	/** True if the Option key is being pressed (in Mac OS only). */
	readonly optKeyPressed: boolean;
	/** True if the Alt key is being pressed (in Windows only). */
	readonly altKeyPressed: boolean;
	/** True if the Num Lock key is being pressed. */
	readonly numLockKeyPressed: boolean;
	/** True if the Caps Lock key is being pressed. */
	readonly capsLockKeyPressed: boolean;
}

/**
 * Create with the newFont() method.Used as a value of font. 
 * Passed as an argument to drawString() and measureString().
 * @summary Encapsulates the qualities of a font used to draw 
 * text into a control.
 * @class
 */
export declare class ScriptUIFont {
	/** The font family name. */
	readonly family: string;
	/**
	 * The complete font name, consisting of the family and style, 
	 * if specified.
	 */
	readonly name: string;
	/** The font point size. */
	readonly size: number;
	/**
	 * The font style. One of the constants 
	 * in ScriptUIGraphics.FontStyle.
	 */
	readonly style: Object;
	/**
	 * The name of a substitution font, a fallback font to 
	 * substitute for this font if the requested font family or 
	 * style is not available.
	 */
	readonly substitute: string;
}

/**
 * Different images can reflect the current state, such as a 
 * dimmed version for a disabled control. Create with 
 * the newImage() method. Passed as an argument to drawImage().
 * @summary Encapsulates a set of images that can be drawn into 
 * a control.
 * @class
 */
export declare class ScriptUIImage {
	/**
	 * The image format. One of: resource, JPEG, GIF, TIFF, PNG, or 
	 * PICT (Macintosh).
	 */
	readonly format: string;
	/** The image name. Either the file name, or the resource name. */
	readonly name: string;
	/** The full path to the file that contains the image. */
	readonly pathname: string;
	/** The image size in pixels. */
	readonly size: Dimension;
}

/**
 * One of left, center, or right. Justification only works if 
 * this value is set on creation of the element.
 * @summary A text label that the user cannot change.
 * @class
 */
export declare class StaticText {
	/**
	 * A number of characters for which to reserve space when 
	 * calculating the preferred size of the element.
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The text justification style.
	 */
	justify: string;
	/** The text to display, a localizable string. */
	text: string;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary Always false. This element cannot have input focus.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * Creation properties of a StaticText object can include:
	 * multiline: When false (the default), the control displays a 
	 * single line of text. When true, the control displays 
	 * multiple lines, in which case the text wraps within the 
	 * width of the control.
	 * scrolling: When false (the default), the displayed text 
	 * cannot be scrolled. When true, the displayed text can be 
	 * vertically scrolled using the Up Arrow and Down Arrow; this 
	 * case implies multiline=true.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type, "statictext". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * Calls the onClick() callback if the control is clicked or if 
 * its notify() method is called.
 * @summary A pushbutton element containing a mouse-sensitive 
 * text string.
 * @class
 */
export declare class Button {
	/**
	 * A number of characters for which to reserve space when 
	 * calculating the preferred size of the element.
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The text justification style.
	 */
	justify: string;
	/** The text to display, a localizable string. */
	text: string;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * A Button object has no creation properties, but the third 
	 * argument to the add() method that creates it can be the 
	 * initial text value.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help string that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "button". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * An event-handler callback function, called when the element 
	 * has been clicked
	 */
	onClick(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * Calls the onClick() callback if the control is clicked or if 
 * its notify() method is called.
 * @summary A  mouse-sensitive pushbutton that displays an 
 * image instead of text.
 * @class
 */
export declare class IconButton {
	/** The image object that defines the image to be drawn. */
	image: ScriptUIImage;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * Creation properties of an IconButton object can include:
	 * style:  A string for the visual style, either "button", 
	 * which has a visible border with a raised or 3D appearance, 
	 * or "toolbutton", which has a flat appearance, appropriate 
	 * for inclusion in a toolbar.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "iconbutton". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * An event-handler callback function, called when the element 
	 * has been clicked.
	 */
	onClick(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * Calls the onChange() callback if the text is changed and the 
 * user types Enter or the control loses focus, or if 
 * its notify() method is called. Calls 
 * the onChanging() callback when any change is made to the 
 * text. The textselection property contains currently selected 
 * text.
 * @summary An editable text field that the user can select and 
 * change.
 * @class
 */
export declare class EditText {
	/**
	 * Setting the value replaces the current text selection and 
	 * modifies the value of the text property. If there is no 
	 * current selection, inserts the new value into the text 
	 * string at the current insertion point. The textselection 
	 * value is reset to an empty string after it modifies the text 
	 * value. Note that setting the textselection property before 
	 * the element’s parent Window exists is an undefined 
	 * operation.
	 * @summary The currently selected text, or the empty string if 
	 * there is no text selected.
	 */
	textselection: string;
	/**
	 * A number of characters for which to reserve space when 
	 * calculating the preferred size of the element.
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The text justification style.
	 */
	justify: string;
	/**
	 * The current text displayed in the field, a localizable 
	 * string.
	 */
	text: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * Creation properties of an EditText object can include:
	 * multiline: When false (the default), the control displays a 
	 * single line of text. When true, the control displays 
	 * multiple lines, in which case the text wraps within the 
	 * width of the control.
	 * readonly: When false (the default),  the control accepts 
	 * text input. When true, the control does not accept input but 
	 * only displays the contents of the text property.
	 * noecho: When false (the default), the control displays input 
	 * text. When true, the control does not display input text 
	 * (used for password input fields).
	 * enterKeySignalsOnChange: When false (the default), the 
	 * control signals an onChange event when the editable text is 
	 * changed and the control loses the keyboard focus (that is, 
	 * the user tabs to another control, clicks outside the 
	 * control, or types Enter). When true, the control only 
	 * signals an onChange() event when the editable text is 
	 * changed and the user types Enter; other changes to the 
	 * keyboard focus do not signal the event.
	 * wantReturn: Only applies to multiple line edit controls in 
	 * ScriptUI Version 6.0 or later. When true the RETURN/ENTER 
	 * keystroke is considered as text-input advancing the cursor 
	 * to the next line. The default value is false.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "edittext". */
	readonly type: string;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * The handler is called for each keypress while this control 
	 * has the input focus.
	 * @summary An event-handler callback function, called when the 
	 * content of the element is in the process of changing
	 */
	onChanging(): void;
	/**
	 * The handler is called only when the change is complete—that 
	 * is, when focus moves to another control, or the user types 
	 * Enter. The exact behavior depends on the creation parameter 
	 * enterKeySignalsOnChange;see the properties property.
	 * @summary An event-handler callback function, called when the 
	 * content of the element has been changed
	 */
	onChange(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * When you create the object, you specify whether it allows 
 * the user to select only one or multiple items. If a list 
 * contains more items than can be displayed in the available 
 * area, a scrollbar may appear that allows the user to scroll 
 * through all the list items.You can specify the items on 
 * creation of the list object, or afterward using the list 
 * object’s add() method. You can remove items programmatically 
 * with the list object’s remove() and removeAll() methods. You 
 * can create a list box with multiple columns; in this case, 
 * each row is a selectable choice, and 
 * each ListItem represents one row.
 * @summary Displays a list of choices, represented 
 * by ListItem objects.
 * @class
 */
export declare class ListBox {
	/**
	 * Access this array with a 0-based index. To obtain the number 
	 * of items in the list, use items.length.The objects are 
	 * created when items are specified on creation of the parent 
	 * list object, or afterward using the list 
	 * control’s add() method. Each item has a selected property 
	 * that is true when it is in the selected state.
	 * @summary The array of choice items displayed in the list.
	 */
	readonly items: ListItem;
	/**
	 * Used by auto-layout to determine the preferredSize of the 
	 * list, if not otherwise specified. If not set explicitly, the 
	 * size of each item is set to match the largest height and 
	 * width among all items in the list
	 * @summary The width and height in pixels of each item in the 
	 * list.
	 */
	itemSize: Dimension;
	/**
	 * Setting this value causes the selected item to be 
	 * highlighted and to be scrolled into view if necessary. If no 
	 * items are selected, the value is null. Set to null to 
	 * deselect all items. You can set the value using the index of 
	 * an item or an array of indices, rather than object 
	 * references. If set to an index value that is out of range, 
	 * the operation is ignored. When set with index values, the 
	 * property still returns object references.
	 * If you set the value to an array for a single-selection 
	 * list, only the first item in the array is selected.
	 * If you set the value to a single item for a multi-selection 
	 * list, that item is added to the current selection.
	 * @summary The currently selected item for a single-selection 
	 * list, or an array of items for current selection in a 
	 * multi-selection list.
	 */
	selection: ListItem;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child ListItem elements. */
	readonly children: Object;
	/**
	 * A JavaScript object with two read-only properties whose 
	 * values are set by the creation parameters:
	 * titles: An array of column title strings, whose length 
	 * matches the number of columns specified at creation.
	 * preferredWidths: An array of column widths, whose length 
	 * matches the number of columns specified at creation.
	 * visible: An array of boolean visible attributes, whose 
	 * length matches the number of columns specified at 
	 * creation.This property can be used to show/hide a column. 
	 * Avaiblable in ScriptUI Version 6.0 or later provided 
	 * ScriptUI.frameworkName == 'Flex'.
	 * @summary For a multi-column list box, the column properties.
	 */
	readonly columns: Object;
	/**
	 * Creation properties of a ListBox object can include:
	 * multiselect: When false (the default), only one item can be 
	 * selected. When true, multiple items can be selected.
	 * items: An array of strings for the text of each list item. 
	 * An item object is created for each item. An item with the 
	 * text string "-" creates a separator item. Supply this 
	 * property, or the items argument to the add() method, not 
	 * both. This form is most useful for elements defined using 
	 * Resource Specifications.
	 * numberOfColumns: A number of columns in which to display the 
	 * items; default is 1. When there are multiple columns, 
	 * each ListItem object represents a selectable row. 
	 * Its text and image values specify the label in the first 
	 * column, and the subitems property specifies the labels in 
	 * the additional columns.
	 * showHeaders: True to display column titles.
	 * columnWidths: An array of numbers for the preferred width in 
	 * pixels of each column.
	 * columnTitles: A corresponding array of strings for the title 
	 * of each column, to be shown if showHeaders is true.
	 * @summary An object that contains one or more creation 
	 * properties of the control (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "listbox". */
	readonly type: string;
	/**
	 * Returns the item control object. If this is a multi-column 
	 * list box, each added ListItem represents one selectable row. 
	 *  Its text and image values specify the label in the first 
	 * column, and the subitems property specifies the labels in 
	 * the additional columns.
	 * @summary Adds an item to the choices in this list.
	 * @param {string} _type - The type of the child element, the 
	 * string "item".
	 * @param {string} text - The localizable text label for the 
	 * item.
	 */
	add(_type: string, text?: string): ListItem;
	/**
	 * Retrieves an item object from the list that has a given text 
	 * label.
	 * @param {string} text - The text string to match.
	 */
	find(text: string): ListItem;
	/**
	 * Removes a child item from the list.
	 * @param {any} what - The item or child to remove, specified 
	 * by 0-based index, text value, or as a ListItem object.
	 */
	remove(what: any): void;
	/** Removes all child items from the list. */
	removeAll(): void;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * An event-handler callback function, called when the content 
	 * of the element has been changed
	 */
	onChange(): void;
	/**
	 * Check the selection property to identify the item that was 
	 * double-clicked.
	 * @summary An event-handler callback function, called when an 
	 * item in the listbox is double-clicked
	 */
	onDoubleClick(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
}

/**
 * Drop-down lists can have nonselectable separator items for 
 * visually separating groups of related items, as in a menu. 
 * You can specify the items on creation of the list object, or 
 * afterward using the list object’s add() method. You can 
 * remove items programmatically with the list object’s 
 * remove() and removeAll() methods. Calls 
 * the onChange() callback if the item selection is changed or 
 * if its notify() method is called.
 * @summary Displays a single visible item. When you click the 
 * control, a list drops down or pops up, and allows you to 
 * select one of the other items in the list.
 * @class
 */
export declare class DropDownList {
	/**
	 * Access this array with a 0-based index. To obtain the number 
	 * of items in the list, use items.length.The objects are 
	 * created when items are specified on creation of the parent 
	 * list object, or afterward using the list 
	 * control’s add() method. Items in a drop-down list can be of 
	 * type separator, in which case they cannot be selected, and 
	 * are shown as a horizontal line. Each item has 
	 * a selected property that is true when it is in the selected 
	 * state.
	 * @summary The array of choice items displayed in the 
	 * drop-down or pop-up list.
	 */
	readonly items: ListItem;
	/**
	 * Used by auto-layout to determine the preferredSize of the 
	 * list, if not otherwise specified. If not set explicitly, the 
	 * size of each item is set to match the largest height and 
	 * width among all items in the list
	 * @summary The width and height in pixels of each item in the 
	 * list.
	 */
	itemSize: Dimension;
	/**
	 * Setting this value causes the selected item to be 
	 * highlighted and to be scrolled into view if necessary. If no 
	 * items are selected, the value is null. Set to null to 
	 * deselect all items.You can set the value using the index of 
	 * an item, rather than an object reference. If set to an index 
	 * value that is out of range, the operation is ignored. When 
	 * set with an index value, the property still returns an 
	 * object reference.
	 * @summary The currently selected  list item.
	 */
	selection: ListItem;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * Creation properties of a DropDownList object can include:
	 * items: An array of strings for the text of each list item. 
	 * An item object is created for each item. An item with the 
	 * text string "-" creates a separator item. Supply this 
	 * property, or the items argument to the add() method, not 
	 * both. This form is most useful for elements defined using 
	 * Resource Specifications.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "dropdownlist". */
	readonly type: string;
	/**
	 * Returns the item control object for type="item", or null for 
	 * type="separator".
	 * @summary Adds an item or separator to the choices in this 
	 * list.
	 * @param {string} _type - The type of the child element. / 
	 * Either item (a basic, selectable item with a text label) or 
	 * separator
	 * @param {string} text - The localizable text label for the 
	 * item.
	 */
	add(_type: string, text?: string): ListItem;
	/**
	 * Retrieves an item object from the list that has a given text 
	 * label.
	 * @param {string} text - The text string to match.
	 */
	find(text: string): ListItem;
	/**
	 * Removes a child item from the list.
	 * @param {any} what - The item or child to remove, specified 
	 * by 0-based index, text value, or as a ListItem object.
	 */
	remove(what: any): void;
	/** Removes all child items from the list. */
	removeAll(): void;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * An event-handler callback function, called when the content 
	 * of the element has been changed
	 */
	onChange(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
}

/**
 * You can specify initial items in the creation parameters 
 * when creating the parent list. Create new items using the 
 * add() method (ListBox.add(), DropDownList.add(), 
 * TreeView.add()) in the parent list with control type="item", 
 * or, for DropDownList controls, type="separator".For a 
 * multi-column list box, the object represents one selectable 
 * row. Its text and image values specify the label in the 
 * first column, and the subitems property specifies the labels 
 * in the additional columns.
 * @summary An item in a list box, drop-down list, or tree 
 * view.
 * @class
 */
export declare class ListItem {
	/**
	 * When true, the item is marked with the platform-appropriate 
	 * checkmark. When false, no checkmark is drawn, but space is 
	 * reserved for it in the left margin, so that the item lines 
	 * up with other checkable items. When undefined, no space is 
	 * reserved for a checkmark.
	 * @summary The checked state of an item in a list.
	 */
	checked: boolean;
	/**
	 * When true, the item is in the expanded state and its 
	 * children are shown, when false, it is collapsed and children 
	 * are hidden.
	 * @summary The expansion state of an item of type node that is 
	 * a child of a TreeView list control.
	 */
	expanded: boolean;
	/**
	 * The 0-based index of this item in the items collection of 
	 * its parent list control.
	 */
	readonly index: number;
	/**
	 * When true, the item is part of the selection for its parent 
	 * list. When false, the item is not selected. Set to true to 
	 * select this item in a single-selection list, or to add it to 
	 * the selection array for a multi-selection list.
	 * @summary The selection state of this item.
	 */
	selected: boolean;
	/**
	 * When specified, the image appropriate to the selections 
	 * state is drawn to the left of the text label. If the parent 
	 * is a multi-column list box, this describes the label in the 
	 * first column. Labels in additional columns are described by 
	 * the subitems property.
	 * @summary An image object for an icon to display in the item.
	 */
	image: ScriptUIImage;
	/**
	 * If the parent is a multi-column list box, this describes the 
	 * label in the first column. Labels in additional columns are 
	 * described by the subitems property.
	 * @summary The label text to display for the item, a 
	 * localizable string.
	 */
	text: string;
	/**
	 * A array of JavaScript objects whose length is one less than 
	 * the number of columns. The first member describes the label 
	 * in the second column. Each member object has two properties, 
	 * of which you can specify one or both:
	 * text: A display string for the corresponding label.
	 * image: An ScriptUIImage object for the corresponding label.
	 * @summary When the parent is a multi-column ListBox, this 
	 * describes the labels for this selectable row in additional 
	 * columns.
	 */
	readonly subItems: any[];
	/**
	 * A ListItem object has no creation properties.
	 * @summary An object that contains one or more creation 
	 * properties of the item (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/** The parent element, a list control. */
	readonly parent: Object;
	/**
	 * Normally "item", but an item whose parent is 
	 * a DropDownList control can have type "separator". A 
	 * separator item is not mouse-sensitive and is drawn as a 
	 * horizontal line across the drop-down or pop-up menu.
	 * @summary The element type.
	 */
	readonly type: string;
}

/**
 * Calls the onClick() callback if the control is clicked or if 
 * its notify() method is called.
 * @summary A dual-state control showing a box that has a 
 * checkmark when the value is true, and is empty when 
 * the value is false.
 * @class
 */
export declare class Checkbox {
	/**
	 * When true, the control is in the selected or set state and 
	 * displays the check mark. When false, shows an empty box.
	 * @summary The selection state of the control.
	 */
	value: boolean;
	/**
	 * A number of characters for which to reserve space when 
	 * calculating the preferred size of the element.
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The default text justification style for child text 
	 * elements.
	 */
	justify: string;
	/** The text to display, a localizable string. */
	text: string;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * A CheckBox object has no creation properties. The third 
	 * argument to the add() method that creates it is the text to 
	 * be displayed.
	 * @summary An object that contains one or more creation 
	 * properties of the item (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "checkbox". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * An event-handler callback function, called when the element 
	 * has been clicked.
	 */
	onClick(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * The scrollbar control has a horizontal orientation if the 
 * width is greater than the height at creation time, or 
 * vertical if its height is greater than its width.
 * Calls the onChange() callback after the position of the 
 * indicator is changed or if its notify() method is called. 
 * Calls the onChanging() callback repeatedly while the user is 
 * moving the indicator. Scrollbars are often created with an 
 * associated EditText field to display the current value of 
 * the scrollbar, and to allow setting the scrollbar's position 
 * to a specific value.
 * @summary A scrollbar with a draggable scroll indicator and 
 * stepper buttons to move the indicator.
 * @class
 */
export declare class Scrollbar {
	/**
	 * The amount by which to increment or decrement a scrollbar 
	 * element's position when the user clicks a stepper button.
	 */
	stepdelta: number;
	/**
	 * Default is 20% of the range between the maxvalue and 
	 * minvalue property values.
	 * @summary The amount to increment or decrement a scrollbar 
	 * indicator's position when the user clicks ahead or behind 
	 * the moveable element.
	 */
	jumpdelta: number;
	/**
	 * If set to a value outside the range specified by minvalue 
	 * and maxvalue, it is automatically reset to the closest 
	 * boundary.
	 * @summary The current position of the indicator.
	 */
	value: number;
	/**
	 * Together with  maxvalue, sets the scrolling range.Default is 
	 * 0.
	 * @summary The minimum value allowed in the value property.
	 */
	minvalue: number;
	/**
	 * Together with minvalue, sets the scrolling range. Default is 
	 * 100.
	 * @summary The maximum value allowed in the value property.
	 */
	maxvalue: number;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the  onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * A Scrollbar object has no creation properties. The third 
	 * argument of the add() method that creates it is the initial 
	 * value, and the fourth and fifth arguments are the minimum 
	 * and maximum values of the range.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type, "scrollbar". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * The handler is called for any motion of the position 
	 * indicator while this control has the input focus.
	 * @summary An event-handler callback function, called when the 
	 * content of the element is in the process of changing
	 */
	onChanging(): void;
	/**
	 * An event-handler callback function, called when the user has 
	 * finished dragging the position indicator, or has clicked the 
	 * control.
	 */
	onChange(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * Shows the selected state when value=true, empty 
 * when value=false. Calls the onClick() callback if the 
 * control is clicked or if its notify() method is called.
 * @summary A dual-state control, grouped with other 
 * radiobuttons, of which only one can be in the selected 
 * state.
 * @class
 */
export declare class RadioButton {
	/** The selection state of this button, selected when true. */
	value: boolean;
	/**
	 * A number of characters for which to reserve space when 
	 * calculating the preferred size of the element.
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The default text justification style for child text 
	 * elements.
	 */
	justify: string;
	/** The label text for this button, a localizable string. */
	text: string;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific attributes. 
	 * A script can explicitly set this value before the layout 
	 * manager is invoked in order to establish an element size 
	 * other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * A RadioButton object has no creation properties. The third 
	 * argument of the add() method that creates can be the label 
	 * text.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "radiobutton". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * An event-handler callback function, called when the element 
	 * has been clicked.
	 */
	onClick(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * All slider controls have a horizontal orientation. Calls 
 * the onChange() callback after the position of the indicator 
 * is changed or if its notify() method is called. Calls 
 * the onChanging() callback repeatedly while the user is 
 * moving the indicator. The value property contains the 
 * current position of the indicator within the range 
 * of minvalue to maxvalue.
 * @summary A slider bar that indicates a numeric value with a 
 * moveable position indicator.
 * @class
 */
export declare class Slider {
	/**
	 * If set to a value outside the range specified 
	 * by minvalue and maxvalue, it is automatically reset to the 
	 * closest boundary.
	 * @summary The current position of the indicator.
	 */
	value: number;
	/**
	 * Together with maxvalue, sets the range.Default is 0.
	 * @summary The minimum value allowed in the value property.
	 */
	minvalue: number;
	/**
	 * Together with minvalue, sets the  range.Default is 100.
	 * @summary The maximum value allowed in the value property.
	 */
	maxvalue: number;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * A Slider object has no creation properties. The third 
	 * argument of the add() method that creates it is the initial 
	 * value, and the fourth and fifth arguments are the minimum 
	 * and maximum values of the range.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type, "slider". */
	readonly type: string;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * The handler is called for any motion of the position 
	 * indicator while this control has the input focus.
	 * @summary An event-handler callback function, called when the 
	 * content of the element is in the process of changing
	 */
	onChanging(): void;
	/**
	 * An event-handler callback function, called when the user has 
	 * finished dragging the position indicator, or has clicked the 
	 * control.
	 */
	onChange(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * All progressbar controls have a horizontal orientation. 
 * The value property contains the current position of the 
 * progress indicator; the default is 0. There is 
 * a minvalue property, but it is always 0; attempts to set it 
 * to a different value are silently ignored.
 * @summary A horizontal bar with an indicator that shows the 
 * progress of an operation.
 * @class
 */
export declare class Progressbar {
	/**
	 * If set to a value outside the range specified by 0 
	 * to maxvalue, it is automatically reset to the closest 
	 * boundary.
	 * @summary The current position of the indicator.
	 */
	value: number;
	/**
	 * The minimum value in the range; always 0. If set to a 
	 * different value, it is ignored.
	 */
	minvalue: number;
	/** The maximum value in the range. Default is 100. */
	maxvalue: number;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * A ProgressBar object has no creation properties. The third 
	 * argument of the add() method that creates it is the initial 
	 * value (default 0), and the fourth argument is the maximum 
	 * value of the range (default 100).
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type, "progessbar". */
	readonly type: string;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
}

/**
 * The ListItem children of this control (in the items array) 
 * can be of type node, which means that they can contain child 
 * items. An item with child items can expanded, so that the 
 * child items are displayed, or collapsed, so that the child 
 * items are hidden Individual items can be selected at any 
 * level of the tree.
 * @summary A hierarchical list whose items can contain child 
 * items.
 * @class
 */
export declare class TreeView {
	/**
	 * Access this array with a 0-based index. To obtain the number 
	 * of items in the list, use items.length.The objects are 
	 * created when items are specified on creation of the parent 
	 * list object, or afterward using the list 
	 * control’s add() method.
	 * @summary The array of top-level items displayed in the list.
	 */
	readonly items: ListItem;
	/**
	 * Used by auto-layout to determine the preferredSize of the 
	 * list, if not otherwise specified. If not set explicitly, the 
	 * size of each item is set to match the largest height and 
	 * width among all items in the list
	 * @summary The width and height in pixels of each item in the 
	 * list.
	 */
	itemSize: Dimension;
	/**
	 * Setting this value causes the selected item to be 
	 * highlighted and to be scrolled into view if necessary. If no 
	 * items are selected, the value is null. Set to null to 
	 * deselect all items.You can set the value using the index of 
	 * an item, rather than an object reference. If set to an index 
	 * value that is out of range, the operation is ignored. When 
	 * set with an index value, the property still returns an 
	 * object reference.
	 * @summary The currently selected  list item.
	 */
	selection: ListItem;
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * The key sequence that invokes the onShortcutKey() callback 
	 * for this element (in Windows only).
	 */
	shortcutKey: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * Creation properties of a ListBox object can include:
	 * items: An array of strings for the text of each top-level 
	 * list item. An item object is created for each item. An item 
	 * with the text string "-" creates a separator item. Supply 
	 * this property, or the items argument to the add() method, 
	 * not both. This form is most useful for elements defined 
	 * using Resource Specifications.
	 * @summary An object that contains one or more creation 
	 * properties of the control (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type, "treeview". */
	readonly type: string;
	/**
	 * Returns the item control object.
	 * @summary Adds an item to the top-level choices in this list.
	 * @param {string} _type - The type of the child element, the 
	 * string "item".
	 * @param {string} text - The localizable text label for the 
	 * item.
	 */
	add(_type: string, text?: string): ListItem;
	/**
	 * Retrieves an item object from the list that has a given text 
	 * label.
	 * @param {string} text - The text string to match.
	 */
	find(text: string): ListItem;
	/**
	 * Removes a child item from the list.
	 * @param {any} what - The item or child to remove, specified 
	 * by 0-based index in the top-level item list, text value, or 
	 * as a ListItem object.
	 */
	remove(what: any): void;
	/** Removes all child items from the list. */
	removeAll(): void;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Called when the user gives the control the keyboard focus by 
	 * clicking it or tabbing into it.
	 * @summary An event-handler callback function, called when the 
	 * element acquires the keyboard focus.
	 */
	onActivate(): void;
	/**
	 * Called when the user moves the keyboard focus from the 
	 * previously active control to another control.
	 * @summary An event-handler callback function, called when the 
	 * element loses the keyboard focus.
	 */
	onDeactivate(): void;
	/**
	 * An event-handler callback function, called when the user 
	 * collapses (closes) an expanded node in the treeview.
	 * @param {ListItem} item - The ListItem node that collapsed.
	 */
	onCollapse(item: ListItem): void;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * window is about to be drawn.
	 */
	onDraw(): void;
	/**
	 * An event-handler callback function, called when the user 
	 * expands (opens) a collapsed node in the treeview.
	 * @param {ListItem} item - The ListItem node that expanded.
	 */
	onExpand(item: ListItem): void;
	/**
	 * An event-handler callback function, called when the content 
	 * of the element has been changed
	 */
	onChange(): void;
	/**
	 * In Windows only.
	 * @summary An event-handler callback function, called when the 
	 * element's shortcutKey sequence is typed in the active 
	 * window.
	 */
	onShortcutKey(): void;
}

/**
 * The ScriptUI FlashPlayer element runs the Flash application 
 * within an Adobe application. The Flash application runs 
 * ActionScript, a different implementation of JavaScript from 
 * the ExtendScript version of JavaScript that Adobe 
 * applications run. A control object of this type contains 
 * functions that allow your script to load SWF files, control 
 * movie playback, and communicate with the ActionScript 
 * environment.
 * @summary A control that contains a Flash Player, which can 
 * load and play Flash movies stored in SWF files.
 * @class
 */
export declare class FlashPlayer {
	/**
	 * An active control is the one with keyboard focus—that is, 
	 * the one that accepts keystrokes, or in the case of a Button, 
	 * is selected when the user types Return or Enter in Windows, 
	 * or the space bar in Mac OS.
	 * @summary True if this element is active.
	 */
	active: boolean;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/**
	 * A FlashPlayer object has no creation properties.
	 * @summary An object that contains one or more creation 
	 * properties of the container (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type, "flashplayer". */
	readonly type: string;
	/**
	 * Returns the result of the invoked function, which must be 
	 * one of the allowed types. The ActionScript class and date 
	 * objects are not supported as return values.
	 * @summary Invokes an ActionScript function defined in the 
	 * Flash application.
	 * @param {string} name - The name of a Flash ActionScript 
	 * function that has been registered with the ExternalInterface 
	 * object by the currently loaded SWF file.
	 * @param {any} argument - An argument to pass through to the 
	 * function. / There can be any number of arguments. An 
	 * argument must be one of these data types:Number, String, 
	 * Boolean, null, undefined, Object, Array. No other data types 
	 * are supported.
	 */
	invokePlayerFunction(name: string, argument?: any): any;
	/**
	 * Loads a movie into the Flash Player, and begins playing it.
	 * @param {File} file - The File object for the SWF file to 
	 * load.
	 */
	loadMovie(file: File): void;
	/**
	 * Do not use on a movie that is currently playing.The 
	 * stopMovie()-playMovie() sequence does not work for SWF files 
	 * produced by Flex, or for some files produced by Flash 
	 * Authoring (depending on how they were implemented).
	 * @summary Restarts a movie that has been stopped.
	 * @param {boolean} rewind - When true, restarts the movie from 
	 * the beginning; otherwise, starts playing from the	point 
	 * where it was stopped.
	 */
	playMovie(rewind: boolean): void;
	/**
	 * The stopMovie()-playMovie() sequence does not work for SWF 
	 * files produced by Flex, or for some files produced by Flash 
	 * Authoring (depending on how they were implemented).Using 
	 * stopMovie() from the player's hosting environment has no 
	 * effect on an SWF file playing in a ScriptUI Flash Player 
	 * element. It is, however, possible to produce an SWF using 
	 * Flash Authoring that can stop itself in response to user 
	 * interaction.
	 * @summary Halts playback of the current movie.
	 */
	stopMovie(): void;
	/**
	 * One of: onClick, onChange, onChanging. By default, simulates 
	 * the onChange event for an edittext control, an onClick event 
	 * for controls that support that event.
	 * @summary Sends a notification message, simulating the 
	 * specified user interaction event.
	 * @param {string} eventName - The name of the control event 
	 * handler to call. / One of: onClick, onChange, onChanging. By 
	 * default, simulates the onChange event for an edittext 
	 * control, an onClick event for controls that support that 
	 * event.
	 */
	notify(eventName?: string): void;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * The Flash ActionScript code can call any callback function 
	 * defined on the ExtendScript side of the FlashPlayer object, 
	 * invoking it by name as a property of the control object. The 
	 * function can take any arguments of a supported data types, 
	 * and can return any value of a supported data type. data 
	 * types:Number, String, Boolean, null, undefined, Object, 
	 * Array.
	 * @summary A function definition for a callback from the Flash 
	 * ActionScript environment.
	 */
	callback(): void;
}

/**
 * A group can specify layout options for its child elements. 
 * Hiding a group hides all its children. Making it visible 
 * makes visible those children that are not individually 
 * hidden.
 * @summary A container for other controls within a window.
 * @class
 */
export declare class Group {
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element relative to 
	 * its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/**
	 * Order of creation determines which children are at the top 
	 * of a column or the left of a row; the earlier a child is 
	 * created, the closer it is to the top or left of its column 
	 * or row. If defined, alignment for a child element overrides 
	 * the alignChildren setting for the parent container. See 
	 * alignment property for values.
	 * @summary Tells the layout manager how unlike-sized children 
	 * of this container should be aligned within a column or row.
	 */
	alignChildren: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * The first time a container object is made visible, ScriptUI 
	 * invokes this layout manager by calling 
	 * its layout() function. Default is an instance of 
	 * the LayoutManager class that is automatically created when 
	 * the container element is created.
	 * @summary The layout manager for this container.
	 */
	layout: LayoutManager;
	/**
	 * You can specify different margins for each edge of the 
	 * container. The default value is based on the type of 
	 * container, and is chosen to match the standard Adobe UI 
	 * guidelines.
	 * @summary The number of pixels between the edges of a 
	 * container and the outermost child elements.
	 */
	margins: number;
	/**
	 * Interpreted by the layout manager for the container. The 
	 * default LayoutManager  Object accepts the (case-insensitive) 
	 * values row, column, or stack.  For window and panel, the 
	 * default is column, and for group the default is row. The 
	 * allowed values for the container’s alignChildren and its 
	 * children’s alignment properties depend on the orientation.
	 * @summary The layout orientation of children in a container.
	 */
	orientation: string;
	/**
	 * Because each container holds only a single row or column of 
	 * children, only a single spacing value is needed for a 
	 * container. The default value is based on the type of 
	 * container, and is chosen to match standard Adobe UI 
	 * guidelines.
	 * @summary The number of pixels separating one child element 
	 * from its adjacent sibling element.
	 */
	spacing: number;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/**
	 * A Group object has no creation properties.
	 * @summary An object that contains one or more creation 
	 * properties of the control (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "group". */
	readonly type: string;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Creates and returns a new control or container object and 
	 * adds it to the children of this group.
	 * @summary Adds a child element to this container.
	 * @param {string} _type - The type of the child element, as 
	 * specified for the type property. / Control types are listed 
	 * in the JavaScript Tools Guide.
	 * @param {Bounds} bounds - A bounds specification that 
	 * describes the size and position of the new control or 
	 * container, relative to its parent. / If supplied, this value 
	 * creates a new Bounds object which is assigned to the new 
	 * object’s bounds property.
	 * @param {string} text - The text or label, a localizable 
	 * string. / Initial text to be displayed in the control as the 
	 * title, label, or contents, depending on the control type. If 
	 * supplied, this value is assigned to the new object’s text 
	 * property.
	 * @param {Object} properties - An object that contains one or 
	 * more creation properties of the new child (properties used 
	 * only when the element is created). / The creation properties 
	 * depend on the element type. See properties property of each 
	 * control type.
	 */
	add(_type: string, bounds?: Bounds, text?: string, properties?: Object): Object;
	/**
	 * No error results if the child does not exist.
	 * @summary Removes the specified child control from this 
	 * group's children array.
	 * @param {any} what - The child control to remove, specified 
	 * by 0-based index, text property value, or as a control 
	 * object.
	 */
	remove(what: any): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * group is about to be drawn.
	 */
	onDraw(): void;
}

/**
 * A panel can specify layout options for its child elements. 
 * Hiding a panel hides all its children. Making it visible 
 * makes visible those children that are not individually 
 * hidden.
 * @summary A container for other types of controls, with an 
 * optional frame.
 * @class
 */
export declare class Panel {
	/**
	 * Reserve space for the specified number of characters; 
	 * affects calculation of preferredSize .
	 */
	characters: number;
	/**
	 * One of left, center, or right. Justification only works if 
	 * this value is set on creation of the element.
	 * @summary The default text justification style for child text 
	 * elements.
	 */
	justify: string;
	/** The title or label text, a localizable string. */
	text: string;
	/**
	 * The graphics object that can be used to customize the 
	 * element's appearance, in response to the onDraw() event.
	 */
	readonly graphics: ScriptUIGraphics;
	/**
	 * When a container is hidden, its children are also hidden, 
	 * but they retain their own visibility values, and are shown 
	 * or hidden accordingly when the parent is next shown.
	 * @summary True if this element is shown, false if it is 
	 * hidden.
	 */
	visible: boolean;
	/**
	 * Setting an element's size or location changes its bounds 
	 * property, and vice-versa.
	 * @summary The boundaries of the element, in parent-relative 
	 * coordinates.
	 */
	bounds: Bounds;
	/**
	 * The location is defined as [bounds.x, bounds.y]. Setting an 
	 * element's location changes its bounds property, and 
	 * vice-versa.
	 * @summary The upper left corner of this element's frame 
	 * relative to its parent.
	 */
	location: Point;
	/**
	 * The maximum height and width to which the element can be 
	 * resized.
	 */
	maximumSize: Dimension;
	/**
	 * The minimum height and width to which the element can be 
	 * resized.
	 */
	minimumSize: Dimension;
	/**
	 * If not explicitly set by a script, value is established by 
	 * the UI framework in which ScriptUI is employed, and is based 
	 * on such attributes of the element as its text, font, font 
	 * size, icon size, and other UI framework-specific 
	 * attributes.A script can explicitly set this value before the 
	 * layout manager is invoked in order to establish an element 
	 * size other than the default.
	 * @summary The preferred size, used by layout managers to 
	 * determine the best size for each element.
	 */
	preferredSize: Dimension;
	/**
	 * Initially undefined, and unless explicitly set by a script, 
	 * it is defined by a LayoutManager . A script can explicitly 
	 * set size before the layout manager is invoked to establish 
	 * an element size other than the preferredSize or the default 
	 * size, but this is not recommended. Defined as [bounds.width, 
	 * bounds.height]. Setting an element's size changes its bounds 
	 * property, and vice-versa.
	 * @summary The current dimensions of this element.
	 */
	size: Dimension;
	/**
	 * The bounds of this element relative to the top-level parent 
	 * window.
	 */
	readonly windowBounds: Bounds;
	/** Specifies how to align the child elements. */
	alignChildren: string;
	/** An array of child elements. */
	readonly children: Object;
	/**
	 * The first time a container object is made visible, ScriptUI 
	 * invokes this layout manager by calling 
	 * its layout() function. Default is an instance of 
	 * the LayoutManager class that is automatically created when 
	 * the container element is created.
	 * @summary The layout manager for this container.
	 */
	layout: LayoutManager;
	/**
	 * You can specify different margins for each edge of the 
	 * container. The default value is based on the type of 
	 * container, and is chosen to match the standard Adobe UI 
	 * guidelines.
	 * @summary The number of pixels between the edges of a 
	 * container and the outermost child elements.
	 */
	margins: number;
	/**
	 * Interpreted by the layout manager for the container. The 
	 * default LayoutManager  Object accepts the (case-insensitive) 
	 * values row, column, or stack.  For window and panel, the 
	 * default is column, and for group the default is row. The 
	 * allowed values for the container’s alignChildren and its 
	 * children’s alignment properties depend on the orientation.
	 * @summary The layout orientation of children in a container.
	 */
	orientation: string;
	/**
	 * Because each container holds only a single row or column of 
	 * children, only a single spacing value is needed for a 
	 * container. The default value is based on the type of 
	 * container, and is chosen to match standard Adobe UI 
	 * guidelines.
	 * @summary The number of pixels separating one child element 
	 * from its adjacent sibling element.
	 */
	spacing: number;
	/**
	 * This can be a single string, which indicates the alignment 
	 * for the orientation specified in the parent container, or an 
	 * array of two strings, indicating both the horizontal and 
	 * vertical alignment (in that order). Allowed values depend on 
	 * the orientation value of the parent container. They are not 
	 * case sensitive.
	 * For orientation=row:top, bottom, fill
	 * For orientation=column: left, right, fill
	 * For orientation=stack:top, bottom, left, right, fill
	 * @summary The alignment style for this element. If defined, 
	 * this value overrides the alignChildren setting for the 
	 * parent container.
	 */
	alignment: string;
	/**
	 * Creation properties of a Panel object can include:
	 * borderStyle: A string that specifies the appearance of the 
	 * border drawn around the panel. One of black, etched, gray, 
	 * raised, sunken. Default is etched.
	 * su1PanelCoordinates: Photoshop only. When true, this panel 
	 * automatically adjusts the positions of its children for 
	 * compatability with Photoshop CS. Default is false, meaning 
	 * that the panel does not adjust the positions of its 
	 * children, even if the parent window has automatic adjustment 
	 * enabled.
	 * @summary An object that contains one or more creation 
	 * properties of the control (properties used only when the 
	 * element is created).
	 */
	properties: Object;
	/**
	 * An enabled element can accept input, according to its type. 
	 * When false, control elements do not accept input, and all 
	 * types of elements have a dimmed appearance.
	 * @summary True if this element is enabled.
	 */
	enabled: boolean;
	/**
	 * The help text that is displayed when the mouse hovers over 
	 * the element.
	 */
	helpTip: string;
	/**
	 * Applies for column orientation and left alignment, or row 
	 * orientation and top alignment.
	 * @summary The number of pixels to indent the element during 
	 * automatic layout.
	 */
	indent: number;
	/** The parent element. */
	readonly parent: Object;
	/** The window that this element belongs to. */
	readonly window: Window;
	/** The element type; "panel". */
	readonly type: string;
	/**
	 * When a window or container is hidden, its children are also 
	 * hidden, but when it is shown again, the children retain 
	 * their own visibility states.
	 * @summary Shows this element.
	 */
	show(): void;
	/** Hides this element. */
	hide(): void;
	/**
	 * Creates and returns a new control or container object and 
	 * adds it to the children of this group.
	 * @summary Adds a child element to this container.
	 * @param {string} _type - The type of the child element, as 
	 * specified for the type property. / Control types are listed 
	 * in the JavaScript Tools Guide.
	 * @param {Bounds} bounds - A bounds specification that 
	 * describes the size and position of the new control or 
	 * container, relative to its parent. / If supplied, this value 
	 * creates a new Bounds object which is assigned to the new 
	 * object’s bounds property.
	 * @param {string} text - The text or label, a localizable 
	 * string. / Initial text to be displayed in the control as the 
	 * title, label, or contents, depending on the control type. If 
	 * supplied, this value is assigned to the new object’s text 
	 * property.
	 * @param {Object} properties - An object that contains one or 
	 * more creation properties of the new child (properties used 
	 * only when the element is created). / The creation properties 
	 * depend on the element type. See properties property of each 
	 * control type.
	 */
	add(_type: string, bounds?: Bounds, text?: string, properties?: Object): Object;
	/**
	 * No error results if the child does not exist.
	 * @summary Removes the specified child control from this 
	 * group's children array.
	 * @param {any} what - The child control to remove, specified 
	 * by 0-based index, text property value, or as a control 
	 * object.
	 */
	remove(what: any): void;
	/**
	 * Event names are listed in the JavaScript Tools Guide.
	 * @summary Registers an event handler for a particular type of 
	 * event occuring in this element.
	 * @param {string} eventName - The name of the event. / Event 
	 * names are listed in the JavaScript Tools Guide.
	 * @param {Function} handler - The function that handles the 
	 * event. / This can be the name of a function defined in the 
	 * extension, or a locally defined handler function to be 
	 * executed when the event occurs. A handler function takes one 
	 * argument, the UIEvent object.
	 * @param {boolean} capturePhase - When true, the handler is 
	 * called only in the capturing phase of the event propagation. 
	 * / Default is false, meaning that the handler is called in 
	 * the bubbling phase if this object is an ancestor of the 
	 * target, or in the at-target phase if this object is itself 
	 * the target.
	 */
	addEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * All arguments must be identical to those that were used to 
	 * register the event handler.
	 * @summary Unregisters an event handler for a particular type 
	 * of event occuring in this element.
	 * @param {string} eventName - The name of the event.
	 * @param {Function} handler - The function that handles the 
	 * event.
	 * @param {boolean} capturePhase - Whether to call the handler 
	 * only in the capturing phase of the event propagation.
	 */
	removeEventListener(eventName: string, handler: Function, capturePhase: boolean): boolean;
	/**
	 * A script can create a UIEvent object for a specific event 
	 * and pass it to this method to start the event propagation 
	 * for the event.
	 * @summary Simulates the occurrence of an event in this 
	 * target.
	 */
	dispatchEvent(): Event;
	/**
	 * Allows the script to modify or control the appearance, using 
	 * the control’s associated ScriptUIGraphics object. Handler 
	 * takes one argument, a DrawState object.
	 * @summary An event-handler callback function, called when the 
	 * panel is about to be drawn.
	 */
	onDraw(): void;
}

/**
 * Specifies the origin point of an element as horizontal and 
 * vertical pixel offsets from the origin of the element's 
 * coordinate space.
 * A Point object is created when you set an element’s location 
 * property. You can set the property using a JavaScript object 
 * with properties named x and y, or an array with 2 values in 
 * the order [x, y].
 * @summary Defines the location of a window or UI element. 
 * Contains a 2-element array.
 * @class
 */
export declare class Point {
	/**
	 * The horizontal coordinate, a pixel offset from the origin of 
	 * the element's coordinate space.
	 */
	x: number;
	/**
	 * The vertical coordinate, a pixel offset from the origin of 
	 * the element's coordinate space.
	 */
	y: number;
	/** The left coordinate. */
	left: number;
	/** The top coordinate. */
	top: number;
	/** The array length. */
	readonly length: number;
}

/**
 * Specifies the height and width of an element in pixels. A 
 * Dimension object is created when you set an element’s size 
 * property. You can set the property using a JavaScript object 
 * with named properties {width: wd, height: ht}, or an array 
 * with 2 values in the order [wd, ht].
 * @summary Defines the size of a window or UI element. 
 * Contains a 2-element array.
 * @class
 */
export declare class Dimension {
	/** The width in pixels. */
	width: number;
	/** The height in pixels. */
	height: number;
	/** The array length. */
	readonly length: number;
}

/**
 * A Bounds object is created when you set an element’s bounds 
 * property. You can set the property using a JavaScript object 
 * with properties named  left, top, right, bottom or x, y, 
 * width, height, or an array with 4 values in the order [x, y, 
 * wd, ht].
 * @summary Defines the boundaries of a window within the 
 * screen’s coordinate space, or of a UI element within the 
 * container’s coordinate space.
 * @class
 */
export declare class Bounds {
	/**
	 * The horizontal coordinate, a pixel offset from the origin of 
	 * the element's coordinate space.
	 */
	x: number;
	/**
	 * The vertical coordinate, a pixel offset from the origin of 
	 * the element's coordinate space.
	 */
	y: number;
	/** The width in pixels. */
	width: number;
	/** The height in pixels. */
	height: number;
	/**
	 * The horizontal coordinate, a pixel offset from the origin of 
	 * the element's coordinate space.
	 */
	left: number;
	/** The width in pixels. */
	right: number;
	/** The height in pixels. */
	top: number;
	/**
	 * The vertical coordinate, a pixel offset from the origin of 
	 * the element's coordinate space.
	 */
	bottom: number;
	/** The array length. */
	readonly length: number;
}

/**
 * Implements W3C standard event handling. This object is 
 * passed to a function that you register to respond to events 
 * of a certain type that occur in a window or control. Use 
 * windowObj.addEventListener() or 
 * controlObj.addEventListener() to register a handler 
 * function.
 * @summary Encapsulates input event information for an event 
 * that propagates through a container and control hierarchy.
 * @class
 */
export declare class UIEvent {
	/** True if this event can be captured. */
	readonly captures: boolean;
	/** True if the event is of a type that bubbles. */
	readonly bubbles: boolean;
	/**
	 * True if the default action associated with the event can be 
	 * canceled with preventDefault().
	 */
	readonly cancelable: boolean;
	/**
	 * The event target object which is currently handling the 
	 * event. During capturing and bubbling, this is different from 
	 * the property target.
	 */
	readonly currentTarget: boolean;
	/**
	 * The current phase of event propagation; one of none, target, 
	 * capture, bubble.
	 */
	readonly eventPhase: string;
	/** The event target object for this event. */
	readonly target: Object;
	/** The date and time at which the event occurred. */
	readonly timeStamp: Date;
	/**
	 * Event types are listed in the JavaScript Tools Guide.
	 * @summary The name of the event that this  object represents.
	 */
	readonly type: string;
	/** The ScriptUI element that this event relates to. */
	readonly view: any;
	/** The click count for a mouse-click event. */
	readonly detail: any;
	/**
	 * The UIEvent object is normally created by ScriptUI and 
	 * passed to your event handler. However, you can simulate a 
	 * user action by constructing an event object and sending it 
	 * to a target object’s dispatchEvent() function.
	 * @summary Creates an event.
	 * @param {string} _type - The event type. 
	 * See UIEvent.type property.
	 * @param {boolean} captures - Set to true if this event can be 
	 * captured.
	 * @param {boolean} bubbles - Set to true if the event bubbles.
	 * @param {Object} view - The ScriptUI element that this event 
	 * relates to.
	 * @param {number} detail - The click count for a mouse-click 
	 * event.
	 */
	UIEvent(_type: string, captures: boolean, bubbles: boolean, view?: Object, detail?: number): UIEvent;
	/**
	 * Prevents the default action associated with this event from 
	 * being called.
	 */
	preventDefault(): void;
	/** Stops the propagation of this event. */
	stopPropagation(): void;
	/**
	 * Initializes a UI event as a core W3C event.
	 * @param {string} _type - The event type.
	 * @param {boolean} captures - Set to true if this event can be 
	 * captured.
	 * @param {boolean} bubbles - Set to true if the event bubbles.
	 * @param {boolean} cancelable - Set to true if the default 
	 * action is cancelable.
	 */
	initEvent(_type: string, captures: boolean, bubbles: boolean, cancelable: boolean): void;
	/**
	 * Initializes an event.
	 * @param {string} _type - The event type.
	 * @param {boolean} captures - Set to true if this event can be 
	 * captured.
	 * @param {boolean} bubbles - Set to true if the event bubbles.
	 * @param {Object} view - The ScriptUI element that this event 
	 * relates to.
	 * @param {number} detail - The click count for a mouse-click 
	 * event.
	 */
	initUIEvent(_type: string, captures: boolean, bubbles: boolean, view?: Object, detail?: number): void;
}

/**
 * Encapsulates input event information for an event that 
 * propagates through a container and control hierarchy.  
 * Implements W3C standard event handling.
 * @summary Base class for UIEvent.
 * @class
 */
export declare class Event {
	readonly NOT_DISPATCHING: any;
	readonly CAPTURING_PHASE: any;
	readonly AT_TARGET: any;
	readonly BUBBLING_PHASE: any;
	/** True if this event can be captured. */
	readonly captures: boolean;
	/** True if the event is of a type that bubbles. */
	readonly bubbles: boolean;
	/**
	 * True if the default action associated with the event can be 
	 * canceled with preventDefault().
	 */
	readonly cancelable: boolean;
	/**
	 * The event target object which is currently handling the 
	 * event. During capturing and bubbling, this is different from 
	 * the property target.
	 */
	readonly currentTarget: boolean;
	/**
	 * The current phase of event propagation; one of none, target, 
	 * capture, bubble.
	 */
	readonly eventPhase: string;
	/** The event target object for this event. */
	readonly target: Object;
	/** The date and time at which the event occurred. */
	readonly timeStamp: Date;
	/**
	 * Event types are listed in the JavaScript Tools Guide.
	 * @summary The name of the event that this object represents.
	 */
	readonly type: string;
	/**
	 * Prevents the default action associated with this event from 
	 * being called.
	 */
	preventDefault(): void;
	/** Stops the propagation of this event. */
	stopPropagation(): void;
}

/**
 * Access through the ScriptUI.environment property.
 * @summary Defines attributes of the ScriptUI environment.
 * @class
 */
export declare class Environment {
	/**
	 * Provides access to the key state independent of the 
	 * event-handling framework.
	 * @summary An object that reports the active state of the 
	 * keyboard at any time.
	 */
	readonly keyboardState: KeyboardState;
}

/**
 * Access through the ScriptUI.events property.
 * @summary Provides access to objects used in the ScriptUI 
 * event system.
 * @class
 */
export declare class Events {
	/**
	 * The Event returned is a UIEvent,
	 * KeyboardEvent or MouseEvent object,
	 * depending on the requested type. This object can be passed 
	 * as a parameter to an element's dispatchEvent
	 * function in order to simulate a user-interaction event.
	 * @summary Creates an instance of the 
	 * specified Event subclass.
	 * @param {string} eventType - The name of an event type: one 
	 * of "UIEvent", "KeyboardEvent", or "MouseEvent".
	 */
	createEvent(eventType: string): Event;
}

/**
 * Access through 
 * the ScriptUI.environment.keyboardState property.
 * Query the properties of this object at any time to determine 
 * the current key that is down and any modifiers that are 
 * pressed.
 * @summary Reports the active state of the keyboard.
 * @class
 */
export declare class KeyboardState {
	/**
	 * A string containing the name of the currently pressed key, 
	 * such as "a", or an empty string.
	 */
	readonly keyName: string;
	/** True if the Shift key is pressed. */
	readonly shiftKey: boolean;
	/** True if the Ctrl key is pressed. */
	readonly ctrlKey: boolean;
	/** True if the Alt or Option key is pressed. */
	readonly altKey: boolean;
	/**
	 * True if the Cmd key (in Mac OS) or Windows key (in Windows) 
	 * is pressed.
	 */
	readonly metaKey: boolean;
}
