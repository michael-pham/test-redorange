<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFileDinhKemBaiVietsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file_dinh_kem_bai_viets', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->bigInteger('bai_viet_id');
$table->text('ten_file');
$table->text('file_url');
            // end_migration
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
        Schema::drop('file_dinh_kem_bai_viets');
    }
}
