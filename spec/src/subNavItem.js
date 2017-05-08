NavItem = require('./navItem');

class SubNavItem extends NavItem {
  constructor({label, url}, id) {
    super({label, url, id});
    this.className = "sub-nav-item";
  }

  render() {
    return `<div id="${this.id}" class="${this.className}"><a href="${this.url}">${this.label}</a></div>`;
  }

  addClickHandler() {
    document.getElementById(this.id).onclick = SubNavItem.handleClick;
  }

  static handleClick(e) {
    let link;

    if (e.target) {
      debugger;
      link = e.target.tagName === 'DIV' ? e.target.children[0] : e.target;
    }

    if (e.currentTarget) {
      debugger;
      link = e.currentTarget.tagName === 'DIV' ? e.currentTarget.children[0] : e.currentTarget;
    }

    location.href = link.href;

    //Close Mobile Menu
    document.getElementById('toggle-mobile').classList.remove('slide-right');
    document.getElementById('toggle-mobile').classList.add('slide-left');
    document.getElementById('logo').classList.remove('slide-right');
    document.getElementById('logo').classList.add('slide-left');
    document.getElementById('navbar').classList.remove('slide-right');
    document.getElementById('navbar').classList.add('slide-left');
    document.getElementById('background').classList.remove('mask');
  }
}

module.exports = SubNavItem;