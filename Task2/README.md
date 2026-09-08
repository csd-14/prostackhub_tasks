# Task 2 — Serverless REST API / CRUD Backend

## Project Overview

A serverless Todo REST API built using AWS Lambda, Amazon DynamoDB, and Amazon API Gateway.

## AWS Services Used

- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- AWS IAM
- Amazon CloudWatch

## CRUD Operations

| Method | Endpoint | Function |
|---|---|---|
| POST | `/todos` | CreateTodo |
| GET | `/todos` | GetTodos |
| PUT | `/todos` | UpdateTodo |
| DELETE | `/todos` | DeleteTodo |

## DynamoDB

Table name:

`TodoItems`

Partition key:

`id` (String)

Each Todo contains:

- `id`
- `title`
- `completed`
- `createdAt`

## Live API

https://6mmtfmj8p5.execute-api.eu-north-1.amazonaws.com/prod/todos

## Architecture

Client → API Gateway → AWS Lambda → DynamoDB

## Testing

All four CRUD operations were tested successfully through the deployed API:

- POST — Todo created successfully
- GET — Todos retrieved successfully
- PUT — Todo updated successfully
- DELETE — Todo deleted successfully

## Region

AWS Region: `eu-north-1`

## Project

Completed as part of the ProStackHub Cloud Computing Internship.
