import { newE2EPage } from '@stencil/core/testing';

describe('rapyd-pay-portal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<rapyd-pay-portal></rapyd-pay-portal>');
    const element = await page.find('rapyd-pay-portal');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<rapyd-pay-portal></rapyd-pay-portal>');
    const component = await page.find('rapyd-pay-portal');
    const element = await page.find('rapyd-pay-portal >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
