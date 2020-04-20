
let fields = {
    FirstName: 'Cris',
    LastName: 'Test',
    Email: 'cris@spiralyze.com',
    Phone: '1234567890',
    Title: 'Tester',
    Job_Role__c: 'Other',
    Company: 'Spiralyze',
    Country: 'Philippines',
    Main_Product_Interest__c: 'Digital, Social'
};

let dropdowns = [
    'Job_Role__c',
    'Country',
    'Main_Product_Interest__c'
];

function prefill() {
    for (let property in fields) {
        let element = document.getElementById(property);
        console.log(property, element);
        if (element) {
            element.value = fields[property];

            if (dropdowns.indexOf(property) >= 0) {
                setTimeout(function () {
                    element.dispatchEvent(new Event('change'));
                }, 500);
            }
        }
    }
}

function waitForElement() {
    let element = document.getElementById('FirstName');
    console.log('Element', element);
    if (element) {
        prefill();
    } else {
        setTimeout(waitForElement, 100);
    }
}

setTimeout(waitForElement, 100);
