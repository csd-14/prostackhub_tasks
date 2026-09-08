const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({});

exports.handler = async (event) => {
    try {
        const body = typeof event.body === "string"
            ? JSON.parse(event.body)
            : event.body || {};

        const { id, title, completed } = body;

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Todo ID is required"
                })
            };
        }

        const command = new UpdateItemCommand({
            TableName: "TodoItems",
            Key: {
                id: { S: id }
            },
            UpdateExpression: "SET #title = :title, completed = :completed",
            ExpressionAttributeNames: {
                "#title": "title"
            },
            ExpressionAttributeValues: {
                ":title": { S: title || "" },
                ":completed": { BOOL: completed ?? false }
            },
            ReturnValues: "ALL_NEW"
        });

        const result = await client.send(command);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Todo updated successfully",
                todo: result.Attributes
            })
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal server error"
            })
        };
    }
};
