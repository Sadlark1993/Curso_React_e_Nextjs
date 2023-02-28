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

export const mapSectionContent = (section = {}) => {
  /*
  {
    "__component": "section.section-content",
    "title": "NEWS COVERAGE AND SOME SURPRISES",
    "content": "The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.",
    "metadata": {
      "section_id": "intro",
      "background": false
    }
  },
  */

  const {
    __component: component = 'section.section-content',
    title = '',
    content: html = '',
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  return {
    component,
    title,
    html,
    sectionId,
    background,
  };
};

export const mapSectionGrid = (section) => {
  return section;
};
