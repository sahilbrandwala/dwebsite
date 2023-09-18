
try {
	// Get the current URL
	const currentURL = window.location.href;

	// Create a regular expression pattern
	const urlPattern = /^https:\/\/wassupbot\.com\/pricing\/.*/;
	
  if (urlPattern.test(currentURL)) {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data.country === 'IN') {
          document.getElementById('ForeignPricingSection').style.display = 'none';
		  document.getElementById('ForeignPricingTitle').style.display = 'none';
		  document.getElementById('IndiaPricingTitle').style.display = 'none';
        } else {
          document.getElementById('IndiaPricingSection').style.display = 'none';
		  document.getElementById('ForeignPricingTitle').style.display = 'none';
		  document.getElementById('IndiaPricingTitle').style.display = 'none';
        }
      })
	  .catch(error => {
		console.error(error);
		fetch('https://wassupbot.com/getCountry.php')
			.then(response => response.text())
			.then(data => {
// 			console.log(data, 'hello');
				if (data.toLowerCase() === 'india') {
				  document.getElementById('ForeignPricingSection').style.display = 'none';
				  document.getElementById('ForeignPricingTitle').style.display = 'none';
				  document.getElementById('IndiaPricingTitle').style.display = 'none';
				} else {
				  document.getElementById('IndiaPricingSection').style.display = 'none';
				  document.getElementById('ForeignPricingTitle').style.display = 'none';
				  document.getElementById('IndiaPricingTitle').style.display = 'none';
				}
		})
			.catch(error => {
			console.error(error);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
			  console.log('lat::', latitude, 'long...', longitude);
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
              .then(response => response.json())
              .then(data => {
                if (data.countryCode === 'IN') {
                  document.getElementById('ForeignPricingSection').style.display = 'none';
				  document.getElementById('ForeignPricingTitle').style.display = 'none';
				  document.getElementById('IndiaPricingTitle').style.display = 'none';
                } else {
                  document.getElementById('IndiaPricingSection').style.display = 'none';
				  document.getElementById('ForeignPricingTitle').style.display = 'none';
				  document.getElementById('IndiaPricingTitle').style.display = 'none';
                }
              })
              .catch(error => console.error(error));
          }, error => console.error(error));
        }
		}
				  );
	})
  }
} catch (error) {
  console.error(error);
}
