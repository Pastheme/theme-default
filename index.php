<?php
return [
    'name'  => 'sistemim',
    'main'  => function(){

    },

    'menus' => [
        'main' => 'Main',
        'footer' => 'Footer',
    ],

    'widget' => [
        'section' => [
            'image' => '',
            'background' => 'uk-section',
            'size'  => '',
            'otherClass' => '',
        ],
        'card' => [
            'background' => 'uk-card uk-card-default',
            'size' => 'uk-card-body',
            'hover' => 'uk-card-hover', // if true - uk-card-hover
            'otherClass' => ''
        ],
        'title' => [
            'hide' => false,
            'size' => '',
            'color'=> '',
            'otherClass' => ''
        ]
    ],

    'node' => [
        'hero' => [
            'is' => false,
            'header' => [
                'class' => [
                    'background' => 'uk-background-primary',
                    'otherClass' => '',
                ],
                'style' => [
                    'image' => '',
                ]
            ],
            'main' => [ // Content Area
                'content' => '',
                'class' => [
                    'height' => '',
                    'otherClass' => '',
                ],
            ],
        ],
        'main' => [
            'class' => [
                'section' => 'uk-section',
                'color' => '',
                'size' => '',
            ],
            'image' => '',
            'component' => '',
            'otherClass' => '',
            'content' => false,
            'title' => false
        ]
    ],

    'positions' => [
        'navbar' => 'Navbar',
        'offcanvas-top' => 'Off Canvas Top',
        'offcanvas-bottom' => 'Off Canvas Bottom',
        'top' => 'Top',
        'sidebar' => 'Sidebar',
        'main-top' => 'Main Top',
        'main-bottom' => 'Main Bottom',
        'bottom' => 'Bottom',
        'footer' => 'Footer'
    ],

    'config' => [
        'navbar' => [
            'fixed' => true,
            'contrastLogo' => '',
        ]
    ],

    'events' => [
        'view.system/site/admin/edit' => function($event , $view){
            $view->script('node-theme' , 'theme:app/bundle/node-theme.js' , 'site-edit');
            $view->script('node-settings' , 'theme:app/bundle/node-settings.js' , 'site-edit');
        },

        'view.system/site/admin/settings' => function ($event, $view) use ($app) {
            $view->script('site-theme', 'theme:app/bundle/node-general.js', 'site-settings');
        },

        'view.system/widget/edit' => function($event , $view) {
            $view->script('widget-theme' , 'theme:app/bundle/widget-theme.js' , 'widget-edit');
        }
    ]
]

?>
