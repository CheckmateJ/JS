<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ExcerciseController extends AbstractController
{
    /**
     * @Route("/excercise", name="excercise")
     */
    public function index()
    {
        return $this->render('excercise/index.html.twig');
    }
}
