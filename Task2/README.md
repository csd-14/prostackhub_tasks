# 🚀 Task 2 — Serverless REST API / CRUD Backend

## 📌 Project Overview

This project is a serverless Todo REST API developed as part of the **ProStackHub Cloud Computing Internship 2026**.

The backend provides complete CRUD operations for Todo items using AWS cloud services.

The application uses:

- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- AWS IAM
- Amazon CloudWatch

The API is deployed on AWS and can be accessed through a live API Gateway endpoint.

---

## 🎯 Project Objective

The objective of this task was to build and deploy a serverless REST API capable of:

1. Creating Todo items
2. Retrieving Todo items
3. Updating Todo items
4. Deleting Todo items

The backend is completely serverless, so there are no traditional servers that need to be managed.

---

# ☁️ AWS Architecture

```text
                    Client
                      |
                      | HTTPS
                      v
             Amazon API Gateway
                      |
                      | Lambda Proxy
                      v
                 AWS Lambda
                      |
                      | AWS SDK
                      v
              Amazon DynamoDB
                      |
                      v
                 TodoItems
