let day = 'Thursday'

switch (day) {
    case 'Monday':
    case 'Tuesday':
        console.log("9am");
        break
    case 'Wednesday':
        console.log("7am");
        break
    case 'Thursday':
    case 'Friday':
        console.log("10am");
        break
    case 'Saturday':
    case 'Sunday':
        console.log("8am");
        break
    default:
        console.log("Sleep all day");
        break;
}