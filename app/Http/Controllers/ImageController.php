<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class ImageController extends Controller
{
    public function store(Request $reqeust){
        $images = $reqeust->file("images");
        foreach($images as $image)
        {
            logger($image);
            Storage::disk('s3')->putFile('/test', $image);
        }
        dd("test");
    }
}
