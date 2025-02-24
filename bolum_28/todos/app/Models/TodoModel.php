<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoModel extends Model
{
    use SoftDeletes;

    protected $guarded = [];
    protected $table = "todos";
    protected $primaryKey = "td_id";
    public const CREATED_AT = "td_created_at";
    public const UPDATED_AT = "td_updated_at";
}
