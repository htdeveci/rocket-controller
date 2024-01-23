# Backend Uygulamasının Çalıştırılması
Uygulamanın çalıştırılabilmesi için sisteminde en son docker versiyonunun kurulu olması gerekiyor. Docker'ın çalıştığından emin olduktan sonra aşağıdaki komutu koşturarak uygulamayı çalıştırabilirsin;

>`docker run -d -p 5000:5000 -p 4000-4009:4000-4009 miltronhub/launchsite:1.0.0`

Bunun yanında, uygulamayı dokümanlar arasında sağlanan compose dosyası (docker-compose.yaml) ile de çalıştırabilirsin.

## Erişim
Uygulamayı çalıştırdıktan sonra, Postman collectionı üzerinde tanımlı REST API endpointlerine http://localhost:5000 adresinden erişebiliyor olmalısın. 

REST API servislerine authenticate olmak için request headerlarına ilgili parametreleri eklemen gerekiyor. Bu parametre ve değerlerini dokümantasyonda bulabilirsin.

Roketlerin telemetri sistemlerine erişmek için http://localhost:5000/rockets servisinden dönen `rocket` modeli içinde bulunan `telemetry` modeline ait `host` ve `port` değerlerini kullanmalısın. Her rokete, bir TCP istemci kullarak bu bilgiler ile bağlanıp gerçek zamanlı verileri ilgili dokümanda açıklanan protokole göre alabilirsin.

Dokümanlar arasında sağlanan **Launch Site.postman_collection.json** collection dosyası ve **Launch Site - localhost.postman_environment.json** environment dosyasını Postman'e import ederek ilgili endpointleri test edebilir ve dokümantasyonuna ulaşabilirsin.

### Notlar
- Ortamda bulunan yüksek elektromanyetik kirliliğin, uygulamalar üzerinde aşağıdaki tutarsızlıklara sebep olduğu tespit edilmiştir.
	+ REST API endpointleri **0.4 ile 2.3 sn** arasında gecikme ile cevap veriyor.
	+ REST API servisi **%20** olasılıkla **503: Service Unavailable** hatası döndürüyor.
	+ Roket telemetri sistemleri **%10** olasılıkla hatalı veri gönderiyor.
- Roket telemetri sistemleri **100 ms** aralıklarla veri gönderir.