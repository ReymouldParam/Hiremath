<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect email input
    $email = trim($_POST['email']);

    // Basic validation
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?emailSuccess=false&error=invalid_email");
        exit;
    }

    // Recipient email(s)
    $to = "reymould.social@gmail.com";

    // Email subject and body
    $subject = "Email enquiry from Hygenixseeds.com website";
    $body = "Email: $email";
    // Send email
    $emailSent = mail($to, $subject, $body, $headers);
    // Redirect with result
    if ($emailSent) {
        header("Location: index.html?emailSuccess=true");
    } else {
        header("Location: index.html?emailSuccess=false");
    }
    exit;
}
?>