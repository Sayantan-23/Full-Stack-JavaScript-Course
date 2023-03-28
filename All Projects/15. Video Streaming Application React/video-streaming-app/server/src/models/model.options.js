const modelOptions = {
  toJSON: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id;
      return obj;
    },
  },
  toObject: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id;
      return obj;
    },
  },
  versionKey: false,
  timeStamps: true,
};

export default modelOptions;