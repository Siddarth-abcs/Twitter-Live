# Twitter Clone UI + Backend

This project is a full-stack Twitter clone built with modern web technologies. It replicates core functionalities of the Twitter platform, providing a seamless user experience.

## Features

- **Google Authentication**: Secure login using Google accounts.
- **Login/Signup with Firebase**: User authentication and management with Firebase.
- **Post (Tweet) on Twitter+**: Users can create and share posts.
- **Edit Profile**: Users can update their profile information.
- **Image Upload**: Upload images to include in posts.
- **Profile Image and Background Image**: Customize profile with a profile picture and background image.

## Live Demo

[https://github-websi.web.app/home](https://github-websi.web.app/home)

---

To copy the above content, click the button below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click to Copy</title>
    <style>
        #copyButton {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
        }
    </style>
</head>
<body>
    <pre id="contentToCopy">
# Twitter Clone UI + Backend

This project is a full-stack Twitter clone built with modern web technologies. It replicates core functionalities of the Twitter platform, providing a seamless user experience.

## Features

- **Google Authentication**: Secure login using Google accounts.
- **Login/Signup with Firebase**: User authentication and management with Firebase.
- **Post (Tweet) on Twitter+**: Users can create and share posts.
- **Edit Profile**: Users can update their profile information.
- **Image Upload**: Upload images to include in posts.
- **Profile Image and Background Image**: Customize profile with a profile picture and background image.

## Live Demo

[https://github-websi.web.app/home](https://github-websi.web.app/home)
    </pre>
    <button id="copyButton" onclick="copyContent()">Copy to Clipboard</button>

    <script>
        function copyContent() {
            var content = document.getElementById("contentToCopy").textContent;
            navigator.clipboard.writeText(content).then(function() {
                alert("Content copied to clipboard!");
            }).catch(function(error) {
                alert("Failed to copy content: " + error);
            });
        }
    </script>
</body>
</html>
