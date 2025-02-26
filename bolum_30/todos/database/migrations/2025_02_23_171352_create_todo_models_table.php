<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id('td_id');
            $table->string('td_name')->nullable();
            $table->tinyInteger('td_status')->default(0)->comment("0 pasif 1 aktif")->nullable();
            $table->softDeletes();
            $table->timestamp('td_created_at')->nullable();
            $table->timestamp('td_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todos');
    }
};
