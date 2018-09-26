<?php foreach ($widgets as $widget): ?>
    <div class="<?= cardStyle($widget->theme['card']) ?> uk-margin" >
        <?php if ( $widget->theme['title']['hide'] === false ): ?>
            <h3 class="<?= titleClass($widget->theme['title']) ?>"><?= $widget->title ?></h3>
        <?php endif; ?>
        <?= $widget->get('result') ?>
    </div>
<?php endforeach; ?>
