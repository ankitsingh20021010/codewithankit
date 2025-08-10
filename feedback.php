<?php
// Fetch data from form
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Your receiving email
$to = "ankitsingh20021010@mail.com";
$subject = "New Feedback from Your Website";
$body = "You have received new feedback:\n\nName: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $email";

// Send email
if (mail($to, $subject, $body, $headers)) {
  echo "<h3 style='text-align:center; margin-top: 50px; color: green;'>Thank you! Your feedback has been sent successfully.</h3>";
} else {
  echo "<h3 style='text-align:center; margin-top: 50px; color: red;'>Oops! Something went wrong. Please try again later.</h3>";
}
?>
