import { mapSectionContent, mapSections, mapSectionTwoColumns } from './map-sections';

describe('map-sections', () => {
  it('should return [] when no data is sent', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map the sections when no data is given', () => {
    const data = mapSectionTwoColumns();
    //console.log(data);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map the sections with the given datas', () => {
    const data = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
      image: {
        data: {
          id: 2,
          attributes: {
            name: 'javascript.svg',
            alternativeText: null,
            caption: null,
            width: 1030,
            height: 730,
            formats: null,
            hash: 'javascript_a39cc87352',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675824746/javascript_a39cc87352.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_a39cc87352',
              resource_type: 'image',
            },
            createdAt: '2023-02-08T02:52:28.858Z',
            updatedAt: '2023-02-08T02:52:28.858Z',
          },
        },
      },
      metadata: {
        id: 1,
        name: 'home',
        section_id: 'home',
        background: true,
      },
    });
    //console.log(data);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('https://res.cloudinary.com/dc4usb2so/image/upload/v1675824746/javascript_a39cc87352.svg');
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
    );
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  });

  it('should map section-content when no data is given', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.html).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
  });

  it('should map the given datas to section-content', () => {
    const data = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content:
        'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.',
      metadata: {
        id: 3,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.html).toBe(
      'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.',
    );
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
  });
});
