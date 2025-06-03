const offset = 0; // меняй это: 0, 40, 80, 120...

fetch("https://lenta.com/api-gateway/v1/catalog/items", {
  headers: {
    "accept": "application/json",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "deviceid": "4510ea36-9404-2b70-04b7-b7b73aaf3c05",
    "pragma": "no-cache",
    "referer": "https://lenta.com/catalog/chajj-250/",
    "sessiontoken": "368A98A2463E3792A9E2C63C22C79DC0",
    "x-device-id": "4510ea36-9404-2b70-04b7-b7b73aaf3c05",
    "x-device-os": "Web",
    "x-device-os-version": "12.4.8",
    "x-domain": "moscow",
    "x-platform": "omniweb",
    "x-retail-brand": "lo"
  },
  referrer: "	https://lenta.com/catalog/hleb-bulochki-20773/",
  body: JSON.stringify({
    filters: {
      range: [],
      checkbox: [],
      multicheckbox: []
    },
    categoryId: 20773,
    storeCode: "0299",
    sort: { type: "popular", order: "desc" },
    limit: 40,
    offset: offset
  }),
  method: "POST",
  mode: "cors",
  credentials: "include"
})
  .then(response => {
    if (!response.ok) throw new Error(`Ошибка запроса: ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log("✅ Успешно. Найдено товаров:", data);
    console.log(data.items);
  })
  .catch(error => {
    console.error("❌ Ошибка:", error.message);
  });
