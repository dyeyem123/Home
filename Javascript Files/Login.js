function validateLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Add your authentication logic here
        if (username === "dyey_em"&& password === "123") {
        window.location.href = "home.html";
        } else {
        alert("Invalid username or password. Please try again.");
        }
      }
      function resetForm(){
        document.getElementById("loginForm").reset();
      }