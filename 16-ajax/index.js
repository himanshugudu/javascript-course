var tableElem = document.getElementById('employee-table');
var nameElem = document.getElementById('name');
var designationElem = document.getElementById('designation');
var genderElems = document.querySelectorAll('input[name="gender"]');
var idElem = document.getElementById('employee-id');
var createBtnElem = document.getElementById('create-btn');
var updateBtnElem = document.getElementById('update-btn');
var cancelBtnElem = document.getElementById('cancel-btn');
var employees = [];

(function() {
    getEmployees();
    updateButtonDisplay(true, false, false);
})();

function populateTable(employees) {
    var tbodyElem = tableElem.getElementsByTagName('tbody')[1];
    var tbodyContent = '';
    employees.forEach(function (item, index) {
        var trElem = 
        '<tr>' +
        '<td>' +
        '<span class="employee-name" rel="' + item._id + '">' + item.name + '</span></td><td>' + item.designation + '</td><td>' + item.gender + '</td><td><i class="glyphicon glyphicon-trash" rel="' + item._id + '"></i></td></tr>';
        tbodyContent += trElem;
        // rel is a custom attribute here to get the reference to id of the employee
    });
    tbodyElem.innerHTML = tbodyContent;
    addEvents();
}

function addEvents() {
    // add event listeners
    var allIconElems = document.querySelectorAll('#employee-table tbody tr td i');
    allIconElems
        .forEach(function (item, index) {
            item.addEventListener('click', onDelete);
        });

    var allNameElems = document.querySelectorAll('#employee-table tbody tr td .employee-name');
    allNameElems
        .forEach(function (item, index) {
            item.addEventListener('click', onNameClick);
        });

    createBtnElem.addEventListener('click', createEmployee);
    updateBtnElem.addEventListener('click', updateEmployee);
    cancelBtnElem.addEventListener('click', cancel);
}

function onDelete(event) {
    var id = this.getAttribute('rel');
    deleteEmployee(id);
}

function onNameClick(event) {
    var id = this.getAttribute('rel');
    var employeeFromId = null;
    employees.forEach(function(item) {
        if (item._id == id) {
            employeeFromId = item;
        }
    });
    fillForm(employeeFromId);
    updateButtonDisplay(false, true, true);
}

function fillForm(employee) {
    nameElem.value = employee.name;
    designationElem.value = employee.designation;
    if (employee.gender !== 'male' && employee.gender !== 'female') {
        genderElems[0].checked = false;
        genderElems[1].checked = false;
    } else {
        if (employee.gender === 'male') {
            genderElems[0].checked = true;
        } else if(employee.gender === 'female') {
            genderElems[1].checked = true;
        }
    }
    idElem.value = employee._id;
}

function updateButtonDisplay(showCreate, showUpdate, showCancel) {
    showCreate ? createBtnElem.style.display = 'block' : createBtnElem.style.display = 'none';
    showUpdate ? updateBtnElem.style.display = 'inline-block' : updateBtnElem.style.display = 'none';
    showCancel ? cancelBtnElem.style.display = 'inline-block' : cancelBtnElem.style.display = 'none';
}

function cancel() {
    fillForm({
        name: '',
        designation: '',
        gender: ''
    });
    updateButtonDisplay(true, false, false);
}

function getEmployees() {
    get()
    .then(function(data) {
        var employeeList = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var each = data[key];
                each['_id'] = key;
                employeeList.push(each);
            }
        }
        employees = employeeList;
        populateTable(employees);
    })
    .catch(function(error) {
        console.log('error in fetch', error);
    });
}

function getEmployeeObjectFromForm(isCreate) {
    var gender = 'male';
    genderElems.forEach(function(item) {
        item.checked ? gender = item.value : null;
    });
    var employee = {
        name: nameElem.value,
        designation: designationElem.value,
        gender: gender
    };
    return employee;
}

function createEmployee() {
    var employeeToAdd = getEmployeeObjectFromForm(true);
    employees.push(employeeToAdd); // here we will make the actual service call
    add(employeeToAdd)
    .then(function(data) {
        cancel();
        getEmployees();
    });
}

function updateEmployee() {
    var employeeToUpdate = getEmployeeObjectFromForm(false);
    console.log(employeeToUpdate);
    update(idElem.value, employeeToUpdate)
    .then(function(data) {
        cancel();
        getEmployees();
    })
    .catch();
}

function deleteEmployee(id) {
    remove(id)
    .then(function(data) {
        cancel();
        getEmployees();
    })
    .catch()   
}
