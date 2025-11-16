import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { upcomingGroups } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Groups = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredGroups =
    filter === 'all'
      ? upcomingGroups
      : upcomingGroups.filter((g) => g.cities.some((c) => c.toLowerCase().includes(filter)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a2f4a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">{t('upcomingGroups')}</h1>
          <p className="text-gray-300 text-lg">
            Join guided group tours with experienced organizers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-[#1a2f4a]' : ''}
          >
            All Tours
          </Button>
          <Button
            variant={filter === 'iraq' ? 'default' : 'outline'}
            onClick={() => setFilter('iraq')}
            className={filter === 'iraq' ? 'bg-[#1a2f4a]' : ''}
          >
            Iraq Tours
          </Button>
          <Button
            variant={filter === 'iran' ? 'default' : 'outline'}
            onClick={() => setFilter('iran')}
            className={filter === 'iran' ? 'bg-[#1a2f4a]' : ''}
          >
            Iran Tours
          </Button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <Card key={group.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-56">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                  {group.seatsLeft} {t('seatsLeft')}
                </Badge>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg mb-1">{group.title}</h3>
                  <p className="text-gray-200 text-sm">{group.organizer}</p>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-[#d4af37]" />
                    <span>
                      {new Date(group.departure).toLocaleDateString()} -{' '}
                      {new Date(group.return).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-[#d4af37]" />
                    <span>{group.cities.join(' • ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-[#d4af37]" />
                    <span>
                      {group.totalSeats - group.seatsLeft}/{group.totalSeats} booked
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.inclusions.slice(0, 3).map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                    {group.inclusions.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{group.inclusions.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#1a2f4a]">
                        ${group.price}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">{t('perPerson')}</span>
                    </div>
                    <Link to={`/groups/${group.id}`}>
                      <Button className="bg-[#d4af37] hover:bg-[#c49f27] text-[#1a2f4a]">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-500">No group tours found for this filter.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Groups;