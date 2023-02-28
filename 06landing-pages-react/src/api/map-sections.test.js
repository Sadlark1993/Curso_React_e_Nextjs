/* cspell:disable */
import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from './map-sections';

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

  it('should map text-grid when no data is sent', () => {
    const data = mapTextGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map the given datas to text-grid', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      Title: 'MY GRID',
      description: 'Uma breve descrição.',
      metadata: {
        id: 2,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 2,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
        {
          id: 3,
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
        },
      ],
      image_grid: [],
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('MY GRID');
    expect(data.grid).toEqual([
      {
        id: 1,
        title: 'Teste 1',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
      },
      {
        id: 2,
        title: 'Teste 2',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
      },
      {
        id: 3,
        title: 'Teste 3',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
      },
    ]);
  });

  it('should map gid-image when no data is passed as argument', () => {
    const data = mapImageGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map the given data to grid-image', () => {
    const data = mapImageGrid({
      id: 2,
      __component: 'section.section-grid',
      Title: 'Gallery',
      description: 'Its a Gallery',
      metadata: {
        id: 4,
        name: 'gallery',
        section_id: 'gallery',
        background: false,
      },
      text_grid: [],
      image_grid: [
        {
          id: 4,
          image: {
            data: [
              {
                id: 1,
                attributes: {
                  name: 'fire2.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 2304,
                  height: 3456,
                  formats: {
                    large: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/large_fire2_c3432a04b9.jpg',
                      hash: 'large_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'large_fire2.jpg',
                      path: null,
                      size: 85.12,
                      width: 667,
                      height: 1000,
                      provider_metadata: {
                        public_id: 'large_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    small: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/small_fire2_c3432a04b9.jpg',
                      hash: 'small_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'small_fire2.jpg',
                      path: null,
                      size: 28.6,
                      width: 333,
                      height: 500,
                      provider_metadata: {
                        public_id: 'small_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    medium: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/medium_fire2_c3432a04b9.jpg',
                      hash: 'medium_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'medium_fire2.jpg',
                      path: null,
                      size: 54.05,
                      width: 500,
                      height: 750,
                      provider_metadata: {
                        public_id: 'medium_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    thumbnail: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814672/thumbnail_fire2_c3432a04b9.jpg',
                      hash: 'thumbnail_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'thumbnail_fire2.jpg',
                      path: null,
                      size: 4.83,
                      width: 104,
                      height: 156,
                      provider_metadata: {
                        public_id: 'thumbnail_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                  },
                  hash: 'fire2_c3432a04b9',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 1035.25,
                  url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/fire2_c3432a04b9.jpg',
                  previewUrl: null,
                  provider: 'cloudinary',
                  provider_metadata: {
                    public_id: 'fire2_c3432a04b9',
                    resource_type: 'image',
                  },
                  createdAt: '2023-02-08T00:04:34.559Z',
                  updatedAt: '2023-02-28T06:42:43.253Z',
                },
              },
            ],
          },
        },
        {
          id: 5,
          image: {
            data: [
              {
                id: 1,
                attributes: {
                  name: 'fire2.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 2304,
                  height: 3456,
                  formats: {
                    large: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/large_fire2_c3432a04b9.jpg',
                      hash: 'large_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'large_fire2.jpg',
                      path: null,
                      size: 85.12,
                      width: 667,
                      height: 1000,
                      provider_metadata: {
                        public_id: 'large_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    small: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/small_fire2_c3432a04b9.jpg',
                      hash: 'small_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'small_fire2.jpg',
                      path: null,
                      size: 28.6,
                      width: 333,
                      height: 500,
                      provider_metadata: {
                        public_id: 'small_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    medium: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/medium_fire2_c3432a04b9.jpg',
                      hash: 'medium_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'medium_fire2.jpg',
                      path: null,
                      size: 54.05,
                      width: 500,
                      height: 750,
                      provider_metadata: {
                        public_id: 'medium_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    thumbnail: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814672/thumbnail_fire2_c3432a04b9.jpg',
                      hash: 'thumbnail_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'thumbnail_fire2.jpg',
                      path: null,
                      size: 4.83,
                      width: 104,
                      height: 156,
                      provider_metadata: {
                        public_id: 'thumbnail_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                  },
                  hash: 'fire2_c3432a04b9',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 1035.25,
                  url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/fire2_c3432a04b9.jpg',
                  previewUrl: null,
                  provider: 'cloudinary',
                  provider_metadata: {
                    public_id: 'fire2_c3432a04b9',
                    resource_type: 'image',
                  },
                  createdAt: '2023-02-08T00:04:34.559Z',
                  updatedAt: '2023-02-28T06:42:43.253Z',
                },
              },
            ],
          },
        },
        {
          id: 6,
          image: {
            data: [
              {
                id: 1,
                attributes: {
                  name: 'fire2.jpg',
                  alternativeText: null,
                  caption: null,
                  width: 2304,
                  height: 3456,
                  formats: {
                    large: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/large_fire2_c3432a04b9.jpg',
                      hash: 'large_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'large_fire2.jpg',
                      path: null,
                      size: 85.12,
                      width: 667,
                      height: 1000,
                      provider_metadata: {
                        public_id: 'large_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    small: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/small_fire2_c3432a04b9.jpg',
                      hash: 'small_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'small_fire2.jpg',
                      path: null,
                      size: 28.6,
                      width: 333,
                      height: 500,
                      provider_metadata: {
                        public_id: 'small_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    medium: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/medium_fire2_c3432a04b9.jpg',
                      hash: 'medium_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'medium_fire2.jpg',
                      path: null,
                      size: 54.05,
                      width: 500,
                      height: 750,
                      provider_metadata: {
                        public_id: 'medium_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                    thumbnail: {
                      ext: '.jpg',
                      url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814672/thumbnail_fire2_c3432a04b9.jpg',
                      hash: 'thumbnail_fire2_c3432a04b9',
                      mime: 'image/jpeg',
                      name: 'thumbnail_fire2.jpg',
                      path: null,
                      size: 4.83,
                      width: 104,
                      height: 156,
                      provider_metadata: {
                        public_id: 'thumbnail_fire2_c3432a04b9',
                        resource_type: 'image',
                      },
                    },
                  },
                  hash: 'fire2_c3432a04b9',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  size: 1035.25,
                  url: 'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/fire2_c3432a04b9.jpg',
                  previewUrl: null,
                  provider: 'cloudinary',
                  provider_metadata: {
                    public_id: 'fire2_c3432a04b9',
                    resource_type: 'image',
                  },
                  createdAt: '2023-02-08T00:04:34.559Z',
                  updatedAt: '2023-02-28T06:42:43.253Z',
                },
              },
            ],
          },
        },
      ],
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.description).toBe('Its a Gallery');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].srcImg).toBe(
      'https://res.cloudinary.com/dc4usb2so/image/upload/v1675814673/fire2_c3432a04b9.jpg',
    );
    expect(data.grid[0].altText).toBe(null);
    expect(data.grid).toHaveLength(3);
  });
});
