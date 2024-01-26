import X from "../assets/socialIcons/x.png";
import LinkedIn from "../assets/socialIcons/linkedIn.png";
import Facebook from "../assets/socialIcons/facebook.png";
import Yahoo from "../assets/socialIcons/yahoo.png";
import Window from "../assets/socialIcons/window.png";

import Location from "../assets/socialIcons/location.png";
import Company from "../assets/socialIcons/company.png";
import Email from "../assets/socialIcons/email.png";
import Lock from "../assets/socialIcons/lock.png";
import Country from "../assets/socialIcons/country.png";
import Mobile from "../assets/socialIcons/mobile.png";
export const socialButtonLinks = [
  {
    href: "",
    alt: "img-social-yahoo",
    icon: Yahoo,
  },
  {
    href: "",
    alt: "img-social-facebook",
    icon: Facebook,
  },
  {
    href: "",
    alt: "img-social-linkedin",
    icon: LinkedIn,
  },
  {
    href: "",
    alt: "img-social-x",
    icon: X,
  },
  {
    href: "",
    alt: "img-social-window",
    icon: Window,
  },
];

export const formElements = [
  {
    name: "company_name",
    placeholder: "Company Name",
    img: Company,
    type: "input",
  },
  {
    name: "email",
    placeholder: "Email Address",
    img: Email,
    type: "input",
  },
  {
    name: "mobile",
    placeholder: "Mobile Number",
    img: Mobile,
    type: "input",
  },
  {
    name: "password",
    placeholder: "Password here",
    img: Lock,
    type: "input",
  },
  {
    name: "country",
    placeholder: "Select country",
    img: Country,
    options: [
      { label: "UK", value: "uk" },
      { label: "India", value: "india" },
      { label: "Nepal", value: "nepal" },
    ],
    type: "selection",
  },
  {
    name: "state",
    placeholder: "Select city",
    img: Location,
    options: [
      { label: "Karnataka", value: "karnataka" },
      { label: "Mumbai", value: "mumbai" },
      { label: "Sagarmatha", value: "sagarmatha" },
    ],
    type: "selection",
  },
];
