{
    "Comment": "A simple task retry",
    "StartAt": "Call Amazon S3 ListObjectsV2",
    "States": {
      "Call Amazon S3 ListObjectsV2": {
        "Type": "Task",
        "Resource": "arn:aws:states:::aws-sdk:s3:listObjectsV2",
        "Parameters": {
          "Bucket": "MyData"
        },
        "Next": "Succeed State",
        "TimeoutSeconds": 5,
        "Retry": [
          {
            "ErrorEquals": [
              "ErrorA",
              "ErrorB"
            ],
            "IntervalSeconds": 1,
            "BackoffRate": 2,
            "MaxAttempts": 2,
            "Comment": "retry"
          },
          {
            "ErrorEquals": [
              "ErrorC"
            ],
            "IntervalSeconds": 5
          }
        ],
        "Catch": [
          {
            "ErrorEquals": [
              "States.ALL"
            ],
            "Next": "Fail State",
            "Comment": "Any Error"
          }
        ]
      },
      "Fail State": {
        "Type": "Fail"
      },
      "Succeed State": {
        "Type": "Succeed"
      }
    }
  }