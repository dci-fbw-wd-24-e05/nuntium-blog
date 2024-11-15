// create a div
// create every element : img, p, h2, p (author), p(date), p(reading time), p(text)
//

export const card = (cardData) => {
  const { image, tag, title, author, date, readTime, text } = cardData;
  const element = document.createElement("div");
  const _image = document.createElement("img");
  const _tag = document.createElement("p");
  const _title = document.createElement("h2");
  const _author = document.createElement("p");
  const _date = document.createElement("p");
  const _readTime = document.createElement("p");
  const _text = document.createElement("p");
  _image.src = image;
  _tag.innerText = tag;
  _title.innerText = title;
  _author.innerText = author;
  _date.innerText = date;
  _readTime.innerText = readTime;
  _text.innerText = text;
  element.appendChild(_image);
  element.appendChild(_tag);
  element.appendChild(_title);
  element.appendChild(_author);
  element.appendChild(_date);
  element.appendChild(_readTime);
  element.appendChild(_text);
  return element;
};
