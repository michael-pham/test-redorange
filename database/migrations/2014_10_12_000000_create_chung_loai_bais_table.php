<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChungLoaiBaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chung_loai_bais', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->string('ten');
$table->text('mo_ta')->nullable();;
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
        Schema::drop('chung_loai_bais');
    }
}
