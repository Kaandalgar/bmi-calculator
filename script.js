
document.getElementById('bmi-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const kilo = Number(document.getElementById('weight').value);
  const boy = Number(document.getElementById('height').value) / 100;

  const sonuc = kilo / (boy * boy);

  let mesaj = '';

  if (sonuc < 18.5) {
    mesaj = `İdeal kilonun altında (${sonuc.toFixed(2)})`;
  } else if (sonuc >= 18.5 && sonuc <= 24.9) {
    mesaj = `İdeal kiloda (${sonuc.toFixed(2)})`;
  } else if (sonuc >= 25 && sonuc <= 29.9) {
    mesaj = `Fazla kilolu (${sonuc.toFixed(2)})`;
  } else if (sonuc >= 30 && sonuc <= 39.9) {
    mesaj = `İdeal kilonun çok üstünde (obez) (${sonuc.toFixed(2)})`;
  } else if (sonuc >= 40) {
    mesaj = `İdeal kilonun çok üstünde (morbid obez) (${sonuc.toFixed(2)})`;
  } else {
    mesaj = "Geçerli bir değer giriniz.";
  }

  document.getElementById('result').textContent = mesaj;
});
