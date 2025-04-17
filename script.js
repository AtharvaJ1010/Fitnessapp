function submitEnrollment() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;
  const msg = document.getElementById("enrollMsg");

  if (name && email && course) {
    db.collection("enrollments").add({
      name,
      email,
      course,
      enrolledAt: new Date()
    }).then(() => {
      msg.textContent = `✅ Enrolled in ${course} successfully!`;
    }).catch(err => {
      msg.textContent = "❌ Enrollment failed.";
    });
  } else {
    msg.textContent = "⚠️ All fields are required.";
  }
}
