import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('attractions');

  const attractions = [
    {
      id: 1,
      name: 'Stela "Arctic Circle"',
      nameRu: 'Стела "Полярный круг"',
      description: 'Iconic monument marking the Arctic Circle location, a must-visit landmark',
      category: 'Monument',
      image: '/placeholder.svg',
      location: 'Northern entrance'
    },
    {
      id: 2,
      name: 'Museum of the City',
      nameRu: 'Музей истории освоения и развития НПР',
      description: 'Learn about the history of gas industry development in Yamal region',
      category: 'Museum',
      image: '/placeholder.svg',
      location: 'Leningradsky pr.'
    },
    {
      id: 3,
      name: 'Park of Culture and Leisure',
      nameRu: 'Парк культуры и отдыха',
      description: 'Central park with walking paths, sculptures, and recreational facilities',
      category: 'Park',
      image: '/placeholder.svg',
      location: 'City center'
    },
    {
      id: 4,
      name: 'Ice Palace "Yamal Arena"',
      nameRu: 'Ледовый дворец "Ямал Арена"',
      description: 'Modern sports complex hosting hockey games and public ice skating',
      category: 'Sports',
      image: '/placeholder.svg',
      location: 'Sportivnaya st.'
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Yamalo-Nenetsky',
      cuisine: 'Russian, Northern cuisine',
      description: 'Traditional northern dishes and Russian classics',
      price: '$$',
      hours: '11:00 - 23:00'
    },
    {
      id: 2,
      name: 'Sushi Master',
      cuisine: 'Japanese, Asian',
      description: 'Fresh sushi and Asian fusion cuisine',
      price: '$$$',
      hours: '12:00 - 24:00'
    },
    {
      id: 3,
      name: 'Coffee House',
      cuisine: 'Café, European',
      description: 'Cozy café with pastries, coffee, and light meals',
      price: '$',
      hours: '08:00 - 22:00'
    },
    {
      id: 4,
      name: 'Tundra',
      cuisine: 'Contemporary Russian',
      description: 'Modern interpretation of traditional recipes',
      price: '$$$',
      hours: '12:00 - 23:00'
    }
  ];

  const mapLocations = [
    { name: 'Arctic Circle Stela', coords: 'Northern District' },
    { name: 'City Museum', coords: 'Central District' },
    { name: 'Main Square', coords: 'City Center' },
    { name: 'Shopping Centers', coords: 'Various locations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="MapPin" size={32} className="text-sky-500" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Novy Urengoy</h1>
              <p className="text-sm text-slate-600">Travel Guide</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
              <Icon name="Thermometer" size={14} className="mr-1" />
              Arctic Climate
            </Badge>
          </div>
        </div>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <img 
          src="/placeholder.svg" 
          alt="Novy Urengoy cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to Novy Urengoy
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl text-slate-200 animate-fade-in">
            Gateway to the Arctic • Gas Capital of Russia
          </p>
          <div className="flex gap-4 mt-8 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <Icon name="Users" size={24} className="mx-auto mb-2" />
              <p className="text-sm">120,000+ residents</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <Icon name="MapPin" size={24} className="mx-auto mb-2" />
              <p className="text-sm">Yamalo-Nenets region</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <Icon name="Snowflake" size={24} className="mx-auto mb-2" />
              <p className="text-sm">Arctic Circle</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-auto p-1 mb-12">
            <TabsTrigger value="attractions" className="flex items-center gap-2 py-3">
              <Icon name="Landmark" size={18} />
              <span>Attractions</span>
            </TabsTrigger>
            <TabsTrigger value="restaurants" className="flex items-center gap-2 py-3">
              <Icon name="Utensils" size={18} />
              <span>Restaurants</span>
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2 py-3">
              <Icon name="Map" size={18} />
              <span>City Map</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="attractions" className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-900 mb-3">Top Attractions</h3>
              <p className="text-lg text-slate-600">Discover the unique landmarks of the Arctic city</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {attractions.map((attraction) => (
                <Card key={attraction.id} className="hover-scale overflow-hidden border-slate-200 hover:shadow-xl transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <CardTitle className="text-xl">{attraction.name}</CardTitle>
                      <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                        {attraction.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{attraction.nameRu}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-3">
                      {attraction.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="MapPin" size={16} className="text-sky-500" />
                      <span>{attraction.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="restaurants" className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-900 mb-3">Restaurants & Cafés</h3>
              <p className="text-lg text-slate-600">Taste local and international cuisines</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="hover-scale border-slate-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-1">{restaurant.name}</CardTitle>
                        <p className="text-sm text-sky-600 font-medium">{restaurant.cuisine}</p>
                      </div>
                      <Badge variant="outline" className="text-lg">
                        {restaurant.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600">{restaurant.description}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 pt-2 border-t border-slate-100">
                      <Icon name="Clock" size={16} className="text-sky-500" />
                      <span>{restaurant.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-slate-900 mb-3">City Map</h3>
              <p className="text-lg text-slate-600">Navigate through key locations</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-slate-200">
                <CardContent className="p-8">
                  <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 opacity-50" />
                    <div className="relative z-10 text-center">
                      <Icon name="Map" size={64} className="mx-auto mb-4 text-sky-500" />
                      <p className="text-slate-600 text-lg">Interactive map area</p>
                      <p className="text-slate-500 text-sm mt-2">Key locations marked below</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {mapLocations.map((location, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{location.name}</p>
                          <p className="text-sm text-slate-500">{location.coords}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Useful Information</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Icon name="Thermometer" size={32} className="mb-2 text-sky-400" />
                  <CardTitle>Climate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Arctic climate. Winter: -25°C to -45°C. Summer: +10°C to +25°C</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Icon name="Phone" size={32} className="mb-2 text-sky-400" />
                  <CardTitle>Emergency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Police: 102<br/>Ambulance: 103<br/>Fire: 101</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Icon name="Info" size={32} className="mb-2 text-sky-400" />
                  <CardTitle>Language</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Russian is the main language. English is limited in tourist areas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>© 2024 Novy Urengoy Travel Guide • Your gateway to the Arctic</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
