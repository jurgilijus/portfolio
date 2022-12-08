import FoodMain from '../../Assets/food-app/foodapp2.PNG'
import category from '../../Assets/food-app/category.PNG'
import search from '../../Assets/food-app/search.PNG'
import mainPage from '../../Assets/comfy-house/mainpage.PNG'
import app from '../../Assets/comfy-house/products.PNG'
import appComponent from '../../Assets/comfy-house/shopingcart.PNG'
import moderNav from '../../Assets/ModernNav/modernNav.PNG'

// CSS
import './Work.css'


export const workItems = [
    {
        id: 1,
        image: [FoodMain],
        iconI: [category],
        iconII: [search],
        alt: 'Food-app main page image',
        title: 'React JS Application',
        hrefDemo: '/',
        hrefCode: 'https://github.com/jurgilijus/food-app.git'
    },
    {
        id: 2,
        image: [mainPage],
        iconI: [app],
        iconII: [appComponent],
        alt: 'Comfy house shop page',
        title: 'JS Application',
        hrefDemo: '/',
        hrefCode: 'https://github.com/jurgilijus/Comfyhouse-project.git'
    },
    {
        id: 3,
        image: [moderNav],
        iconI: [],
        iconII: [],
        alt: 'Moder Navbar',
        title: 'JS, HTML and CSS',
    }
    
]