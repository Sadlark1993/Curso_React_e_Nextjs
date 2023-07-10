export const mapMenu = (menu = {}) => {
  const { logo_link: link = '', logo_name: text = '', logo_img: img = {}, menu_links: links = [] } = menu;

  return {
    link,
    text,
    img,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((aLink) => {
    const { menu_text: children = '', menu_url: link = '', open_new_tab: newTab = false } = aLink;
    return {
      children,
      link,
      newTab,
    };
  });
};
