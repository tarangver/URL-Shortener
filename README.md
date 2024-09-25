# URL Shortener Application

## Overview
This URL Shortener application allows users to input long URLs and receive shortened versions. It features a user-friendly interface and maintains a history of shortened URLs, which can be copied or deleted. The application is built using HTML, CSS, PHP, and JavaScript.

## Features
- Shortens long URLs.
- Displays a history of shortened URLs with options to copy or delete.

## Technologies Used
- HTML
- CSS
- PHP
- JavaScript

## Installation Guide

### Prerequisites
1. **Web Server**: You need a local web server environment to run PHP. You can use:
   - [XAMPP](https://www.apachefriends.org/index.html)

2. **Text Editor**: Use a code editor such as:
   - [Visual Studio Code](https://code.visualstudio.com/)

### Step 1: Set Up the Environment
1. **Install XAMPP (or similar software):**
   - Download and install [XAMPP](https://www.apachefriends.org/index.html) or another local server (like WAMP or MAMP).
   - XAMPP includes Apache (for the webserver) and MySQL (for the database).

2. **Start Apache and MySQL:**
   - Open the XAMPP Control Panel.
   - Start both the **Apache** and **MySQL** modules.

3. **Create a MySQL Database:**
   - Open your browser and go to `http://localhost/phpmyadmin/`.
   - Create a new database named `url-shortener`.
   - Go to the **SQL** tab and run the following SQL script as given in above file to create the necessary table.

### Step 2: Set Up Project Files
1. **Create a Project Folder:**
   - Navigate to your `XAMPP/htdocs` directory (usually located in `C:/xampp/htdocs`).
   - Create a new folder named `url-shortener` to hold the project files.

2. **Create the Files:**
   Inside the `url-shortener` folder, create the following files:
   - **index.html**
   - **style.css**
   - **script.js**
   - **shorten.php**

3. **Copy the Code**:
   - Copy the provided code snippets for each file into the corresponding file. Ensure the names match exactly.
   - OR download all the file inside the `url-shortener` folder.

### Step 3: Testing the Application

1. **Access the Application:**
   - Open your browser and go to `http://localhost/url-shortener/index.html`.

2. **Test URL Shortening:**
   - Enter a valid long URL (e.g., `https://www.example.com`).
   - Click on the "Shorten URL" button.
   - The shortened URL should appear, click on the URL and it should redirect you to the original long URL.
   - The shortened URL should also appear in the **History of Shortened URLs** section , along with the option to copy or delete it.
   - Test the functionality of copying the URL and deleting history entries.

### Troubleshooting
- If you encounter a "Not Found" error on hitting the shortend URL, ensure:
  - You have an `.htaccess` file in the url-shortener directory,
  - Check if Apache and MySQL are running in the XAMPP Control Panel.
  - You are navigating to the correct URL (`http://localhost/url-shortener/index.html`).
  - The filenames and paths are correct.

### Contributing
Feel free to fork this repository, make improvements, or create new features. If you have suggestions or issues, please open an issue in the GitHub repository.

### License
This project is open-source and available under the [MIT License](LICENSE).

## Conclusion
This guide should help you set up and run the URL Shortener application smoothly. Feel free to modify the application as needed, and enjoy shortening your URLs!




