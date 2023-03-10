import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page),

  mediaDetail: ({ mediaType, mediaID }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaID}`),
  mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(`genre/${mediaType}/list`),

  mediaCredits: ({ mediaType, mediaID }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaID}/credits`),

  mediaVideos: ({ mediaType, mediaID }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaID}/videos`),

  mediaRecommend: ({ mediaType, mediaID }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaID}/recommendations`),

  mediaImages: ({ mediaType, mediaID }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaID}/images`),

  mediaSearch: ({ mediaType, query, page }) =>
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),

  personDetail: ({ personID }) => tmdbConfig.getUrl(`person/${personID}`),

  personMedias: ({ personID }) =>
    tmdbConfig.getUrl(`person/${personID}combined_credits`),
};

export default tmdbEndpoints;
