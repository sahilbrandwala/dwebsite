// try {
//   // Get the current URL
//   const currentURL = window.location.href;

//   // Create a regular expression pattern
//   const urlPattern = /^https:\/\/wassupbot\.com\/uninstall\/.*/;

//   if (urlPattern.test(currentURL)) {
//     // Get the URL parameters
//     const urlParams = new URLSearchParams(window.location.search);
//     const phoneNumber = urlParams.get("phonenumber");

//     // Check if phoneNumber is present
//     if (!phoneNumber) {
//       console.error("Phone number parameter is missing in the URL");
//     } else {
//       // Remove trailing spaces and non-integer characters
//       const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

//       // Check if the cleanedPhoneNumber is empty
//       if (!cleanedPhoneNumber) {
//         console.error("Invalid phone number");
//       } else {
//         // Create FormData object and append phoneNumber
//         const formData = new FormData();
//         formData.append("phoneNumber", cleanedPhoneNumber);

//         // Send POST request to the endpoint
//         fetch("https://wassupbot.com/uninstalled.php", {
//           method: "POST",
//           body: formData,
//         })
//           .then((response) => {
//             if (response.ok) {
//               console.log("POST request successful");
//             } else {
//               console.error("POST request failed");
//             }
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//       }
//     }
//   }
// } catch (error) {
//   console.error(error);
// }


try {
  // Get the current URL
  const currentURL = window.location.href;

  // Create a regular expression pattern
  const urlPattern = /^https:\/\/wassupbot\.com\/uninstall\/.*/;

  if (urlPattern.test(currentURL)) {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Initialize an array to store cleaned phone numbers
    const cleanedPhoneNumbers = [];

    // Iterate through the URL parameters and extract phone numbers
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith("phonenumber")) {
        const cleanedPhoneNumber = value.replace(/\D/g, "");
        if (cleanedPhoneNumber) {
          cleanedPhoneNumbers.push(cleanedPhoneNumber);
        }
      }
    }

    // Check if there are any cleaned phone numbers
    if (cleanedPhoneNumbers.length === 0) {
      console.error("No valid phone numbers found in the URL");
    } else {
      // Create FormData object and append the cleaned phone numbers array
      const formData = new FormData();
      formData.append("phoneNumbers", JSON.stringify(cleanedPhoneNumbers));

      // Send POST request to the endpoint
      fetch("https://wassupbot.com/uninstalled.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("POST request successful");
          } else {
            console.error("POST request failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
} catch (error) {
  console.error(error);
}

