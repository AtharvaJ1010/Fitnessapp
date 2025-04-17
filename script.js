function saveUser() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        db.collection("users").add({ name })
            .then(() => {
                alert("Welcome to Fitness Pro!");
            })
            .catch(err => {
                console.error("Error adding document: ", err);
            });
    } else {
        alert("Please enter your name!");
    }
}
