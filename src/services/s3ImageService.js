
import AWS from "aws-sdk";
export class Uploader {
    constructor() {
        AWS.config.update({
            region: "us-east-1",
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: "<YOUR COGNITO POOL ID>",
                Key: 'AKIA2AQ2Z7MDKZ4HDMOY',
                Secret: +'EzGBosyfM11Zr7ozLMNDBm2edaZh1AWoXaMJqDL'
            }),
        });

        //*/ get reference to S3 client
        this.s3 = new AWS.S3();
    }

    uploadImage(payload) {
        let s3 = this.s3;
        return new Promise(function (resolve, reject) {
            let encodedImage = payload.file;
            let decodedImage = Buffer.from(encodedImage, "base64");

            var filePath = payload.fileName;
            var params = {
                Body: decodedImage,
                Bucket: "<YOURBUCKETNAME>",
                Key: filePath,
                ACL: "public-read" /* This makes the image public, but only works if your S3 bucket allows public access */,
                ContentType:
                    payload.contentType /* This is important to handle jpg vs png etc */,
            };
            s3.upload(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    /**
                           * data returned after upload will look like this:
                           *          Bucket: "bucketName"
                                      Key: "somefilenametouseinS3.png"
                                      Location: "URL to your image"
                           */
                    resolve(data);
                }
            });
        });
    }
}
