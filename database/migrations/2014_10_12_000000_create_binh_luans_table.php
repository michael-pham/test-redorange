<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBinhLuansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('binh_luans', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->bigInteger('bai_viet_id');
$table->bigInteger('nguoi_binh_luan_id');
$table->string('ten_nguoi_binh_luan')->nullable();;
$table->string('url_nguoi_binh_luan')->nullable();;
$table->string('ip_nguoi_binh_luan')->nullable();;
$table->text('noi_dung_binh_luan');
$table->bigInteger('binh_luan_cha_id')->nullable();;
$table->boolean('binh_luan_duoc_chap_nhan');
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
        Schema::drop('binh_luans');
    }
}
