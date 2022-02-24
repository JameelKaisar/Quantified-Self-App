function changeOptionsButton(to_total) {
    const button = document.getElementById("t_options_rem");

    if (to_total.value > 0) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}


function addOption() {
    const to_total = document.getElementById("to_total");
    const t_options = document.getElementById("t_options");
    const para = document.createElement("p");
    const label = document.createElement("label");
    const option = document.createElement("input");

    label.setAttribute("for", "t_option[" + parseInt(to_total.value) + "]");
    label.innerText = "Option " + (parseInt(to_total.value)+1) + ":";
    option.type = "text";
    option.id = "t_option[" + parseInt(to_total.value) + "]";
    option.name = "t_option[" + parseInt(to_total.value) + "]";
    option.maxLength = "64";
    option.required = true;
    para.appendChild(label);
    para.appendChild(option);

    to_total.value = parseInt(to_total.value) + 1;
    changeOptionsButton(to_total);
    t_options.appendChild(para);
}


function remOption() {
    const to_total = document.getElementById("to_total");
    const t_options = document.getElementById("t_options");

    to_total.value = parseInt(to_total.value) - 1;
    changeOptionsButton(to_total);
    t_options.removeChild(t_options.lastChild);
}


function remOptionExist(object) {
    const parent = object.parentElement;
    const grandparent = parent.parentElement;
    parent.remove();
    if (grandparent.children.length == 0) {
        grandparent.innerHTML = "All Existing Nodes Deleted";
    }
}
