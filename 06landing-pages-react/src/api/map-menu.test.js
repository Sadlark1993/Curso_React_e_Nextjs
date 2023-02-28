import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.link).toBe('');
    expect(menu.text).toBe('');
    expect(menu.img).toEqual({});
  });

  it('should map menu links', () => {
    const menu = mapMenu({
      id: 1,
      logo_link: '#home',
      logo_name: 'LOGO',
      logo_img: {
        data: null,
      },
      menu_links: [
        {
          id: 1,
          menu_text: 'Intro',
          menu_url: '#intro',
          open_new_tab: false,
        },
        {
          id: 2,
          menu_text: 'grid-one',
          menu_url: '#grid-one',
          open_new_tab: false,
        },
      ],
    });
    expect(menu.link).toBe('#home');
    expect(menu.text).toBe('LOGO');
    expect(menu.img).toEqual({ data: null });
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].link).toBe('#intro');
    expect(menu.links[0].children).toBe('Intro');
    expect(menu.links).toHaveLength(2);
  });

  it('should return an empty array if no links', () => {
    const menuLinks = mapMenuLinks();
    expect(menuLinks).toEqual([]);
  });

  it('should map menu links', () => {
    const menuLinks = mapMenuLinks([
      {
        id: 1,
        menu_text: 'Intro',
        menu_url: '#intro',
        open_new_tab: false,
      },
      {
        id: 2,
        menu_text: 'grid-one',
        menu_url: '#grid-one',
        open_new_tab: false,
      },
      {},
    ]);

    expect(menuLinks[0].newTab).toBe(false);
    expect(menuLinks[0].link).toBe('#intro');
    expect(menuLinks[0].children).toBe('Intro');
    expect(menuLinks).toHaveLength(3);
  });
});
