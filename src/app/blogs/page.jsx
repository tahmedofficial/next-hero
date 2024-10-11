"use client";
import Link from "next/link";

const page = () => {

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

    return (
        <div>
            {
                blogs.map(blog => <div className="border p-12 space-y-2" key={blog.slug}>
                    <h3>Title: {blog.title}</h3>
                    <h3>Description: {blog.description}</h3>
                    <Link href={`/blogs/${blog.slug}`}>
                        <button className="bg-black text-white px-7 py-2">View Details</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default page;