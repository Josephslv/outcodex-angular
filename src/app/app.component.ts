import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    //// json models
    templateJSON = {};

    navbar_model_1_json =  {
        "pageNavigation": {
            "template":"A",
            "background": "",
            "color": "#fff",
            "title": "Título da página",
            "left": {
                "actions": [
                {
                    "order": "2",
                    "name": "home",
                    "icon": "ea88",
                    "title": "Texto 3"
                }
                ]
            },
            "right": {
                "actions": [
                {
                    "order": "2",
                    "name": "home",
                    "icon": "ea88",
                    "title": "Texto 3"
                }
                ]
            }
            },
    }
    navbar_model_2_json =  {
        "pageNavigation": {
            "template":"B",
            "background": "",
            "color": "#fff",
            "title": "Título da página",
            "left": {
                "actions": [
                {
                    "order": "2",
                    "name": "home",
                    "icon": "ea88",
                    "title": "Texto 3"
                }
                ]
            },
            "right": {
                "actions": [
                {
                    "order": "2",
                    "name": "home",
                    "icon": "ea88",
                    "title": "Texto 3"
                }
                ]
            }
        }
    }
    header_model_1_json =  {
        "pageHeader": {
            "template": "A",
            "background": "#fff",
            "logo": "https://mobilex.blob.core.windows.net/files/campinagrande/Banner%20consultas%202.png",
            "color": "#EE8113",
            "item": {
                "publishLevel": 1,
                "details": [
                {
                    "order": 0,
                    "value": ""
                }
                ],
                "actionDefault": 0,
                "actions": [
                {
                    "order": "0",
                    "name": "home",
                    "icon": "ea39",
                    "title": "Texto 1"
                }
                ]
            }
        }
    }
    header_model_2_json =  {
        "pageHeader": {
            "template": "B",
            "background": "#fff",
            "logo": false,
            "color": "#EE8113",
            "item": {
                "publishLevel": 1,
                "details": [
                {
                    "order": 0,
                    "value": ""
                }
                ],
                "actionDefault": 0,
                "actions": [
                {
                    "order": "0",
                    "name": "home",
                    "icon": "ea39",
                    "title": "Texto 1"
                }
                ]
            }
        }
    }
    content_model_1_json = {
        "pageContent": {
            "background": "#FFF",
            "totalPages": 1,
            "currentPage": 1,
            "hasGroupBy": false,
            "groupList": null
        }
    }
    footer_model_1_json =  {
        "pageFooter": {
            "color": "#000",
            "background": "#FFF"
            }
    }
    ////


    newElementDropping = null;

    ngOnInit() {

        ////// Application
        const options  = document.querySelectorAll('.option')
        const dropzone = document.querySelector('.dropzone') as HTMLSelectElement;

        // áreas de drop do painel
        const navbar_zone  = document.querySelector('.navbar-zone')  as HTMLSelectElement;
        const header_zone  = document.querySelector('.header-zone')  as HTMLSelectElement;
        const content_zone = document.querySelector('.content-zone') as HTMLSelectElement;
        const footer_zone  = document.querySelector('.footer-zone')  as HTMLSelectElement;


        options.forEach(option => {
            option.addEventListener('dragstart', (event) => dragstart(event ,this.newElementDropping))
            option.addEventListener('drag', drag)
            option.addEventListener('dragend', (event) => dragend(event ,this.newElementDropping))
        })


        // captura do evento da opção
        function dragstart(event:any, newElementDropping:any) {
            const element = event.target

            // adiciona highlights nas áreas possíveis de drop!
            dropzone.classList.add('highlight')

            // identificador de movimento
            element.classList.add('is-dragging')

            if(element.classList.contains('nav-custom')){navbar_zone.classList.add('highlight')}
            if(element.classList.contains('header-custom')){header_zone.classList.add('highlight')}
            if(element.classList.contains('content-custom')){content_zone.classList.add('highlight')}
            if(element.classList.contains('footer-custom')){footer_zone.classList.add('highlight')}
        }

        function drag(this:any) {
            // animação de movimento
            this.classList.add('animation-move')
        }

        function dragend(event:any, newElementDropping:any) { //console.log('> Dragging stop!')
            const element = event.target

            // remove as classes do card (opções de costomizalçao)
            element.classList.remove('is-dragging')
            element.classList.remove('animation-move')

            dropzone.classList.remove('highlight')
            navbar_zone.classList.remove('highlight')
            header_zone.classList.remove('highlight')
            content_zone.classList.remove('highlight')
            footer_zone.classList.remove('highlight')

            // remove as classes do card pós drop!
            if(newElementDropping != undefined){
                // áreas de drop do painel
                const navbar_editzone  = document.querySelector('.navbar-editzone')
                const header_editzone  = document.querySelector('.header-editzone')
                const content_editzone = document.querySelector('.content-editzone')
                const footer_editzone  = document.querySelector('.footer-editzone')

                //// Lógica da criação da template.json - II
                function jsonModelListener(classe:any) {
                    /* if(classe == 'nav-model-1'){
                        if(newElementDropping.classList.contains(classe)){
                            templateJSON.pageNavigation_settings  = navbar_model_1_json.pageNavigation
                        }
                    }
                    if(classe == 'nav-model-2'){
                        if(newElementDropping.classList.contains(classe)){
                            templateJSON.pageNavigation_settings  = navbar_model_2_json.pageNavigation
                        }
                    }
                    if(classe == 'header-model-1'){
                        if(newElementDropping.classList.contains(classe)){
                            templateJSON.pageHeader_settings  = header_model_1_json.pageHeader
                        }
                    }
                    if(classe == 'header-model-2'){
                        if(newElementDropping.classList.contains(classe)){
                            templateJSON.pageHeader_settings  = header_model_2_json.pageHeader
                        }
                    }
                    if(classe == 'content-model-1'){
                        if(newElementDropping.classList.contains(classe)){
                            templateJSON.pageContent_settings  = content_model_1_json.pageContent
                        }
                    }
                    if(classe == 'footer-model-1'){
                        if(newElementDropping.classList.contains(classe)){
                            templateJSON.pageFooter_settings  = footer_model_1_json.pageFooter
                        }
                    } */
                }
                ////


                newElementDropping.classList.remove('option')
                newElementDropping.classList.remove('is-dragging')
                newElementDropping.classList.remove('animation-move')



                // lógica de adicição não repetida
                /* if(newElementDropping.classList.contains('nav-custom')){
                    if(!document.querySelector('.navbar-zone .nav-custom')){
                        navbar_zone.appendChild(newElementDropping)

                        jsonModelListener('nav-model-1');
                        jsonModelListener('nav-model-2');
                    } else {
                        //dropzone.removeChild(document.querySelector('.nav-custom'))
                        navbar_zone.removeChild(navbar_zone.children[0])
                        navbar_zone.appendChild(newElementDropping)
                        jsonModelListener('nav-model-1');
                        jsonModelListener('nav-model-2');
                    }
                }
                if(newElementDropping.classList.contains('header-custom')){
                    if(!document.querySelector('.header-zone .header-custom')){
                        header_zone.appendChild(newElementDropping)
                        jsonModelListener('header-model-1');
                        jsonModelListener('header-model-2');
                    } else {
                        //dropzone.removeChild(document.querySelector('.nav-custom'))
                        header_zone.removeChild(header_zone.children[0])
                        header_zone.appendChild(newElementDropping)
                        jsonModelListener('header-model-1');
                        jsonModelListener('header-model-2');
                    }
                }
                if(newElementDropping.classList.contains('content-custom')){
                    if(!document.querySelector('.content-zone .content-custom')){
                        content_zone.appendChild(newElementDropping)
                        jsonModelListener('content-model-1');
                    } else {
                        //dropzone.removeChild(document.querySelector('.nav-custom'))
                        content_zone.removeChild(content_zone.children[0])
                        content_zone.appendChild(newElementDropping)
                        jsonModelListener('content-model-1');
                    }
                }
                if(newElementDropping.classList.contains('footer-custom')){
                    if(!document.querySelector('.footer-zone .footer-custom')){
                        footer_zone.appendChild(newElementDropping)
                        jsonModelListener('footer-model-1');
                    } else {
                        //dropzone.removeChild(document.querySelector('.nav-custom'))
                        footer_zone.removeChild(footer_zone.children[0])
                        footer_zone.appendChild(newElementDropping)
                        jsonModelListener('footer-model-1');
                    }
                } */
            }

            // lógica - Edit Template
            // ...
            // ...
        }

    }
}
