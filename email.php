<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect email input
    $email = trim($_POST['email']);
    // Recipient email(s)
    $to = "samhiremath@hcsamerica.org, hr@hiremathconsulting.com";

    // Email subject and body
    $subject = "Email enquiry from Hiremath website";
    $body = "Email: $email";
    // Send email
    $emailSent = mail($to, $subject, $body);
    // Redirect with result
    if ($emailSent) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>