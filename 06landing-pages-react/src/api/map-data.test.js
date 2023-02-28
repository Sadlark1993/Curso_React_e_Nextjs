import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData();
    expect(pagesData[0].html).toBe('');
    expect(pagesData[0].slug).toBe('');
    expect(pagesData[0].title).toBe('');
  });

  it('should map the given data', () => {
    const pagesData = mapData([
      {
        attributes: {
          footer_text: '<p>footer</p>',
          slug: 'this is a slug',
          title: 'Im the title',
        },
      },
    ]);
    //console.log(pagesData);
    expect(pagesData[0].html).toBe('<p>footer</p>');
    expect(pagesData[0].slug).toBe('this is a slug');
    expect(pagesData[0].title).toBe('Im the title');
  });
});
