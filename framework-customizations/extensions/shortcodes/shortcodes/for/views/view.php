<?php if ( ! defined( 'FW' ) ) {
    die( 'Forbidden' );
}
/*
  * Верстка шорткода
  * весь контент лежит в переменной $atts
  */

?>
<section class="for">

    <div class="container">

        <h3 class="title">Для кого мы работаем</h3>

        <p class="subtitle">Мы хотим, чтобы Вам нравилось то, что мы делаем.</p>

        <div class="for__wrapper">

            <div class="for__wrapper--element">

                <span class="icon">
                    <img src="<?= bloginfo('template_directory'); ?>/img/content/for-1.png" alt="">
                </span>

                <p class="descr">Частные клиенты</p>

            </div>
            <div class="for__wrapper--element">

                 <span class="icon">
                    <img src="<?= bloginfo('template_directory'); ?>/img/content/for-2.png" alt="">
                 </span>

                <p class="descr">Корпоративные клиенты</p>

            </div>
            <div class="for__wrapper--element">

                 <span class="icon">
                    <img src="<?= bloginfo('template_directory'); ?>/img/content/for-3.png" alt="">
                 </span>

                <p class="descr">Дизайнеры / Архитеркторы</p>

            </div>

        </div>

    </div>

</section>
