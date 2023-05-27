import React from 'react';
import './Components4.css';

const MyComponents4 = () => {
    const columns = [
        {
            title: "Column 1",
            categories: [
                {
                    title: "Shop and Learn",
                    links: [
                        { name: "Mac", url: "https://www.apple.com/mac/" },
                        { name: "iPad", url: "https://www.apple.com/ipad/" },
                        { name: "iPhone", url: "https://www.apple.com/iphone/" },
                        { name: "Watch", url: "https://www.apple.com/watch/" },
                        { name: "AirPods", url: "https://www.apple.com/airpods/" },
                        { name: "TV & Home", url: "https://www.apple.com/tv-home/" },
                        { name: "AirTag", url: "https://www.apple.com/airtag/" },
                        { name: "Accessories", url: "https://www.apple.com/shop/accessories/all" },
                        { name: "Gift Cards", url: "https://www.apple.com/shop/gift-cards" }
                    ]
                },
                {
                    title: "Apple Wallet",
                    links: [
                        { name: "Wallet", url: "https://www.apple.com/wallet/" },
                        { name: "Apple Card", url: "https://www.apple.com/apple-card/" },
                        { name: "Apple Pay", url: "https://www.apple.com/apple-pay/" },
                        { name: "Apple Cash", url: "https://www.apple.com/apple-cash/" },
                    ]
                }
            ]
        },
        {
            title: "Column 2",
            categories: [
                {
                    title: "Account",
                    links: [
                        { name: "Manage Your Apple ID", url: "https://appleid.apple.com/" },
                        { name: "Apple Store Account", url: "https://secure4.store.apple.com/shop/signIn/account?ssi=1AAABiFQlAaYg2QyD9zF405R3P1JmyrWeUVAMXsMNF16qpi9T9SgLitwAAAAzaHR0cHM6Ly9zZWN1cmU0LnN0b3JlLmFwcGxlLmNvbS9zaG9wL2FjY291bnQvaG9tZXx8AAIBx-ENBIZQP4NMoVSe0rbpmm6vxEg_eEZkELV_-FH99wg" },
                        { name: "iCloud.com",  url :"https://www.icloud.com/"}
                    ]
                },
                {
                    title: "Entertainment",
                    links: [
                        { name: "Apple One", url: "https://www.apple.com/apple-one/" },
                        { name: "Apple TV+", url: "https://www.apple.com/apple-tv-plus/" },
                        { name: "Apple Music", url: "https://www.apple.com/apple-music/" },
                        { name: "Apple Arcade", url: "https://www.apple.com/apple-arcade/" },
                        { name: "Apple Fitness+", url: "https://www.apple.com/apple-fitness-plus/" },
                        { name: "Apple News+", url: "https://www.apple.com/apple-news/" },
                        { name: "Apple Podcasts", url: "https://www.apple.com/apple-podcasts/" },
                        { name: "Apple Books", url: "https://www.apple.com/apple-books/" },
                        { name: "App Store", url: "https://www.apple.com/app-store/" },
                    ]
                }
            ]
        },
        {
            title: "Column 3",
            categories: [
                {
                    title: "Apple Store",
                    links: [
                        { name: "Find a Store", url: "https://www.apple.com/retail/" },
                        { name: "Genius Bar", url: "https://www.apple.com/retail/geniusbar/" },
                        { name: "Today at Apple", url: "https://www.apple.com/today/" },
                        { name: "Apple Camp", url: "https://www.apple.com/today/camp/" },
                        { name: "Apple Store App", url: "https://apps.apple.com/us/app/apple-store/id375380948" },
                        { name: "Certified Refurbished", url: "https://www.apple.com/shop/refurbished" },
                        { name: "Apple Trade In", url: "https://www.apple.com/shop/trade-in" },
                        { name: "Financing", url: "https://www.apple.com/shop/browse/financing" },
                        { name: "Carrier Deals at Apple", url: "https://www.apple.com/shop/buy-iphone/carrier-offers" },
                        { name: "Order Status", url: "https://secure4.store.apple.com/shop/signIn/orders?ssi=1AAABiFQteSYgFgZ5RbjSNEhTOZLWkM57paT0-pjojN6bqYBdafWm-1AAAAAxaHR0cHM6Ly9zZWN1cmU0LnN0b3JlLmFwcGxlLmNvbS9zaG9wL29yZGVyL2xpc3R8fAACAbD4DEsOp0XvBoFiA6_lNnKlbO1l7fpdSwJueV-CjEHH" },
                        { name: "Shopping Help", url: "https://www.apple.com/shop/help" },
                    ]
                }
            ]
        },
        {
            title: "Column 4",
            categories: [
                {
                    title: "For Business",
                    links: [
                        { name: "Apple and Business", url: "https://www.apple.com/business/" },
                        { name: "Shop for Business", url: "https://www.apple.com/retail/business/" },
                    ]
                },
                {
                    title: "For Education",
                    links: [
                        { name: "Apple and Education", url: "https://www.apple.com/education/" },
                        { name: "Shop for K-12", url: "https://www.apple.com/education/k12/#how-to-buy" },
                        { name: "Shop for College", url: "https://www.apple.com/us-edu/store" },
                    ]
                },
                {
                    title: "For Healthcare",
                    links: [
                        { name: "Apple in Healthcare", url: "https://www.apple.com/healthcare/" },
                        { name: "Health on Apple Watch", url: "https://www.apple.com/healthcare/apple-watch/" },
                        { name: "Health Records on iPhone", url: "https://www.apple.com/healthcare/health-records/" },
                    ]
                },
                {
                    title: "For Government",
                    links: [
                        { name: "Shop for Government", url: "https://www.apple.com/r/store/government/" },
                        { name: "Shop for Veterans and Military", url: "https://www.apple.com/us-edu/shop/browse/home/veterans_military" },
                    ]
                }
            ]
        },
        {
            title: "Column 5",
            categories: [
                {
                    title: "Apple Values",
                    links: [
                        { name: "Accessibility", url: "https://www.apple.com/accessibility/" },
                        { name: "Education", url: "https://www.apple.com/education-initiative/" },
                        { name: "Environment", url: "https://www.apple.com/environment/" },
                        { name: "Inclusion and Diversity", url: "https://www.apple.com/diversity/" },
                        { name: "Privacy", url: "https://www.apple.com/privacy/" },
                        { name: "Racial Equity and Justice", url: "https://www.apple.com/racial-equity-justice-initiative/" },
                        { name: "Supplier Responsibility", url: "https://www.apple.com/supplier-responsibility/" },
                    ]
                },
                {
                    title: "About Apple",
                    links: [
                        { name: "Newsroom", url: "https://www.apple.com/newsroom/" },
                        { name: "Apple Leadership", url: "https://www.apple.com/leadership/" },
                        { name: "Career Opportunities", url: "https://www.apple.com/careers/us/" },
                        { name: "Investors", url: "https://investor.apple.com/investor-relations/default.aspx" },
                        { name: "Ethics & Compliance", url: "https://www.apple.com/compliance/" },
                        { name: "Events", url: "https://www.apple.com/apple-events/" },
                        { name: "Contact Apple", url: "https://www.apple.com/contact/" },
                    ]
                }
            ]
        }
    ];

    return (
        <div className="footer">
            {columns.map(({ title, categories }) => (
                <div className="column" key={title}>
                    {categories.map(({ title, links }) => (
                        <div key={title}>
                            <h2>{title}</h2>
                            {links.map(link => (
                                <a href={link.url} key={link.name}>{link.name}</a>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MyComponents4;
