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
              Мощные возможности
            </h2>
            <p className="text-xl text-gray-600">
              Все что нужно для создания идеальных презентаций
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Генерация из текста</CardTitle>
                <CardDescription>
                  Превращает любой текст в структурированную презентацию с
                  логичными слайдами
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
                  Автоматически подбирает цвета, шрифты и макеты для вашей темы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Download" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">
                  Экспорт в любой формат
                </CardTitle>
                <CardDescription>
                  Скачивайте презентации в PowerPoint, PDF, Google Slides и
                  других форматах
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Простые цены
            </h2>
            <p className="text-xl text-gray-600">
              Выберите план, который подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стартовый</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  ₽299
                </div>
                <p className="text-gray-600">в месяц</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>10 презентаций в месяц</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Базовые шаблоны</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Экспорт в PDF</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 shadow-xl scale-105">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-blue-600">Популярный</Badge>
                <CardTitle className="text-2xl">Профессиональный</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  ₽699
                </div>
                <p className="text-gray-600">в месяц</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Безлимитные презентации</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Премиум шаблоны</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Все форматы экспорта</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Корпоративный</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  ₽1999
                </div>
                <p className="text-gray-600">в месяц</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Неограниченные презентации</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Командная работа</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Кастомные шаблоны</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mr-3"
                    />
                    <span>Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Поддержка</h2>
            <p className="text-xl text-gray-600">Мы всегда готовы помочь вам</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
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
