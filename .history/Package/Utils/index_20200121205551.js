module.exports.eventDetails = event => {
  console.log("Getting event details...");
  const subjectId = event.Records[0].NewImage.subjectId;
  return subjectId;
};
