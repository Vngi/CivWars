// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const notepadTextArea = document.getElementById("notepadTextArea");
    const clearButton = document.getElementById("clearButton");
    const undoButton = document.getElementById("undoButton");
    const resetSizeButton = document.getElementById("resetSizeButton");
    const initialNotepadHeight = "100px";
	const initialNotepadWidth = "100px";
    let previousNotepadContent = "";

    clearButton.addEventListener("click", function() {
        previousNotepadContent = notepadTextArea.value;
        notepadTextArea.value = "";
    });

    undoButton.addEventListener("click", function() {
        notepadTextArea.value = previousNotepadContent;
    });

    resetSizeButton.addEventListener("click", function() {
        notepadTextArea.style.height = initialNotepadHeight;
		notepadTextArea.style.height = initialNotepadWidth;
    });
});
