import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" class="contact-section">
            <div class="contact-section-header">
                <h2>Let's work together...</h2>
                <p>How do you take your coffee?</p>
            </div>
            <div class="contact-links">
                <a
                    href="https://facebook.com/freecodecamp"
                    target="_blank"
                    rel = "noreferrer"
                    class="btn contact-details"
                ><i class="fab fa-facebook-square"></i> Facebook</a
                >
                <a
                    id="profile-link"
                    href="https://github.com/freecodecamp"
                    target="_blank"
                    rel = "noreferrer"
                    class="btn contact-details"
                ><i class="fab fa-github"></i> GitHub</a
                >
                <a
                    href="https://twitter.com/freecodecamp"
                    target="_blank"
                    rel = "noreferrer"
                    class="btn contact-details"
                ><i class="fab fa-twitter"></i> Twitter</a
                >
                <a href="/cdn-cgi/l/email-protection#9df8e5fcf0edf1f8ddf8e5fcf0edf1f8b3fef2f0" class="btn contact-details"><i class="fas fa-at"></i> Send a mail</a
                >
                <a href="tel:555-555-5555" class="btn contact-details"
                ><i class="fas fa-mobile-alt"></i> Call me</a
                >
            </div>
        </section>
      );
}

export default ContactSection;
