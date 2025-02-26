<?php

namespace App\Http\Controllers\api\todo;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\api\todos\TodoCreateRequest;
use App\Models\TodoModel;
use Illuminate\Http\Request;

class indexController extends BaseController
{
    public function index(Request $request)
    {
        $data = TodoModel::orderBy("td_id", "desc")->get();
        return parent::success("Todo bilgileri getirildi", $data);
    }

    public function create(TodoCreateRequest $request)
    {
        $data = $request->except("_token");
        $result = TodoModel::create($data);

        if ($result){
            return parent::success("İşlem Başarılı",[],201);
        }else{
            return parent::error("İşlem Başarısız");
        }
    }

    public function changeStatus(int $id)
    {
        $control = TodoModel::where("td_id",$id)->first();

        if (!$control){
            return parent::error("Kayıt bulunamadı",[],404);
        }else{
            $result = TodoModel::where("td_id",$id)->update([
                "td_status"=>!$control->td_status
            ]);

            if ($result){
                return parent::success("İşlem Başarılı");
            }else{
                return parent::error("Durum güncellenirken hata oluştu",[],500);
            }
        }
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
