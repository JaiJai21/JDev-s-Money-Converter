const convertButton = document.querySelector(".convert-button")
const selectOption = document.querySelector(".converted-select-option")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const convertedCurrencyValue = document.querySelector(".currency-value")


    const dolarValue = 4.92
    const cadValue = 3.69
    const audValue = 3.31
    const nzdValue = 3.01
    const euroValue = 5.31
    const libraValue = 6.18
    const frSwitzerlandValue = 5.48
    const krNorwayValue = 0.45
    const krSuecaValue = 0.46
    const krDenValue = 0.71
    const yuanValue = 0.69
    const ieneValue = 0.035
    const bitcoinValue = 134808.86    


    if (selectOption.value == "dolar") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarValue)
    }

    if (selectOption.value == "cad") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue / cadValue)
    }

    if (selectOption.value == "aud") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue / audValue)
    }

    if (selectOption.value == "nzd") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-NZ", {
            style: "currency",
            currency: "NZD"
        }).format(inputCurrencyValue / nzdValue)
    }

    if (selectOption.value == "euro") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroValue)
    }

    if (selectOption.value == "libra") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraValue)
    }

    if (selectOption.value == "fSwit") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / frSwitzerlandValue)
    }

    if (selectOption.value == "krNw") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("no-NO", {
            style: "currency",
            currency: "NOK"
        }).format(inputCurrencyValue / krNorwayValue)
    }

    if (selectOption.value == "krSueca") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK"
        }).format(inputCurrencyValue / krSuecaValue)
    }

    if (selectOption.value == "krDen") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("da-DK", {
            style: "currency",
            currency: "DKK"
        }).format(inputCurrencyValue / krDenValue)
    }

    if (selectOption.value == "yuan") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanValue)
    }

    if (selectOption.value == "iene") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneValue)
    }

    if (selectOption.value == "bitcoin") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinValue)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const convertedLogoImage = document.querySelector(".converted-currency-logo")
    const convertedCurrencyName = document.querySelector(".currency-value")

    if (selectOption.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        convertedCurrencyName.innerHTML = "$ 0.0"
        convertedLogoImage.src = "./assets/Dolar.png"
    }

    if (selectOption.value == "cad") {
        currencyName.innerHTML = "Dólar Canadense"
        convertedCurrencyName.innerHTML = "C$ 0.0"
        convertedLogoImage.src = "./assets/Canada.png"
    }

    if (selectOption.value == "aud") {
        currencyName.innerHTML = "Dólar Australiano"
        convertedCurrencyName.innerHTML = "AU$ 0.0"
        convertedLogoImage.src = "./assets/Australia.png"
    }

    if (selectOption.value == "nzd") {
        currencyName.innerHTML = "Dólar Neozelandês"
        convertedCurrencyName.innerHTML = "NZ$ 0.0"
        convertedLogoImage.src = "./assets/New Zealand.png"
    }

    if (selectOption.value == "euro") {
        currencyName.innerHTML = "Euro €"
        convertedCurrencyName.innerHTML = "€ 0.0"
        convertedLogoImage.src = "./assets/Euro.png"
    }

    if (selectOption.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        convertedCurrencyName.innerHTML = "£ 0.0"
        convertedLogoImage.src = "./assets/England.png"
    }

    if (selectOption.value == "fSwit") {
        currencyName.innerHTML = "Franco Suíço"
        convertedCurrencyName.innerHTML = "Fr 0.0"
        convertedLogoImage.src = "./assets/Switzerland.png"
    }

    if (selectOption.value == "krNw") {
        currencyName.innerHTML = "Coroa Norueguesa"
        convertedCurrencyName.innerHTML = "Kr 0.0"
        convertedLogoImage.src = "./assets/Norway.png"
    }

    if (selectOption.value == "krSueca") {
        currencyName.innerHTML = "Coroa Sueca"
        convertedCurrencyName.innerHTML = "Kr 0.0"
        convertedLogoImage.src = "./assets/Sweden.png"
    }

    if (selectOption.value == "krDen") {
        currencyName.innerHTML = "Dinamarquesa"
        convertedCurrencyName.innerHTML = "Kr 0.0"
        convertedLogoImage.src = "./assets/Denmark.png"
    }

    if (selectOption.value == "yuan") {
        currencyName.innerHTML = "Yuan"
        convertedCurrencyName.innerHTML = "元|¥ 0.0"
        convertedLogoImage.src = "./assets/China.png"
    }

    if (selectOption.value == "iene") {
        currencyName.innerHTML = "Iene"
        convertedCurrencyName.innerHTML = "¥ 0.0"
        convertedLogoImage.src = "./assets/Japan.png"
    }

    if (selectOption.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        convertedCurrencyName.innerHTML = "₿ 0.0"
        convertedLogoImage.src = "./assets/Bitcoin.png"
    }

    convertValues()

}


selectOption.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)

