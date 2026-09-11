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
    password: "demo123",
    mandal: "Bhimavaram",
    status: "approved",
    assignedCentre: null,
    procurementSlot: null,
    tokenNumber: "A023"
};

const adminUser = {
    email: "admin@mandal.gov",
    password: "admin123",
    name: "Mandal Admin"
};

const staffUser = {
    email: "staff@centre.gov",
    password: "staff123",
    name: "Procurement Staff"
};

const villageCentreMap = [
    { village: "Bhimavaram", centre: "Central Procurement Centre", distance: "2.5 km", status: "Open", slots: "12 available" },
    { village: "Kovvuru", centre: "Rural Collection Centre", distance: "4.8 km", status: "Open", slots: "7 available" },
    { village: "Ravulapalem", centre: "Village Aggregation Point", distance: "7.2 km", status: "Moderate", slots: "5 available" },
    { village: "Undi", centre: "Undi Procurement Hub", distance: "3.1 km", status: "Open", slots: "9 available" },
    { village: "Nallajerla", centre: "Mandal Storage Point", distance: "5.5 km", status: "Open", slots: "8 available" },
    { village: "Narasapuram", centre: "Narasapuram Centre", distance: "2.9 km", status: "Open", slots: "10 available" },
    { village: "Penugonda", centre: "South Mandal Point", distance: "6.0 km", status: "Busy", slots: "3 available" }
];

const procurementCentres = {
    "Bhimavaram": [
        { id: "BC-01", name: "Central Procurement Centre", village: "Bhimavaram", distance: "2.5 km", type: "Primary", address: "Market Yard Road, Bhimavaram", hours: "8:00 AM - 5:00 PM", phone: "08816 222 410", capacity: "120 farmers/day" },
        { id: "BC-02", name: "Rural Collection Centre", village: "Kovvuru", distance: "4.8 km", type: "Secondary", address: "Kovvuru Main Road", hours: "8:30 AM - 4:30 PM", phone: "08813 245 118", capacity: "80 farmers/day" },
        { id: "BC-03", name: "Village Aggregation Point", village: "Ravulapalem", distance: "7.2 km", type: "Secondary", address: "Ravulapalem Rythu Bazaar", hours: "8:00 AM - 4:00 PM", phone: "08814 276 205", capacity: "70 farmers/day" }
    ],
    "Undi": [
        { id: "UC-01", name: "Undi Procurement Hub", village: "Undi", distance: "3.1 km", type: "Primary", address: "Undi Agricultural Office Road", hours: "8:00 AM - 5:00 PM", phone: "08819 241 390", capacity: "100 farmers/day" },
        { id: "UC-02", name: "Mandal Storage Point", village: "Nallajerla", distance: "5.5 km", type: "Secondary", address: "Nallajerla Storage Lane", hours: "8:30 AM - 4:30 PM", phone: "08818 238 176", capacity: "75 farmers/day" }
    ],
    "Narasapuram": [
        { id: "NC-01", name: "Narasapuram Centre", village: "Narasapuram", distance: "2.9 km", type: "Primary", address: "Narasapuram Market Road", hours: "8:00 AM - 5:00 PM", phone: "08814 221 504", capacity: "110 farmers/day" },
        { id: "NC-02", name: "South Mandal Point", village: "Penugonda", distance: "6.0 km", type: "Secondary", address: "Penugonda Village Road", hours: "8:30 AM - 4:30 PM", phone: "08819 254 188", capacity: "65 farmers/day" }
    ]
};

const translations = {
    en: {
        appTitle: "Farmer Procurement System",
        tagline: "Book. Track. Procure.",
        welcomeText: "Easy slot booking and faster procurement for farmers.",
        getStarted: "Get Started",
        farmerLogin: "Farmer Login",
        welcomeBack: "Welcome back, Farmer!",
        demoLogin: "Demo login: ramesh@example.com / demo123",
        mobileOrEmail: "Mobile Number / Email",
        password: "Password",
        login: "Login",
        forgotPassword: "Forgot Password?",
        or: "OR",
        createAccount: "Create New Account",
        registerTitle: "Farmer Registration",
        registerSubtitle: "Create your farmer account",
        farmerName: "Farmer Name",
        mobileNumber: "Mobile Number",
        email: "Email",
        confirmPassword: "Confirm Password",
        village: "Village",
        district: "District",
        state: "State",
        farmerId: "Farmer ID",
        optionalText: "(Optional)",
        register: "Register",
        mobileEmailPlaceholder: "Enter mobile or email",
        passwordPlaceholder: "Enter password",
        namePlaceholder: "Enter your name",
        mobilePlaceholder: "Enter mobile number",
        emailPlaceholder: "Enter email",
        createPasswordPlaceholder: "Create password",
        confirmPasswordPlaceholder: "Confirm password",
        villagePlaceholder: "Enter village",
        districtPlaceholder: "Enter district",
        statePlaceholder: "Enter state",
        farmerIdPlaceholder: "Enter Farmer ID",
        welcomeBackHome: "Welcome back 👋",
        todaysProcurement: "Today's Procurement",
        confirmed: "Confirmed",
        quickActions: "Quick Actions",
        bookSlot: "Book Slot",
        myToken: "My Token",
        trackQueue: "Track Queue",
        procurement: "Procurement",
        payment: "Payment",
        notifications: "Notifications",
        procurementCentre: "Procurement Centre",
        navHome: "Home",
        navBook: "Book",
        navToken: "Token",
        navStatus: "Status",
        navProfile: "Profile",
        cropDetailsTitle: "Crop Details",
        cropDetailsSubtitle: "Select your crop information",
        cropNameLabel: "Crop Name",
        cropTypeLabel: "Crop Type",
        quantityLabel: "Quantity",
        quantityPlaceholder: "Quantity in kg",
        harvestDateLabel: "Harvest Date",
        qualityLabel: "Quality / Grade",
        expectedProcurementDate: "Expected Procurement Date",
        continueText: "Continue",
        procurementCentresTitle: "Procurement Centres",
        chooseCentreText: "Choose a nearby centre",
        viewDetails: "View Details",
        centreDetailsTitle: "Centre Details",
        openToday: "Open Today",
        selectCentre: "Select Centre",
        bookYourSlot: "Book Your Slot",
        chooseConvenientTime: "Choose a convenient time",
        procurementDateLabel: "Procurement Date",
        availableTimeSlots: "Available Time Slots",
        cropLabel: "Crop",
        quantityLabelBooking: "Quantity",
        procurementCentreLabel: "Procurement Centre",
        confirmBooking: "Confirm Booking",
        digitalTokenTitle: "Digital Token",
        yourProcurementToken: "Your procurement token",
        yourTokenNumber: "Your Token Number",
        bookingConfirmed: "Booking Confirmed",
        trackMyQueue: "Track My Queue",
        cancelBooking: "Cancel Booking",
        trackMyQueueTitle: "Track My Queue",
        liveQueueSimulation: "Live queue simulation",
        centreServingFarmers: "Centre is serving farmers",
        currentlyServing: "Currently Serving",
        yourToken: "Your Token",
        farmersAhead: "Farmers Ahead",
        estimatedWaiting: "Estimated Waiting",
        queueInfoText: "You can arrive at the procurement centre when your token is approaching.",
        procurementStatusTitle: "Procurement Status",
        trackYourProcurement: "Track your procurement",
        inProgress: "In Progress",
        statusSlotBooked: "Slot Booked",
        statusSlotBookedText: "Your slot has been confirmed",
        statusFarmerArrived: "Farmer Arrived",
        statusFarmerArrivedText: "Arrival recorded",
        statusVerificationCompleted: "Verification Completed",
        statusVerificationCompletedText: "Farmer details verified",
        statusCropSubmitted: "Crop Submitted",
        statusCropSubmittedText: "Crop is being processed",
        statusQualityCheck: "Quality Check",
        pendingText: "Pending",
        statusProcurementCompleted: "Procurement Completed",
        statusPaymentProcessing: "Payment Processing",
        statusPaymentCompleted: "Payment Completed",
        paymentStatusTitle: "Payment Status",
        paymentStatusSubtitle: "Procurement payment details",
        procurementAmount: "Procurement Amount",
        paymentCompleted: "Payment Completed",
        cropLabelPayment: "Crop",
        quantityLabelPayment: "Quantity",
        procurementDatePayment: "Procurement Date",
        referenceNumber: "Reference Number",
        paymentSuccessText: "Your payment has been successfully processed.",
        notificationsTitle: "Notifications",
        importantUpdates: "Important updates",
        notificationSlotConfirmed: "Slot Booking Confirmed",
        notificationSlotConfirmedText: "Your procurement slot has been successfully booked.",
        notificationReminder: "Procurement Reminder",
        notificationReminderText: "Your procurement slot is tomorrow at 10:00 AM.",
        notificationQueueUpdate: "Queue Update",
        notificationQueueUpdateText: "Only 5 farmers are ahead of you.",
        notificationCentreSchedule: "Centre Schedule Update",
        notificationCentreScheduleText: "Procurement centre will close at 5:00 PM today.",
        notificationProcurementCompleted: "Procurement Completed",
        notificationProcurementCompletedText: "Your crop procurement has been completed.",
        notificationPaymentCompleted: "Payment Completed",
        notificationPaymentCompletedText: "₹12,500 has been credited for your procurement.",
        myProfileTitle: "My Profile",
        farmerAccountDetails: "Farmer account details",
        farmerRole: "Farmer",
        profileFarmerNameLabel: "Farmer Name",
        profileMobileLabel: "Mobile Number",
        profileEmailLabel: "Email",
        profileVillageLabel: "Village",
        profileDistrictLabel: "District",
        profileFarmerIdLabel: "Farmer ID",
        editProfile: "Edit Profile",
        myBookings: "My Bookings",
        helpSupport: "Help & Support",
        logout: "Logout"
    },
    te: {
        appTitle: "రైతు ప్రొక్యూర్మెంట్ సిస్టమ్",
        tagline: "బుక్ చేయండి. ట్రాక్ చేయండి. ప్రొక్యూర్ చేయండి.",
        welcomeText: "రైతుల కోసం సులభమైన స్లాట్ బుకింగ్ మరియు వేగవంతమైన ప్రొక్యూర్మెంట్.",
        getStarted: "ప్రారంభించండి",
        farmerLogin: "రైతు లాగిన్",
        welcomeBack: "మరలా స్వాగతం, రైతు!",
        demoLogin: "డెమో లాగిన్: ramesh@example.com / demo123",
        mobileOrEmail: "మొబైల్ నంబర్ / ఇమెయిల్",
        password: "పాస్వర్డ్",
        login: "లాగిన్",
        forgotPassword: "పాస్వర్డ్ మర్చిపోయారా?",
        or: "లేదా",
        createAccount: "కొత్త ఖాతాను సృష్టించండి",
        registerTitle: "రైతు నమోదు",
        registerSubtitle: "మీ రైతు ఖాతాను సృష్టించండి",
        farmerName: "రైతు పేరు",
        mobileNumber: "మొబైల్ నంబర్",
        email: "ఇమెయిల్",
        confirmPassword: "పాస్వర్డ్ నిర్ధారించండి",
        village: "గ్రామం",
        district: "జిల్లా",
        state: "రాష్ట్రం",
        farmerId: "రైతు ఐడి",
        optionalText: "(ఐచ్ఛికం)",
        register: "నమోదు",
        mobileEmailPlaceholder: "మొబైల్ లేదా ఇమెయిల్ నమోదు చేయండి",
        passwordPlaceholder: "పాస్వర్డ్ నమోదు చేయండి",
        namePlaceholder: "మీ పేరు నమోదు చేయండి",
        mobilePlaceholder: "మొబైల్ నంబర్ నమోదు చేయండి",
        emailPlaceholder: "ఇమెయిల్ నమోదు చేయండి",
        createPasswordPlaceholder: "పాస్వర్డ్ సృష్టించండి",
        confirmPasswordPlaceholder: "పాస్వర్డ్ నిర్ధారించండి",
        villagePlaceholder: "గ్రామం నమోదు చేయండి",
        districtPlaceholder: "జిల్లాను నమోదు చేయండి",
        statePlaceholder: "రాష్ట్రం నమోదు చేయండి",
        farmerIdPlaceholder: "రైతు ఐడి నమోదు చేయండి",
        welcomeBackHome: "స్వాగతం 👋",
        todaysProcurement: "ఈరోజు ప్రొక్యూర్మెంట్",
        confirmed: "నిర్ధారించబడింది",
        quickActions: "త్వరిత చర్యలు",
        bookSlot: "స్లాట్ బుక్ చేయండి",
        myToken: "నా టోకెన్",
        trackQueue: "క్యూ చూడండి",
        procurement: "ప్రొక్యూర్మెంట్",
        payment: "చెల్లింపు",
        notifications: "నోటిఫికేషన్లు",
        procurementCentre: "ప్రొక్యూర్మెంట్ సెంటర్",
        navHome: "హోమ్",
        navBook: "బుక్",
        navToken: "టోకెన్",
        navStatus: "స్థితి",
        navProfile: "ప్రొఫైల్",
        cropDetailsTitle: "పంట వివరాలు",
        cropDetailsSubtitle: "మీ పంట సమాచారం ఎంచుకోండి",
        cropNameLabel: "పంట పేరు",
        cropTypeLabel: "పంట రకం",
        quantityLabel: "మొత్తం",
        quantityPlaceholder: "కిలోగ్రాములలో పరిమాణం",
        harvestDateLabel: "చేర్చు తేదీ",
        qualityLabel: "గుణం / గ్రేడ్",
        expectedProcurementDate: "అంచనా ప్రొక్యూర్మెంట్ తేదీ",
        continueText: "కొనసాగించండి",
        procurementCentresTitle: "ప్రొక్యూర్మెంట్ సెంటర్లు",
        chooseCentreText: "దగ్గర సెంటర్ ఎంచుకోండి",
        viewDetails: "వివరాలు చూడండి",
        centreDetailsTitle: "సెంటర్ వివరాలు",
        openToday: "ఈరోజు తెరచింది",
        selectCentre: "సెంటర్ ఎంచుకోండి",
        bookYourSlot: "మీ స్లాట్ బుక్ చేయండి",
        chooseConvenientTime: "సౌకర్యవంతమైన సమయం ఎంచుకోండి",
        procurementDateLabel: "ప్రొక్యూర్మెంట్ తేదీ",
        availableTimeSlots: "అందుబాటులో ఉన్న సమయాలు",
        cropLabel: "పంట",
        quantityLabelBooking: "మొత్తం",
        procurementCentreLabel: "ప్రొక్యూర్మెంట్ సెంటర్",
        confirmBooking: "బుకింగ్ ధ్రువపరచండి",
        digitalTokenTitle: "డిజిటల్ టోకెన్",
        yourProcurementToken: "మీ ప్రొక్యూర్మెంట్ టోకెన్",
        yourTokenNumber: "మీ టోకెన్ సంఖ్య",
        bookingConfirmed: "బుకింగ్ నిర్ధారించబడింది",
        trackMyQueue: "నా క్యూ చూడండి",
        cancelBooking: "బుకింగ్ రద్దు చేయండి",
        trackMyQueueTitle: "నా క్యూ చూడండి",
        liveQueueSimulation: "లైవ్ క్యూల్ సిమ్యులేషన్",
        centreServingFarmers: "సెంటర్ రైతులను సేవిస్తోంది",
        currentlyServing: "ప్రస్తుతం సేవిస్తున్నది",
        yourToken: "మీ టోకెన్",
        farmersAhead: "ముందున్న రైతులు",
        estimatedWaiting: "అంచనా వేచి ఉండాల్సిన సమయం",
        queueInfoText: "మీ టోకెన్ సమీపిస్తే మీరు ప్రొక్యూర్మెంట్ సెంటర్కు రావచ్చు.",
        procurementStatusTitle: "ప్రొక్యూర్మెంట్ స్థితి",
        trackYourProcurement: "మీ ప్రొక్యూర్మెంట్‌ను ట్రాక్ చేయండి",
        inProgress: "ప్రక్రియలో ఉంది",
        statusSlotBooked: "స్లాట్ బుక్ చేయబడింది",
        statusSlotBookedText: "మీ స్లాట్ నిర్ధారించబడింది",
        statusFarmerArrived: "రైతు వచ్చారు",
        statusFarmerArrivedText: "చేరిన వివరాలు నమోదు చేయబడ్డాయి",
        statusVerificationCompleted: "వెరిఫికేషన్ పూర్తి",
        statusVerificationCompletedText: "రైతు వివరాలు ధృవీకరించబడ్డాయి",
        statusCropSubmitted: "పంట సమర్పించబడింది",
        statusCropSubmittedText: "పంట ప్రాసెస్ అవుతోంది",
        statusQualityCheck: "గుణవంతమైన తారతమ్యం",
        pendingText: "వేచి ఉంది",
        statusProcurementCompleted: "ప్రొక్యూర్మెంట్ పూర్తయింది",
        statusPaymentProcessing: "చెల్లింపు ప్రాసెస్ అవుతోంది",
        statusPaymentCompleted: "చెల్లింపు పూర్తయింది",
        paymentStatusTitle: "చెల్లింపు స్థితి",
        paymentStatusSubtitle: "ప్రొక్యూర్మెంట్ చెల్లింపు వివరాలు",
        procurementAmount: "ప్రొక్యూర్మెంట్ మొత్తం",
        paymentCompleted: "చెల్లింపు పూర్తయింది",
        cropLabelPayment: "పంట",
        quantityLabelPayment: "మొత్తం",
        procurementDatePayment: "ప్రొక్యూర్మెంట్ తేదీ",
        referenceNumber: "రిఫరెన్స్ సంఖ్య",
        paymentSuccessText: "మీ చెల్లింపు విజయవంతంగా ప్రాసెస్ అయింది.",
        notificationsTitle: "నోటిఫికేషన్లు",
        importantUpdates: "ముఖ్యమైన అప్‌డേറ്റ్స్",
        notificationSlotConfirmed: "స్లాట్ బుకింగ్ నిర్ధారించబడింది",
        notificationSlotConfirmedText: "మీ ప్రొక్యూర్మెంట్ స్లాట్ విజయవంతంగా బుక్ చేయబడింది.",
        notificationReminder: "ప్రొక్యూర్మెంట్ รีమైండర్",
        notificationReminderText: "మీ ప్రొక్యూర్మెంట్ స్లాట్ రేపు 10:00 AM కి ఉంది.",
        notificationQueueUpdate: "క్యూ అప్‌డేట్",
        notificationQueueUpdateText: "మీకు ముందు 5 రైతులు మాత్రమే ఉన్నారు.",
        notificationCentreSchedule: "సెంటర్ షెడ్యూల్ అప్‌డేట్",
        notificationCentreScheduleText: "ప్రొక్యూర్మెంట్ సెంటర్ ఈరోజు 5:00 PMకు మూసివేయబడుతుంది.",
        notificationProcurementCompleted: "ప్రొక్యూర్మెంట్ పూర్తయింది",
        notificationProcurementCompletedText: "మీ పంట ప్రొక్యూర్మెంట్ పూర్తయింది.",
        notificationPaymentCompleted: "చెల్లింపు పూర్తయింది",
        notificationPaymentCompletedText: "₹12,500 మీ ప్రొక్యూర్మెంట్కు జమ చేయబడింది.",
        myProfileTitle: "నా ప్రొఫైల్",
        farmerAccountDetails: "రైతు ఖాతా వివరాలు",
        farmerRole: "రైతు",
        profileFarmerNameLabel: "రైతు పేరు",
        profileMobileLabel: "మొబైల్ నంబర్",
        profileEmailLabel: "ఇమెయిల్",
        profileVillageLabel: "గ్రామం",
        profileDistrictLabel: "జిల్లా",
        profileFarmerIdLabel: "రైతు ఐడి",
        editProfile: "ప్రొఫైల్ సవరించండి",
        myBookings: "నా బుకింగ్స్",
        helpSupport: "సహాయం & మద్దతు",
        logout: "లాగ్అవుట్"
    }
};

let currentLanguage = "en";

function setLanguage(language) {
    currentLanguage = language;
    applyTranslations();
    localStorage.setItem("procurementLanguage", language);
}

function applyTranslations() {
    const dictionary = translations[currentLanguage] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (dictionary[key]) {
            element.setAttribute("placeholder", dictionary[key]);
        }
    });
}

function getStoredUsers() {
    try {
        return JSON.parse(localStorage.getItem("procurementUsers") || "[]");
    } catch (error) {
        return [];
    }
}

function getPendingFarmers() {
    try {
        return JSON.parse(localStorage.getItem("procurementPendingFarmers") || "[]");
    } catch (error) {
        return [];
    }
}

function savePendingFarmers(list) {
    localStorage.setItem("procurementPendingFarmers", JSON.stringify(list));
}

function saveStoredUsers(users) {
    localStorage.setItem("procurementUsers", JSON.stringify(users));
}

function getAssignedCentres() {
    try {
        return JSON.parse(localStorage.getItem("procurementAssignedCentres") || "[]");
    } catch (error) {
        return [];
    }
}

function saveAssignedCentres(list) {
    localStorage.setItem("procurementAssignedCentres", JSON.stringify(list));
}

function updateFarmerRecord(email, updates) {
    const users = getStoredUsers();
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex < 0) return null;

    users[userIndex] = { ...users[userIndex], ...updates };
    saveStoredUsers(users);

    const assignedFarmers = getAssignedCentres();
    const assignedIndex = assignedFarmers.findIndex((user) => user.email === email);
    if (assignedIndex >= 0) {
        assignedFarmers[assignedIndex] = { ...assignedFarmers[assignedIndex], ...updates };
        saveAssignedCentres(assignedFarmers);
    }

    return users[userIndex];
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
    farmer.status = farmer.status || "approved";
    localStorage.setItem("procurementCurrentUser", JSON.stringify(farmer));
}

function getNearbyCentresForFarmer(village, mandal) {
    const centreList = procurementCentres[mandal] || [];

    if (!centreList.length) {
        return [];
    }

    return centreList.map((centre, index) => ({
        ...centre,
        priority: village.toLowerCase().includes(centre.village.toLowerCase()) ? 1 : index + 2
    })).sort((a, b) => a.priority - b.priority);
}

function approveFarmerAndAssignCentre(farmerIndex, selectedCentreId) {
    const pendingFarmers = getPendingFarmers();
    const approvedFarmer = pendingFarmers[farmerIndex];

    if (!approvedFarmer || !selectedCentreId) {
        showToast("Please select a procurement centre first");
        return;
    }

    const allUsers = getStoredUsers();
    const userIndex = allUsers.findIndex((user) => user.email === approvedFarmer.email || user.mobile === approvedFarmer.mobile);

    if (userIndex >= 0) {
        allUsers[userIndex].status = "approved";
        allUsers[userIndex].mandal = approvedFarmer.mandal;
        allUsers[userIndex].assignedCentre = selectedCentreId;
        allUsers[userIndex].selectedCentreName = procurementCentres[approvedFarmer.mandal || "Bhimavaram"].find((centre) => centre.id === selectedCentreId)?.name || "Selected Centre";
        saveStoredUsers(allUsers);
    }

    approvedFarmer.status = "approved";
    approvedFarmer.assignedCentre = selectedCentreId;
    approvedFarmer.mandal = approvedFarmer.mandal || "Bhimavaram";
    approvedFarmer.selectedCentreName = procurementCentres[approvedFarmer.mandal].find((centre) => centre.id === selectedCentreId)?.name || "Selected Centre";

    const centreData = getAssignedCentres();
    const existing = centreData.findIndex((item) => item.email === approvedFarmer.email);

    if (existing >= 0) {
        centreData[existing] = approvedFarmer;
    } else {
        centreData.push(approvedFarmer);
    }

    saveAssignedCentres(centreData);

    pendingFarmers.splice(farmerIndex, 1);
    savePendingFarmers(pendingFarmers);

    renderAdminDashboard();
    showToast("Farmer verified and centre assigned");
}

function rejectFarmer(farmerIndex) {
    const pendingFarmers = getPendingFarmers();
    const rejectedFarmer = pendingFarmers[farmerIndex];
    if (!rejectedFarmer) return;

    updateFarmerRecord(rejectedFarmer.email, { status: "rejected", assignedCentre: null });
    pendingFarmers.splice(farmerIndex, 1);
    savePendingFarmers(pendingFarmers);
    renderAdminDashboard();
    showToast("Farmer application rejected");
}

function openAdminDashboard() {
    renderAdminDashboard();
    showScreen("adminDashboard");
}

function openStaffDashboard() {
    renderStaffFarmers();
    renderVillageMap();
    showScreen("staffDashboard");
}

function renderStaffFarmers() {
    const panel = document.getElementById("staffFarmersList");
    if (!panel) return;

    const assignedFarmers = getAssignedCentres();
    if (!assignedFarmers.length) {
        panel.innerHTML = '<div class="empty-panel">No farmers have been assigned to this centre yet.</div>';
        return;
    }

    panel.innerHTML = `
        <div class="table-wrap">
            <table class="admin-table staff-table">
                <thead>
                    <tr>
                        <th>Farmer</th>
                        <th>Village</th>
                        <th>Farmer ID</th>
                        <th>Centre</th>
                        <th>Status</th>
                        <th>Token</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${assignedFarmers.map((assignedFarmer) => `
                        <tr>
                            <td>${assignedFarmer.name}</td>
                            <td>${assignedFarmer.village}</td>
                            <td>${assignedFarmer.farmerId || "FARM-000"}</td>
                            <td>${assignedFarmer.selectedCentreName || "Assigned centre"}</td>
                            <td>
                                <span class="workflow-status ${assignedFarmer.procurementStatus || "Assigned"}">${assignedFarmer.procurementStatus || "Assigned"}</span>
                                <select class="staff-status-select" onchange="updateStaffFarmerStatus('${assignedFarmer.email}', this.value)">
                                    <option value="Assigned">Assigned</option>
                                    <option value="Arrived">Arrived</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Procurement Completed">Procurement Completed</option>
                                </select>
                            </td>
                            <td>${assignedFarmer.tokenNumber || "Not generated"}</td>
                            <td><button class="primary-btn small-btn" onclick="openStaffFarmerUpdate('${assignedFarmer.email}')">Update</button></td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function openStaffFarmerUpdate(email) {
    const assignedFarmer = getAssignedCentres().find((user) => user.email === email);
    if (!assignedFarmer) return;

    farmer = { ...farmer, ...assignedFarmer };
    localStorage.setItem("procurementCurrentUser", JSON.stringify(farmer));
    renderAssignedCentreSummary();
    showScreen("centreProcedure");
}

function updateStaffFarmerStatus(email, status) {
    updateFarmerRecord(email, { procurementStatus: status });
    renderStaffFarmers();
    showToast(`Farmer marked as ${status}`);
}

function renderVillageMap() {
    const panel = document.getElementById("villageMapPanel");
    if (!panel) return;

    panel.innerHTML = `
        <div class="map-board">
            <div class="map-legend">
                <span><i class="fa-solid fa-circle" style="color:#2e7d32"></i> Open</span>
                <span><i class="fa-solid fa-circle" style="color:#f59e0b"></i> Moderate</span>
                <span><i class="fa-solid fa-circle" style="color:#ef4444"></i> Busy</span>
            </div>

            <div class="map-grid">
                ${villageCentreMap.map((item) => {
                    const statusClass = item.status === "Open" ? "map-status open" : item.status === "Moderate" ? "map-status moderate" : "map-status busy";
                    return `
                        <div class="map-card">
                            <div class="map-marker">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="map-card-body">
                                <h4>${item.village}</h4>
                                <p>${item.centre}</p>
                                <div class="map-meta">
                                    <span>${item.distance}</span>
                                    <span>${item.slots}</span>
                                </div>
                                <span class="${statusClass}">${item.status}</span>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function renderAdminDashboard() {
    const panel = document.getElementById("adminFarmersList");
    if (!panel) return;

    const pendingFarmers = getPendingFarmers();
    const storedUsers = getStoredUsers();
    const farmerRecords = [...storedUsers];
    pendingFarmers.forEach((pendingFarmer) => {
        if (!farmerRecords.some((record) => record.email === pendingFarmer.email)) {
            farmerRecords.push(pendingFarmer);
        }
    });

    const pendingCount = farmerRecords.filter((item) => item.status === "pending").length;
    const approvedCount = farmerRecords.filter((item) => item.status === "approved").length;
    const rejectedCount = farmerRecords.filter((item) => item.status === "rejected").length;

    panel.innerHTML = `
        <div class="dashboard-stats">
            <div class="dashboard-stat"><strong>${farmerRecords.length}</strong><span>Total Farmers</span></div>
            <div class="dashboard-stat pending-stat"><strong>${pendingCount}</strong><span>Pending</span></div>
            <div class="dashboard-stat approved-stat"><strong>${approvedCount}</strong><span>Approved</span></div>
            <div class="dashboard-stat rejected-stat"><strong>${rejectedCount}</strong><span>Rejected</span></div>
        </div>
        <div class="table-tools">
            <input id="adminSearch" type="search" placeholder="Search farmer, village, mandal or ID" oninput="renderAdminTable()">
            <select id="adminStatusFilter" onchange="renderAdminTable()">
                <option value="all">All statuses</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>
        </div>
        <div id="adminTableArea"></div>
    `;

    renderAdminTable();
}

function renderAdminTable() {
    const panel = document.getElementById("adminTableArea");
    if (!panel) return;

    const pendingFarmers = getPendingFarmers();
    const storedUsers = getStoredUsers();
    const farmerRecords = [...storedUsers];
    pendingFarmers.forEach((pendingFarmer) => {
        if (!farmerRecords.some((record) => record.email === pendingFarmer.email)) {
            farmerRecords.push(pendingFarmer);
        }
    });

    const query = (document.getElementById("adminSearch")?.value || "").toLowerCase().trim();
    const status = document.getElementById("adminStatusFilter")?.value || "all";
    const filteredRecords = farmerRecords.filter((farmerItem) => {
        const searchable = [farmerItem.name, farmerItem.village, farmerItem.mandal, farmerItem.farmerId, farmerItem.mobile].join(" ").toLowerCase();
        return (status === "all" || farmerItem.status === status) && searchable.includes(query);
    });

    if (!filteredRecords.length) {
        panel.innerHTML = '<div class="empty-panel">No farmers match the selected filters.</div>';
        return;
    }

    panel.innerHTML = `
        <div class="table-wrap">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Farmer</th>
                        <th>Village</th>
                        <th>Mandal</th>
                        <th>Mobile</th>
                        <th>Farmer ID</th>
                        <th>Assign Centre</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredRecords.map((farmerItem) => {
                        const pendingIndex = pendingFarmers.findIndex((pendingFarmer) => pendingFarmer.email === farmerItem.email);
                        const nearbyCentres = getNearbyCentresForFarmer(farmerItem.village, farmerItem.mandal || "Bhimavaram");
                        const optionHtml = nearbyCentres.map((centre) => `
                            <option value="${centre.id}">${centre.name} (${centre.distance})</option>
                        `).join("");

                        return `
                            <tr>
                                <td>${farmerItem.name}</td>
                                <td>${farmerItem.village}</td>
                                <td>${farmerItem.mandal || "Bhimavaram"}</td>
                                <td>${farmerItem.mobile}</td>
                                <td>${farmerItem.farmerId || "FARM-000"}</td>
                                <td>
                                    <select class="admin-centre-select" data-email="${farmerItem.email}" ${farmerItem.status !== "pending" ? "disabled" : ""}>
                                        <option value="">Select centre</option>
                                        ${optionHtml}
                                    </select>
                                </td>
                                <td><span class="workflow-status ${farmerItem.status || "pending"}">${farmerItem.status || "pending"}</span></td>
                                <td>
                                    ${farmerItem.status === "pending" ? `
                                        <button class="primary-btn small-btn" onclick="approveFarmerAndAssignCentre(${pendingIndex}, this.closest('tr').querySelector('.admin-centre-select').value)">Verify</button>
                                        <button class="danger-btn small-btn" onclick="rejectFarmer(${pendingIndex})">Reject</button>
                                    ` : `<span class="table-muted">Reviewed</span>`}
                                </td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
            </table>
        </div>
    `;
}

function renderFarmerCentreOptions() {
    const container = document.getElementById("farmerCentreList");
    if (!container) return;

    const assignedCentres = getNearbyCentresForFarmer(farmer.village, farmer.mandal || "Bhimavaram");

    if (!assignedCentres.length) {
        container.innerHTML = '<p class="empty-state">No procurement centres available for your village yet.</p>';
        return;
    }

    container.innerHTML = assignedCentres.map((centre) => `
        <div class="centre-card">
            <div class="centre-title">
                <div class="card-icon"><i class="fa-solid fa-building"></i></div>
                <div>
                    <h3>${centre.name}</h3>
                    <p>${centre.village}</p>
                </div>
                <span class="status-badge success">${centre.type}</span>
            </div>
            <div class="centre-stats">
                <div><strong>${centre.distance}</strong><span>Distance</span></div>
                <div><strong>12</strong><span>Slots</span></div>
                <div><strong>8</strong><span>Queue</span></div>
                <div><strong>40 min</strong><span>Wait</span></div>
            </div>
            <button class="primary-btn small-btn" onclick="chooseCentre('${centre.id}', '${centre.name}')">
                Select This Centre
            </button>
        </div>
    `).join("");
}

function openFarmerCentreSelection() {
    renderFarmerCentreOptions();
    showScreen("centres");
}

function chooseCentre(centreId, centreName) {
    farmer.assignedCentre = centreId;
    farmer.selectedCentreName = centreName;
    localStorage.setItem("procurementCurrentUser", JSON.stringify(farmer));
    showToast("Centre selected successfully");
    setTimeout(() => showScreen("centreProcedure"), 700);
}

function loadFarmerAssignmentState() {
    const currentUser = JSON.parse(localStorage.getItem("procurementCurrentUser") || "null");
    if (currentUser && currentUser.email) {
        farmer = { ...farmer, ...currentUser };
    }
}

function renderAssignedCentreSummary() {
    const centreNameEl = document.getElementById("selectedCentreName");
    if (centreNameEl) {
        centreNameEl.textContent = farmer.selectedCentreName || "Central Procurement Centre";
    }
}

function submitCentreStaffUpdate() {
    const day = document.getElementById("slotDay").value;
    const slotType = document.getElementById("slotType").value;
    const timeSlot = document.getElementById("timeSlot").value;
    const personsAhead = document.getElementById("personsAhead").value;
    const extraNote = document.getElementById("staffNote").value;

    if (!day || !slotType || !timeSlot || !personsAhead) {
        showToast("Please fill all procurement details");
        return;
    }

    farmer.procurementSlot = {
        day,
        slotType,
        timeSlot,
        personsAhead,
        extraNote
    };

    farmer.procurementStatus = "Scheduled";

    const tokenNumber = `A${Math.floor(100 + Math.random() * 900)}`;
    farmer.tokenNumber = tokenNumber;
    updateFarmerRecord(farmer.email, {
        procurementSlot: farmer.procurementSlot,
        procurementStatus: farmer.procurementStatus,
        tokenNumber
    });
    localStorage.setItem("procurementCurrentUser", JSON.stringify(farmer));
    showToast("Token generated successfully");
    setTimeout(() => {
        document.getElementById("finalTokenNumber").textContent = tokenNumber;
        document.getElementById("finalTokenCentre").textContent = farmer.selectedCentreName || "Central Procurement Centre";
        document.getElementById("finalTokenDay").textContent = day;
        document.getElementById("finalTokenSlot").textContent = `${slotType} / ${timeSlot}`;
        document.getElementById("finalTokenQueue").textContent = personsAhead;
        showScreen("finalToken");
    }, 700);
}


/* =========================================
   SCREEN NAVIGATION
========================================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    if (screenId === "centres") {
        renderFarmerCentreOptions();
    }

    if (screenId === "adminDashboard") {
        renderAdminDashboard();
    }

    if (screenId === "staffDashboard") {
        renderVillageMap();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

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

    if (username === adminUser.email && password === adminUser.password) {
        showToast("Admin login successful");
        setTimeout(() => openAdminDashboard(), 700);
        return;
    }

    if (username === staffUser.email && password === staffUser.password) {
        showToast("Staff login successful");
        setTimeout(() => openStaffDashboard(), 700);
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

function staffLogin() {
    const username = document.getElementById("staffUser").value.trim();
    const password = document.getElementById("staffPassword").value;

    if (username === "" || password === "") {
        showToast("Please enter staff email and password");
        return;
    }

    if (username === staffUser.email && password === staffUser.password) {
        showToast("Staff login successful");
        setTimeout(() => openStaffDashboard(), 700);
        return;
    }

    showToast("Invalid staff credentials");
}

/* =========================================
   REGISTRATION
========================================= */

function registerFarmer() {

    const name = document.getElementById("regName").value.trim();
    const mobile = document.getElementById("regMobile").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;
    const village = document.getElementById("regVillage").value.trim();
    const district = document.getElementById("regDistrict").value.trim();
    const mandal = document.getElementById("regMandal").value.trim();
    const state = document.getElementById("regState").value.trim();
    const farmerId = document.getElementById("regFarmerId").value.trim();

    if (name === "" || mobile === "" || email === "" || password === "" || confirm === "" || village === "" || district === "" || mandal === "" || state === "") {
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
        mandal,
        state,
        farmerId: farmerId || "FARM-02345",
        status: "pending",
        assignedCentre: null,
        selectedCentreName: "",
        tokenNumber: ""
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

    const pendingFarmers = getPendingFarmers();
    const pendingIndex = pendingFarmers.findIndex(user => user.email === email || user.mobile === mobile);
    if (pendingIndex >= 0) {
        pendingFarmers[pendingIndex] = registeredUser;
    } else {
        pendingFarmers.push(registeredUser);
    }

    saveStoredUsers(storedUsers);
    savePendingFarmers(pendingFarmers);
    applyLoggedInUser(registeredUser);

    showToast("Registration sent to mandal admin");

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

        const savedLanguage = localStorage.getItem("procurementLanguage") || "en";
        currentLanguage = savedLanguage;

        const languageSelect = document.getElementById("languageSelect");
        if (languageSelect) {
            languageSelect.value = currentLanguage;
        }

        loadCurrentUser();
        setDefaultDates();
        updateFarmerUI();
        applyTranslations();

    }
);