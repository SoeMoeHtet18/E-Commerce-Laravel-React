<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductLike;

class HomeApiController extends Controller
{
    public function home()
    {
        $featuredProducts = Product::all()->random(4);
        $newArrivalProducts = Product::latest()->take(4)->get();
        // $productByCategory = Category::has('product')->take(2)->get();
        // foreach ($productByCategory as $k => $v) {
        //     $productByCategory[$k]->product = Category::find($v->id)->product()->take(4)->get();
        // }

        return response()->json([
            'success' => true,
            'data' => [
                'featuredProducts' => $featuredProducts,
                // 'productByCategory' => $productByCategory
                'newArrivalProducts' => $newArrivalProducts
            ]
        ]);
    }
}
