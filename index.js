document.getElementById("run-btn").addEventListener("click", function() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    const jsCode = "<script>" + document.getElementById("js-code").value + "<\/script>";

    const outputFrame = document.getElementById("output-frame");
    const frameDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;

    frameDoc.open();
    frameDoc.write(htmlCode + cssCode + jsCode);
    frameDoc.close();
});

document.getElementById("fullscreen-btn").addEventListener("click", function() {
    const outputFrame = document.getElementById("output-frame");

    if (!outputFrame.classList.contains("fullscreen")) {
        outputFrame.classList.add("fullscreen");
    } else {
        outputFrame.classList.remove("fullscreen");
    }
});
