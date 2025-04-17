function enrollUser() {
  const name = document.getElementById("nameInput").value;
  const course = document.getElementById("courseSelect").value;
  const messageDiv = document.getElementById("message");

  if (name && course) {
    db.collection("enrollments").add({
      name,
      course,
      enrolledAt: new Date()
    })
    .then(() => {
      messageDiv.textContent = `✅ ${name}, you've successfully enrolled in ${course}!`;
      document.getElementById("nameInput").value = "";
      document.getElementById("courseSelect").selectedIndex = 0;
    })
    .catch(err => {
      console.error("Error enrolling:", err);
      messageDiv.textContent = "❌ Enrollment failed. Please try again.";
    });
  } else {
    messageDiv.textContent = "⚠️ Please enter your name and select a course.";
  }
}
