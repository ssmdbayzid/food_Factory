import React from 'react'

const Footer = () => {
  return (
    <footer className="footer relative bottom-0 p-10 bg-black/80 text-white ">
  <div className="w-full">
    <span className="footer-title md:inline block mx-auto">Services</span> 
    <a className="link link-hover block mx-auto md:inline">Branding</a>
    <a className="link link-hover block mx-auto md:inline">Design</a>
    <a className="link link-hover block mx-auto md:inline">Marketing</a>
    <a className="link link-hover block mx-auto md:inline">Advertisement</a>
  </div> 
  <div className="w-full">

    <span className="footer-title md:inline block mx-auto">Company</span> 
    <a className="link link-hover block mx-auto md:inline">About us</a>
    <a className="link link-hover block mx-auto md:inline">Contact</a>
    <a className="link link-hover block mx-auto md:inline">Jobs</a>
    <a className="link link-hover block mx-auto md:inline">Press kit</a>
  </div> 
  <div className="w-full">

    <span className="footer-title  md:inline block mx-auto">Legal</span> 
    <a className="link link-hover block mx-auto md:inline">Terms of use</a>
    <a className="link link-hover block mx-auto md:inline">Privacy policy</a>
    <a className="link link-hover block mx-auto md:inline">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer