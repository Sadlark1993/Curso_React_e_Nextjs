import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData();
    expect(pagesData[0].html).toBe('');
    expect(pagesData[0].slug).toBe('');
    expect(pagesData[0].title).toBe('');
    expect(pagesData[0].sections).toEqual([]);
    expect(pagesData[0].menu).toEqual({});
  });

  it('should map the given data', () => {
    const pagesData = mapData([
      {
        attributes: {
          footer_text: '<p>footer</p>',
          slug: 'this is a slug',
          title: 'Im the title',
          sections: [1, 2],
          menu: { key: 'value' },
        },
      },
    ]);
    console.log(pagesData);
    expect(pagesData[0].html).toBe('<p>footer</p>');
    expect(pagesData[0].slug).toBe('this is a slug');
    expect(pagesData[0].title).toBe('Im the title');
    expect(pagesData[0].sections).toEqual([1, 2]);
    expect(pagesData[0].menu).toEqual({ key: 'value' });
  });
});
