function calculateAge() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("result").innerHTML =
            "Please select your Date of Birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += lastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `🎉 You are <br>
        ${years} Years,
        ${months} Months and
        ${days} Days old.`;
}