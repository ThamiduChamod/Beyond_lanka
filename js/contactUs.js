


    type="text/javascript">
        (function() {
        emailjs.init("tLY1j2n2Ht1kedVuC"); // ✅ Your Public Key
    })();

    function sendMail() {
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_2m5t9qm", "template_cza5eks", params).then(function(response) {
            alert("✅ Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contactForm").reset();
        },
        function(error) {
            alert("❌ Failed to send email. Please try again.");
            console.error("FAILED...", error);
        });
    }


    window.addEventListener('scroll', function () {
        const contact = document.getElementById('contact');
        const social = document.querySelector('.socialSection');
        const contactTop = contact.getBoundingClientRect().top;

        if (contactTop < window.innerHeight - 100) {
            // Contact section එක visible වෙද්දී hide වෙනවා
            social.style.opacity = '0';
            social.style.pointerEvents = 'none';
            social.style.transition = 'opacity 0.5s ease';
        } else {
            // නැත්නම් නැවත පෙන්වන්න
            social.style.opacity = '1';
            social.style.pointerEvents = 'auto';
        }
    });
    const arr = [
        document.querySelector('.Instagram'),
        document.querySelector('.Tiktok'),
        document.querySelector('.Facebook'),
        document.querySelector('.TripAdvisor'),
        document.querySelector('.WhatsApp')
    ];

    arr.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('Instagram')) {
                window.open('https://www.instagram.com/beyondlanka?igsh=MXgwaXJ3N3VxZmVyag%3D%3D&utm_source=qr', '_blank');
            } else if (icon.classList.contains('Tiktok')) {
                window.open('https://www.tiktok.com/@beyond.lanka4?_t=ZS-90kw3tuJiIj&_r=1', '_blank');
            } else if (icon.classList.contains('Facebook')) {
                window.open('https://www.facebook.com/profile.php?id=61582341166612', '_blank');
            } else if (icon.classList.contains('TripAdvisor')) {
                window.open('https://www.tripadvisor.com/Profile/Beyondlanka', '_blank');
            } else if (icon.classList.contains('WhatsApp')) {
                window.open('https://wa.me/+94703861194', '_blank');
            }
        });
    });

