import React from 'react'
import './Sign_In.css'
const Sign_In = () => {
  return (<div class="flex h-screen items-center justify-center bg-[#0c0116] py-auto px-6 text-white">
   
  <form action="" class="relative overflow-hidden h-[450px]  shadow-center w-1/3  bg-[#0c0116]  shadow-[0_0_10px_0_rgba(116,119,114)] rounded-md  form">
    <span class="h-1/2 w-1/2 absolute"></span>
    <span class="h-1/2 w-1/2 absolute"></span>
    <span class="h-1/2 w-1/2 absolute"></span>
    <span class="h-1/2 w-1/2 absolute"></span>
    <div class="absolute pt-4 top-1/2 left-1/2 w-[98%] h-[98%] -translate-y-1/2 -translate-x-1/2">
      <svg class="w-8 h-8 mx-auto mb-3 fill-[#d7a3d7]  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
  </svg>
  <h1 class="pb-2 text-center text-xl font-bold text-[#d7a3d7]">Sign Up</h1>
  <div class="w-full p-[2rem] h-full">
      <input type="text" placeholder="Name" class="mb-5 w-full rounded-lg border-[1.5px] border-[rgba(109,87,121)] bg-[#19052c] py-2 px-3 text-[#800080]" required />
      <input type="text" placeholder="Username" class="mb-5 w-full rounded-lg border-[1.5px] border-[rgba(109,87,121)] bg-[#19052c] py-2 px-3 text-[#800080]" required />
      <input type="email" placeholder="Email" class="mb-5 w-full rounded-lg border-[1.5px] border-[rgba(109,87,121)] bg-[#19052c] py-2 px-3 text-[#800080]" required />
      <input type="password" placeholder="Password" class="w-full rounded-lg border-[1.5px] border-[rgba(109,87,121)] bg-[#19052c] py-2 px-3 text-[#800080]" required />
      <button class="btn my-3 w-full cursor-pointer rounded-lg border-none bg-[#800080] p-2 text-2xl duration-200 hover:bg-[#c907c9]">LOG IN</button>
  </div>
    </div>
  </form>
</div>
)
}

export default Sign_In