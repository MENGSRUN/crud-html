//method to save data into localstorage
function save() {
  //get data from localstorage and store to contaclist array
  //we must to use JSON.parse, because data as string, we need convert to array
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  //get last array to get last id
  //and store it into variable id
  var id;
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {
    //edit contactlist array based on value
    contactList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        (value.name = document.getElementById("name").value),
          (value.age = document.getElementById("age").value),
          (value.address = document.getElementById("address").value),
          (value.phone = document.getElementById("phone").value);
      }
    });

    //remove hidden input
    document.getElementById("id").value = "";
  } else {
    //save
    //get data from form
    var item = {
      id: id + 1,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
    };

    //add item data to array contactlist
    contactList.push(item);
  }

  // save array into localstorage
  localStorage.setItem("listItem", JSON.stringify(contactList));

  //update table list
  allData();

  //remove form data
  document.getElementById("form").reset();
}

//method to save data into localstorage
function save() {
  //get data from localstorage and store to contaclist array
  //we must to use JSON.parse, because data as string, we need convert to array
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  //get last array to get last id
  //and store it into variable id
  var id;
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {
    //edit contactlist array based on value
    contactList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        (value.name = document.getElementById("name").value),
          (value.age = document.getElementById("age").value),
          (value.address = document.getElementById("address").value),
          (value.phone = document.getElementById("phone").value);
      }
    });

    //remove hidden input
    document.getElementById("id").value = "";
  } else {
    //save
    //get data from form
    var item = {
      id: id + 1,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
    };

    //add item data to array contactlist
    contactList.push(item);
  }

  // save array into localstorage
  localStorage.setItem("listItem", JSON.stringify(contactList));

  //update table list
  allData();

  //remove form data
  document.getElementById("form").reset();
}

function removeData(id) {
  //get data from localstorage and store to contaclist array
  //we must to use JSON.parse, because data as string, we need convert to array
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList = contactList.filter(function (value) {
    return value.id != id;
  });

  // save array into localstorage
  localStorage.setItem("listItem", JSON.stringify(contactList));

  //get data again
  allData();
}

//method to get detail personal data based on id
function find(id) {
  //get data from localstorage and store to contaclist array
  //we must to use JSON.parse, because data as string, we need convert to array
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById("id").value = value.id;
      document.getElementById("name").value = value.name;
      document.getElementById("age").value = value.age;
      document.getElementById("address").value = value.address;
      document.getElementById("phone").value = value.phone;
    }
  });
}

//method to get all data
function allData() {
  table.innerHTML = ``;
  //get data from localstorage and store to contaclist array
  //we must to use JSON.parse, because data as string, we need convert to array
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  //looping data and show data in table
  contactList.forEach(function (value, i) {
    var table = document.getElementById("table");

    table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.age}</td>
                    <td>${value.address}</td>
                    <td>${value.phone}</td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${
                          value.id
                        })">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData(${
                          value.id
                        })">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`;
  });
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("datatable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
