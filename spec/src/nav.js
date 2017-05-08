MainNavItem = require('./mainNavItem');

class Nav {
  constructor(body) {
    this.navItems = [];
    this.body = body;
  }

  setup() {
    this.navItems = this.parseNavJson();
  }

  parseNavJson() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', '/api/nav.json', false);
    xmlHttp.send(null);
    const json = JSON.parse(xmlHttp.responseText)['items'];
    const colStyle = Nav.getChildColStyle(json.length);
    return json.map((item, id) => new MainNavItem(item, id, colStyle));
  }

  renderNavItems() {
    return `${this.navItems.map(item => item.render()).join('')}`;
  }

  render() {
    this.setup();
    this.appendHtml(this.renderNavItems());
    this.addClickHandlers();
  }

  appendHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    while (div.children.length > 0) {
      this.body.appendChild(div.children[0]);
    }
  }

  //Click Handlers and CSS Helpers

  addClickHandlers() {
    this.navItems.forEach(item => item.addClickHandler());
    document.getElementById('content').onclick = Nav.removeMaskAndCloseMenus;
    document.getElementById('background').onclick = Nav.removeMaskAndCloseMenus;
    document.getElementById('toggle-mobile').onclick = Nav.toggleMobileNav;
  }

  static getChildColStyle(numChildren) {
    return `col-${numChildren}`;
  }

  static removeMaskAndCloseMenus() {
    //Remove Background Mask
    document.getElementById('background').classList.remove('mask');

    //Unrotate Chevrons
    [...document.getElementsByClassName('rotate')].forEach(chevron => chevron.classList.remove('rotate'));

    //Close Desktop Menu MainNavItems
    let navbar = document.getElementById('navbar');
    [...navbar.children].forEach((child) => {
      child.children[2].classList.remove('show');
    });

    //Close Mobile Menu
    document.getElementById('toggle-mobile').classList.remove('slide-right');
    document.getElementById('toggle-mobile').classList.add('slide-left');
    document.getElementById('logo').classList.remove('slide-right');
    document.getElementById('logo').classList.add('slide-left');
    document.getElementById('navbar').classList.remove('slide-right');
    document.getElementById('navbar').classList.add('slide-left');
  }

  static toggleMobileNav() {
    document.getElementById('toggle-mobile').classList.toggle('slide-right');
    document.getElementById('toggle-mobile').classList.toggle('slide-left');
    document.getElementById('logo').classList.toggle('slide-right');
    document.getElementById('logo').classList.toggle('slide-left');
    document.getElementById('navbar').classList.toggle('slide-right');
    document.getElementById('navbar').classList.toggle('slide-left');
    document.getElementById('background').classList.toggle('mask');
  }
}

module.exports = Nav;


