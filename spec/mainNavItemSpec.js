describe('MainNavItem', () => {
  let MainNavItem = require('./src/mainNavItem');
  let mainNavItem;
  const label = 'test-label';
  const url = 'test-url';
  const className = 'main-nav-item';
  const subClassName = 'sub-nav-item';
  const items = [{'label': 'Work', 'url': '#/work', 'items': []}];
  const id = '1';
  const colStyle = 'col-2';

  beforeEach(() => {
    mainNavItem = new MainNavItem({label, url, items}, id, colStyle);
  });

  it('should have a label', () => {
    expect(mainNavItem.label).toBe(label);
  });

  it('should have a url', () => {
    expect(mainNavItem.url).toBe(url);
  });

  it('should have an id', () => {
    expect(mainNavItem.id).toBe(id);
  });

  it('should have a colStyle', () => {
    expect(mainNavItem.colStyle).toBe(colStyle);
  });

  it('should have an appropriate className', () => {
    expect(mainNavItem.className).toBe(className);
  });

  it('should render itself and its children', () => {
    expect(mainNavItem.render()).toBe(
      `<div id="${id}" class="${className} ${colStyle}"><div class="chevron"></div><a href="${url}">${label}</a>` +
      `<div id="${id}-children-container"><div id="${id}-0" class="${subClassName}">` +
      `<a href="${items[0].url}">${items[0].label}</a></div></div></div>`);
  });
});