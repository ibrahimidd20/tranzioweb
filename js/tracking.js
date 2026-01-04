// Mock package data
const packages = {
  "TRZ-1105": { status: "Picked Up", location: "Brooklyn", expected: "Today, 3:00 PM" },
  "TRZ-1106": { status: "En Route", location: "Queens", expected: "Today, 4:30 PM" },
  "TRZ-1107": { status: "Delivered", location: "Manhattan", expected: "Delivered at 2:15 PM" }
};

function trackPackage() {
  const packageId = document.getElementById('packageIdInput').value.trim().toUpperCase();
  const resultDiv = document.getElementById('trackingResult');

  if (packages[packageId]) {
    const pkg = packages[packageId];
    resultDiv.innerHTML = `
      <div class="package-info">
        <p><strong>Package ID:</strong> ${packageId}</p>
        <p><strong>Status:</strong> ${pkg.status}</p>
        <p><strong>Current Location:</strong> ${pkg.location}</p>
        <p><strong>Expected Delivery:</strong> ${pkg.expected}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color: red;">Package ID not found. Please check and try again.</p>`;
  }
}
