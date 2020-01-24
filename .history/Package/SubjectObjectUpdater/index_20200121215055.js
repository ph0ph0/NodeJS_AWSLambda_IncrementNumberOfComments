const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({ region: `us-east-1` });

module.exports.subjectUpdater = async subjectId => {
  const SubjectTable = "Subject-or2wpavvmbatbhfn7vwoynk4c4-dev";

  var updateSubjectNumberOfCommentsParams = {
    TableName: SubjectTable,
    Key: {
      id: subjectId
    },
    UpdateExpression: "set numberOfComments = numberOfComments + :val",
    ExpressionAttributeValues: {
      ":val": 1
    },
    ReturnValues: "UPDATED_NEW"
  };

  try {
    const updatedSubjectData = await dynamo
      .update(updateSubjectNumberOfCommentsParams)
      .promise();
    return updatedSubjectData;
  } catch (error) {
    console.log("Error updating the subject object!: %j", error);
  }
};
