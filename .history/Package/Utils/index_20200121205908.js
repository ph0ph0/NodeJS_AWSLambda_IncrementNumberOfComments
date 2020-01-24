module.exports.eventDetails = event => {
  console.log("Getting event details...");
  const records = event.Records;
  console.log(records);
  const zeroth = console.log(records[0]);
  console.log(zeroth);
  const newImage = zeroth.NewImage;
  console.log(newImage);

  return subjectId;
};
