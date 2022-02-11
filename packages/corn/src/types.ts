import { ReadFunction } from "@idealjs/reactive";

export type CornText = string | number;

export const isCornText = (
    cornChild: CornChild | undefined
): cornChild is CornText => {
    return (
        typeof cornChild == "string" ||
        typeof cornChild == "number" ||
        typeof cornChild == "boolean"
    );
};

export type CornChild =
    | CornText
    | CornComponent
    | ReadFunction<any>
    | CornElement
    | CornElement[];

export interface CornElement<P = any> {
    type: string | CornComponent<P>;
    props: P;
    key: any;
    create: () => Element;
    mount: (container: Element) => void;
    update: () => void;
    destory: () => void;
    // createElement: () => void;
}

export type CornComponent<P = any> = (props?: P) => CornElement<P>;

export type Renderer = (element: CornElement, container: Element) => void;

export type JSXFunction = <P extends {}>(
    type: string | CornComponent<P>,
    props: P,
    key: any
) => CornElement<P>;

export const DOMAttributesOBJ: {
    [name: string]: string;
} = {
    // // Clipboard Events
    // onCopy?: any;
    // onCopyCapture?: any;
    // onCut?: any;
    // onCutCapture?: any;
    // onPaste?: any;
    // onPasteCapture?: any;
    // // Composition Events
    // onCompositionEnd?: any;
    // onCompositionEndCapture?: any;
    // onCompositionStart?: any;
    // onCompositionStartCapture?: any;
    // onCompositionUpdate?: any;
    // onCompositionUpdateCapture?: any;
    // // Focus Events
    // onFocus?: any;
    // onFocusCapture?: any;
    // onBlur?: any;
    // onBlurCapture?: any;
    // // Form Events
    // onChange?: any;
    // onChangeCapture?: any;
    // onBeforeInput?: any;
    // onBeforeInputCapture?: any;
    // onInput?: any;
    // onInputCapture?: any;
    // onReset?: any;
    // onResetCapture?: any;
    // onSubmit?: any;
    // onSubmitCapture?: any;
    // onInvalid?: any;
    // onInvalidCapture?: any;
    // // Image Events
    // onLoad?: any;
    // onLoadCapture?: any;
    // onError?: any; // also a Media Event
    // onErrorCapture?: any; // also a Media Event
    // // Keyboard Events
    // onKeyDown?: any;
    // onKeyDownCapture?: any;
    // onKeyPress?: any;
    // onKeyPressCapture?: any;
    // onKeyUp?: any;
    // onKeyUpCapture?: any;
    // // Media Events
    // onAbort?: any;
    // onAbortCapture?: any;
    // onCanPlay?: any;
    // onCanPlayCapture?: any;
    // onCanPlayThrough?: any;
    // onCanPlayThroughCapture?: any;
    // onDurationChange?: any;
    // onDurationChangeCapture?: any;
    // onEmptied?: any;
    // onEmptiedCapture?: any;
    // onEncrypted?: any;
    // onEncryptedCapture?: any;
    // onEnded?: any;
    // onEndedCapture?: any;
    // onLoadedData?: any;
    // onLoadedDataCapture?: any;
    // onLoadedMetadata?: any;
    // onLoadedMetadataCapture?: any;
    // onLoadStart?: any;
    // onLoadStartCapture?: any;
    // onPause?: any;
    // onPauseCapture?: any;
    // onPlay?: any;
    // onPlayCapture?: any;
    // onPlaying?: any;
    // onPlayingCapture?: any;
    // onProgress?: any;
    // onProgressCapture?: any;
    // onRateChange?: any;
    // onRateChangeCapture?: any;
    // onSeeked?: any;
    // onSeekedCapture?: any;
    // onSeeking?: any;
    // onSeekingCapture?: any;
    // onStalled?: any;
    // onStalledCapture?: any;
    // onSuspend?: any;
    // onSuspendCapture?: any;
    // onTimeUpdate?: any;
    // onTimeUpdateCapture?: any;
    // onVolumeChange?: any;
    // onVolumeChangeCapture?: any;
    // onWaiting?: any;
    // onWaitingCapture?: any;
    // // MouseEvents
    // onAuxClick?: any;
    // onAuxClickCapture?: any;
    onClick: "onclick",
    // onClickCapture?: any;
    // onContextMenu?: any;
    // onContextMenuCapture?: any;
    // onDoubleClick?: any;
    // onDoubleClickCapture?: any;
    // onDrag?: any;
    // onDragCapture?: any;
    // onDragEnd?: any;
    // onDragEndCapture?: any;
    // onDragEnter?: any;
    // onDragEnterCapture?: any;
    // onDragExit?: any;
    // onDragExitCapture?: any;
    // onDragLeave?: any;
    // onDragLeaveCapture?: any;
    // onDragOver?: any;
    // onDragOverCapture?: any;
    // onDragStart?: any;
    // onDragStartCapture?: any;
    // onDrop?: any;
    // onDropCapture?: any;
    // onMouseDown?: any;
    // onMouseDownCapture?: any;
    // onMouseEnter?: any;
    // onMouseLeave?: any;
    // onMouseMove?: any;
    // onMouseMoveCapture?: any;
    // onMouseOut?: any;
    // onMouseOutCapture?: any;
    // onMouseOver?: any;
    // onMouseOverCapture?: any;
    // onMouseUp?: any;
    // onMouseUpCapture?: any;
    // // Selection Events
    // onSelect?: any;
    // onSelectCapture?: any;
    // // Touch Events
    // onTouchCancel?: any;
    // onTouchCancelCapture?: any;
    // onTouchEnd?: any;
    // onTouchEndCapture?: any;
    // onTouchMove?: any;
    // onTouchMoveCapture?: any;
    // onTouchStart?: any;
    // onTouchStartCapture?: any;
    // // Pointer Events
    // onPointerDown?: any;
    // onPointerDownCapture?: any;
    // onPointerMove?: any;
    // onPointerMoveCapture?: any;
    // onPointerUp?: any;
    // onPointerUpCapture?: any;
    // onPointerCancel?: any;
    // onPointerCancelCapture?: any;
    // onPointerEnter?: any;
    // onPointerEnterCapture?: any;
    // onPointerLeave?: any;
    // onPointerLeaveCapture?: any;
    // onPointerOver?: any;
    // onPointerOverCapture?: any;
    // onPointerOut?: any;
    // onPointerOutCapture?: any;
    // onGotPointerCapture?: any;
    // onGotPointerCaptureCapture?: any;
    // onLostPointerCapture?: any;
    // onLostPointerCaptureCapture?: any;
    // // UI Events
    // onScroll?: any;
    // onScrollCapture?: any;
    // // Wheel Events
    // onWheel?: any;
    // onWheelCapture?: any;
    // // Animation Events
    // onAnimationStart?: any;
    // onAnimationStartCapture?: any;
    // onAnimationEnd?: any;
    // onAnimationEndCapture?: any;
    // onAnimationIteration?: any;
    // onAnimationIterationCapture?: any;
    // // Transition Events
    // onTransitionEnd?: any;
    // onTransitionEndCapture?: any;
};

const TYPES = {
    Corn: Symbol("Corn"),
    Reactive: Symbol("Reactive"),
};

export default TYPES;
