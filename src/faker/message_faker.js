export default () => {
  const dictionary = [
    'Hello Hooman!',
    'Let us talk about Rocket Science',
    'ItadakimasuBot',
    'Lorem ipsum not color',
    'Konichiwa',
    'You are boring, better check 9gag',
    'Hello from Mars',
    'Parrots are best pets',
    'Buy me iphone x please',
    'Do you like carrot?'
  ];

  return dictionary[Math.floor(Math.random() * dictionary.length)]
};
