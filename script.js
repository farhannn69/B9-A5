const allSeats = document.getElementsByClassName("kbd");
let selectedSeats = [];

let seatLeftElement = document.getElementById("seats-left");
let currentSeatLeft = parseInt(seatLeftElement.innerText);
const applyButton = document.getElementById("apply-btn");

for (const seat of allSeats) {
    seat.addEventListener("click", (e) => {
        const selectedSeat = e.target.id;
        if (selectedSeats.length < 4) {
            if (!selectedSeats.includes(selectedSeat)) {
                selectedSeats.push(selectedSeat);
                let seatDetails = document.getElementById(selectedSeat);
                seatDetails.classList.remove("bg-[#F7F8F8]");
                seatDetails.classList.add("bg-[#1DD100]");
                seatDetails.classList.add("text-white");
                seatDetails.classList.remove("opacity-50");
                seatLeftElement.innerText = currentSeatLeft = currentSeatLeft - 1;

                if (selectedSeats.length != 0 && selectedSeats.length < 5) {
                    if (selectedSeats.length == 1) {
                        const seatDetailElement = document.getElementById("seat-detail1");
                        const c2Element = seatDetailElement.querySelector("p:first-child");
                        c2Element.textContent = selectedSeat;
                        seatDetailElement.classList.remove("hidden");
                    }
                    if (selectedSeats.length == 2) {
                        const seatDetailElement = document.getElementById("seat-detail2");
                        const c2Element = seatDetailElement.querySelector("p:first-child");
                        c2Element.textContent = selectedSeat;
                        seatDetailElement.classList.remove("hidden");
                    }
                    if (selectedSeats.length == 3) {
                        const seatDetailElement = document.getElementById("seat-detail3");
                        const c2Element = seatDetailElement.querySelector("p:first-child");
                        c2Element.textContent = selectedSeat;
                        seatDetailElement.classList.remove("hidden");
                    }
                    if (selectedSeats.length == 4) {
                        const seatDetailElement = document.getElementById("seat-detail4");
                        const c2Element = seatDetailElement.querySelector("p:first-child");
                        c2Element.textContent = selectedSeat;
                        seatDetailElement.classList.remove("hidden");
                    }
                }

                const seatCountElement = document.getElementById("seat-count");
                seatCountElement.innerText = selectedSeats.length;

                const totalPriceElement = document.getElementById("totalPrice");
                let totalPrice = 550 * selectedSeats.length;
                totalPriceElement.innerText = totalPrice;

                const grandPriceElement = document.getElementById("grandPrice");
                let granPrice = 550 * selectedSeats.length;
                grandPriceElement.innerText = granPrice;

                if (selectedSeats.length == 4) {
                    applyButton.removeAttribute('disabled');
                    applyButton.classList.remove('bg-gray-300')
                    applyButton.classList.add('bg-[#1DD100]')
                    couponLogic()
                } else {
                    applyButton.setAttribute("disabled", true);
                    applyButton.classList.add('bg-gray-300')
                }
                nextButtonLogic()

            } else {
                alert("Seat Already Selected!");
            }
        } else {
            alert("You Can Select Maximum 4 Seats");
        }
    });
}

function couponLogic() {
    applyButton.addEventListener("click", () => {
        const couponElement = document.getElementById("coupon")
        const coupon = couponElement.value;

        if (coupon == "NEW15") {
            const grandTotal = (550 * 4) - ((550 * 4) * (15 / 100));
            const grandPriceElement = document.getElementById("grandPrice");
            grandPriceElement.innerText = grandTotal;

            const discountElement = document.getElementById('discount')
            discountElement.classList.remove('hidden')
            const discountPrice = ((550 * 4) * (15 / 100))
            const DiscountPriceElement = document.getElementById("discountPrice");
            DiscountPriceElement.innerText = discountPrice

            const applySection = document.getElementById('apply-section')
            applySection.classList.add('hidden')

        } else if (coupon == "Couple 20") {
            const grandTotal = (550 * 4) - ((550 * 4) * (20 / 100));
            const grandPriceElement = document.getElementById("grandPrice");
            grandPriceElement.innerText = grandTotal;

            const discountElement = document.getElementById('discount')
            discountElement.classList.remove('hidden')
            const discountPrice = ((550 * 4) * (20 / 100))
            const DiscountPriceElement = document.getElementById("discountPrice");
            DiscountPriceElement.innerText = discountPrice

            const applySection = document.getElementById('apply-section')
            applySection.classList.add('hidden')
        } else {
            alert("Wrong Coupon!")
        }
    });
}

function nextButtonLogic() {
    document.getElementById('phone').addEventListener('keyup', (e) => {
        let phone = e.target.value
        const nextButton = document.getElementById('next-btn')
        if (!phone == '') {
            nextButton.removeAttribute("disabled");
            nextButton.classList.remove('bg-gray-300')
            nextButton.classList.add('bg-[#1DD100]')
        } else {
            nextButton.setAttribute("enabled", true);
            nextButton.classList.add('bg-gray-300')
        }
    })
}

document.getElementById('next-btn').addEventListener('click', () => {
    const successMsg = document.getElementById('success')
    successMsg.classList.remove('hidden')

    const headerSection = document.getElementById('header')
    const mainSection = document.getElementById('main')
    headerSection.classList.add('hidden')
    mainSection.classList.add('hidden')
})

document.getElementById('continue-btn').addEventListener('click', () => {
    location.href = '';

})