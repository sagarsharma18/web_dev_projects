var data = document.getElementById("data");
var userlist = document.getElementById("userlist");

//add user function
var counter = 0;
function adduser() {
  let inputdata = document.getElementById("data").value;
  //console.log(inputdata);

  var html =
    '<div class="row" id="data' +
    counter +
    '">' +
    '<div class="col-md-6 com-sm-12 col-xs-12">' +
    '<input type="text" class="form-contorl" value="' +
    inputdata +
    '" disabled style="border-radius: 0px" />' +
    "</div>" +
    "<br/>" +
    '<div class="col-md-2 com-sm-4 col-xs-4">' +
    '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit' +
    counter +
    '">Edit</button>' +
    "</div>" +
    '<div class="col-md-2 com-sm-4 col-xs-4">' +
    '<button type="button" class="btn btn-success" style="background-color: seagreen" onclick="update(this.id)" id="update' +
    counter +
    '"> Update </button>' +
    "</div>" +
    '<div class="col-md-2 com-sm-4 col-xs-4">' +
    '<button type="button" class="btn btn-danger" style="background-color: red" onclick="remove(this.id)" id="delete' +
    counter +
    '"> Delete </button>' +
    "</div>" +
    "</div>";
  document.getElementById("userlist").insertAdjacentHTML("beforeend", html);
  counter++;
}
function edit(editid) {
  //console.log(editid);
  var parent = document.getElementById(editid).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.removeAttribute("disabled");
  console.log(child);
}
function update(updateid) {
  //  console.log(updateid);
  var parent = document.getElementById(updateid).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.setAttribute("disabled", "disabled");
  console.log(child);
}
function remove(deleteid) {
  //console.log(deleteid);
  var parent = document.getElementById(deleteid).parentNode.parentNode;
  parent.remove();
  console.log(parent);
}
