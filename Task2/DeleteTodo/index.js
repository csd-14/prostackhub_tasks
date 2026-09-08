const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({});

exports.handler = async (event) => {
    try {
        const body = typeof event.body === "string"
            ? JSON.parse(event.body)
            : event.body || {};

        const { id } = body;

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Todo ID is required"
                })
            };
        }

        const command = new DeleteItemCommand({
            TableName: "TodoItems",
            Key: {
                id: { S: id }
            }
        });

        await client.send(command);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Todo deleted successfully",
                id
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
