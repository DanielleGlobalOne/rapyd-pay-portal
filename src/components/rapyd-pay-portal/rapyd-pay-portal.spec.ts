import { newSpecPage } from '@stencil/core/testing';
import { RapydPayPortal } from './rapyd-pay-portal';

describe('rapyd-pay-portal', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [RapydPayPortal],
      html: '<rapyd-pay-portal></rapyd-pay-portal>',
    });
    expect(root).toEqualHtml(`
      <rapyd-pay-portal>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </rapyd-pay-portal>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [RapydPayPortal],
      html: `<rapyd-pay-portal first="Stencil" last="'Don't call me a framework' JS"></rapyd-pay-portal>`,
    });
    expect(root).toEqualHtml(`
      <rapyd-pay-portal first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </rapyd-pay-portal>
    `);
  });
});
