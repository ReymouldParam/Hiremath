<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect data from form
    $name = trim($_POST['name']);
    $number = trim($_POST['number']);
    $email = trim($_POST['email']);
    $service = trim($_POST['service']);
    $message = trim($_POST['message']);
    $policyAccepted = isset($_POST['policy']);

    // Validate required fields
    if (!$name || !$email || !$service || !$policyAccepted) {
        header("Location: contact.html?emailSuccess=false&error=missing_fields");
        exit;
    }

    // Recipient email
    $to = "reymould.social@gmail.com";

    // Email subject and body
    $subject = "Email Enquiry from hiremath website";
    $body = "Name: $name\n"
        . "Email: $email\n"
        . "Phone: $number\n"
        . "Service Interested: $service\n"
        . "Message:\n$message";
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>