<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('links', function (Blueprint $table) {
            $table->increments('id');
            // start_migration
            $table->string('link_url');
$table->string('link_name');
$table->string('link_image');
$table->bigInteger('link_target_id');
$table->string('link_description')->nullable();;
$table->boolean('link_visible');
$table->bigInteger('link_owner')->nullable();;
$table->bigInteger('link_click_count')->nullable();;
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
        Schema::drop('links');
    }
}
