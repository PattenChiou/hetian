$("#index_share").click(function (e){
    e.preventDefault();
    $("html,body").animate(
        {
            scrollTop: 0,
        },
        600
    );
});