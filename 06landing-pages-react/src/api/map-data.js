import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data.attributes === undefined ? {} : data.attributes;

    return {
      html: footer_text,
      slug: slug,
      title: title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

//run this to test if its mapping the datas correctly from the json. You need to not export the function to do this.
/* const data = require('./datas.json');
console.log(mapData(data));
 */
