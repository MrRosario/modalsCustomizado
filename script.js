$(document).ready(function() {
    CobzModal.style();
});

let CobzModal = {

    regular: function(header, close, action, theme, content){ 
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
                });
                $(".modal__close").click(function(e){
                    e.preventDefault();
                    $('.modal-container').css("display", "none");
                });
                $(".modal-container").click(function (e) {
                    if(e.target.className == "modal-container"){
                        $('.modal-container').css("display", "none");
                    }
                });
            },
            params: { 
                "header": header || "Meu titulo", 
                "content": content || "Meu conteudo...", 
                "close": close || true, 
                "action": action || true, 
                "theme": theme || '#000000'
            },
            characteristics: function(){
                let _self = this;

                $('.modal__titulo').html(_self.params.header);
                $('.conteudo_body').html(_self.params.content);

                $(".modal__header, .modal__body, .btn_confirmar")
                    .css({ "border-color": theme });
                $(".modal__fechar, .btn_confirmar")
                    .css({ "color": theme });

                _self.params.close == true ? $('.modal__close').css("display", "block") 
                    : $('.modal__close').css("display", "none");
                _self.params.action == true ?  $(".btn_confirmar").css("display", "block") 
                    : $(".btn_confirmar").css("display", "none");
            }
        }
        modal.init();
    },
    style: function(){
        const modalContainer = {
            "display": "none",
            "justify-content": "center",
            "align-items": "center",
            "height": "100%",
            "width": "100%",
            "position": "fixed",
            "z-index": "1",
            "background-color": "rgba(0,0,0,0.9)",
            "left": "0",
            "top": "0",
        }
        const modal = {
            "border": "1px solid #000000",
            "width": "60%",
            "background-color": "#ffffff",
            "margin": "0 auto",
            "z-index": "100%",
            "margin-top": "140px",
            "animation-name": "animatetop",
            "animation-duration": "0.6s",
            "animation-timing-function": "ease-in-out",
        }
        const modalHeader = {
            "display": "flex",
            "justify-content": "space-between",
            "border-bottom": "1px solid #d3d3d3",
            "padding": "0px 10px",
            "box-sizing": "border-box",
        };
        const modalClose = {
            color: "#000000",
            "font-size": "30px",
            "font-weight": "bold",
            "cursor": "pointer",
            "text-decoration": "none"
        }
        const modalBody = {
            "padding": "0px 10px",
            "box-sizing": "border-box",
            "border-bottom": "1px solid #d3d3d3"
        }
        const modalFooter = { 
            "margin": "10px 0px",
            "display": "flex",
            "justify-content": "flex-end", 
            "padding": "0px 10px" 
        }
        const btnModal = { 
            "font-weight": "bold",
            "padding": "10px",
            "background-color": "#fff",
            "border": "1px solid #000000",
            "cursor": "pointer"
        }
        // const modal__close:hover,
        // const modal__close:focus{ cursor: pointer; text-decoration: none;}
        $('.modal-container').css(modalContainer);
        $('.modal').css(modal);
        $('.modal__header').css(modalHeader);
        $('.modal__close').css(modalClose);
        $('.modal__body').css(modalBody);
        $('.modal__footer').css(modalFooter);
        $('.btn_modal').css(btnModal);
        
    }

}