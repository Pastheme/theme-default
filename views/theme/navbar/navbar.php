<div id="#stickyNavbar" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; <?= navbarSticky($params['hero']) ?> top: 300">
    <nav class="<?= navbarHeader($params['hero']) ?>">
        <div class="uk-container" uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-brand uk-navbar-item" href="<?= $view->url()->get() ?>">
                    <?php if ($params['logo']) : ?>
                        <img id="projectLogo" class="uk-responsive-height" src="<?= $this->escape(navbarLogo($params)) ?>" alt="">
                    <?php else : ?>
                        <?= $params['title'] ?>
                    <?php endif ?>
                </a>
            </div>

            <div class="uk-navbar-right">
                <?php if ($view->menu()->exists('main')): ?>
                    <?= $view->menu('main' , 'theme/navbar/navbar-nav.php') ?>
                <?php endif; ?>

                <?php if ( $view->position()->exists('navbar') ): ?>
                    <?= $view->position('navbar' , 'theme/positions/blank.php') ?>
                <?php endif; ?>

                <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon uk-toggle href="#offcanvasMenu"></a>

            </div>

        </div>
    </nav>
</div>

<div id="offcanvasMenu" uk-offcanvas>
    <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <div class="uk-margin-large">

            <?php if ( $view->position()->exists('offcanvas-top') ): ?>
                <?= $view->position('offcanvas-top' , 'theme/positions/blank.php') ?>
            <?php endif; ?>

            <div class="uk-margin-large">
                <?php if ($view->menu()->exists('main')): ?>
                    <?= $view->menu('main' , 'theme/navbar/offcanvas-nav.php') ?>
                <?php endif; ?>
            </div>

            <?php if ( $view->position()->exists('offcanvas-bottom') ): ?>
                <?= $view->position('offcanvas-bottom' , 'theme/positions/blank.php') ?>
            <?php endif; ?>

        </div>

    </div>
</div>
