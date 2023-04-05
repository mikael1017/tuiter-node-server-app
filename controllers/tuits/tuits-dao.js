import tuitsModel from "./tuits-model.js";

export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
export const udpateTuit = (tid, tuit) =>
  tuitsModel.updateOne({ _id: tid }, { $set: tuit });
