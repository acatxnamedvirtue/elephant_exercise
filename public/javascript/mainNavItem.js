class MainNavItem extends NavItem {
  constructor({label, url, items}, id, colStyle) {
    super({label, url, id});
    this.className = "main-nav-item";
    this.items = this.setupChildren(items);
    this.colStyle = colStyle;
  }

  setupChildren(children) {
    return children.map((child, index) => new SubNavItem(child, `${this.id}-${index}`));
  }

  renderChildren() {
    return this.items.map(child => child.render()).join("");
  }

  render() {
    const chevron = this.items.length > 0 ? 'chevron' : 'hide';
    return `<div id="${this.id}" class="${this.className} ${this.colStyle}"><div class="${chevron}"></div><a href="${this.url}">${this.label}</a>` +
      `<div id="${this.id}-children-container">${this.renderChildren()}</div></div>`;
  }

  //Click Handlers and CSS Helpers

  addClickHandler() {
    document.getElementById(this.id).onclick = this.handleClick;
    this.items.forEach(item => item.addClickHandler());
  }

  handleClick(e) {
    const el = e.currentTarget;
    const childrenContainer = el.children[2];
    const children = childrenContainer.children;
    const numChildren = children.length;
    const parent = el.parentElement;

    //If other MainNavItems are showing, hide them
    [...parent.children].forEach((child) => {
      if (child.id !== (el.id) && child.tagName !== "IMG") {
        child.children[2].classList.remove('show');
        child.children[0].classList.remove('rotate');
      }
    });

    //If MainNavItem has children, toggle them and do not navigate to url
    if (numChildren > 0) {
      e.preventDefault();
      childrenContainer.classList.toggle('show');
      el.children[0].classList.toggle('rotate');
    } else { //If no children, close menu and navigate to url
      document.getElementById('toggle-mobile').classList.remove('slide-right');
      document.getElementById('toggle-mobile').classList.add('slide-left');
      document.getElementById('logo').classList.remove('slide-right');
      document.getElementById('logo').classList.add('slide-left');
      document.getElementById('navbar').classList.remove('slide-right');
      document.getElementById('navbar').classList.add('slide-left');
      [...document.getElementsByClassName('rotate')].forEach(chevron => chevron.classList.remove('rotate'));
      document.getElementById('background').classList.remove('mask');
    }

    //Add mask if desktop menu is open, remove if not
    if (childrenContainer.classList.contains('show')) {
      document.getElementById('background').classList.add('mask')
    } else {
      document.getElementById('background').classList.remove('mask');
    }

    //If mobile menu is open, make sure mask is enabled
    if (document.getElementById('navbar').classList.contains('slide-right')) {
      document.getElementById('background').classList.add('mask');
    }
  }
}
