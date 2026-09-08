# 🚀 Task 2 — Serverless REST API / CRUD Backend

## 📌 Project Overview

This project is a serverless Todo REST API developed as part of the **ProStackHub Cloud Computing Internship 2026**.

The backend provides complete CRUD (Create, Read, Update, Delete) functionality for Todo items using AWS managed services.

The application is designed using a serverless architecture, so there are no traditional servers to manage.

---

## 👤 Intern Details

**Name:** Arunashree V  
**Domain:** Cloud Computing  
**Internship:** ProStackHub Cloud Computing Internship 2026

---

# ☁️ AWS Architecture

The project uses the following AWS services:

- AWS API Gateway
- AWS Lambda
- Amazon DynamoDB
- AWS IAM
- Amazon CloudWatch

### Architecture Flow

```text
                    User / Client
                         |
                         | HTTPS
                         v
                Amazon API Gateway
                         |
          +--------------+--------------+
          |              |              |
         POST            GET           PUT / DELETE
          |              |              |
          v              v              v
     CreateTodo       GetTodos      UpdateTodo
                                      DeleteTodo
          |              |              |
          +--------------+--------------+
                         |
                         v
                  Amazon DynamoDB
                     TodoItems
