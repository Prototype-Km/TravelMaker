const type = {
    "ALL" : "전체",
    "QUESTION" : "문의",
    "REPOT" : "신고"
}
$(document).ready(function() {
    // 문의 버튼의 글 목록을 기본으로 보이도록 설정
    showCategoryPosts("ALL");

    $(".select-category").on("click", function() {
        let category = $(this).data("category");

        console.log(category);

        if (type.ALL == category) {

        } else if (type.QUESTION == category) {

        } else {

        }

        // 선택한 카테고리의 글 목록을 보여주기 위한 함수 호출
        showCategoryPosts(category);
    });

    function showCategoryPosts(category) {
        // 모든 글 목록을 숨김 처리
        // $(".recommendedPostView-wrapper").hide();
        $(".select-category").removeClass('now-button');
        // 선택한 카테고리의 글 목록만 보여줌
        // $(".recommendedPostView-wrapper[data-category='" + category + "']").show();
        $(".select-category[data-category='" + category + "']").addClass('now-button');
    }


    $(".post-title").on("click", function (e) {
        e.preventDefault(); // 기본 링크 동작 방지

        let postContent = $(this).data("content");
        $(".post-content[data-content='" + postContent + "']").slideToggle('slow');
    });

    $(".search-input").keydown(function(e) {
        if( e.keyCode == 13 ){
            let keyword= $(this).val();
            customService.getList(showList,0,keyword);
        }
    });

    // // 체크박스
    //
    // // 전체 선택 및 전체 선택 해제
    // $("#allSelect").click(function() {
    //     if($("#allSelect").is(":checked")) {
    //         $("input[name=questionChk]").prop("checked", true);
    //         // 체크박스 전체 선택 했을 때 삭제 버튼 활성화
    //         $(".Button-qBtn").addClass("now-button");
    //     }
    //     else {
    //         $("input[name=questionChk]").prop("checked", false);
    //         // 체크박스 전체 선택 해제 했을 때 삭제 버튼 비활성화
    //         $(".Button-qBtn").removeClass("now-button");
    //     }
    // });
    // $("#allSelect-repot").click(function() {
    //     if($("#allSelect-repot").is(":checked")) {
    //         $("input[name=repotChk]").prop("checked", true);
    //         // 체크박스 전체 선택 했을 때 삭제 버튼 활성화
    //         $(".Button-rBtn").addClass("now-button");
    //     }
    //     else {
    //         $("input[name=repotChk]").prop("checked", false);
    //         // 체크박스 전체 선택 해제 했을 때 삭제 버튼 비활성화
    //         $(".Button-rBtn").removeClass("now-button");
    //     }
    // });
    //
    //
    // // 부분 선택 및 부분 선택 해제 & 모든 체크박스 선택했을 때 전체선택 버튼도 체크 되게
    // $("input[name=questionChk]").click(function() {
    //
    //     let questionTotal = $(".questionChk").length;
    //     let questionChk = $("input[name=questionChk]:checked").length;
    //
    //     console.log("문의 토탈 체크 : " + questionTotal);
    //     console.log("문의 선택 체크 : " + questionChk);
    //
    //     $(this).prop("checked") ? onChecked() : noChecked();
    //
    //     if(questionTotal != questionChk){
    //         $("#allSelect").prop("checked", false);
    //     } else {
    //         $("#allSelect").prop("checked", true);
    //     }
    //
    //     // 선택 된 체크박스가 없으면 삭제버튼 비활성화
    //     if(questionChk > 0){
    //         $(".Button-qBtn").addClass("now-button");
    //     } else {
    //         $(".Button-qBtn").removeClass("now-button");
    //     }
    //
    // });
    //
    // $("input[name=repotChk]").click(function() {
    //     let repotTotal = $(".repotChk").length;
    //     let repotChk = $("input[name=repotChk]:checked").length;
    //
    //     console.log("신고 토탈 체크 : " + repotTotal);
    //     console.log("신고 선택 체크 : " + repotChk);
    //
    //     $(this).prop("checked") ? onChecked() : noChecked();
    //
    //     if(repotTotal != repotChk){
    //         $("#allSelect-repot").prop("checked", false);
    //     } else {
    //         $("#allSelect-repot").prop("checked", true);
    //     }
    //
    //     if(repotChk > 0){
    //         $(".Button-rBtn").addClass("now-button");
    //     } else {
    //         $(".Button-rBtn").removeClass("now-button");
    //     }
    //
    // });
    //
    // function onChecked() {
    //     $(this).prop("checked");
    //     if($(this).is($("input[name=questionChk]"))){
    //         console.log("어떤 인풋?" +$("input[name=questionChk]"));
    //         $(".Button-qBtn").addClass("now-button");
    //     } else if($(this).is($("input[name=repotChk]"))){
    //         $(".Button-rBtn").addClass("now-button");
    //     }
    // }
    //
    // function noChecked() {
    //     !$(this).prop("checked")
    // }
});
