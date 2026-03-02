<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect data
    $name = trim($_POST['name']);
    $number = trim($_POST['number']);
    $email = trim($_POST['email']);
    $service = trim($_POST['service']);
    $message = trim($_POST['message']);
    $policyAccepted = isset($_POST['policy']);

    // Recipient
    $to = "samhiremath@hcsamerica.org, hr@hiremathconsulting.com";

    // Subject
    $subject = "Email Enquiry from hiremath website";

    // Body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $number\n";
    $body .= "Service Interested: $service\n\n";
    $body .= "Message:\n$message";

    // Send email (no headers, like your working version)
    $emailSent = mail($to, $subject, $body);

    // Redirect based on result
    if ($emailSent) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>