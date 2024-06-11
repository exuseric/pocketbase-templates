import PocketBase from 'pocketbase';

const landingPageId = '9t4jny3xul75053'
const pb = new PocketBase('http://127.0.0.1:8090');
const authData = await pb.admins.authWithPassword('eric.gathoni@yellowpageskenya.com', 'CDz5pFLmm3thaFZ');

pb.authStore.isValid ? null : authData()


function getImageUrl({collection, filename}) {
    // Generate a URL for the file using the PocketBase API.
    const url = pb.files.getUrl(collection, filename, {'thumb': '50x50'});
    
    // Return the URL of the file.
    return url;
} 

async function getRecord({ expand }) {
    try {
        // Retrieve a record from the "LandingPages" collection in PocketBase.
        // The first argument is the ID of the record to retrieve.
        // The second argument is an options object with an optional "expand" property.
        // The retrieved record is assigned to the "record" variable.
        const record = await pb.collection("LandingPages").getOne(landingPageId, { expand })

        // Return the retrieved record.
        return record
    } catch (error) {
        // If there was an error, return the error.
        return error
    }
}

async function getSEO() {
    try {
        const record = await getRecord({ expand: 'SEOHead' })
        /**
         * The retrieved record's "expand" property contains the expanded related records.
         * In this case, we want the "SEOHead" related record.
         * Assign it to the "seoHead" variable.
         */
        const seoHead = record.expand.SEOHead

        // Return the SEO Head data.
        return seoHead
    } catch (error) {
        // If there was an error, return the error.
        return error
    }
}

const getHero = async () => {
    try {
        const record = await getRecord({ expand: 'Hero, Hero.Image' })

        /**
         * The retrieved record's "expand" property contains the expanded related records.
         * In this case, we want the "Hero" related record.
         * Assign it to the "hero" variable.
         */
        const hero = record

        // Return the Hero data.
        return hero
    } catch (error) {
        // If there was an error, return the error.
        return error
    }
}

const getSiteNavigation = async () => {
    try {
        // Retrieve a record from the "LandingPages" collection in PocketBase.
        // The first argument is the ID of the record to retrieve.
        // The second argument is an options object with an optional "expand" property.
        // In this case, we want to expand the "SiteNavigation" related record.
        const record = await getRecord({expand: ""})

        /**
         * The retrieved record's "expand" property contains the expanded related records.
         * In this case, we want the "SiteNavigation" related record.
         * Assign it to the "siteNavigation" variable.
         */
        const siteNavigation = record.SiteNavigation

        // Return the Site Navigation data.
        return siteNavigation
    } catch (error) {
        // If there was an error, return the error.
        return error
    }
}


const getSiteDetails = async () => {
    try {
        // Retrieve a record from the "LandingPages" collection in PocketBase.
        // The first argument is the ID of the record to retrieve.
        // The second argument is an options object with an optional "expand" property.
        // In this case, we want to expand the "SiteDetails" related record.
        const record = await getRecord({expand: "SiteDetails, SiteDetails.SiteLogo"})

        /**
         * The retrieved record's "expand" property contains the expanded related records.
         * In this case, we want the "SiteDetails" related record.
         * Assign it to the "siteDetails" variable.
         */
        const siteDetails = record?.expand?.SiteDetails

        // Return the Site Details data.
        return siteDetails
    } catch (error) {
        // If there was an error, return the error.
        return error
    }
}


const getPages = async () => {
    try {
        // Retrieve a record from the "LandingPages" collection in PocketBase.
        // The first argument is the ID of the record to retrieve.
        // The second argument is an options object with an optional "expand" property.
        // In this case, we want to expand the "Pages" related record,
        // and include the "Cards", "Cards.CardImage", and "SectionImage" related records.
        const record = await getRecord({ expand: 'Pages, Pages.Cards, Pages.Cards.CardImage, Pages.SectionImage' })

        // The retrieved record's "expand" property contains the expanded related records.
        // In this case, we want the "Pages" related record.
        // Assign it to the "pages" variable.
        const pages = record?.expand?.Pages

        // Return the pages data.
        return pages
    } catch (error) {
        // If there was an error, return the error.
        return error
    }
}

export { pb, getRecord, getSEO, getHero, getSiteNavigation, getSiteDetails, getPages, getImageUrl }
