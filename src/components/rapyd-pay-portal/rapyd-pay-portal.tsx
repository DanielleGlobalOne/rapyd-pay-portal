import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rapyd-pay-portal',
  styleUrl: 'rapyd-pay-portal.css',
  shadow: false,
})
export class RapydPayPortal {
  @Prop() heading: string;

  @Prop() action: string;

  @Prop() message: string;

  @Prop() feedback: string;

  @Prop() checkoutId: string = '';

  componentDidLoad() {
    let script = document.createElement('script');
    script.innerHTML =
      `(function () {
      let checkout = new RapydCheckoutToolkit({
        pay_button_text: 'Pay Now',
        pay_button_color: '#4BB4D2',
        id: '` +
      this.checkoutId +
      `' , style: {
          submit: {
            base: {
              color: 'white',
            },
          },
        },
      });
      checkout.displayCheckout();
    })();`;
    document.head.appendChild(script);
  }
  render() {
    return (
      <div id="rapyd-checkout">
        <div id="title">{this.heading}</div>
        <div id="image"></div>
        <div id="action">{this.action}</div>
        <div id="message">{this.message}</div>
        <div id="feedback">{this.feedback}</div>
      </div>
    );
  }
}
