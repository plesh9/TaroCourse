<?php
$date="Date:".Date('Y-m-d')."
";
$name = "Name:".test_input($_POST['name'])."
";
$email = "Email:".test_input($_POST['email'])."
";
$phone = "Phone:".test_input($_POST['phone'])."
";
$file=fopen("data.txt", "a");
fwrite($file, $date);
fwrite($file, $name);
fwrite($file, $email);
fwrite($file, $phone);
fwrite($file, '
');
fclose($file);

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  $data = preg_replace("/\s+/", " ", $data);
  return $data;
}
?>