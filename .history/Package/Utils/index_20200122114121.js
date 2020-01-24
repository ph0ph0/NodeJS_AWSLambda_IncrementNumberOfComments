module.exports.eventDetails = record => {
  // const dDB = record.dynamodb;
  // console.log("dDB: %j", dDB);
  // const newImage = dDB.NewImage;
  // console.log("newImage: %j", newImage);
  // const subjectId = newImage.subjectId.S;
  // console.log("subjectId!!!: %j", subjectId);
  try {
    const subjectId = record.dynamodb.NewImage.subjectId.S;
    return subjectId;
  } catch (error) {
    throw error;
  }
};
