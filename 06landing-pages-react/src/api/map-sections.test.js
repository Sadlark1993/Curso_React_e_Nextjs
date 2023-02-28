import { mapSections, mapSectionTwoColumns } from './map-sections';

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
    console.log(data);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('https://res.cloudinary.com/dc4usb2so/image/upload/v1675824746/javascript_a39cc87352.svg');
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
    );
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  });
});
