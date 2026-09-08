# ProStackHub Cloud Computing Internship Tasks

This repository contains my completed tasks for the ProStackHub Virtual Internship 2026.

## 👤 Intern

**Name:** Arunashree V  
**Domain:** Cloud Computing

---

## ☁️ Task 1 — Host a Static Website with Global Delivery

### Project

A personal cloud portfolio website deployed using Amazon S3 and Amazon CloudFront.

### AWS Services Used

- Amazon S3 — Static website hosting and object storage
- Amazon CloudFront — CDN and global delivery
- Origin Access Control (OAC) — Secure access between CloudFront and S3
- HTTPS — Secure website delivery

### Live Demo

https://d5fz0wy8dnzo2.cloudfront.net/

### Task 1 Repository Files

The `Task1` folder contains:

- `index.html`
- `style.css`
- `script.js`

### Architecture

```text
User
  |
  | HTTPS
  v
Amazon CloudFront
  |
  | Origin Access Control
  v
Amazon S3
  |
  v
Static Website Files
