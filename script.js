const userProfile = {
    name: "Kaisar",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Workout", "Reading", "Gaming"]
};

let currentYear = 2026;
let age = currentYear - userProfile.birthYear;
let ageInMonths = age * 12;
let totalHobbies = userProfile.hobbies.length;

console.log("--- Initial Profile ---");
console.log("Name: " + userProfile.name);
console.log("Current Age: " + age);
console.log("Age in Months: " + ageInMonths);
console.log("Total Hobbies: " + totalHobbies);

let usernameInput = document.getElementById("usernameInput");
let birthYearInput = document.getElementById("birthYearInput");
let profileForm = document.getElementById("profileForm");

let displayName = document.getElementById("displayName");
let displayBirthYear = document.getElementById("displayBirthYear");
let displayAge = document.getElementById("displayAge");
let displayAgeMonths = document.getElementById("displayAgeMonths");
let displayIsDev = document.getElementById("displayIsDev");

let itemList = document.getElementById("itemList");
let itemInput = document.getElementById("itemInput");
let addItemBtn = document.getElementById("addItemBtn");
let removeItemBtn = document.getElementById("removeItemBtn");

function updatePageInfo() {
    let calculatedAge = 2026 - userProfile.birthYear;
    
    displayName.innerHTML = userProfile.name;
    displayBirthYear.innerHTML = userProfile.birthYear;
    displayAge.innerHTML = calculatedAge;
    displayAgeMonths.innerHTML = calculatedAge * 12;
    
    if (userProfile.isDeveloper === true) {
        displayIsDev.innerHTML = "Yes";
    } else {
        displayIsDev.innerHTML = "No";
    }
}

function showHobbies() {
    itemList.innerHTML = "";
    for (let i = 0; i < userProfile.hobbies.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = userProfile.hobbies[i];
        itemList.appendChild(li);
    }
}

updatePageInfo();
showHobbies();

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let newName = usernameInput.value;
    let newBirthYear = Number(birthYearInput.value);

    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;

    updatePageInfo();
    console.log("--- Updated Profile ---");
    console.log(userProfile);

    usernameInput.value = "";
    birthYearInput.value = "";
});

addItemBtn.addEventListener("click", function() {
    let text = itemInput.value;

    if (text !== "") {
        let newLi = document.createElement("li");
        newLi.innerHTML = text;
        itemList.appendChild(newLi);

        userProfile.hobbies.push(text);
        itemInput.value = "";
    } else {
        alert("Please write something first!");
    }
});

removeItemBtn.addEventListener("click", function() {
    let lastElement = itemList.lastElementChild;

    if (lastElement) {
        itemList.removeChild(lastElement);
        userProfile.hobbies.pop();
    } else {
        alert("List is already empty!");
    }
});