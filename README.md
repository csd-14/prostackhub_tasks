# ProStackHub Cloud Computing Internship Tasks

This repository contains my completed projects for the **ProStackHub Cloud Computing Internship 2026**.

## 👤 Intern

**Name:** Arunashree V  
**Domain:** Cloud Computing

---

# ☁️ Task 1 — Host a Static Website with Global Delivery

## Project Overview

A responsive static portfolio website hosted on **Amazon S3** and delivered globally using **Amazon CloudFront with HTTPS**.

## 🌐 Live Demo

https://d5fz0wy8dnzo2.cloudfront.net/

## 🛠️ AWS Services Used

- Amazon S3
- Amazon CloudFront
- Origin Access Control (OAC)
- AWS HTTPS / CloudFront SSL
- Amazon IAM

## 📁 Website Files

The Task1 folder contains:

- `index.html`
- `style.css`
- `script.js`

## 🏗️ Architecture

User  
↓  
HTTPS  
↓  
Amazon CloudFront  
↓  
Origin Access Control (OAC)  
↓  
Amazon S3  
↓  
Static Website Files

## 🔐 Security

- S3 Block Public Access is enabled.
- The S3 bucket is kept private.
- CloudFront uses Origin Access Control to access the S3 origin.
- HTTPS is provided through CloudFront.

## 📌 Key Learning Outcomes

- Created and configured an Amazon S3 bucket.
- Uploaded static website files.
- Configured CloudFront for global content delivery.
- Enabled HTTPS.
- Configured Origin Access Control.
- Secured the S3 origin using Block Public Access.
- Configured `index.html` as the CloudFront default root object.

---

# 🚀 Task 2 — Serverless REST API / CRUD Backend

## Project Overview

A serverless Todo REST API built using **AWS Lambda, Amazon DynamoDB, and Amazon API Gateway**.

The API supports complete CRUD operations:

- Create Todo
- Get Todos
- Update Todo
- Delete Todo

## 🛠️ AWS Services Used

- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- AWS IAM
- Amazon CloudWatch

## 🗄️ DynamoDB

**Table Name:** `TodoItems`

### Primary Key

`id` — String

### Example Todo

```json
{
  "id": "example-id",
  "title": "My First Todo",
  "completed": false,
  "createdAt": "2026-09-08T10:00:00.000Z"
}
