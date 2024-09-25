<?php
$host = 'localhost';
$dbname = 'url_shortener';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $method = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents("php://input"), true);

    if ($method === 'POST') {
        if (isset($data['longUrl'])) {
            $longUrl = $data['longUrl'];
            $shortCode = substr(md5(uniqid()), 0, 6);

            $stmt = $pdo->prepare("INSERT INTO urls (long_url, short_code) VALUES (?, ?)");
            $stmt->execute([$longUrl, $shortCode]);

            $shortUrl = "http://localhost/url-shortener/$shortCode";
            echo json_encode(['longUrl' => $longUrl, 'shortUrl' => $shortUrl]);
        }
    }

    // Handle DELETE request
    elseif ($method === 'DELETE') {
        if (isset($data['shortUrl'])) {
            $shortUrl = basename($data['shortUrl']);
            $stmt = $pdo->prepare("DELETE FROM urls WHERE short_code = ?");
            $stmt->execute([$shortUrl]);
            
            if ($stmt->rowCount()) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false]);
            }
        }
    }

    // Handle redirection by short code
    elseif (isset($_GET['code'])) {
        $shortCode = $_GET['code'];

        $stmt = $pdo->prepare("SELECT long_url FROM urls WHERE short_code = ?");
        $stmt->execute([$shortCode]);

        $url = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($url) {
            header("Location: " . $url['long_url']);
            exit();
        } else {
            echo "URL not found!";
        }
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
}
?>
