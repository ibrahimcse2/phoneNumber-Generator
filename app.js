
function genarateNumber() {
    const countryList = document.getElementById("countryList").value;

    const quantityClear = document.getElementById("quantity")

    const quantity = document.getElementById("quantity").value;

    let numbers = [ ]

    if (countryList === "+880 1") {
        for( let i = 0; i < quantity ; i++){

            numbers.push(Math.floor(Math.random() * 900000000) + 100000000);
        }
    } 
    else if ( countryList === "+1" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+54" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+55" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+1" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+358" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+33" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+98" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+964" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+39" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }
    else if ( countryList === "+60" ) {

        for( let i = 0; i < quantity ; i++){
            numbers.push(Math.floor(Math.random() * 90000000000) + 10000000000);
        }

    }


    // Display the generated numbers
    // countryList.value()
    let result = document.getElementById("result");

    quantityClear.value = " "

    let value = result.innerHTML =   countryList

    for (let i = 0; i < numbers.length; i++) {
  
      let list = document.createElement("li");
      
    //   hello.value = numbers[i]

      list.textContent =   numbers[i]
      result.appendChild(list);
    }
}
genarateNumber()