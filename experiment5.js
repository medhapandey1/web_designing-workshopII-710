let employees = [];

function addEmployee() {
    let id = document.getElementById("empId").value;
    let name = document.getElementById("empName").value;
    let salary = document.getElementById("empSalary").value;
    let department = document.getElementById("empDept").value;

    if (id === "" || name === "" || salary === "" || department === "") {
        alert("Please fill all the fields");
        return;
    }

    let emp = {
        id: Number(id),
        name: name,
        salary: Number(salary),
        department: department
    };

    employees.push(emp);

    // Clear inputs after adding
    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";

    showResult(`✅ Employee <strong>${name}</strong> added successfully!`);
}

function displayEmployee() {
    if (employees.length === 0) {
        showResult("⚠️ No employees found.");
        return;
    }

    let html = `<table>
        <thead>
            <tr><th>ID</th><th>Name</th><th>Salary (₹)</th><th>Department</th></tr>
        </thead>
        <tbody>`;

    employees.forEach(emp => {
        html += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>₹${emp.salary.toLocaleString()}</td>
            <td>${emp.department}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    showResult(html);
}

function salaryGreaterThan50000() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    if (filtered.length === 0) {
        showResult("⚠️ No employees with salary greater than ₹50,000.");
        return;
    }

    let html = `<p><strong>Employees with Salary &gt; ₹50,000:</strong></p>
        <table>
        <thead>
            <tr><th>ID</th><th>Name</th><th>Salary (₹)</th><th>Department</th></tr>
        </thead>
        <tbody>`;

    filtered.forEach(emp => {
        html += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>₹${emp.salary.toLocaleString()}</td>
            <td>${emp.department}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    showResult(html);
}

function totalSalary() {
    if (employees.length === 0) {
        showResult("⚠️ No employees found.");
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    showResult(`💰 <strong>Total Salary:</strong> ₹${total.toLocaleString()}`);
}

function averageSalary() {
    if (employees.length === 0) {
        showResult("⚠️ No employees found.");
        return;
    }

    let avg = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
    showResult(`📊 <strong>Average Salary:</strong> ₹${avg.toLocaleString(undefined, { maximumFractionDigits: 2 })}`);
}

function countDepartment() {
    if (employees.length === 0) {
        showResult("⚠️ No employees found.");
        return;
    }

    let deptCount = {};
    employees.forEach(emp => {
        deptCount[emp.department] = (deptCount[emp.department] || 0) + 1;
    });

    let html = `<p><strong>Employee Count by Department:</strong></p>
        <table>
        <thead>
            <tr><th>Department</th><th>Count</th></tr>
        </thead>
        <tbody>`;

    for (let dept in deptCount) {
        html += `<tr><td>${dept}</td><td>${deptCount[dept]}</td></tr>`;
    }

    html += `</tbody></table>`;
    showResult(html);
}

function showResult(html) {
    document.getElementById("result").innerHTML = html;
}