"use client";

import { useEffect } from "react";

const VisitTracker = () => {
    useEffect(() => {
        const alreadySent = sessionStorage.getItem("portfolio-visit-alert-sent");

        if (alreadySent) return;

        sessionStorage.setItem("portfolio-visit-alert-sent", "true");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_VISITING_EMAIL,
                name: "Portfolio Visitor Alert",
                email: process.env.NEXT_PUBLIC_CONTACT_MAIL,
                subject: "New portfolio visit",
                message: "We have a new visitor on your site.",
            }),
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to send portfolio visit alert');
            }
        });
    }, []);

    return null;
};

export default VisitTracker;
