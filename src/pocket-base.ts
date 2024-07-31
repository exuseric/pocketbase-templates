import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const landingPageId = '9bbotle31txx5g6'

const getImageUrl = ({ collection, filename }) => pb.files.getUrl(collection, filename)

const getPage = async () => {
  await pb.admins.authWithPassword('eric.gathoni@yellowpageskenya.com', 'CDz5pFLmm3thaFZ');
  const record = await pb.collection("landing_page").getOne(landingPageId, {expand: 'site_details, hero, hero.image, pages, pages.page_image, pages.card_grid, pages.card_grid.image, pages.multiple_content,pages.multiple_content.image'});
  return record;
}

export { getImageUrl, getPage }