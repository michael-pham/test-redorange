<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBaiVietsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bai_viets', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->bigInteger('tac_gia_bai_viet_id');
$table->text('noi_dung');
$table->text('tieu_de');
$table->text('trich_yeu');
$table->bigInteger('tinh_trang_bai_viet_id');
$table->bigInteger('tinh_trang_binh_luan_id');
$table->bigInteger('bai_viet_cha_id')->nullable();;
$table->integer('thu_tu_tren_menu')->nullable();;
$table->bigInteger('chung_loai_bai_viet_id');
$table->bigInteger('so_luong_binh_luan')->nullable();;
$table->string('hinh_anh_dai_dien_url')->nullable();;
$table->string('hinh_anh_dai_dien_thumbnail_url')->nullable();;
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
        Schema::drop('bai_viets');
    }
}
