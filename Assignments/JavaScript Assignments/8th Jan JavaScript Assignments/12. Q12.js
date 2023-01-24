// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();

const year = date.toLocaleString("default", { year: "numeric" });
const month = date.toLocaleString("default", { month: "2-digit" });
const day = date.toLocaleString("default", { day: "2-digit" });

// YYYY-MM-DD HH:mm
console.log(
  `${year}-${month}-${day} ${date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`
);

// DD-MM-YYYY HH:mm
console.log(
  `${day}-${month}-${year} ${date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`
);

// DD/MM/YYYY HH:mm
console.log(
  date.toLocaleString("default", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);
