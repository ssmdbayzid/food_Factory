import React from 'react'

const Footer = () => {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-3  p-10 bg-black text-white ">
  <div className="w-full">
    <span className="footer-title md:inline block mx-auto text-lg">Services</span> 
    <a className="link link-hover block mx-auto md:inline">Branding</a>
    <a className="link link-hover block mx-auto md:inline">Design</a>
    <a className="link link-hover block mx-auto md:inline">Marketing</a>
    <a className="link link-hover block mx-auto md:inline">Advertisement</a>
  </div> 
  <div className="w-full">

    <span className="footer-title md:inline block mx-auto text-lg">Company</span> 
    <a className="link link-hover block mx-auto md:inline">About us</a>
    <a className="link link-hover block mx-auto md:inline">Contact</a>
    <a className="link link-hover block mx-auto md:inline">Jobs</a>
    <a className="link link-hover block mx-auto md:inline">Press kit</a>
  </div> 
  <div className="w-full">

    <span className="footer-title  md:inline block mx-auto text-lg">Legal</span> 
    <a className="link link-hover block mx-auto md:inline">Terms of use</a>
    <a className="link link-hover block mx-auto md:inline">Privacy policy</a>
    <a className="link link-hover block mx-auto md:inline">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer