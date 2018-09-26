<?php
    function isHero( $data = [] ){
        if ($data['is'] == true) {
            return true;
        }
        return false;
    }

    function themeHeaderStyle($data = [] ){
        if ( !empty($data['header']['style']['image']) ) {
            global $params;
            return $data['header']['style']['image'];
        }
        return false;
    }

    function themeHeader($data = [] ){
        if ($data['is'] == true) {
            return implode(' ' , array_filter([
                'bg' => 'uk-background',
                'class' => $data['header']['class']['background'],
                'other' => $data['header']['class']['otherClass'],
                'cover' => !empty($data['header']['style']['image']) ? 'uk-background-cover':''
            ]));
        }
        return '';
    }

    function navbarHeader( $data = [] ){
        if ( $data['header']['class']['background'] == 'uk-background-primary' OR $data['header']['class']['background'] == 'uk-background-secondary' ){
            $light = true;
        }
        return implode(' ' , array_filter([
            'container' => 'uk-navbar-container',
            'transparent' => $data['is'] == true ? 'uk-navbar-transparent':null,
            'light' => isset($light) ? 'uk-light':''
        ]));
    }

    function navbarLogo( $data = [] ){
        //$params['logo']
        $logo = '';
        if ($data['hero']['is'] == true) {
            if ( $data['hero']['header']['class']['background'] == 'uk-background-primary' OR $data['hero']['header']['class']['background'] == 'uk-background-secondary' ){
                if (!empty($data['contrast_logo'])) {
                    $logo = $data['contrast_logo'];
                }else{
                    $logo = $data['logo'];
                }
            }else {
                $logo = $data['logo'];
            }
        }else{
            $logo = $data['logo'];
        }
        return $logo;
    }

    function navbarSticky( $data = [] ){
        //cls-inactive: uk-navbar-transparent uk-light;
        if ( $data['header']['class']['background'] == 'uk-background-primary' OR $data['header']['class']['background'] == 'uk-background-secondary' ){
            $light = true;
        }
        $array = [
            'transparent' => $data['is'] == true ? 'uk-navbar-transparent':null,
            'light' => isset($light) ? 'uk-light':''
        ];
        array_unshift($array , 'cls-inactive:');
        array_push($array , ';');
        return implode(' ' , array_filter($array));
    }

    function mainHeader($data = [] ,$params = [] ){

        if ( $params['header']['class']['background'] == 'uk-background-primary' OR $params['header']['class']['background'] == 'uk-background-secondary' ){
            $light = true;
        }
        return implode(' ' , array_filter([
            'class' => $data['class']['height'],
            'other' => $data['class']['otherClass'],
            'light' => isset($light) ? 'uk-light':''
        ]));
    }

    function classContent($data = [] ){
        return implode(' ' , array_filter([
            'section' => $data['class']['section'],
            'color' => $data['class']['color'],
            'size' => $data['class']['size'],
            'otherClass' => $data['otherClass'],
            'cover' =>  !empty($data['image']) ? 'uk-background-cover':''
        ]));
    }

    function titleClass($data = [] ){
        return implode(' ' , array_filter([
            'size' => $data['size'],
            'color' => $data['color'],
            'other' => $data['otherClass']
        ]));
    }

    function positionSection($data = [] ){
        return implode(' ' , array_filter([
            'background' => $data['background'],
            'size' => $data['size'],
            'other' => $data['otherClass'],
            'cover' => !empty($data['image']) ? 'uk-background-cover':''
        ]));
    }

    function cardStyle($data = [] ){
        return implode(' ' , array_filter([
            'background' => $data['background'],
            'size' => $data['size'],
            'other' => $data['otherClass'],
            'hover' => $data['hover'],
        ]));
    }

?>
