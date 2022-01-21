<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "rohith_rathnayake@yahoo.com";

mail($recipient, $subject, $message, $mailheader) or die(echo"
<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'>
swal({
    title: "Oops!",
    text: "There was a problem!",
    icon: "success",
    button: "Try again",
});
</script>
");

echo"
<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js'>
swal({
    title: "Success!",
    text: "Thank you for contact me. I will get back to you as soon as possible!",
    icon: "success",
});
</script>
";


?>