function main() {
    let j = $(".css-901oao.r-1awozwy.r-13gxpu9.r-6koalj.r-18u37iz.r-16y2uox.r-1tl8opc.r-n6v787.r-b88u0q.r-1777fci.r-eljoum.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0 > span.css-901oao.css-16my406.css-bfa6kz.r-1tl8opc.r-ad9z0x.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1tl8opc.r-ad9z0x.r-bcqeeo.r-qvutc0");

    if (j.text() == "すべてのアカウントが返信できます") {
        if (j.attr("load") != "1") {
            j.css("background", "#FF0000bb");
            j.css("color", "black");
            j.css("font-size", "17px");
            j.attr("load", "1");
            console.log("a");
        }
    } else {
        if (j.attr("load") != "2") {
            j.css("background", "");
            j.css("color", "");
            j.css("font-size", "");
            j.attr("load", "2");
        }
    }
    setTimeout(main, 200);
}
main();