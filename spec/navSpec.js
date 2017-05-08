describe('Nav', () => {
  let Nav = require('./src/nav');
  let MainNavItem = require('./src/mainNavItem');
  let nav, body;

  const navItems = [
    new MainNavItem({'label': 'Work', 'url': '#/work', 'items': [{'label': 'Work', 'url': '#/work'}]}, '1', 'col-2'),
    new MainNavItem({'label': 'Work', 'url': '#/work', 'items': []}, '2', 'col-2')
  ];

  beforeEach(() => {
    body = "<body></body>";
    nav = new Nav(body);
    spyOn(nav, 'parseNavJson').and.returnValue(navItems);
    nav.setup();
  });

  it('should load navItems from JSON', () => {
    expect(nav.navItems).toBe(navItems);
  });

  it('should have a body', () => {
    expect(nav.body).not.toBe(undefined);
  });

  it('should render its navItems', () => {
    expect(nav.renderNavItems()).toBe(
      `<div id="1" class="main-nav-item col-2"><div class="chevron"></div><a href="#/work">Work</a>` +
      `<div id="1-children-container"><div id="1-0" class="sub-nav-item"><a href="#/work">Work</a></div></div></div>` +
      `<div id="2" class="main-nav-item col-2"><div class="hide"></div><a href="#/work">Work</a>` +
      `<div id="2-children-container"></div></div>`);
  })
});