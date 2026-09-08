const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const crypto = require("crypto");

const client = new DynamoDBClient({});

exports.handler = async (event) => {
    try {
        const body = typeof event.body === "string"
            ? JSON.parse(event.body)
            : event.body || {};

        const title = body.title;

        if (!title) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Title is required"
                })
            };
        }

        const id = crypto.randomUUID();
        const createdAt = new Date().toISOString();

        const command = new PutItemCommand({
            TableName: "TodoItems",
            Item: {
                id: { S: id },
                title: { S: title },
                completed: { BOOL: false },
                createdAt: { S: createdAt }
            }
        });

        await client.send(command);

        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Todo created successfully",
                todo: {
                    id,
                    title,
                    completed: false,
                    createdAt
                }
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
