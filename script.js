/* =========================================
   FARMER PROCUREMENT SYSTEM
   FRONTEND ONLY
   Dummy / Local Data
========================================= */


/* =========================================
   SAMPLE FARMER DATA
========================================= */

let farmer = {
    name: "Ramesh Kumar",
    mobile: "9876543210",
    email: "ramesh@example.com",
    village: "Bhimavaram",
    district: "West Godavari",
    state: "Andhra Pradesh",
    farmerId: "FARM-02345",
    password: "demo123"
};

function getStoredUsers() {
    try {
        return JSON.parse(localStorage.getItem("procurementUsers") || "[]");
    } catch (error) {
        return [];
    }
}

function saveStoredUsers(users) {
    localStorage.setItem("procurementUsers", JSON.stringify(users));
}

function loadCurrentUser() {
    try {
        const savedUser = JSON.parse(localStorage.getItem("procurementCurrentUser") || "null");

        if (savedUser && savedUser.name) {
            farmer = { ...farmer, ...savedUser };
        }
    } catch (error) {
        // ignore invalid saved data
    }
}

function applyLoggedInUser(userData) {
    farmer = { ...farmer, ...userData };
    localStorage.setItem("procurementCurrentUser", JSON.stringify(farmer));
}


/* =========================================
   SCREEN NAVIGATION
========================================= */

function showScreen(screenId) {

    // Hide all screens
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });


    // Show selected screen
    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // Update bottom navigation
    updateNavigation(screenId);
}


/* =========================================
   BOTTOM NAVIGATION
========================================= */

function updateNavigation(screenId) {

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    if (screenId === "home") {
        navItems[0].classList.add("active");
    }

    else if (
        screenId === "crop" ||
        screenId === "centres" ||
        screenId === "centreDetails" ||
        screenId === "slotBooking"
    ) {
        navItems[1].classList.add("active");
    }

    else if (screenId === "token" || screenId === "queue") {
        navItems[2].classList.add("active");
    }

    else if (
        screenId === "status" ||
        screenId === "payment"
    ) {
        navItems[3].classList.add("active");
    }

    else if (screenId === "profile") {
        navItems[4].classList.add("active");
    }
}


/* =========================================
   LOGIN
========================================= */

function login() {

    const username =
        document.getElementById("loginUser").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    if (username === "" || password === "") {

        showToast("Please enter mobile/email and password");

        return;
    }

    const storedUsers = getStoredUsers();
    const normalizedUsername = username.toLowerCase();

    const matchedUser = storedUsers.find(user => {
        const userMobile = (user.mobile || "").trim();
        const userEmail = (user.email || "").trim().toLowerCase();

        return (userMobile === username || userEmail === normalizedUsername) &&
            user.password === password;
    });

    if (matchedUser) {
        applyLoggedInUser(matchedUser);
        showToast("Login successful!");

        setTimeout(() => {
            updateFarmerUI();
            showScreen("home");
        }, 700);

        return;
    }

    const userExists = storedUsers.some(user =>
        (user.mobile || "").trim() === username ||
        ((user.email || "").trim().toLowerCase() === normalizedUsername)
    );

    if (userExists) {
        showToast("Incorrect password. Please try again.");
        return;
    }

    showToast("Please create your account first");
}

/* =========================================
   REGISTRATION
========================================= */

function registerFarmer() {

    const name =
        document.getElementById("regName").value;

    const mobile =
        document.getElementById("regMobile").value;

    const email =
        document.getElementById("regEmail").value;

    const password =
        document.getElementById("regPassword").value;

    const confirm =
        document.getElementById("regConfirm").value;

    const village =
        document.getElementById("regVillage").value;

    const district =
        document.getElementById("regDistrict").value;

    const state =
        document.getElementById("regState").value;

    const farmerId =
        document.getElementById("regFarmerId").value;


    if (
        name === "" ||
        mobile === "" ||
        email === "" ||
        password === "" ||
        confirm === "" ||
        village === "" ||
        district === "" ||
        state === ""
    ) {

        showToast("Please fill all required fields");

        return;
    }


    if (password !== confirm) {

        showToast("Passwords do not match");

        return;
    }


    const registeredUser = {
        name,
        mobile,
        email,
        password,
        village,
        district,
        state,
        farmerId: farmerId || "FARM-02345"
    };

    const storedUsers = getStoredUsers();
    const existingUserIndex = storedUsers.findIndex(user =>
        user.mobile === mobile || user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUserIndex >= 0) {
        storedUsers[existingUserIndex] = registeredUser;
    } else {
        storedUsers.push(registeredUser);
    }

    saveStoredUsers(storedUsers);
    applyLoggedInUser(registeredUser);

    showToast("Registration successful!");


    setTimeout(() => {

        updateFarmerUI();

        showScreen("home");

    }, 700);
}


/* =========================================
   UPDATE FARMER INFORMATION
========================================= */

function updateFarmerUI() {

    const homeName =
        document.getElementById("homeFarmerName");

    const tokenName =
        document.getElementById("tokenFarmer");

    const profileName =
        document.getElementById("profileName");

    const profileFarmerName =
        document.getElementById("profileFarmerName");

    const profileMobile =
        document.getElementById("profileMobile");

    const profileEmail =
        document.getElementById("profileEmail");


    if (homeName) {
        homeName.textContent = farmer.name;
    }

    if (tokenName) {
        tokenName.textContent = farmer.name;
    }

    if (profileName) {
        profileName.textContent = farmer.name;
    }

    if (profileFarmerName) {
        profileFarmerName.textContent = farmer.name;
    }

    if (profileMobile) {
        profileMobile.textContent = farmer.mobile;
    }

    if (profileEmail) {
        profileEmail.textContent = farmer.email;
    }
}


/* =========================================
   FORGOT PASSWORD
========================================= */

function forgotPassword() {

    const username =
        document.getElementById("loginUser").value.trim();

    if (username === "") {

        showToast("Please enter your mobile number or email first");

        return;
    }

    const storedUsers = getStoredUsers();
    const normalizedUsername = username.toLowerCase();

    const userIndex = storedUsers.findIndex(user => {
        const userMobile = (user.mobile || "").trim();
        const userEmail = (user.email || "").trim().toLowerCase();

        return userMobile === username || userEmail === normalizedUsername;
    });

    if (userIndex === -1) {

        showToast("Please create your account first");

        return;
    }

    const user = storedUsers[userIndex];
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const mobileNumber = user.mobile || "your registered mobile number";

    localStorage.setItem("procurementOtp", otp);
    localStorage.setItem("procurementOtpMobile", mobileNumber);

    alert(
        `OTP has been sent to ${mobileNumber}.\nYour demo OTP is: ${otp}`
    );

    const enteredOtp = prompt("Enter the 6-digit OTP sent to your mobile number");

    if (!enteredOtp || enteredOtp.trim() === "") {

        showToast("OTP verification cancelled");

        return;
    }

    if (enteredOtp.trim() !== otp) {

        showToast("Invalid OTP. Please try again");

        return;
    }

    const newPassword = prompt("Enter a new password");

    if (!newPassword || newPassword.trim() === "") {

        showToast("Password cannot be empty");

        return;
    }

    if (newPassword.trim().length < 4) {

        showToast("Password must be at least 4 characters");

        return;
    }

    const confirmPassword = prompt("Confirm your new password");

    if (newPassword !== confirmPassword) {

        showToast("Passwords do not match");

        return;
    }

    storedUsers[userIndex].password = newPassword;
    saveStoredUsers(storedUsers);

    localStorage.removeItem("procurementOtp");
    localStorage.removeItem("procurementOtpMobile");

    applyLoggedInUser(storedUsers[userIndex]);

    showToast("Password changed successfully");
}


/* =========================================
   SLOT SELECTION
========================================= */

function selectSlot(button) {

    const slots =
        document.querySelectorAll(".slot");

    slots.forEach(slot => {
        slot.classList.remove("selected");
    });


    button.classList.add("selected");

    showToast("Time slot selected");
}


/* =========================================
   CONFIRM BOOKING
========================================= */

function confirmBooking() {

    const bookingDate =
        document.getElementById("bookingDate").value;


    if (bookingDate === "") {

        showToast("Please select procurement date");

        return;
    }


    showToast("Booking confirmed!");


    setTimeout(() => {

        showScreen("token");

    }, 700);
}


/* =========================================
   CANCEL BOOKING
========================================= */

function cancelBooking() {

    const confirmation =
        confirm(
            "Are you sure you want to cancel this booking?"
        );


    if (confirmation) {

        showToast("Booking cancelled");

        setTimeout(() => {

            showScreen("home");

        }, 700);
    }
}


/* =========================================
   EDIT PROFILE
========================================= */

function editProfile() {

    showToast(
        "Edit profile will be connected later"
    );
}


/* =========================================
   HELP & SUPPORT
========================================= */

function helpSupport() {

    showToast(
        "Support: 98765 43210"
    );
}


/* =========================================
   LOGOUT
========================================= */

function logout() {

    const confirmation =
        confirm("Do you want to logout?");


    if (confirmation) {

        showToast("Logged out");

        setTimeout(() => {

            showScreen("login");

        }, 700);
    }
}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================================
   SET DEFAULT DATES
========================================= */

function setDefaultDates() {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(today.getMonth() + 1)
            .padStart(2, "0");


    const day =
        String(today.getDate())
            .padStart(2, "0");


    const dateString =
        `${year}-${month}-${day}`;


    const harvestDate =
        document.getElementById("harvestDate");

    const procurementDate =
        document.getElementById("procurementDate");

    const bookingDate =
        document.getElementById("bookingDate");


    if (harvestDate) {
        harvestDate.value = dateString;
    }

    if (procurementDate) {
        procurementDate.value = dateString;
    }

    if (bookingDate) {
        bookingDate.value = dateString;
    }
}


/* =========================================
   INITIALIZE APPLICATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCurrentUser();
        setDefaultDates();
        updateFarmerUI();

        const loginUser = document.getElementById("loginUser");
        const loginPassword = document.getElementById("loginPassword");

        if (loginUser && loginPassword) {
            loginUser.value = farmer.email;
            loginPassword.value = farmer.password;
        }

    }
);