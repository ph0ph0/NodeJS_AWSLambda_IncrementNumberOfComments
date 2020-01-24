module.exports.eventDetails = event => {
  console.log("Getting event details...");
  const records = event.Records;
  console.log("Records: " + records);
  const dDB = records.dynamodb;
  console.log("dDB" + dDB);
  const zeroth = records[0];
  console.log("Zeroth: " + zeroth);
  const newImage = zeroth.NewImage;
  console.log("newImage: " + newImage);

  return subjectId;
};
