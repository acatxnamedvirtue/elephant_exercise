describe('SubNavItem', () => {
  let SubNavItem = require('./src/subNavItem');
  let subNavItem;

  const label = 'test-label';
  const url = 'test-url';
  const className = 'sub-nav-item';
  const id = 1;

  beforeEach(() => {
    subNavItem = new SubNavItem({label, url}, id);
  });

  it('should have a label', () => {
    expect(subNavItem.label).toBe(label);
  });

  it('should have a url', () => {
    expect(subNavItem.url).toBe(url);
  });

  it('should have an id', () => {
    expect(subNavItem.id).toBe(id);
  });

  it('should have an appropriate className', () => {
    expect(subNavItem.className).toBe(className)
  });

  it('should render itself', () => {
    expect(subNavItem.render()).toBe(`<div id="${id}" class="${className}"><a href="${url}">${label}</a></div>`);
  });
});