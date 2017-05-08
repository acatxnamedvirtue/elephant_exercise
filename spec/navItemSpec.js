describe('NavItem', () => {
  let NavItem = require('./src/navItem');
  let navItem;

  const label = 'test-label';
  const url = 'test-url';
  const id = 'id';

  beforeEach(() => {
    navItem = new NavItem({label, url, id});
  });

  it('should have a label', () => {
    expect(navItem.label).toBe(label);
  });

  it('should have a url', () => {
    expect(navItem.url).toBe(url);
  });

  it('should have an id', () => {
    expect(navItem.id).toBe(id);
  });
});