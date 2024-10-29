import React from 'react';

function SubscribeSection() {
    return (
        <div className="subscribe-item">
            <img
                alt="food-1"
                src="/subscribe-left.png"
                className="section-left-img"
            />
            <div className="subscribe-item-one">
                <div className="subscribe-text">
                    <h1>Deliciousness to your inbox</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="subscription-container">
                    <form className="subscription-form">
                        <input
                            type="email"
                            name="subscribe"
                            placeholder="Your email address..."
                            className="subscription-input"
                        />
                        <button type="submit" className="subscription-button">Subscribe</button>
                    </form>
                </div>
            </div>
            <img
                alt="food-2"
                src="/subscribe-right.png"
                className="section-right-img"
            />
        </div>
    );
}

export default SubscribeSection;