//This Lambda is called when a user comments on a Subject. It increments the numberOfComments
//property on the subject

const { eventDetails } = require("./Utils");
const { subjectUpdater } = require("./SubjectObjectUpdater");

exports.handler = async event => {
  console.log("Intercepted event: %j", event);

  event.Records.forEach((record) => {
    console.log("Processing record: %j", record)
    const subjectId = await eventDetails(event);
  console.log("Got subject id: " + subjectId);

  const updateSubjectObject = await subjectUpdater(subjectId);
  console.log("Updated the object!!!: %j", updateSubjectObject);
  })

  
  return;
};
