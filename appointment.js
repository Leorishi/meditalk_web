// Function to book a doctor appointment
function bookAppointment(doctorName, appointmentDate, appointmentTime) {
    // Validate appointment date
    const today = new Date();
    const selectedDate = new Date(appointmentDate);
    if (selectedDate < today) {
        alert("Please select a date from today onwards.");
        return;
    }

    // Retrieve existing appointments from localStorage or initialize an empty array
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Check if the appointment is already booked
    const isBooked = appointments.some(appointment => {
        return appointment.doctor === doctorName && appointment.date === appointmentDate && appointment.time === appointmentTime;
    });

    if (isBooked) {
        alert("This appointment is already booked.");
        return;
    }

    // Check if the user already has 2 appointments with this doctor
    const userAppointments = appointments.filter(appointment => appointment.doctor === doctorName);
    if (userAppointments.length >= 2) {
        alert("You already have 2 appointments scheduled with this doctor.");
        return;
    }

    // Check if there's a gap of 1 hour between appointments
    const appointmentDateTime = new Date(`${appointmentDate}T${appointmentTime}`);
    const sortedAppointments = userAppointments.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));
    if (sortedAppointments.length > 0) {
        const lastAppointment = sortedAppointments[sortedAppointments.length - 1];
        const lastAppointmentDateTime = new Date(`${lastAppointment.date}T${lastAppointment.time}`);
        const timeDifference = appointmentDateTime.getTime() - lastAppointmentDateTime.getTime();
        const hourDifference = timeDifference / (1000 * 60 * 60);
        if (hourDifference < 1) {
            alert("There must be a gap of 1 hour between appointments.");
            return;
        }
    }

    // Add the new appointment to the appointments array
    appointments.push({
        doctor: doctorName,
        date: appointmentDate,
        time: appointmentTime
    });

    // Save the updated appointments array to localStorage
    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert(`Appointment booked with Dr. ${doctorName} on ${appointmentDate} at ${appointmentTime}`);
    window.location.href = 'profile.html'; // Redirect to profile page after booking
}

// Add event listener to the "Book Doctor" buttons
document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const doctorName = this.parentElement.querySelector('h2').innerText;
            const appointmentDate = prompt("Enter appointment date (YYYY-MM-DD):");
            const appointmentTime = prompt("Enter appointment time (HH:MM AM/PM):");
            
            // Check if both date and time are provided
            if (appointmentDate && appointmentTime) {
                bookAppointment(doctorName, appointmentDate, appointmentTime);
            } else {
                alert("Please provide both appointment date and time.");
            }
        });
    });
});
