import FoodMain from "../../Assets/food-app/foodapp2.PNG";
import category from "../../Assets/food-app/category.PNG";
import search from "../../Assets/food-app/search.PNG";
import mainPage from "../../Assets/comfy-house/mainpage.PNG";
import app from "../../Assets/comfy-house/products.PNG";
import appComponent from "../../Assets/comfy-house/shopingcart.PNG";
import moderNav from "../../Assets/ModernNav/modernNav.PNG";
import noteForm from "../../Assets/noteApp/noteForm.PNG";
import loginForm from "../../Assets/noteApp/loginForm.PNG";
import note from "../../Assets/noteApp/note.png";
import home from "../../Assets/ableton/home.png";
import latest from "../../Assets/ableton/latest.PNG";
import footer from "../../Assets/ableton/footer.PNG";

// CSS
import "./Work.css";

export const workItems = [
  {
    id: 1,
    image: [FoodMain],
    iconI: [category],
    iconII: [search],
    alt: "Food-app main page image",
    title: "React JS Application",
    hrefDemo: "https://maistas.netlify.app",
    hrefCode: "https://github.com/jurgilijus/food-app.git",
    description:
      "This is food web app. Which you can search some interesting food recipes.",
  },
  {
    id: 2,
    image: [mainPage],
    iconI: [app],
    iconII: [appComponent],
    alt: "Comfy house shop page",
    title: "JS Application",
    hrefDemo: "https://houseandshop.netlify.app",
    hrefCode: "https://github.com/jurgilijus/Comfyhouse-project.git",
    description: "This is furniture web-store front side stile example.",
  },
  {
    id: 3,
    image: [moderNav],
    iconI: "",
    iconII: "",
    alt: "Modern Navbar",
    title: "JS, HTML and CSS",
    hrefDemo: "https://modernavbar.netlify.app/",
    hrefCode: "https://github.com/jurgilijus/Navbar.git",
    description: "This is a modern navbar example with some animation.",
  },
  {
    id: 4,
    image: [noteForm],
    iconI: [loginForm],
    iconII: [note],
    alt: "Note app",
    title: "Note app",
    hrefDemo: "https://notys.netlify.app",
    hrefCode: "https://github.com/jurgilijus/note-App.git",
    description: "This is note app example for project teams.",
  },
  {
    id: 5,
    image: [home],
    iconI: [latest],
    iconII: [footer],
    alt: "Ableton clone project",
    title: "Ableton",
    hrefDemo: "https://ableton-project.netlify.app/",
    hrefCode: "https://github.com/jurgilijus/ableton.git",
    description: "This is Ableton Website clone",
  },
];
