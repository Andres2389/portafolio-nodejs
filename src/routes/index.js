import { Router } from "express"
const router =  Router()

router.get('/', (req, res) => res.render('index',{ title: 'Bienvenido-home'}))
router.get('/about', (req, res) => res.render('about',{title: 'About'}))
router.get('/contact', (req, res) => res.render('contact' , {title : 'Contact'}))
router.get('/skills', (req, res) => res.render('skills' , {title : 'skills'}))
router.get('/proyects', (req, res) => res.render('proyects' , {title : 'proyects'}))

export default router