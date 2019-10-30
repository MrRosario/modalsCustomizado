let Cbz = {
    modal: function({ theme = "success", title = "", body = "", action = true, close = false }){
        let _html = `
            <div class='c-modalContainer'>
                <div class='c-modal'>
                    <div class="c-modal__header"> 
                        <span class="c-modal__close">&times;</span>

                        <div class="c-icon">  </div>

                        <h2 class="c-modal__title"> </h2> 
                    </div>
                    <div class="c-modal__body">
                        <p class="modal__text"> </p>
                    </div>
                    <div class="c-modal__footer">
                        <button class="c-modal__btn">OK</button>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(_html);

        $('.c-modal__title').html(title);
        $('.modal__text').html(body);

        close == true ? $('.c-modal__close').css("display", "flex") : $('.c-modal__close').css("display", "none");
        action == true ?  $(".c-modal__btn").css("display", "inline;") : $(".c-modal__btn").css("display", "none");

        if(theme == 'success'){
            const html = `<div class="success-icon__tip"></div>
                        <div class="success-icon__long"></div>`;
            $(".c-icon").addClass("c-modal-success");
            $('.c-icon').append(html);
        }
        if(theme == 'warning'){
            const html = `<span class="c-warn c-warning"> </span>`;
            $(".c-icon").addClass("c-modal-warning");
            $('.c-icon').append(html);
        }
        if(theme == 'error'){
            const html = `<div class="c-error-circle"> X </div>`;
            $(".c-icon").addClass("c-modal-error");
            $('.c-icon').append(html);
        }
        this.actions(_html);
    },
    actions: function(){
        $("#c-btn").click(function(e){
            e.preventDefault();
            $('.c-modalContainer').css("display", "flex");
        });
        $(".c-modal__btn").click(function(e){
            e.preventDefault();
            $('.c-modalContainer').css("display", "none");
        });
        $(".c-modal__close").click(function(e){
            e.preventDefault();
            $('.c-modalContainer').css("display", "none");
        });
        $(".c-modalContainer").click(function (e) {
            if(e.target.className == "c-modalContainer"){
                $('.c-modalContainer').css("display", "none");
            }
        });
    }
}