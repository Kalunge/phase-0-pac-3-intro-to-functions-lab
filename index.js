const shout = (string) => {
  return string.toUpperCase();
};

const whisper = (string) => {
  return string.toLowerCase();
};

const logShout = (string) => {
  console.log(string.toUpperCase());
};

const logWhisper = (string) => {
  return console.log(string.toLowerCase());
};

const sayHiToHeadphonedRoommate = (string) => {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else if(string === string.toUpperCase()) {
    return "YES INDEED!";
  }
};
