

// import React, { useState } from "react";

// function YourComponent() {
//     const Data = [
//         {
//             "Id": 1,
//             "Img": "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             "title": "Just a Standard Format Post.",
//             "language": " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             "output":
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                     </a>
//                     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                         </svg>
//                     </a>
//                 </div>,

//             "code":
//                 `
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                 </svg>
//                 <a href="#">
//                     <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                 </a>
//                 <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                 <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                     See our guideline
//                     <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                     </svg>
//                 </a>
//             </div>
//           `

//         },
//         {
//             "Id": 1,
//             "Img": "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             "title": "Just a Standard Format Post.",
//             "language": " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             "output":
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                     </a>
//                     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                         </svg>
//                     </a>
//                 </div>,

//             "code":
//                 `
//             <p className="p-5 text-[17px] text-gray-400">
//               Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
//             </p>
//           `

//         },
//         {
//             "Id": 1,
//             "Img": "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             "title": "Just a Standard Format Post.",
//             "language": " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             "output":
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                     </a>
//                     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                         </svg>
//                     </a>
//                 </div>,

//             "code":
//                 `
//             <p className="p-5 text-[17px] text-gray-400">
//               Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
//             </p>
//           `

//         },
//         {
//             "Id": 1,
//             "Img": "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             "title": "Just a Standard Format Post.",
//             "language": " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             "output":
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                     </a>
//                     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                         </svg>
//                     </a>
//                 </div>,

//             "code":
//                 `
//             <p className="p-5 text-[17px] text-gray-400">
//               Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
//             </p>
//           `

//         },
//         {
//             "Id": 1,
//             "Img": "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             "title": "Just a Standard Format Post.",
//             "language": " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             "output":
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                     </a>
//                     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                         </svg>
//                     </a>
//                 </div>,

//             "code":
//                 `
//             <p className="p-5 text-[17px] text-gray-400">
//               Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
//             </p>
//           `

//         },
//         {
//             "Id": 1,
//             "Img": "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             "title": "Just a Standard Format Post.",
//             "language": " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             "output":
//                 <div class="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
//                     </a>
//                     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                     <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
//                         </svg>
//                     </a>
//                 </div>,

//             "code":
//                 `
//             <p className="p-5 text-[17px] text-gray-400">
//               Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
//             </p>
//           `

//         },
//     ];

//     const copyCodeToClipboard = (codeToCopy) => {
//         const textArea = document.createElement("textarea");
//         textArea.value = codeToCopy;

//         document.body.appendChild(textArea);
//         textArea.select();

//         document.execCommand("copy");

//         document.body.removeChild(textArea);
//     };

//     return (
//         <>
//             <div className="p-16">
//                 <div className="grid grid-cols-3 p-16 gap-4">
//                     {
//                         Data.map((items) => (
//                             <div className="bg-white border mt-16 border-gray-200   shadow dark:bg-gray-800 dark:border-gray-700">
//                                 <a href="#" className="" >
//                                     {/* <img src={items.Img} alt="" /> */}

//                                     {items.output}

//                                 </a>
//                                 <div className="p-5   ">
//                                     <button type="button" className="text-white  mx-[80%] content-end  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-16"
//                                         onClick={() =>
//                                             copyCodeToClipboard(`
//                                <p className="p-5 text-[17px] text-gray-400">${items.code}</p>

//                                         `)
//                                         }
//                                     >Copy</button>
//                                     <p className=' text-4xl p-4 '>{items.title}</p>
//                                     <p className='p-4 text-[12px]'>{items.language}</p>

//                                     <p className="p-5 text-[17px] text-gray-400">{items.code}</p>
//                                 </div>

//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </>
//     );
// }

// export default YourComponent;


// import React, { useState } from "react";

// function YourComponent() {
//     const Data = [
//         {
//             Id: 1,
//             Img: "assets/images/thumbs/masonry/woodcraft-600.jpg",
//             title: "Just a Standard Format Post.",
//             language: " DESIGN, PHOTOGRAPHY APR 29, 2019",
//             output: (
//                 <div className="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                     <svg
//                         className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                     >
//                         <path d="M18 5h-.7c.229-.467.349-.980.351-1.500a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.400.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.900 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.100 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                     </svg>
//                     <a href="#">
//                         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                             Need help with a Claim?
//                         </h5>
//                     </a>
//                     <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
//                         Go through this step-by-step guideline on how to certify for your weekly benefits:
//                     </p>
//                     <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
//                         See our guideline
//                         <svg
//                             className="w-3 h-3 ml-2.5"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 18 18"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 stroke-width="2"
//                                 d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
//                             />
//                         </svg>
//                     </a>
//                 </div>
//             ),
//             code: `

//       <div className="p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <svg
//             className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M18 5h-.7c.229-.467.349-.980.351-1.500a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.400.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.900 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.100 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//           </svg>
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               Need help with a Claim?
//             </h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
//             Go through this step-by-step guideline on how to certify for your weekly benefits:
//           </p>
//           <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
//             See our guideline
//             <svg
//               className="w-3 h-3 ml-2.5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 18 18"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
//               />
//             </svg>
//           </a>
//         </div>
//       `,
//         },
//         // ... (add more items)
//     ];

//     const copyCodeToClipboard = (codeToCopy) => {
//         const textArea = document.createElement("textarea");
//         textArea.value = codeToCopy;

//         document.body.appendChild(textArea);
//         textArea.select();

//         document.execCommand("copy");

//         document.body.removeChild(textArea);
//     };

//     return (
//         <div className="p-16">

//                 {Data.map((item) => (
//                     <div className="bg-white border mt-16 border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
//                         <a href="#">
//                             {item.output}
//                         </a>
//                         <div className="p-5">
//                             <button
//                                 type="button"
//                                 className="text-white mx-[80%] content-end bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-16"
//                                 onClick={() => copyCodeToClipboard(item.code)}
//                             >
//                                 Copy
//                             </button>
//                             <p className="text-4xl p-4">{item.title}</p>
//                             <p className="p-4 text-[12px]">{item.language}</p>
//                             <p className="p-5 text-[17px] text-gray-400">{item.code}</p>
//                         </div>
//                     </div>
//                 ))}

//         </div>
//     );
// }

// export default YourComponent;