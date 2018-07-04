<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GeneralController extends Controller
{
    /**
     * @Route("/", name="general")
     */
    public function index()
    {
        return $this->render('base.html.twig');
    }
}
