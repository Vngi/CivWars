document.addEventListener("DOMContentLoaded", function() {
    const notepadTextArea = document.getElementById("notepadTextArea");
    const clearButton = document.getElementById("clearButton");
    const undoButton = document.getElementById("undoButton");
    const resetSizeButton = document.getElementById("resetSizeButton");
    const initialNotepadSize = { width: "100%", height: "100px" };
    let previousNotepadContent = "";

    clearButton.addEventListener("click", function() {
        previousNotepadContent = notepadTextArea.value;
        notepadTextArea.value = "";
    });

    undoButton.addEventListener("click", function() {
        notepadTextArea.value = previousNotepadContent;
    });

    resetSizeButton.addEventListener("click", function() {
        notepadTextArea.style.width = initialNotepadSize.width;
        notepadTextArea.style.height = initialNotepadSize.height;
    });
});
