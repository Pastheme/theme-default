<?php foreach ($widgets as $widget): ?>
    <div class="<?= positionSection($widget->theme['section']) ?>" <?= !empty($widget->theme['section']['image']) ? 'data-src="'. $widget->theme['section']['image'] .'" uk-img':'' ?>>
        <div class="uk-container">
            <?php if ( $widget->theme['title']['hide'] === false ): ?>
                <h3 class="<?= titleClass($widget->theme['title']) ?>"><?= $widget->title ?></h3>
            <?php endif; ?>
            <?= $widget->get('result') ?>
        </div>
    </div>
<?php endforeach; ?>
