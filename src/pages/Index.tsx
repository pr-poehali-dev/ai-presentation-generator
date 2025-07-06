import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              PresentAI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Функции
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Цены
            </a>
            <a
              href="#support"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Поддержка
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button size="sm">Попробовать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-6 bg-blue-50 text-blue-700 border-blue-200"
          >
            <Icon name="Zap" size={16} className="mr-2" />
            Создание презентаций с помощью ИИ
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Превратите ваши идеи в{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              потрясающие презентации
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Просто опишите свою идею, и наш ИИ создаст профессиональную
            презентацию за считанные секунды. Никаких сложных настроек — только
            результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Создать презентацию
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              <Icon name="Video" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Image */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <img
              src="/img/f5ac7bfc-16ff-4b53-9de6-645705b137d9.jpg"
              alt="AI презентация"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Возможности ИИ
            </h2>
            <p className="text-xl text-gray-600">
              Создавайте презентации быстро и профессионально
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Анализ контента</CardTitle>
                <CardDescription>
                  ИИ анализирует ваш текст и создает логичную структуру слайдов
                  с правильным распределением информации
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Умный дизайн</CardTitle>
                <CardDescription>
                  Автоматически подбирает цвета, шрифты и макеты исходя из темы
                  и стиля вашей презентации
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Мгновенное создание</CardTitle>
                <CardDescription>
                  От идеи до готовой презентации за 30 секунд. Никаких сложных
                  настроек — только результат
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="Languages"
                    size={24}
                    className="text-orange-600"
                  />
                </div>
                <CardTitle className="text-xl">Многоязычность</CardTitle>
                <CardDescription>
                  Поддержка более 50 языков. Создавайте презентации на любом
                  языке с правильной грамматикой
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Download" size={24} className="text-red-600" />
                </div>
                <CardTitle className="text-xl">
                  Экспорт в любой формат
                </CardTitle>
                <CardDescription>
                  Скачивайте презентации в PowerPoint, PDF, Google Slides,
                  Keynote и других популярных форматах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Примеры презентаций
            </h2>
            <p className="text-xl text-gray-600">
              Посмотрите что может создать наш ИИ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Icon name="TrendingUp" size={48} className="mx-auto mb-2" />
                  <p className="text-lg font-semibold">Бизнес-презентация</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Квартальный отчет</CardTitle>
                <CardDescription>
                  15 слайдов с графиками, показателями и выводами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Посмотреть
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Icon
                    name="GraduationCap"
                    size={48}
                    className="mx-auto mb-2"
                  />
                  <p className="text-lg font-semibold">Обучающая презентация</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Основы маркетинга</CardTitle>
                <CardDescription>
                  25 слайдов с примерами, схемами и заданиями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Посмотреть
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Icon name="Lightbulb" size={48} className="mx-auto mb-2" />
                  <p className="text-lg font-semibold">Питч-презентация</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Стартап проект</CardTitle>
                <CardDescription>
                  10 слайдов с проблемой, решением и бизнес-моделью
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Посмотреть
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Создание презентации за 3 простых шага
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Опишите тему
              </h3>
              <p className="text-gray-600">
                Напишите несколько предложений о том, что должно быть в вашей
                презентации
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ИИ создает структуру
              </h3>
              <p className="text-gray-600">
                Искусственный интеллект анализирует текст и создает логичную
                структуру слайдов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Скачайте результат
              </h3>
              <p className="text-gray-600">
                Получите готовую презентацию в нужном формате и используйте её
                для своих целей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Простые цены
            </h2>
            <p className="text-xl text-gray-600">
              Выберите план, который подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Стартовый план */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full flex flex-col">
              <CardHeader className="text-center pb-6 pt-8 flex-shrink-0">
                <CardTitle className="text-2xl font-semibold text-gray-900 mb-6">
                  Стартовый
                </CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">₽299</span>
                </div>
                <p className="text-gray-600">в месяц</p>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">5 презентаций в месяц</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Базовые шаблоны</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Экспорт в PDF</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Email поддержка</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Профессиональный план */}
            <Card className="bg-white border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden h-full flex flex-col">
              <CardHeader className="text-center pb-6 pt-8 flex-shrink-0">
                <CardTitle className="text-2xl font-semibold text-gray-900 mb-6">
                  Профессиональный
                </CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">₽699</span>
                </div>
                <p className="text-gray-600">в месяц</p>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Безлимитные презентации
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Премиум шаблоны</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Все форматы экспорта</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Приоритетная поддержка
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Брендинг презентаций</span>
                  </li>
                </ul>
                <Button className="w-full h-12 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Корпоративный план */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full flex flex-col">
              <CardHeader className="text-center pb-6 pt-8 flex-shrink-0">
                <CardTitle className="text-2xl font-semibold text-gray-900 mb-6">
                  Корпоративный
                </CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ₽1999
                  </span>
                </div>
                <p className="text-gray-600">в месяц</p>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-grow flex flex-col justify-between">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Неограниченные презентации
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Командная работа</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Кастомные шаблоны</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Персональный менеджер</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">API интеграция</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">Белая маркировка</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы создать свою первую презентацию?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже создают
            презентации с помощью ИИ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            Без обязательств • Отменить в любое время • Техническая поддержка
            24/7
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Поддержка</h2>
            <p className="text-xl text-gray-600">Мы всегда готовы помочь вам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle>Чат поддержки</CardTitle>
                <CardDescription>
                  Получите мгновенную помощь от наших экспертов через онлайн-чат
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Открыть чат
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-green-600" />
                </div>
                <CardTitle>Email поддержка</CardTitle>
                <CardDescription>
                  Отправьте нам email и получите подробный ответ в течение 24
                  часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать письмо
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-purple-600" />
                </div>
                <CardTitle>База знаний</CardTitle>
                <CardDescription>
                  Найдите ответы на частые вопросы в нашей подробной
                  документации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Перейти к FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-xl font-semibold">PresentAI</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 PresentAI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
