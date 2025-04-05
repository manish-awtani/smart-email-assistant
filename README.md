# Smart Email Assistant (AI-powered)

A full-stack AI-powered Smart Email Assistant that enhances your email experience with intelligent suggestions, instant summarization, and smart categorization.

Accessible via both a **web app** and **Chrome extension**, this tool integrates seamlessly with any email service provider including **Gmail**, **Yahoo**, and more.

---

## 🚀 Features

- **Context-Aware Reply Suggestions**: Reads emails and suggests smart replies tailored to the tone and content.
- **Customizable Tone**: Choose a tone (formal, friendly, assertive, etc.) before generating replies.
- **Image Understanding**: Analyzes images in emails to generate better responses (powered by Gemini AI).
- **Auto-Summarization**: Extracts key points from long emails for quick reading.
- **Smart Categorization**: Automatically classifies emails as **Work**, **Personal**, **Urgent**, and more.

---

## Tech Stack

- **Frontend**: React.js, JavaScript, Material UI
- **Backend**: Java, Spring Boot
- **AI Model**: Gemini AI (used via API)
- **Others**: Chrome Extension (optional), Axios, IntelliJ IDEA

---

## Project Structure

```bash
├── email-write-react       # Frontend - React App
├── email-writer-sb         # Backend - Spring Boot Application

```


## Getting Started

Follow the steps below to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smart-email-assistant.git
cd smart-email-assistant

```

## 2. Backend Setup (Spring Boot)

### Prerequisites

- Java 17+
- IntelliJ IDEA (or any IDE)
- Maven

### Steps

### Steps

1. Open a terminal and navigate to the backend folder:

    ```bash
    cd email-writer-sb
    ```

2. Open the folder in **IntelliJ IDEA** (or any Java IDE).

3. Let **Maven** resolve all dependencies by loading the `pom.xml` file.

4. Run the application using the main class (e.g., `EmailWriterApplication.java`).

5. Once the server starts, it will be available at:

    ```
    http://localhost:8080
    ```

### Test the API with Postman

- **Endpoint:**

    ```
    POST http://localhost:8080/api/email/generate
    ```

- **Request Body (JSON):**

    ```json
    {
      "emailContent": "Your email text here...",
      "tone": "formal"
    }
    ```

---

## 3. Frontend Setup (React)

### Prerequisites

- Node.js & npm (v14+)
- VS Code or any code editor

### Steps

1. Open a terminal and navigate to the React frontend folder:

    ```bash
    cd ../email-write-react
    ```

2. Install all required dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

4. The app will be running at:

    ```
    http://localhost:3000
    ```

---

## Sample Workflow

1. Paste your email into the input field.
2. Choose a tone (e.g., Friendly, Formal).
3. Click on **Generate Reply**.
4. Instantly receive an AI-generated, context-aware reply powered by Gemini AI.

---

## Chrome Extension Support

Support for a Chrome extension that allows direct reply suggestions inside Gmail and other webmail platforms is also developed.

---

## Contribution

Feel free to fork the repository, open issues, or submit pull requests for improvements, bug fixes, or new features.

---

## Credits

Built by ***Manish Awtani***
