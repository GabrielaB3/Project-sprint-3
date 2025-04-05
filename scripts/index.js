const initialCards = [{name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
  {name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
  {name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
  {name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
  {name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
  {name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},
];

const editProfileBtn = document.querySelector('.profile__edit-button');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector ('.modal__close-btn');
const editProfileform = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editDescriptionInput = editProfileModal.querySelector('#profile-description-inpput');


const newPostBtn = document.querySelector('.profile__add-button');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-btn');
const addCardFormEl = newPostModal.querySelector('.modal__form');
const cardLinkInput = newPostModal.querySelector('#card-image-input');
const cardCaptionInput = newPostModal.querySelector('#card-caption-input');

const profileNameEl = document.querySelector('.profile__name');
const profileDescriptionEl = document.querySelector('.profile__description');


editProfileBtn.addEventListener("click", function(){
  editProfileNameInput.value = profileNameEl.textContent;
  editDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_opened");
})

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_opened");
})



newPostBtn.addEventListener("click", function() {
  newPostModal.classList.add("modal_opened");
})

newPostCloseBtn.addEventListener("click", function() {
  newPostModal.classList.remove("modal_opened");

})

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editDescriptionInput.value;
  editProfileModal.classList.remove("modal_opened");
}

editProfileform.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(cardLinkInput.value);
  console.log(cardCaptionInput);
  newPostModal.classList.remove("modal_opened");
}

addCardFormEl.addEventListener('submit', handleAddCardSubmit);