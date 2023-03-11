import responseHandler from "../handlers/response.handler.js";
import tmdpApi from "../tmdb/tmdb.api.js";

const personDetail = async (req, res) => {
  try {
    const { personId } = req.params;

    const person = await tmdpApi.personDetail({ personId });

    responseHandler.ok(res, person);
  } catch {
    responseHandler.error(res);
  }
};

const personMedias = async (req, res) => {
  try {
    const { personId } = req.params;

    const medias = await tmdpApi.personMedias({ personId });

    responseHandler.ok(res, medias);
  } catch {
    responseHandler.error(res);
  }
};

export default { personDetail, personMedias };
