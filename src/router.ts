import { Router } from "express";

const router = Router();

//Routing
router.get('/', (req, res) => {
    res.send('Hi people');
});
router.get('/nosotros', (req, res) => {
    res.send('Us');
});
router.get('/blog', (req, res) => {
    res.send('Blog');
});

export default router;