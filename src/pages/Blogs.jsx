import React from 'react';
import styles from "../style"

const Blogs = () => {
    return (
        <div>
            <div className={`flex flex-col justify-center items-center h-screen bg-primary ${styles.flexStart}`}>
                <a href="https://bloggerszone.vercel.app/">
                    {/* <button className="px-8 py-4 rounded-lg bg-gray-800 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out">Check Blogs</button> */}
                </a>
                <br />

            </div>
        </div>
    )
}

export default Blogs