
let CobzModal = {
    padrao: function({ header = "", close = true, action = true, theme = "#000000", content }){ 
        let modal = {
            init: function(){
                this.render();
            },
            render: function(){
                let _self = this;
                
                let _html = `
                    <div class='modal-container'>
                        <div class='modal'>
                            <div class="modal__header"> 
                                <h2 class="modal__titulo"> Título do modal </h2> 
                                <span class="modal__close">&times;</span>
                            </div>
                            <div class="modal__body">
                                <p class="conteudo_body"> </p>
                            </div>
                            <div class="modal__footer">
                                <button class="btn_modal btn_confirmar">Confirmar</button>
                            </div>
                        </div>
                    </div>
                `;

                $('body').append(_html);

                _self.characteristics();
                _self.actions();
            },
            actions: function(){
                $('.Cobz-ModalRegular').click(function(e){
                    e.preventDefault();
                    $('.modal-container').css("display", "block");
                    $('.modal').css("display", "block");
                });
                $(".modal__close").click(function(e){
                    e.preventDefault();
                    $('.modal-container').css("display", "none");
                });
                $(".btn_confirmar").click(function(e){
                    e.preventDefault();
                    $('.modal-container').css("display", "none");
                });
                $(".modal-container").click(function (e) {
                    if(e.target.className == "modal-container"){
                        $('.modal-container').css("display", "none");
                    }
                });
            },
            characteristics: function(){
                $('.modal__titulo').html(header);
                $('.conteudo_body').html(content);

                $(".modal__header, .modal, .modal__body, .btn_confirmar")
                    .css({ "border-color": theme });
                $(".modal__close, .btn_confirmar")
                    .css({ "color": theme });

                close == true ? $('.modal__close').css("display", "block") 
                    : $('.modal__close').css("display", "none");
                action == true ?  $(".btn_confirmar").css("display", "block") 
                    : $(".btn_confirmar").css("display", "none");
            }
        }
        modal.init();
    },
    success: function({ header, action = true, theme = "#00ff00", content }) {
        let modal = {
            init: function(){
                this.render();
            },
            render: function(){
                let _self = this;
                
                let _html = `
                    <div class='modalSuccessContainer'>
                        <div class='modalSuccess'>
                            <div class="modalSuccess__header"> 
                                <div> <img class="modalSuccess__img" src="./img/success.jpg"> </div>
                                <h1 class="modalSuccess__titulo" style="text-align:center">  </h1> 
                            </div>
                            <div class="modalSuccess__body">
                                <h3 class="modalSuccess_body"> </h3>
                            </div>
                            <div class="modalSuccess__footer">
                                <button class="btn_modal btnSuccess">OK</button>
                            </div>
                        </div>
                    </div>
                `;

                $('body').append(_html);

                _self.characteristics();
                _self.actions();
            },
            actions: function(){
                $('.Cobz-ModalSucess').click(function(e){
                    e.preventDefault();
                    $('.modalSuccessContainer').css("display", "flex");
                    $(".modalSuccess").css("display", "block");
                });
                $(".btnSuccess").click(function(e){
                    $('.modalSuccessContainer').css("display", "none");
                });
                $(".modalSuccessContainer").click(function (e) {
                    if(e.target.className == "modalSuccessContainer"){
                        $('.modalSuccessContainer').css("display", "none");
                    }
                });
            },
            characteristics: function(){
                $('.modalSuccess__titulo').html(header);
                $('.modalSuccess_body').html(content);

                $(".btnSuccess")
                    .css({ "border-color": theme });
                $(".btnSuccess, .modalSuccess__titulo").css({ "color": theme });

                action == true ?  $(".btnSuccess").css("display", "initial") 
                     : $(".btnSuccess").css("display", "none");
            }
        }
        modal.init();
    },
    warning: function({header = "", action =  true, theme = "#ff0000", content}) {
        let modal = {
            init: function(){
                this.render();
            },
            render: function(){
                let _self = this;
                
                let _html = `
                    <div class='modalWarningContainer'>
                        <div class='modalWarning'>
                            <div class="modalWarning__header"> 
                                <div> <img class="modalWarning__img" src="./img/warning.png"> </div>
                                <h1 class="modalWarning__titulo" style="text-align:center">  </h1> 
                            </div>
                            <div class="modalWarning__body">
                                <h3 class="modalWarning_body"> </h3>
                            </div>
                            <div class="modalWarning__footer">
                                <button class="btn_modal btnWarning">OK</button>
                            </div>
                        </div>
                    </div>
                `;

                $('body').append(_html);

                _self.characteristics();
                _self.actions();
            },
            actions: function(){
                $('.Cobz-ModalWarning').click(function(e){
                    e.preventDefault();
                    $('.modalWarningContainer').css("display", "flex");
                    $(".modalWarning").css("display", "block");
                });
                $(".btnWarning").click(function(e){
                    $('.modalWarningContainer').css("display", "none");
                });
                $(".modalWarningContainer").click(function (e) {
                    if(e.target.className == "modalWarningContainer"){
                        $('.modalWarningContainer').css("display", "none");
                    }
                });
            },
            characteristics: function(){
                $('.modalWarning__titulo').html(header);
                $('.modalWarning_body').html(content);

                $(".btnWarning")
                    .css({ "border-color": theme });
                $(".btnWarning, .modalWarning__titulo").css({ "color": theme });

                action == true ?  $(".btnWarning").css("display", "initial") 
                     : $(".btnWarning").css("display", "none");
            }
        }
        modal.init();
    }
}