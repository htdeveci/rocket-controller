# Tanım
Yeni kurulan bir roket kalkış istayonu için komuta kontrol uygulması geliştirmen gerekiyor. Geliştireceğin bu uygulama, kullanıcıya sağladığı arayüz üzerinden, sahada bulunan roketlerin mevcut durumunu anlık olarak göstermeli ve arayüz tarafından sağlanan bileşenler ile istenilen roketin kullanıcı tarafından kontrol edilmesine olanak sağlamalıdır.

Ayrıca, uygulama kullanıcısı, bir roketin fırlatma kararını alırken, anlık hava koşulları bilgisine de sağlanan arayüz üzerinden ulaşabilmeli ve fırlatma kararını bu parametreleri değerlendirerek vermelidir.

## Kullanıcı Hikayeleri
- Bir uygulama kullanıcısı olarak, sahada bulunan tüm roketleri, tüm bilgileri ile birlikte, sağlanan arayüz üzerinden görebilmeliyim.
- Bir uygulama kullanıcısı olarak, arayüzde gösterilen roketlerin telemetri verilerini, gerçek zamanlı olarak izleyebilmeliyim.
- Bir uygulama kullanıcısı olarak, arayüzde gösterilen roketlerin durumlarını, gerçek zamanlı olarak izleyebilmeliyim.
- Bir uygulama kullanıcısı olarak, arayüzde gösterilen roketlerde taşınan yükün içeriğini görebilmeliyim.
- Bir uygulama kullanıcısı olarak, roketlere ait telemetri sistemlerinin bağlantı durumlarını arayüz üzerinde görebilmeliyim.
- Bir uygulama kullanıcısı olarak, her bir roketi, arayüz üzerinden fırlatabilmeliyim.
- Bir uygulama kullanıcısı olarak, güncel hava durumunu, sağlanan arayüz üzerinden, anlık olarak izleyebilmeliyim.

# Geliştirme
Geliştireceğin uygulama, sağlanan backend uygulaması ile haberleşerek yukarıda listelelen kullanıcı hikayerini yerine getirmelidir. Backend uygulaması, sahada bulunan roketleri ve bu roketleri ait bilgileri JSON formatında ileten bir REST API sağlamaktadır. Ayrıca roketlerin verilerinin gerçek zamanlı alınabilmesi için, her roket üzerinde TCP üzerinden veri gönderen bir telemetri servisi bulunmaktadır. 

Geliştireceğin uygulama bu arayüzler üzerinden backend uygulaması ile haberleşmeli ve gerekli verileri bu iki arayüzden toplayarak kullanıcıya sunmalıdır. 

## Kullanılacak araçlar, teknolojiler
Uygulama geliştirme için istediğin dil, ortam ve araçları kullanabilirsin.

# Dokümanlar
- **README.md** dosyasında backend uygulamasının çalıştırılması ile ilgili yönergelere ulaşabilirsin. Geliştirmeye başlamadan önce Postman üzerinden uygulamanın doğru çalışıp çalışmadığını denemeyi unutma.
- REST API dokümanına **Launch Site.postman_collection.json** dosyasını Postman uygulamasına import ederek ulaşabilirsin.
- Telemetri sistemlerine ait protokol **Rocket Telemetry System Communication Protocol Definition.pdf** dokümanında tanımlanmıştır.


# Gereklilikler
- Docker
- Postman

# Deployment
Geliştirdiğin uygulamaya ait tüm kaynak kod ve varsa dokümanları, Git versiyon kontrol sistemi üzerine kurulu herhangi bir sağlayıcı (github, gitlab v.b.) üzerinde oluşturacağın public repository linki ile bize iletebilirsin.


# Değerlendirme
İletilen kaynak kod aşağıdaki kriterlere göre değerlendirilecektir.

- Uygulanan teknikler
- Okunabilirlik
- Yeniden kullanılabilirlik
- Kodun genel yapısı
- Birim testler
- Performans
- Gerçeklenen kullanıcı senaryosu sayısı