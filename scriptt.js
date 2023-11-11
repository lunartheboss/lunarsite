function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Hesap bilgileri kontrolü
    if ((username === 'admin' && password === 'basketbol') ||
        (username === 'okan' && password === 'futbol')) {
        // Başarılı giriş, IP coğrafi konum sorgusu gönder
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(ipData => {
                console.log('IP Geolocation Data:', ipData);
                // Burada coğrafi konum verilerini kullanabilirsiniz
                // Örneğin, şehir bilgisini errorMessage div'ine ekleyebilirsiniz:
                errorMessage.textContent = `Başarılı giriş! Şehir: ${ipData.city}`;
            })
            .catch(error => console.error('Error fetching IP geolocation data:', error));
    } else {
        // Yanlış giriş, hata mesajı göster
        errorMessage.textContent = 'Yanlış giriş, tekrar dene';
        // Sayfayı yenile
        setTimeout(() => {
            location.reload();
        }, 2000); // 2000 milisaniye (2 saniye) sonra sayfayı yenile
    }
}
