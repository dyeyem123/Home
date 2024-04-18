<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['fname'];
    if (empty($name)) {
        echo "THE NAME IS EMPTY, AND IT REQUIRES YOUR INPUT!";
    } else {
        echo "You entered: " . $name;
    }
}
?>