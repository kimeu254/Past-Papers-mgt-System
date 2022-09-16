<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_units', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('course_id')->index()->nullable();
            $table->foreign('course_id')
                ->references('id')
                ->on('tbl_courses')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_units');
    }
};
