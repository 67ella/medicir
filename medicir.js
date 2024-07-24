function searchMedication() {
    var input = document.getElementById("searchInput").value;
    var resultDiv = document.getElementById("result");
    // Simulate a search action
    resultDiv.innerHTML = "Searching for " + input + "...";
    // Here you would typically make an API call to fetch the medication info
    // For demo purposes, we'll just display a message
    setTimeout(function() {
        resultDiv.innerHTML = "Information about " + input + " will be displayed here.";
    }, 1000);
}


document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.querySelector(".info-input[type='file']");
    fileInput.addEventListener("change", handleFileUpload);
});

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("File selected:", file.name);
        // Perform any additional processing, such as uploading the file to a server
    }
}




async function searchMedication() {
    var input = document.getElementById("searchInput").value;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Searching for " + input + "...";

    try {
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${input}"`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const medication = data.results[0];
            resultDiv.innerHTML = `
                <h2>${medication.openfda.brand_name}</h2>
                <p><strong>Manufacturer:</strong> ${medication.openfda.manufacturer_name}</p>
                <p><strong>Purpose:</strong> ${medication.purpose}</p>
                <p><strong>Indications and Usage:</strong> ${medication.indications_and_usage}</p>
            `;
        } else {
            resultDiv.innerHTML = "No results found.";
        }
    } catch (error) {
        console.error("Error fetching medication data:", error);
        resultDiv.innerHTML = "Error fetching medication data. Please try again.";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("medicalForm");
    form.addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        prescription: formData.get("prescription") // This will be a File object
    };

    console.log("Form submitted with data:", data);

    // Perform any additional processing, such as sending the data to a server
    // Example: send the data to a server
    // fetch('/submit-form', {
    //     method: 'POST',
    //     body: formData,
    // })
    // .then(response => response.json())
    // .then(result => {
    //     console.log('Success:', result);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
}

//document.getElementById('myButton').addEventListener('click', function() {
 //   alert('Button clicked!');
//});