* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #f6f7fb;
    color: #333;
}

/* Header */
.header {
    width: 100%;
    padding: 15px 50px;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 28px;
    font-weight: 700;
    color: #2563eb;
}

.nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #444;
    font-weight: 500;
}

.auth-buttons button {
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.login {
    background: #fff;
    color: #2563eb;
    border: 2px solid #2563eb;
}

.signup {
    background: #2563eb;
    color: #fff;
}

/* Hero Section */
.hero {
    text-align: center;
    background: linear-gradient(to right, #dbeafe, #eff6ff);
    padding: 70px 20px;
}

.hero h1 {
    font-size: 36px;
    font-weight: 700;
}

.hero p {
    margin-top: 10px;
    font-size: 18px;
    color: #555;
}

.search-box {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.search-box input {
    width: 320px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #bbb;
}

.search-box button {
    margin-left: 10px;
    padding: 10px 18px;
    background: #2563eb;
    color: white;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}

/* Categories */
.categories {
    padding: 50px 50px;
    text-align: center;
}

.categories h2 {
    font-size: 28px;
    margin-bottom: 30px;
}

.cat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 20px;
}

.cat-card {
    background: white;
    padding: 20px;
    font-weight: 600;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Courses */
.courses {
    padding: 40px 50px;
}

.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
}

.course-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.course-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.course-card h3 {
    padding: 15px;
}

/* Footer */
.footer {
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    background: #1e293b;
    color: white;
}