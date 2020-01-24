//This Lambda is called when a user comments on a Subject. It increments the numberOfComments
//property on the subject

const { eventDetails } = require("./Utils");
const { subjectUpdater } = require("./SubjectObjectUpdater");

exports.handler = (event, context, callback) => {
  console.log("Intercepted event: %j", event);

  try {
    event.Records.forEach(record => {
      console.log("Processing record: %j", record);
      const subjectId = eventDetails(event);
      console.log("Got subject id: " + subjectId);

      const updateSubjectObject = subjectUpdater(subjectId);
      console.log("Updated the object!!!: %j", updateSubjectObject);
    });

    console.log("Successfully processed " + event.Records.length + "records");
    callback(null, event);
  } catch (error) {
    console.log("Error running lambda: " + error);
    //By passing null as the first argument, we tell the lambda not to retry.
    //Otherwise, it will retry endlessly for 24 hours...
    callback(null, error);
  }
};
