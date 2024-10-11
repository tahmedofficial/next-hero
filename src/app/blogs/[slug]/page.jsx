import React from 'react';

const page = ({ params }) => {

    const blogs = [
        {
            title: "How to Start with React.js",
            description: "A beginner's guide to getting started with React.js, covering the basics of components, state, and props.",
            slug: "how-to-start-with-react-js"
        },
        {
            title: "Understanding JavaScript Closures",
            description: "Dive into the concept of closures in JavaScript, and learn how they can be used to create powerful functions.",
            slug: "understanding-javascript-closures"
        },
        {
            title: "Tips for Writing Clean CSS",
            description: "Explore some best practices for writing clean, maintainable CSS that is easy to read and scale.",
            slug: "tips-for-writing-clean-css"
        },
        {
            title: "Getting Started with MongoDB",
            description: "Learn the basics of MongoDB, a NoSQL database, including how to set it up and perform basic CRUD operations.",
            slug: "getting-started-with-mongodb"
        },
        {
            title: "Improving Web Performance",
            description: "Techniques and tips for optimizing the performance of your website to ensure a fast and smooth user experience.",
            slug: "improving-web-performance"
        }
    ];

    const singleBlog = blogs.find(blog => blog.slug === params.slug);
    console.log(params.slug);

    return (
        <div className='h-screen'>
            <h3>{singleBlog.title}</h3>
            <h3>{singleBlog.description}</h3>
        </div>
    );
};

export default page;