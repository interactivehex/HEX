// FOOTER

const footerData = {
    email: "contact@hexious.co",
    twitter: "",
    instagram: "https://www.instagram.com/interactivehex/",
    tiktok: "https://www.tiktok.com/@hex_interactive",
    youtube: "https://www.youtube.com/@HEX-Interactive",
    steam: "#steam",
    itch: "https://hex-interactive.itch.io/",
    patreon: "https://patreon.com/HEX_Interactive",
    linkedin: "https://www.linkedin.com/company/hex-eg/",
    terms: "#",
    copyright: "&copy; HEX Interactive 2024"
};

// Update the email
document.getElementById('footer-email').innerHTML = `${footerData.email}`;

// Update the links
document.getElementById('twitter-link').href = footerData.twitter;
document.getElementById('instagram-link').href = footerData.instagram;
document.getElementById('tiktok-link').href = footerData.tiktok;
document.getElementById('youtube-link').href = footerData.youtube;
document.getElementById('steam-link').href = footerData.steam;
document.getElementById('itch-link').href = footerData.itch;
document.getElementById('patreon-link').href = footerData.patreon;
document.getElementById('linkedin-link').href = footerData.linkedin;
document.getElementById('terms').href = footerData.terms;

// Update the copyright information
document.getElementById('footer-copyright').innerHTML = footerData.copyright;
