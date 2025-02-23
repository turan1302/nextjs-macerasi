<?php

namespace App\Http\Controllers\api\todo;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Models\TodoModel;
use Illuminate\Http\Request;

class indexController extends BaseController
{
    public function index(Request $request)
    {
        $data = TodoModel::orderBy("td_id","desc")->get();
        return parent::success("Todo bilgileri getirildi",$data);
    }
}
