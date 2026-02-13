

//switch 


//syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('mar');
        break;
    case 4:
        console.log('Apr');
        break;
    case 5:
        console.log('May');
        break;

    default:
        console.log(`default case match`);
        break;
}

// output Mar



const months = "Jan"

switch (months) {
    case 'Jan':
        console.log('Jan');
        break;
    case 'Feb':
        console.log('Feb');
        break;
    case 'mar':
        console.log('mar');
        break;
    case 'Apr':
        console.log('Apr');
        break;
    case 'May':
        console.log('May');
        break;

    default:
        console.log(`default case match`);
        break;
}

// output Jan
