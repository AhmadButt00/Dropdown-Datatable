var cities = {
    1: "Sialkot",
    2 : "Lahore"
}
var citywiseSoftwareHouses = {
    Sialkot : {
        Kaarigar : {
            "Departments": {
                "Dev": {
                    1 : {
                        name: "Ahmad",
                        mobileNumber: "033333333",
                        city: "Sialkot",
                        salary: "10000"
                    },
                    2: {
                        name: "Ali",
                        mobileNumber: "044444444",
                        city: "Gujranwala",
                        salary: "20000"
                    },
                },
                "QA": {
                    1: {
                        name: "Asad",
                        mobileNumber: "055555555",
                        city: "Sialkot",
                        salary: "150000"
                    },
                    2: {
                        name: "Ammad",
                        mobileNumber: "066666666",
                        city: "Lahore",
                        salary: "150000"
                    },
                }
            }
        },
       "Experts" : {
            "Departments": {
                "Dev": {
                    1 : {
                        name: "Akmal",
                        mobileNumber: "11111111",
                        city: "Karachi",
                        salary: "150000"
                    },
                    2: {
                        name: "Illyas",
                        mobileNumber: "09999999",
                        city: "Gujranwala",
                        salary: "170000"
                    },
                },
                "QA": {
                    1: {
                        name: "Osama",
                        mobileNumber: "055555555",
                        city: "Ugoki",
                        salary: "180000"
                    },
                    2: {
                        name: "Muneeb",
                        mobileNumber: "0888888",
                        city: "Lahore",
                        salary: "16000"
                    },
                }
            }
        },
    },
    Lahore: {
        "Systems" : {
            "Departments": {
                "Dev": {
                    1 : {
                        name: "Ahad",
                        mobileNumber: "033333333",
                        city: "Lahore",
                        salary: "10000"
                    },
                    2: {
                        name: "Shams",
                        mobileNumber: "044444444",
                        city: "Sahiwal",
                        salary: "20000"
                    },
                },
                "QA": {
                    1: {
                        name: "Adnan",
                        mobileNumber: "066666666",
                        city: "Sialkot",
                        salary: "150000"
                    },
                    2: {
                        name: "Aslam",
                        mobileNumber: "02222222",
                        city: "Gujranwala",
                        salary: "150000"
                    },
                }
            }
        },
        "ArbiSoft" : {
            "Departments": {
                "Dev": {
                    1 : {
                        name: "Ahmad",
                        mobileNumber: "033333333",
                        city: "Sialkot",
                        salary: "10000"
                    },
                    2: {
                        name: "Ali",
                        mobileNumber: "044444444",
                        city: "Gujranwala",
                        salary: "20000"
                    },
                },
                "QA": {
                    1: {
                        name: "Asad",
                        mobileNumber: "055555555",
                        city: "Sialkot",
                        salary: "150000"
                    },
                    2: {
                        name: "Ammad",
                        mobileNumber: "066666666",
                        city: "Lahore",
                        salary: "150000"
                    },
                }
            }
        },
    }
}
const keyify = (obj, prefix = '') => 
  Object.keys(obj).reduce((res, el) => {
    if( Array.isArray(obj[el]) ) {
      return res;
    } else if( typeof obj[el] === 'object' && obj[el] !== null ) {
      return [...res, ...keyify(obj[el], prefix + el + '.')];
    } else {
      return [...res, prefix + el];
    }
  }, []);
  function getResults(obj){
    var employeeCityDiv = document.createElement('div');
    employeeCityDiv.id = "employeeCityDiv";
    employeeCityDiv.style.display = "flex";
    employeeCityDiv.style.marginLeft = "450px";
    employeeCityDiv.style.position = "absolute";
    var output = keyify(obj);
    var results = [];
    var employeeName = [];
    var mobileNumber = [];
    var city = [];
    var salary =[];
    for(i=0; i<output.length;i++){
      //   console.log(output[i])
        var keyArr = (output[i])
      var res = getRawString(keyArr);
      var raw = getDescendantProp(obj, res);
      results.push(raw)
    }
    for (i=0; i<results.length; i=i+4)
    {   
        employeeName.push(results[i])
    }
    for (i=1; i<results.length; i=i+4)
    {   
        mobileNumber.push(results[i])
    }
    for (i=2; i<results.length; i=i+4)
    {   
        city.push(results[i])
    }
    for (i=3; i<results.length; i=i+4)
    {   
        salary.push(results[i])
    }
    
    // employeeCityDiv.style.marginLeft = "400px";

    // employeeCityDiv.style.marginRight = "30px";
    // employeeCityDiv.style.height = "200px";
    // employeeCityDiv.style.alignItems = "center";
    // employeeCityDiv.style.top = "0px";
    // employeeCityDiv.style.zIndex = "100";
    var table = document.createElement('table');
    table.id = "employeeCityTable"
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");
    table.classList.add("table-hover");
    table.style.height = "50px";
    table.style.width = "60%";
    // table.style.width = "30px";
    // table.style.marginTop = "200px";
    // table.style.marginBottom = "5px";
    // table.style.marginRight = "auto";
    // table.style.marginLeft = "auto";
    var tableBody = document.createElement('tbody');
    var tableHead = document.createElement('thead');
    tableHead.classList.add("table-info");
    var headRow = document.createElement('tr');
    var nameHead = document.createElement('th');
    nameHead.innerHTML = "<b>Name</b>"; 
    var phoneHead = document.createElement('th');
    phoneHead.innerHTML = "<b>Phone</b>";
    var cityHead = document.createElement('th');
    cityHead.innerHTML = "<b>City</b>";
    var salaryHead = document.createElement('th');
    salaryHead.innerHTML = "<b>Salary</b>";
    headRow.appendChild(nameHead);
    headRow.appendChild(phoneHead);
    headRow.appendChild(cityHead);
    headRow.appendChild(salaryHead);
    tableHead.appendChild(headRow);
    tableBody.appendChild(tableHead)
    table.appendChild(tableBody);
    for(i=0;i<employeeName.length;i++){
        var row1 = document.createElement('tr');
        var name1 = document.createElement('td');
        name1.innerHTML = employeeName[i];
        var phone1 = document.createElement('td');
        phone1.innerHTML = mobileNumber[i];
        var city1 = document.createElement('td');
        city1.innerHTML = city[i];
        var salary1 = document.createElement('td');
        salary1.innerHTML = salary[i];
        row1.appendChild(name1)
        row1.appendChild(phone1);
        row1.appendChild(city1);
        row1.appendChild(salary1);
        tableBody.appendChild(row1);
        table.appendChild(tableBody)
    }
    employeeCityDiv.appendChild(table);
    document.body.appendChild(employeeCityDiv);
    $('#employeeCityTable').DataTable()
    .rows().invalidate('data')
    .draw(false);
  }
var div = document.getElementById('container');

div.style.width = "400px";
function renderCityData(obj){
    var citiesObj = obj;
    var citiesArr = Object.values(citiesObj);
    var citiesOption = document.getElementById("cities");
    citiesArr.forEach(element => {
        var option = document.createElement("option");
        option.text = element;
        citiesOption.add(option, element);
    });
    createDropTable(citiesArr,"cityTable");
    getResults(citywiseSoftwareHouses);
}
renderCityData(cities);
function createDropTable(arr,id){
    var cities = arr;
    console.log(cities)
    var table = document.createElement('table');
    table.id = id;
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");
    table.style.width = "400px";
    table.style.marginTop = "10px";
    table.style.marginBottom = "5px";
    table.style.marginRight = "auto";
    table.style.marginLeft = "auto";
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr')
    var nameHead = document.createElement('th');
    nameHead.innerHTML = "<b>Name</b>";
    tableHead.classList.add("thead-light");
    headRow.appendChild(nameHead);
    tableHead.appendChild(headRow)
    table.appendChild(tableHead);
    cities.forEach(element => {
        var cityRow = document.createElement('tr')
        var cityName = document.createElement('td');
        cityName.innerHTML = element;
        cityRow.appendChild(cityName);
        table.appendChild(cityRow)
    });
    div.appendChild(table);
    document.body.appendChild(div);    
    // document.body.appendChild(table);
}

function getRawString(str){
    let res = str.replace(/"/g, '');
    return res;
}

function getDescendantProp(obj, desc) {
    var arr = desc.split(".");
    while(arr.length && (obj = obj[arr.shift()]));
    return obj;
}
function displayCityDataTable(){
    var selectedCity = document.getElementById('cities').value;
    var query = selectedCity;
    var res = getRawString(query);
    var raw = getDescendantProp(citywiseSoftwareHouses, res);
    console.log(raw)
    var element = document.getElementById('employeeCityDiv');
    if (typeof(element) == 'undefined' || element == null)
        {
            getResults(raw);
        }
        else {
            var element = document.getElementById('employeeCityDiv');
            element.parentNode.removeChild(element);
            getResults(raw);
        }
}
function renderSoftwareHouses(){
    var element =  document.getElementById('softwareHouses');
    if (typeof(element) == 'undefined' || element == null)
        {
            displaySoftwareHouse();
            // var cityEmpTable = document.getElementById('employeeCityDiv');
            // cityEmpTable.parentNode.removeChild(cityEmpTable);
            
        }
        else {
            var element = document.getElementById('softwareHouses');
            element.parentNode.removeChild(element);
            displaySoftwareHouse();
        }
        // displayCityDataTable();
    
}

function displaySoftwareHouse(){
    var selectedCity = document.getElementById("cities").value;
    var softwareHouses = Object.keys(citywiseSoftwareHouses[selectedCity]);
    var res = getRawString(selectedCity);
    console.log(res);
    var raw = getDescendantProp(citywiseSoftwareHouses, res);
    console.log(raw)
    var myParent = div;
    var selectList = document.createElement("select");
    selectList.id = "softwareHouses";
    myParent.appendChild(selectList);
    selectList.setAttribute('onchange','getSoftwareHouse();');
    var option = document.createElement("option");
    option.text = "Select Software House";
    option.setAttribute("disabled","true");
    option.setAttribute("selected", "true");
    option.setAttribute("hidden","true");
    selectList.classList.add("form-control");
    selectList.appendChild(option);
    for (var i = 0; i < softwareHouses.length; i++) {
        var option = document.createElement("option");
        option.value = softwareHouses[i];
        option.text = softwareHouses[i];
        selectList.appendChild(option);
        } 
    displayCityDataTable();
    var element =  document.getElementById('housesTable');
    var employeeDiv = document.getElementById('employeeDiv');
    if (typeof(element) == 'undefined' || element == null)
        {
            createDropTable(softwareHouses,"housesTable");
        }
        else {
            var element = document.getElementById('housesTable');
            element.parentNode.removeChild(element);
            createDropTable(softwareHouses,"housesTable");
            employeeDiv.parentNode.removeChild(employeeDiv);
            var departments = document.getElementById('departments');
            var departmentTable = document.getElementById('depTable');
            departments.parentNode.removeChild(departments);
            departmentTable.parentNode.removeChild(departmentTable);
        }
        
}
function displayHouseDataTable(){
    var selectedCity = document.getElementById('cities').value;
    var selectedHouse = document.getElementById('softwareHouses').value;
    var query = selectedCity+"."+selectedHouse;
    var res = getRawString(query);
    var raw = getDescendantProp(citywiseSoftwareHouses, res);
    console.log(res)
    var element = document.getElementById('employeeCityDiv');
    if (typeof(element) == 'undefined' || element == null)
        {
            getResults(raw);
        }
        else {
            var element = document.getElementById('employeeCityDiv');
            element.parentNode.removeChild(element);
            getResults(raw);
        }
}
function getSoftwareHouse(){
    var selectedSoftwareHouse = document.getElementById('softwareHouses').value;
    var selectedCity = document.getElementById('cities').value;
    console.log(selectedCity)
    console.log(selectedSoftwareHouse);
    var query = selectedCity+"."+selectedSoftwareHouse+".Departments";
    var res = getRawString(query);
    var raw = getDescendantProp(citywiseSoftwareHouses, res);
    var departments = Object.keys(raw)
    var element =  document.getElementById('departments');
    displayHouseDataTable();
    if (typeof(element) == 'undefined' || element == null)
        {
            displayDepartments(departments);
            
        }
        else {
            var element =  document.getElementById('employeeTable');
            if (typeof(element) == 'undefined' || element == null)
                {
                    
                }
                else {
                    var element = document.getElementById('employeeTable');
                    element.parentNode.removeChild(element);
                    
                }
            var element = document.getElementById('departments');
            element.parentNode.removeChild(element);
            displayDepartments(departments);
        }
        
    var element =  document.getElementById('depTable');
    var employeeDiv = document.getElementById('employeeDiv');
    if (typeof(element) == 'undefined' || element == null)
        {
            createDropTable(departments,"depTable");
        }
        else {
            var element = document.getElementById('depTable');
            element.parentNode.removeChild(element);
            employeeDiv.parentNode.removeChild(employeeDiv);
            createDropTable(departments,"depTable");
        }
        
}
function displayDepartments(depArr){
    var myParent = div;
    var selectList = document.createElement("select");
    selectList.id = "departments";
    myParent.appendChild(selectList);
    var option = document.createElement("option");
    option.text = "Select Departments";
    option.setAttribute("disabled","true");
    option.setAttribute("selected", "true");
    option.setAttribute("hidden","true");
    selectList.setAttribute('onchange','displayEmployees();');
    selectList.appendChild(option);
    for (var i = 0; i < depArr.length; i++) {
        var option = document.createElement("option");
        option.value = depArr[i];
        option.text = depArr[i];
        selectList.appendChild(option);
        } 
    selectList.classList.add("form-control");
}
function displayEmployees(){
    var selectedSoftwareHouse = document.getElementById('softwareHouses').value;
    var selectedCity = document.getElementById('cities').value;
    var selectedDepartment = document.getElementById('departments').value;
    var query = selectedCity+"."+selectedSoftwareHouse+".Departments."+selectedDepartment;
    var res = getRawString(query);
    var raw = getDescendantProp(citywiseSoftwareHouses, res);
    console.log(raw);
    var obj = Object.entries(raw)
    for(i=0;i<obj.length;i++){
        var Employee = obj[i][1]
    }
    var element =  document.getElementById('employeeDiv');
    if (typeof(element) == 'undefined' || element == null)
        {
            createTable(obj);
            createDataTable();
        }
        else {
            var element = document.getElementById('employeeDiv');
            element.parentNode.removeChild(element);
            createTable(obj);
            createDataTable();
        }
       
}
function createDataTable(){
    $('#employeeTable').DataTable()
    .rows().invalidate('data')
    .draw(false);
   
}

function createTable(emp){
    var element =  document.getElementById('employeeCityDiv');
    if (typeof(element) == 'undefined' || element == null)
        {
        }
        else {
            var element = document.getElementById('employeeCityDiv');
            element.parentNode.removeChild(element);
        }
    var employeeDiv = document.createElement('div');
    employeeDiv.id = "employeeDiv";
    employeeDiv.style.display = "flex";
    employeeDiv.style.marginLeft = "450px";
    employeeDiv.style.position = "absolute";
    // employeeDiv.style.marginLeft = "400px";
    // employeeDiv.style.marginRight = "0px";
    // employeeDiv.style.height = "200px";
    var employeeData = emp;
    console.log(employeeData)
    var table = document.createElement('table');
    table.id = "employeeTable"
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");
    // table.style.width = "30px";
    // table.style.marginTop = "20px";
    // table.style.marginBottom = "5px";
    // table.style.marginRight = "auto";
    // table.style.marginLeft = "auto";
    var tableBody = document.createElement('tbody');
    var tableHead = document.createElement('thead');
    tableHead.classList.add("table-info");
    var headRow = document.createElement('tr');
    var nameHead = document.createElement('th');
    nameHead.innerHTML = "<b>Name</b>"; 
    var phoneHead = document.createElement('th');
    phoneHead.innerHTML = "<b>Phone</b>";
    var cityHead = document.createElement('th');
    cityHead.innerHTML = "<b>City</b>";
    var salaryHead = document.createElement('th');
    salaryHead.innerHTML = "<b>Salary</b>";
    headRow.appendChild(nameHead);
    headRow.appendChild(phoneHead);
    headRow.appendChild(cityHead);
    headRow.appendChild(salaryHead);
    tableHead.appendChild(headRow);
    tableBody.appendChild(tableHead)
    table.appendChild(tableBody);
    for(i=0;i<employeeData.length;i++){
        var Employee = employeeData[i][1]
        console.log(Employee.name,Employee.mobileNumber,Employee.city,Employee.salary);
        var row1 = document.createElement('tr');
        var name1 = document.createElement('td');
        name1.innerHTML = Employee.name;
        var phone1 = document.createElement('td');
        phone1.innerHTML = Employee.mobileNumber;
        var city1 = document.createElement('td');
        city1.innerHTML = Employee.city;
        var salary1 = document.createElement('td');
        salary1.innerHTML = Employee.salary;
        row1.appendChild(name1)
        row1.appendChild(phone1);
        row1.appendChild(city1);
        row1.appendChild(salary1);
        tableBody.appendChild(row1);
        table.appendChild(tableBody)
    }
    employeeDiv.appendChild(table);
    document.body.appendChild(employeeDiv);
}