module.exports.eventDetails = event => {
  console.log("Getting event details...");
  const subjectId = event.NewImage.subjectId;
  return subjectId;
};
