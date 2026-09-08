const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({});

exports.handler = async () => {
    try {
        const command = new ScanCommand({
            TableName: "TodoItems"
        });

        const result = await client.send(command);

        const todos = (result.Items || []).map(item => ({
            id: item.id?.S,
            title: item.title?.S,
            completed: item.completed?.BOOL ?? false,
            createdAt: item.createdAt?.S
        }));

        return {
            statusCode: 200,
            body: JSON.stringify({
                todos
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
