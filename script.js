function postComment() {
    let name = document.getElementById("username").value;
    let comment = document.getElementById("usercomment").value;
    let section = document.getElementById("comment-section");

    if (name === "" || comment === "") {
        alert("Please fill both fields!");
        return;
    }

    let newComment = document.createElement("div");
    newComment.className = "comment";

    newComment.innerHTML = "<b>" + name + "</b><br>" + comment;

    section.appendChild(newComment);

    document.getElementById("username").value = "";
    document.getElementById("usercomment").value = "";
}
