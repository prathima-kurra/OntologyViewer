document.addEventListener('DOMContentLoaded', () => {
    // Data for classes and queries
    const classes = {
        "Course": {
            description: "Courses in the university",
            dataProperties: {
                courseID: "unique identification for the course",
                courseName: "The name of the course"
            },
            subclasses: {
                "Graduate": { description: "Graduate level courses" },
                "Undergraduate": { description: "Undergraduate level courses" }
            }
        },
        "Department": {
            description: "University departments",
            dataProperties: {
                departmentID: "unique identification for the department",
                departmentName: "The name of the department"
            },
            subclasses: {
                "Business": { description: "Business department" },
                "Engineering": { description: "Engineering department" },
                "Humanities": { description: "Humanities department" },
                "Science": { description: "Science department" }
            }
        },
        "Person": {
            description: "People in the university",
            subclasses: {
                "Staff": {
                    description: "Staff members",
                    dataProperties: {
                        staffID: "The unique identification for the staff",
                        staffName: "The name of the staff"
                    },
                    subclasses: {
                        "Admin Staff": { description: "Administrative staff" },
                        "Faculty": { description: "Faculty members" }
                    }
                },
                "Student": {
                    description: "Students in the university",
                    dataProperties: {
                        studentID: "The unique identification for the student",
                        studentName: "The name of the student"
                    },
                    subclasses: {
                        "Graduate": { description: "Graduate students" },
                        "Undergraduate": { description: "Undergraduate students" }
                    }
                }
            }
        }
    };

    const queries = [
        {
            name: "Select all students with their names in the Humanities Department",
            image: "Query1.png",
            output: [["student", "name"], ["http://example.org/student/S_044", "Emily Walker"], ["http://example.org/student/S_038", "Sofia Johnson"], ["http://example.org/student/S_046", "Ava Williams"], ["http://example.org/student/S_033", "William Lewis"], ["http://example.org/student/S_004", "Sarah Davis"], ["http://example.org/student/S_012", "Ava Harris"], ["http://example.org/student/S_027", "Michael Lee"], ["http://example.org/student/S_035", "Lucas Hall"], ["http://example.org/student/S_014", "Isabella Clark"], ["http://example.org/student/S_001", "James Smith"], ["http://example.org/student/S_008", "Sophia Anderson"], ["http://example.org/student/S_016", "Charlotte Walker"], ["http://example.org/student/S_032", "Amelia Turner"], ["http://example.org/student/S_040", "Ella Lewis"], ["http://example.org/student/S_018", "Ella Allen"], ["http://example.org/student/S_026", "Nora Green"], ["http://example.org/student/S_013", "James Taylor"]]
        },
        {
            name: "Query all graduate students with their department names",
            image: "Query2.png",
            output: [["student", "deptName"], ["http://example.org/student/S_007", "Science"], ["http://example.org/student/S_015", "Science"], ["http://example.org/student/S_023", "Science"], ["http://example.org/student/S_031", "Business"], ["http://example.org/student/S_009", "Business"], ["http://example.org/student/S_017", "Science"], ["http://example.org/student/S_025", "Engineering"], ["http://example.org/student/S_033", "Humanities"], ["http://example.org/student/S_041", "Science"], ["http://example.org/student/S_019", "Business"], ["http://example.org/student/S_027", "Humanities"], ["http://example.org/student/S_035", "Humanities"], ["http://example.org/student/S_043", "Engineering"], ["http://example.org/student/S_001", "Humanities"], ["http://example.org/student/S_029", "Business"], ["http://example.org/student/S_037", "Science"], ["http://example.org/student/S_045", "Science"], ["http://example.org/student/S_003", "Engineering"], ["http://example.org/student/S_011", "Science"], ["http://example.org/student/S_039", "Science"], ["http://example.org/student/S_047", "Business"], ["http://example.org/student/S_005", "Business"], ["http://example.org/student/S_013", "Humanities"], ["http://example.org/student/S_021", "Business"], ["http://example.org/student/S_049", "Business"]]
        },
        {
            name: "Query all the courses taught by Prof. Laura Evans",
            image: "Query3.png",
            output: [["courseName"], ["Social_Theory"], ["Urban_Sociology"], ["Philosophy_of_Mind"], ["Digital_Arts"], ["Art_History"], ["Ethics"], ["Inequality"], ["Ancient_History"], ["InEquality"], ["Modern_Literature"], ["Poetry"]]
        },
        {
            name: "Query all the faculty with their course names",
            image: "Query4.png",
            output: [["faculty", "courseName"],
            ["David Clark", "Differential_Equations"],
            ["David Clark", "Network_Security"],
            ["Dr. Alice Brown", "Art_History"],
            ["Dr. Alice Brown", "Art_Theory"],
            ["Dr. Alice Brown", "Ethics"],
            ["Dr. Alice Brown", "Digital_Arts"],
            ["Dr. Alice Brown", "Poetry"],
            ["Dr. Alice Brown", "Social_Theory"],
            ["Dr. Emily White", "Calculus"],
            ["Dr. Emily White", "Environmental_Policy"],
            ["Dr. Emily White", "Conservation"],
            ["Dr. Emily White", "Probability"],
            ["Dr. Emily White", "Geometry"],
            ["Dr. Emily White", "Climate_Change"],
            ["Dr. Emily White", "AstroPhysics"],
            ["Dr. Emily White", "Pathology"],
            ["Dr. Jessica Taylor", "Geometry"],
            ["Dr. Jessica Taylor", "Conservation"],
            ["Dr. Jessica Taylor", "Calculus"],
            ["Dr. Jessica Taylor", "Environmental_Policy"],
            ["Dr. Jessica Taylor", "AstroPhysics"],
            ["Dr. Jessica Taylor", "Probability"],
            ["Dr. Jessica Taylor", "Chemical_Engineering"],
            ["Dr. Jessica Taylor", "Algebra"],
            ["Dr. Jessica Taylor", "Pathology"],
            ["Dr. Jessica Taylor", "Politics"],
            ["Dr. Michael Green", "Macro_Economics"],
            ["Dr. Michael Green", "MacroEconomics"],
            ["Dr. Michael Green", "Micro_Economics"],
            ["Dr. Michael Green", "Marketing"],
            ["Dr. Michael Green", "Finance"],
            ["Dr. Michael Green", "Law"],
            ["Dr. Richard Lee", "Curriculum_Development"],
            ["Dr. Richard Lee", "Calculus"],
            ["Dr. Richard Lee", "Chemical_Engineering"],
            ["Dr. Richard Lee", "Structural_Analysis"],
            ["Dr. Richard Lee", "Software_Engineering"],
            ["Dr. Alice Brown", "Social_Theory"],
            ["Dr. Alice Brown", "Ancient_History"],
            ["Dr. Alice Brown", "Digital_Arts"],
            ["Dr. Alice Brown", "Poetry"],
            ["Dr. Alice Brown", "InEquality"],
            ["Dr. Alice Brown", "Medieval_History"],
            ["James White", "Law"],]
        },
        {
            name: "Query all the undergraduate students",
            image: "Query5.png",
            output: [
                ["student", "studentName"],
                ["http://example.org/student/S_001", "Amelia Turner"],
                ["http://example.org/student/S_002", "Ava Harris"],
                ["http://example.org/student/S_003", "Ava Williams"],
                ["http://example.org/student/S_004", "Charlotte Walker"],
                ["http://example.org/student/S_005", "Chloe King"],
                ["http://example.org/student/S_006", "Ella Allen"],
                ["http://example.org/student/S_007", "Ella Lewis"],
                ["http://example.org/student/S_008", "Emily Johnson"],
                ["http://example.org/student/S_009", "Emily Walker"],
                ["http://example.org/student/S_010", "Grace Young"],
                ["http://example.org/student/S_011", "Hannah Taylor"],
                ["http://example.org/student/S_012", "Isabella Brown"],
                ["http://example.org/student/S_013", "Isabella Clark"],
                ["http://example.org/student/S_014", "Lily Carter"],
                ["http://example.org/student/S_015", "Lily Robinson"],
                ["http://example.org/student/S_016", "Mia Allen"],
                ["http://example.org/student/S_017", "Mia Taylor"],
                ["http://example.org/student/S_018", "Nora Green"],
                ["http://example.org/student/S_019", "Olivia Martinez"],
                ["http://example.org/student/S_020", "Sarah Davis"],
                ["http://example.org/student/S_021", "Sofia Johnson"],
                ["http://example.org/student/S_022", "Sophia Anderson"],
                ["http://example.org/student/S_023", "Sophia White"],
                ["http://example.org/student/S_024", "Zoey Adams"]
            ]
        },
        {
            name: "Query all students enrolled in Digital_Arts",
            image: "Query6.png",
            output: [["student"], ["http://example.org/student/S_033"], ["http://example.org/student/S_027"], ["http://example.org/student/S_035"], ["http://example.org/student/S_001"], ["http://example.org/student/S_013"]]
        },
        {
            name: "Query the courses enrolled by the student with studentID: 13",
            image: "Query7.png",
            output: [["courseId", "courseName"], ["H_401", "Digital_Arts"], ["H_501","Poetry"]]
        },
        {
            name: "Count number of students enrolled in course Politics",
            image: "Query8.png",
            output: [["studentCount"], ["6"]]
        },
        {
            name: "Query to get the number of courses offered in each department",
            image: "Query9.png",
            output: [["deptName", "courseCount"], ["Science", "12"], ["Business", "10"], ["Humanities", "13"], ["Engineering", "5"]]
        },
        {
            name: "Query to count the number of faculty in each department",
            image: "Query10.png",
            output: [["deptName", "facultyCount"], ["Business", "3"], ["Engineering", "2"], ["Humanities", "3"], ["Science", "5"]]
        }

    ];

    // Load class structure
    const classList = document.getElementById('class-list');
    const classDetails = document.getElementById('class-details');

    function loadClasses(classes, parentElement) {
        const ul = document.createElement('ul');
        for (const [className, classData] of Object.entries(classes)) {
            const li = document.createElement('li');
            li.textContent = className;
            li.addEventListener('click', (event) => {
                event.stopPropagation();
                displayClassDetails(className, classData);
            });
            ul.appendChild(li);
            if (classData.subclasses) {
                loadClasses(classData.subclasses, li);
            }
        }
        parentElement.appendChild(ul);
    }

    function displayClassDetails(className, classData) {
        let detailsHtml = `<h3>${className}</h3><p>${classData.description}</p>`;
        if (classData.dataProperties) {
            detailsHtml += '<ul>';
            for (const [propName, propValue] of Object.entries(classData.dataProperties)) {
                detailsHtml += `<li><strong>${propName}:</strong> ${propValue}</li>`;
            }
            detailsHtml += '</ul>';
        }
        classDetails.innerHTML = detailsHtml;
    }

    loadClasses(classes, classList);

    // Load TTL file content
    const ttlFileInput = document.getElementById('ttl-file-input');
    const ttlFileContent = document.getElementById('ttl-file-content');

    ttlFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                ttlFileContent.textContent = e.target.result;
            };
            reader.readAsText(file);
        }
    });

    // Load queries
    const queryDropdown = document.getElementById('query-dropdown');
    const queryDisplay = document.getElementById('query-display');
    const runButton = document.getElementById('run-button');
    const queryOutput = document.getElementById('query-output');

    queries.forEach(query => {
        const option = document.createElement('option');
        option.value = query.name;
        option.textContent = query.name;
        queryDropdown.appendChild(option);
    });

    queryDropdown.addEventListener('change', (event) => {
        const selectedQuery = queries.find(query => query.name === event.target.value);
        if (selectedQuery) {
            const img = document.createElement('img');
            img.src = selectedQuery.image;
            img.alt = selectedQuery.name;
            img.style.maxWidth = '100%';
            queryDisplay.innerHTML = '';
            queryDisplay.appendChild(img);
        } else {
            queryDisplay.textContent = '';
        }
        queryOutput.innerHTML = '';
    });

    runButton.addEventListener('click', () => {
        const selectedQuery = queries.find(query => query.name === queryDropdown.value);
        if (selectedQuery) {
            displayTable(selectedQuery.output);
        } else {
            queryOutput.innerHTML = 'No query selected';
        }
    });

    function displayTable(data) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headers = data[0];
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        for (let i = 1; i < data.length; i++) {
            const row = document.createElement('tr');
            data[i].forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        queryOutput.innerHTML = '';
        queryOutput.appendChild(table);
    }

    // Tab navigation
    const tabs = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tab-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const target = tab.dataset.target;

            sections.forEach(section => {
                if (section.id === target) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Show the first tab by default
    document.querySelector('.tab-link').click();
});
