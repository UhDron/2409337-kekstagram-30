//import {getPhotoArrays} from './data';

const pictureTemplate = document.querySelector('#picture').content.querySelector('a');
const picturesContaner = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
//const pictures = getPhotoArrays();

function fillPictureCard ({url, description, comments, likes}) {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('picture__img').src = url;
  newPicture.querySelector('picture__img').alt = description;
  newPicture.querySelector('picture__comments').textContent = comments;
  newPicture.querySelector('picture__likes').textContent = likes;
  return newPicture;
}

export function showPictureCards (data) {
  data.forEach((ojct) => {
    fragment.appendChild(fillPictureCard(ojct));
  });
  picturesContaner.appendChild(fragment);
}


// pictures.forEach(({url, description, comments, likes}) => {
//   const newPicture = pictureTemplate.cloneNode(true);
//   newPicture.querySelector('picture__img').src = url;
//   newPicture.querySelector('picture__img').alt = description;
//   newPicture.querySelector('picture__comments').textContent = comments;
//   newPicture.querySelector('picture__likes').textContent = likes;
//   fragment.appendChild(newPicture);
// });
// picturesContaner.appendChild(fragment);
