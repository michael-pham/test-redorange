<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFontFamilysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('font_familys', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->string('font_name');
$table->string('italics_font_uri');
$table->string('normal_font_uri');
$table->string('bold_font_uri');
$table->string('bold_italics_font_uri');
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
        Schema::drop('font_familys');
    }
}
