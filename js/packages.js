// packages.js - simulated package database with timestamps
const packages = {
  "TRZ1001": {
    status: "Picked Up",
    proof: null,
    timestamps: {
      pickedUp: "2025-12-22 09:15 AM",
      enRoute: null,
      delivered: null
    }
  },
  "TRZ1002": {
    status: "En Route",
    proof: null,
    timestamps: {
      pickedUp: "2025-12-22 08:50 AM",
      enRoute: "2025-12-22 09:30 AM",
      delivered: null
    }
  },
  "TRZ1003": {
    status: "Delivered",
    proof: "images/tz-package-delivered.jpg",
    timestamps: {
      pickedUp: "2025-12-21 11:00 AM",
      enRoute: "2025-12-21 12:00 PM",
      delivered: "2025-12-21 01:20 PM"
    }
  },
  "TRZ1004": {
    status: "Picked Up",
    proof: null,
    timestamps: {
      pickedUp: "2025-12-22 10:00 AM",
      enRoute: null,
      delivered: null
    }
  },
  "TRZ1005": {
    status: "En Route",
    proof: null,
    timestamps: {
      pickedUp: "2025-12-22 07:45 AM",
      enRoute: "2025-12-22 08:15 AM",
      delivered: null
    }
  }
};
