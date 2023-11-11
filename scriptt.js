function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Hesap bilgileri kontrolü
    if ((username === 'admin' && password === 'basketbol') ||
        (username === 'okan' && password === 'futbol')) {
        // Başarılı giriş, IP coğrafi konum sorgusu gönder
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=202bf4ddd3c3466a83e5978b4dacc8f7')
            .then(response => response.json())
            .then(ipData => 
                // Burada coğrafi konum verilerini kullanabilirsiniz
                // Örneğin, şehir bilgisini errorMessage div'ine ekleyebilirsiniz:
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
