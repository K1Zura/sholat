var baseUrl = 'https://api.myquran.com/v2'

async function getKota(){
    const response = await fetch(`${baseUrl}/sholat/kota/semua`)
    const data = await response.json()
    const selectCity = document.getElementById("selectCity")

    data.data.forEach(city => {
        const option = document.createElement("option")
        option.value = city.id
        option.textContent = city.lokasi
        selectCity.appendChild(option)
    });
}

async function getJadwalSholat(){
    const city = document.getElementById("selectCity").value
    const today = new Date()
    const formatDateToDay = today.toISOString().split('T')[0]
    const response = await fetch(`${baseUrl}/sholat/jadwal/${city}/${formatDateToDay}`)
    const data = await response.json()
    
    const jadwal = data.data.jadwal

    const jadwalSholat = document.getElementById("jadwalSholat")

    jadwalSholat.innerHTML = `
        <div class="jadwal-item"><span>Subuh : </span>${jadwal.subuh}</div>
        <div class="jadwal-item"><span>Dzuhur : </span>${jadwal.dzuhur}</div>
        <div class="jadwal-item"><span>Ashar : </span>${jadwal.ashar}</div>
        <div class="jadwal-item"><span>Maghrib : </span>${jadwal.maghrib}</div>
        <div class="jadwal-item"><span>Isya : </span>${jadwal.isya}</div>
    `
    document.getElementById("message").style.display = 'none'
    // console.log(jadwal)
}
// getJadwalSholat()

getKota()


// console.log()
// console.log()
// console.log()

