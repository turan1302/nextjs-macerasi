<?php

namespace App\Http\Requests\api\web\auth\admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string|max:100",
            "surname" => "required|string|max:100",
            "email" => "required|string|email",
            "password" => "nullable|min:8|max:16|confirmed",
        ];
    }

    public function attributes()
    {
        return [
            "name" => "Ad",
            "surname" => "Soyad",
            "email" => "E-Mail",
            "password" => "Şifre"
        ];
    }
}
