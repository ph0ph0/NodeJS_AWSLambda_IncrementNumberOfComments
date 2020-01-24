module.exports.eventDetails = record => {
  try {
    const subjectId = record.dynamodb.NewImage.subjectId.S;
    return subjectId;
  } catch (error) {
    throw error;
  }
};
