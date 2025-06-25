document.getElementById('subscription-btn').addEventListener ("click", function () {
  window.location.href = "registration.html";
});

document.getElementById('renew-btn').addEventListener ("click", function () {
  window.location.href = "registration.html";
});

window.addEventListener("load", () => {
	setTimeout( () =>{
		document.getElementById('maelezo-1').classList.add("show");
	}, 1000);
});

window.addEventListener("load", () => {
	setTimeout( () =>{
		document.getElementById('button').classList.add("show");
	}, 1500);
});

window.addEventListener("load", () => {
	setTimeout( () =>{
		document.getElementById('paragraphs').classList.add("show");
	}, 2000);
});


  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('iconMail').addEventListener('click', () => {
      window.location.href = "mailto:michaehaji91@gmail.com";
    });

    document.getElementById('iconWhatsApp').addEventListener('click', () => {
      window.open("https://wa.me/25567995", "_blank");
    });

    document.getElementById('iconInstagram').addEventListener('click', () => {
      window.open("https://www.instagram.com/michaelhaji", "_blank");
    });

    document.getElementById('iconFacebook').addEventListener('click', () => {
      window.open("https://www.facebook.com/cbeofficial", "_blank");
    });
  });
