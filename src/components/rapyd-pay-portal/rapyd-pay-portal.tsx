import { Component, Prop, h, State, Host } from '@stencil/core';

@Component({
  tag: 'rapyd-pay-portal',
  styleUrl: 'rapyd-pay-portal.css',
})
export class RapydPayPortal {
  @Prop({ reflect: true, mutable: true }) heading?: string;

  @Prop({ reflect: true, mutable: true }) action?: string;

  @Prop({ reflect: true, mutable: true }) message?: string;

  @Prop({ reflect: true, mutable: true }) errorHeading?: string;

  @Prop({ reflect: true, mutable: true }) errorAction?: string;

  @Prop({ reflect: true, mutable: true }) errorMessage?: string;

  @Prop({ reflect: true, mutable: true }) checkoutId: string;

  @Prop({ reflect: true, mutable: true }) imagePath: string;

  @State() hideFeedback: boolean;
  @State() error: boolean;

  componentDidLoad() {
    this.hideFeedback = true;
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

    window.addEventListener('onCheckoutPaymentSuccess', (event: CustomEvent) => {
      console.info(event.detail);
      this.feedback(event);
    });
    window.addEventListener('onCheckoutFailure', (event: CustomEvent) => {
      console.error(event.detail.error);
      this.feedback(event);
    });
    window.addEventListener('onCheckoutPaymentFailure', (event: CustomEvent) => {
      console.error(event.detail.error);
      this.feedback(event);
    });

    // display information to the user
  }
  feedback = (event: CustomEvent) => {
    this.hideFeedback = false;
    if (event.detail.error) {
      this.error = true;
      if (!this.errorMessage.includes(event.detail.error)) this.errorMessage += ' ' + event.detail.error;
    } else {
      this.error = false;
      if (!this.message.includes(event.detail?.sales_order)) this.message += ' ' + event.detail?.sales_order;
    }
  };
  render() {
    return (
      <Host>
        <div id="rapyd-checkout"></div>
        <div id="feedback" hidden={this.hideFeedback}>
          <div id="heading">{this.error ? this.errorHeading : this.heading}</div>
          <img src={this.imagePath} hidden={!this.imagePath} alt="" />
          <div id="action">{this.error ? this.errorAction : this.action}</div>
          <div id="message">{this.error ? this.errorMessage : this.message}</div>
        </div>
      </Host>
    );
  }
}
