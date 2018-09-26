<?php foreach ($widgets as $widget): ?>
    <div class="<?= positionSection($widget->theme['section']) ?>" <?= !empty($widget->theme['section']['image']) ? 'data-src="'. $widget->theme['section']['image'] .'" uk-img':'' ?>>
        <?php if ( $widget->theme['title']['hide'] === false ): ?>
            <h3 class="<?= titleClass($widget->theme['title']) ?>"><?= $widget->title ?></h3>
        <?php endif; ?>
        <?= $widget->get('result') ?>
    </div>
<?php endforeach; ?>
