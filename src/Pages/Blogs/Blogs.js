import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='first-question mt-2'>
                <h2>Q1.Difference between javascript and nodejs?</h2>
                <h4>Ans. JavaScript is a simple programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be easily accessible from JavaScript programming to make it more useful.</h4>

            </div>

            <div className='second-question mt-5'>
                <h2>Q2.When should you use nodejs and when should you use mongodb?</h2>
                <h4>Ans. The data in MongoDB is represented as a collection of documents rather than tables linked by foreign keys. This allows many forms of data exchanged over the internet to be properly stored and accessed in web applications using Node. js.</h4>

            </div>

            <div className='third-question mt-5'>
                <h2>Q3. Differences between sql and nosql databases.</h2>
                <h4>Ans.SQL databases are vertically scalable, even as NoSQL databases are horizontally scalable. SQL databases are table-based, even as NoSQL databases are files, key-values, charts, or extensive column stores. SQL databases are exact for multi-row transactions, even as NoSQL is right for unstructured information which include files and JSON.</h4>
            </div>

            <div className="fourth-question mt-5">
                <h2>Q4. What is the purpose of jwt and how does it work?</h2>
                <h4>Ans. JWT, or JSON Web Token, is an open popular used to proportion protection facts among  parties — a customer and a server. Each JWT incorporates encoded JSON objects, such as a hard and fast of claims. JWTs are signed the use of a cryptographic set of rules to make sure that the claims can't be altered after the token is issued.</h4>
            </div>
        </div>
    );
};

export default Blogs;