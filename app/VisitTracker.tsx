"use client";

import { useEffect } from "react";

type VisitorLocation = {
    ip?: string;
    country?: string;
    region?: string;
    city?: string;
};

const VisitTracker = () => {
    useEffect(() => {
        const sendVisitAlert = async () => {
            const alreadySent = sessionStorage.getItem("portfolio-visit-alert-sent");

            if (alreadySent) return;
            sessionStorage.setItem("portfolio-visit-alert-sent", "true");

            let location: VisitorLocation = {};

            try {
                const locationResponse = await fetch("/api/visitor-info");
                if (locationResponse.ok) {
                    location = await locationResponse.json();
                }
            } catch (error) {
                console.error('Failed to fetch visitor location', error);
            }

            const ip = location.ip || 'Unavailable';
            const userAgent = navigator.userAgent || 'unknown';
            const referrer = document.referrer || 'direct';
            const language = navigator.language || 'unknown';
            const path = `${window.location.pathname}${window.location.search}`;
            const at = new Date().toISOString();
            const country = location.country || 'Unavailable';
            const region = location.region || 'Unavailable';
            const city = location.city || 'Unavailable';

            const text = [
                'A new visitor landed on your site.',
                '',
                `Time: ${at}`,
                `Path: ${path}`,
                `Referrer: ${referrer}`,
                `IP: ${ip}`,
                `Country/Region/City: ${country}/${region}/${city}`,
                `Language: ${language}`,
                `User-Agent: ${userAgent}`,
            ].join('\n');

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_VISITING_EMAIL,
                    name: "Portfolio Visitor Alert",
                    email: process.env.NEXT_PUBLIC_CONTACT_MAIL,
                    subject: "New portfolio visit",
                    message: text,
                }),
            }).then(response => {
                if (!response.ok) {
                    console.error('Failed to send portfolio visit alert', response.statusText);
                }
            }).catch(error => {
                console.error('Failed to send visit alert', error);
            });
        };

        sendVisitAlert().catch(error => {
            console.error('Failed to prepare visit alert', error);
        });
    }, []);

    return null;
};

export default VisitTracker;
