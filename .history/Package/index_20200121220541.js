//This Lambda is called when a user comments on a Subject. It increments the numberOfComments
//property on the subject

const { eventDetails } = require("./Utils");

exports.handler = async event => {
  console.log("Intercepted event: %j", event);

  const subjectId = await eventDetails(event);
  console.log("Got subject id: " + subjectId);

  const updateSubjectObject = await subjectUpdater(subjectId);
  console.log("Updated the object!!!: %j", updateSubjectObject);
  return;
};
