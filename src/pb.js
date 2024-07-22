import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const landingPageId = '4uo3oe6cx1tmq82'

const getImageUrl = ({ collection, filename }) => pb.files.getUrl(collection, filename)

const getPage = async () => {
  await pb.admins.authWithPassword('eric.gathoni@yellowpageskenya.com', 'CDz5pFLmm3thaFZ');
  const record = await pb.collection("landing_page").getOne(landingPageId, {expand: 'site_details, hero, hero.image, pages, pages.page_image, pages.card_grid, pages.card_grid.image'});
  return record;
}

export { getImageUrl, getPage }
// async function getRecord({ expand }) {
//     return await pb.collection("LandingPages").getOne(landingPageId, { expand });
// }

// async function getSEO() {
//     const record = await getRecord({ expand: 'SEOHead' })
//     return record.expand.SEOHead;
// }

// const getHero = async () => {
//     const record = await getRecord({ expand: 'Hero, Hero.Image' })
//     const hero = record.expand.Hero
//     const mappedHero = Object.keys(hero).reduce((result, key) => {
//         if (key === 'expand') {
//             Object.keys(hero[key]).forEach((expandKey) => {
//                 result[expandKey] = hero[key][expandKey];
//             });
//         } else {
//             result[key] = hero[key];
//         }
//         return result;
//     }, {});
//     return mappedHero
// }

// const getSiteNavigation = async () => {
//     const record = await getRecord({ expand: "" })
//     return record.SiteNavigation
// }

// const getSiteDetails = async () => {
//     const record = await getRecord({ expand: "SiteDetails, SiteDetails.SiteLogo" })
//     return record?.expand?.SiteDetails
// }

// const getPages = async () => {
//     const record = await getRecord({ expand: 'Pages, Pages.Cards, Pages.Cards.CardImage, Pages.VerticalCards, Pages.VerticalCards.CardImage, Pages.SectionImage' })
//     return record?.expand?.Pages
// }

// const getGallery = async() => {
//     const record = await getRecord({ expand: 'Gallery, Gallery.Gallery' })
//     return record
// }

// export { pb, getRecord, getSEO, getHero, getSiteNavigation, getSiteDetails, getPages, getImageUrl, getGallery }

