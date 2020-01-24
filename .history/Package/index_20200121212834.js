//This Lambda is called when a user comments on a Subject. It increments the numberOfComments
//property on the subject

const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({ region: `us-east-1` });

const { eventDetails } = require("./Utils");

exports.handler = async event => {
  console.log("Intercepted event: %j", event);

  const subjectId = await eventDetails(event);
  console.log("Got subject id?: " + subjectId);

  const SubjectTable = "Subject-or2wpavvmbatbhfn7vwoynk4c4-dev";

  //Get event details
  //Get SubjectId
  //Update Subject table noOfComments

  // const {
  //   sourceBucket,
  //   sourceKey,
  //   destinationBucket,
  //   largeAvatarDestinationKey,
  //   smallAvatarDestinationKey,
  //   userId
  // } = eventDetails(event);

  // try {
  //   //Download the newly added avatar from storage
  //   console.log("Processing avatar uploaded to storage");

  //   const avatar = await downloadImage(sourceKey, sourceBucket);

  //   //Compress the avatar image to a smaller size
  //   const avatars = await avatarsGenerator(avatar);
  //   const largeAvatar = avatars.largeAvatar;
  //   const smallAvatar = avatars.smallAvatar;

  //   //Upload the avatars
  //   await uploadImage(
  //     largeAvatar,
  //     largeAvatarDestinationKey,
  //     destinationBucket
  //   );
  //   await uploadImage(
  //     smallAvatar,
  //     smallAvatarDestinationKey,
  //     destinationBucket
  //   );

  //   console.log(
  //     "Uploaded the compressed avatars to Storage! Creating Picture object.."
  //   );

  //   //Create picture object in dDB
  //   const pictureObject = await pictureObjectGenerator(
  //     largeAvatarDestinationKey,
  //     destinationBucket,
  //     userId
  //   );

  //   //The avatar picture object will have the same id as the user
  //   const pictureObjectId = userId;

  //   console.log("Created Picture object! Updating User object...");
  //   console.log("pictureObjectID " + pictureObjectId + " , userId " + userId);

  //   //Update the user object with the userAvatarId so that the avatar is bound to the user
  //   await updateUserObject(userId, pictureObjectId);

  //   console.log("DONE ALL!");
  // } catch (error) {
  //   console.log("ERROR!: " + error);
  //   throw error;
  // }
};
