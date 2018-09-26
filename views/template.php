<!DOCTYPE html>
<html lang="<?= $intl->getLocaleTag() ?>">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= $view->render('head') ?>
    <?= $view->style('theme' , 'theme:assets/css/uikit.sistemim.min.css') ?>
    <?= $view->script('theme-js' , 'theme:assets/js/uikit.min.js' , ['jquery']) ?>
    <?= $view->script('theme-icons' , 'theme:assets/js/uikit-icons.min.js' , ['theme-js']) ?>
  </head>
  <body>
    <?= $view->render('config.php') ?>
    <?= $view->render('theme/header.php') ?>

    <?php if ( $view->position()->exists('top') ): ?>
        <?= $view->position('top' , 'theme/positions/position.php') ?>
    <?php endif; ?>

    <?php if ( $params['main']['content'] === false ): ?>
        <div class="<?= classContent($params['main']) ?>" <?= !empty($params['main']['image']) ? 'data-src="'. $params['main']['image'] .'" uk-img':'' ?> <?= !empty($params['main']['component']) ? $params['main']['component']:'' ?>>
            <div class="uk-container">
                <div uk-grid>

                    <div class="uk-width-expand@m">

                        <?php if ( $view->position()->exists('main-top') ): ?>
                            <div>
                                <?= $view->position('main-top' , 'theme/positions/content.php') ?>
                            </div>
                        <?php endif; ?>

                        <div>
                            <?= $view->render('content') ?>
                        </div>

                        <?php if ( $view->position()->exists('main-bottom') ): ?>
                            <div>
                                <?= $view->position('main-bottom' , 'theme/positions/content.php') ?>
                            </div>
                        <?php endif; ?>

                    </div>

                    <?php if ( $view->position()->exists('sidebar') ): ?>
                        <div class="uk-width-1-3@m">
                            <?= $view->position('sidebar' , 'theme/positions/sidebar.php') ?>
                        </div>
                    <?php endif; ?>

                </div>
            </div>
        </div>
    <?php endif; ?>

    <?php if ( $view->position()->exists('bottom') ): ?>
        <?= $view->position('bottom' , 'theme/positions/position.php') ?>
    <?php endif; ?>

    <?php if ( $view->position()->exists('footer') ): ?>
        <?= $view->position('footer' , 'theme/positions/position.php') ?>
    <?php endif; ?>

    <script>
        $(document).ready(function() {
            var params = <?= json_encode($params) ?>;
            var sticky = $('#stickyNavbar');
            $(window).scroll(function(){

                if ($(this).scrollTop() >= 300) {
                    $('#projectLogo').attr('src', params.logo);
                }

                if ($(this).scrollTop() <= 299) {
                    if (params.hero.is == true) {
                        if (params.hero.header.class.background == 'uk-background-secondary' || params.hero.header.class.background == 'uk-background-primary' ) {
                            if (params.contrast_logo) {
                                $('#projectLogo').attr('src', params.contrast_logo)
                            }else {
                                $('#projectLogo').attr('src', params.logo)
                            }
                        }else {
                            $('#projectLogo').attr('src', params.logo);
                        }
                    }else {
                        $('#projectLogo').attr('src', params.logo);
                    }
                }

            })
        });
    </script>
    <?= $view->render('footer') ?>
  </body>
</html>
