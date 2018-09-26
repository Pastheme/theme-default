<?php if ( isHero($params['hero']) === true ): ?>
    <header class="<?= themeHeader($params['hero']) ?>" data-src="<?= themeHeaderStyle($params['hero']) ?>" <?= themeHeaderStyle($params['hero']) !== false ? 'uk-img':'' ?>>
<?php endif; ?>

    <?= $view->render('theme/navbar/navbar.php') ?>

<?php if ( isHero($params['hero']) === true ): ?>

    <?php if ( !empty($params['hero']['main']['content']) ): ?>
        <main class="<?= mainHeader($params['hero']['main'] , $params['hero']) ?>">
            <div class="uk-container">
                <?= $params['hero']['main']['content'] ?>
            </div>
        </main>
    <?php endif; ?>

    </header>
<?php endif; ?>
