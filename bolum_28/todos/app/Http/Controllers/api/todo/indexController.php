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
        $data = TodoModel::orderBy("td_id", "desc")->get();
        return parent::success("Todo bilgileri getirildi", $data);
    }

    public function delete(Request $request, int $id)
    {
        $control = TodoModel::where("td_id",$id)->first();

        if (!$control){
            return parent::error("Kayıt bulunamadı",[],404);
        }else{
            $result = TodoModel::where("td_id",$id)->delete();

            if ($result){
                return parent::success("Kayıt başarıyla silindi");
            }else{
                return parent::error("Kayıt silinrken hata oluştu.",[],500);
            }
        }
    }
}
