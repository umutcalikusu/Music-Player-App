class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }
  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Seni İlk Gördüğümde", "Erkin Koray", "1.jpeg", "1.mp3"),
  new Music("Highway to Hell", "AC/DC", "2.jpeg", "2.mp3"),
  new Music("Smells Like Spirit", "Nirvana", "3.jpeg", "3.mp3"),
];
