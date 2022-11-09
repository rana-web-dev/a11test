import React from 'react';
import useTitle from '../../../title/title';

const Blogs = () => {

    // Add Dynamic Title
    useTitle('Blog');

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='text-center text-5xl text-semibold py-10 mt-5'>Interview Questions</h2>
            <div className='pb-10 text-2xl'>
                <li>Difference between SQL and NoSQL</li>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                <br></br>
                <li>What is JWT, and how does it work?</li>
                <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                <br></br>
                <li>What is the difference between javascript and NodeJS?</li>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                <br></br>
                <li>How does NodeJS handle multiple requests at the same time?</li>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;