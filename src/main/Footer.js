// Footer.js
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-nav">
                    <a href="/">Home</a>
                    <a href="/tweets">Tweets</a>
                    <a href="/registration">Sign-up</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} Ganesh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
