export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    } else if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    } else if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  /*
  {
    "__component": "section.section-two-columns",
    "title": "JANUARY BRINGS US FIREFOX 85",
    "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
    "image": {
      "data": {
        "attributes": {
          "url": "https://res.cloudinary.com/dc4usb2so/image/upload/v1675824746/javascript_a39cc87352.svg",
        }
      }
    },
    "metadata": {
      "section_id": "home",
      "background": true
    }
  },
  */

  const {
    __component: component = 'section.section-two-columns',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return { component, title, text, srcImg, background, sectionId };
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
