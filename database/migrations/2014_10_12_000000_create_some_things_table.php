<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSomeThingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('some_things', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->string('ten');
$table->text('mo_ta');
$table->integer('so_tien');
$table->string('ngay_sinh');
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
        Schema::drop('some_things');
    }
}
