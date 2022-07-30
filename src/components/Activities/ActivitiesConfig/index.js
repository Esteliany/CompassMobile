function ActivitiesConfig() {
  const namesOfActivities = {
    sports: 'esportes',
    cooking: 'cozinhar',
    games: 'jogos',
    shopping: 'compras',
    good_meal: 'boa refeição',
    party: 'festa',
    rest: 'descanso',
    date: 'encontro',
    movies: 'filmes e séries',
  };

  const iconsOfActivities = {
    sports: 'directions-run',
    cooking: 'local-dining',
    games: 'sports-esports',
    shopping: 'shopping-cart',
    good_meal: 'dinner-dining',
    party: 'celebration',
    rest: 'self-improvement',
    date: 'location-on',
    movies: 'local-movies',
  };
  return {namesOfActivities, iconsOfActivities};
}

export default ActivitiesConfig;
