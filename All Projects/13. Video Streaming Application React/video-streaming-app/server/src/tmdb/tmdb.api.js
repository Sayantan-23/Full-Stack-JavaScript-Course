import axios from "axios";
import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoints.js";

const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    await axiosClient.get(
      tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),

  mediaDetail: async ({ mediaType, page }) =>
    await axiosClient.get(tmdbEndpoints.mediaDetail({ mediaType, page })),

  mediaGenres: async ({ mediaType }) =>
    await axiosClient.get(tmdbEndpoints.mediaGenres({ mediaType })),

  mediaCredits: async ({ mediaType, mediaID }) =>
    await axiosClient.get(tmdbEndpoints.mediaCredits({ mediaType, mediaID })),

  mediaVideos: async ({ mediaType, mediaID }) =>
    await axiosClient.get(tmdbEndpoints.mediaVideos({ mediaType, mediaID })),

  mediaImages: async ({ mediaType, mediaID }) =>
    await axiosClient.get(tmdbEndpoints.mediaImages({ mediaType, mediaID })),

  mediaRecommend: async ({ mediaType, mediaID }) =>
    await axiosClient.get(tmdbEndpoints.mediaRecommend({ mediaType, mediaID })),

  mediaSearch: async ({ mediaType, query, page }) =>
    await axiosClient.get(
      tmdbEndpoints.mediaSearch({ mediaType, query, page })
    ),

  personDetail: async ({ personID }) =>
    await axiosClient.get(tmdbEndpoints.personDetail({ personID })),

  personMedias: async ({ personID }) =>
    await axiosClient.get(tmdbEndpoints.personMedias({ personID })),
};
