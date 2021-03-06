/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RapydPayPortal {
        "action"?: string;
        "checkoutId": string;
        "errorAction"?: string;
        "errorHeading"?: string;
        "errorMessage"?: string;
        "heading"?: string;
        "imagePath": string;
        "message"?: string;
    }
}
declare global {
    interface HTMLRapydPayPortalElement extends Components.RapydPayPortal, HTMLStencilElement {
    }
    var HTMLRapydPayPortalElement: {
        prototype: HTMLRapydPayPortalElement;
        new (): HTMLRapydPayPortalElement;
    };
    interface HTMLElementTagNameMap {
        "rapyd-pay-portal": HTMLRapydPayPortalElement;
    }
}
declare namespace LocalJSX {
    interface RapydPayPortal {
        "action"?: string;
        "checkoutId"?: string;
        "errorAction"?: string;
        "errorHeading"?: string;
        "errorMessage"?: string;
        "heading"?: string;
        "imagePath"?: string;
        "message"?: string;
    }
    interface IntrinsicElements {
        "rapyd-pay-portal": RapydPayPortal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rapyd-pay-portal": LocalJSX.RapydPayPortal & JSXBase.HTMLAttributes<HTMLRapydPayPortalElement>;
        }
    }
}
