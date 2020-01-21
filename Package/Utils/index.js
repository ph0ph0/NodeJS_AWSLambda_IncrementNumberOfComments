module.exports.eventDetails = event => {
  //   console.log("Getting event details...");
  //   const records = event.Records;
  //   console.log("Records: %j", records);
  //   const zeroth = records[0];
  //   console.log("Zeroth: %j", zeroth);
  //   const dDB = records[0].dynamodb;
  //   console.log("dDB: %j", dDB);
  //   const newImage = dDB.NewImage;
  //   console.log("newImage: %j", newImage);
  //   const subjectId = newImage.subjectId.S;
  //   console.log("subjectId!!!: %j", subjectId);
  const subjectId = event.Records[0].dynamodb.NewImage.subjectId.S;
  return subjectId;
};
