export default function getCharacteristicEmoticon() {
  const emoticonList = [
    {
      emoticonText: 'happy',
      text: 'bem',
      color: 'red',
      emoticon: require('../../assets/humores/happy.png'),
    },
    {
      emoticonText: 'confused',
      text: 'confuso',
      color: 'blue',
      emoticon: require('../../assets/humores/confused.png'),
    },
    {
      emoticonText: 'sad',
      text: 'triste',
      color: 'green',
      emoticon: require('../../assets/humores/sad.png'),
    },
    {
      emoticonText: 'sleeping',
      text: 'sono',
      color: 'orange',
      emoticon: require('../../assets/humores/sleeping.png'),
    },
    {
      emoticonText: 'nervous',
      text: 'mal',
      color: 'purple',
      emoticon: require('../../assets/humores/nervous.png'),
    },
  ];
  return emoticonList;
}
