import React, { useState, useEffect } from 'react';
import { Smartphone, Laptop, Monitor, Wrench, Clock, Shield, CheckCircle, Star, Phone, MapPin, Mail, ChevronRight, Zap, Award, Users, Gamepad2, Tag } from 'lucide-react';

export default function CanakkaleTeknoloji() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Smartphone, name: 'Telefonlar', time: 'Geniş Yelpaze', price: 'En İyi Fiyatlar', items: ['iPhone & Samsung', 'Aksesuarlar', 'Kılıf & Ekran Koruyucu'] },
    { icon: Laptop, name: 'Bilgisayarlar', time: 'Laptop & Masaüstü', price: 'Kampanyalı Fiyatlar', items: ['Dizüstü Bilgisayar', 'Masaüstü PC', 'Yazılım & Donanım'] },
    { icon: Gamepad2, name: 'Gaming & Hobi', time: 'Oyuncu Ekipmanları', price: 'Özel İndirimler', items: ['Gaming PC', 'Konsol & Oyunlar', 'Çevre Birimleri'] },
    { icon: Wrench, name: 'Teknik Servis', time: '1-3 Gün', price: '₺99\'dan Başlayan', items: ['Ekran Değişimi', 'Yazılım Desteği', 'Donanım Tamiri'] },
  ];

  const features = [
    { icon: Tag, title: 'Açılışa Özel', desc: 'İlk hafta %15 indirim fırsatı' },
    { icon: Shield, title: '1 Yıl Garanti', desc: 'Tüm ürünlerimizde resmi garanti' },
    { icon: Award, title: 'Uzman Kadro', desc: 'Sertifikalı teknik ekibimiz' },
    { icon: Zap, title: 'Hızlı Teslimat', desc: 'Şehir içi aynı gün teslimat' },
  ];

  const reviews = [
    { name: 'Mehmet K.', rating: 5, text: 'Çanakkale\'de böyle bir teknoloji mağazası açılmasına çok sevindim. Fiyatlar çok uygun ve personel çok ilgili!' },
    { name: 'Ayşe D.', rating: 5, text: 'Laptop almak için gittim, çok detaylı bilgi verdiler. Açılış indirimi de çok iyi. Kesinlikle tavsiye ederim!' },
    { name: 'Can Y.', rating: 5, text: 'Gaming ekipmanları için harika bir yer. İstanbul\'a gitmeme gerek kalmadı artık. Teşekkürler!' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  Çanakkale Teknoloji
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-600">Teknoloji Merkezi</p>
              </div>
            </div>
            <a href="tel:02861234567" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Hemen Ara</span>
              <span className="sm:hidden">Ara</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Grand Opening Banner */}
          <div className="mb-8 sm:mb-12 text-center">
            <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5" />
                <span className="font-bold text-lg sm:text-xl">🎉 AÇILIŞA ÖZEL %15 İNDİRİM!</span>
                <Tag className="w-5 h-5" />
              </div>
            </div>
            <p className="mt-3 text-sm sm:text-base text-gray-600 font-semibold">İlk Hafta Tüm Ürünlerde Geçerli - Kaçırmayın!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-[#1e3a8a] fill-[#1e3a8a]" />
                <span className="text-xs sm:text-sm font-semibold text-[#1e40af]">5/5 Müşteri Memnuniyeti</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Çanakkale'nin<br />
                <span className="text-[#1e3a8a]">Teknoloji Merkezi</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                Telefondan bilgisayara, gaming ekipmanlarından teknik servise kadar tüm teknoloji ihtiyaçlarınız için tek adres. Açılışa özel %15 indirim fırsatını kaçırmayın!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#urunler" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                  Ürünleri İncele
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#iletisim" className="border-2 border-gray-300 hover:border-[#1e3a8a] hover:bg-blue-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                  Mağazayı Ziyaret Et
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200">
                {[
                  { num: '500+', label: 'Farklı Ürün' },
                  { num: '%15', label: 'Açılış İndirimi' },
                  { num: '1 Yıl', label: 'Resmi Garanti' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-[#1e3a8a]">
                      {stat.num}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Ürün Kategorilerimiz</h3>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveService(idx)}
                        className={`p-4 sm:p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                          activeService === idx
                            ? 'bg-blue-50 border-[#1e3a8a] shadow-md'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 ${activeService === idx ? 'text-[#1e3a8a]' : 'text-gray-400'}`} />
                        <h4 className="font-semibold text-sm sm:text-base mb-1 text-gray-900">{service.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">{service.time}</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#1e3a8a] mt-2">{service.price}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Neden <span className="text-[#1e3a8a]">Çanakkale Teknoloji?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Kaliteli ürünler, uygun fiyatlar ve güvenilir hizmet
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="urunler" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Ürün <span className="text-[#1e3a8a]">Kategorilerimiz</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Tüm teknoloji ihtiyaçlarınız için geniş ürün yelpazesi
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-6 sm:p-8">
                    <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#1e3a8a] mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
                    <div className="space-y-2 mb-4 sm:mb-6">
                      <p className="text-sm sm:text-base text-gray-600">{service.time}</p>
                      <p className="text-lg sm:text-xl font-bold text-[#1e3a8a]">{service.price}</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Detaylı Bilgi
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Müşteri <span className="text-[#1e3a8a]">Yorumları</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-[#1e3a8a] fill-[#1e3a8a]" />
              ))}
            </div>
            <p className="text-gray-600 text-base sm:text-lg">Müşterilerimizden tam not</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a8a] fill-[#1e3a8a]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-900">{review.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Doğrulanmış Müşteri</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="iletisim" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Mağazamızı Ziyaret Edin
              </h2>
              <p className="text-base sm:text-xl text-blue-50 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Açılışa özel %15 indirim fırsatını kaçırmayın! Tüm ürünlerimizi yerinde görün, uzman ekibimizden bilgi alın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
                <a href="tel:02861234567" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1e3a8a] px-8 py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  0286 123 45 67
                </a>
                <a href="mailto:info@canakkaleteknoloji.com" className="w-full sm:w-auto bg-[#1e40af] hover:bg-[#1e3a8a] text-white border-2 border-blue-400 px-8 py-4 rounded-lg font-bold text-base sm:text-lg transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  E-posta Gönder
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-100 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>İsmetpaşa Mah. Demircioğlu Cad. No:45, Çanakkale</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Pzt-Cmt: 09:00-19:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Çanakkale Teknoloji</span>
              </div>
              <p className="text-sm text-gray-400">
                Çanakkale'nin güvenilir teknoloji merkezi - 2024'ten beri.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Ürün Kategorileri</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Telefonlar</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Bilgisayarlar</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Gaming & Hobi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Teknik Servis</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Kurumsal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Garanti Şartları</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Müşteri Yorumları</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">İletişim</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>0286 123 45 67</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@canakkaleteknoloji.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>İsmetpaşa Mah. Demircioğlu Cad. No:45, Çanakkale</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Çanakkale Teknoloji Merkezi. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}