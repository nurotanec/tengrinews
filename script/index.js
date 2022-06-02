//* Header
const header = document.createElement('div');
header.classList.add('header');

const headerContainer = document.createElement('div');
headerContainer.classList.add('container', 'flex-center');

const logo = document.createElement('img');

const formSearch = document.createElement('form');
formSearch.classList.add('form-search');

const searchLabel = document.createElement('label');
searchLabel.classList.add('search-label');

const searchInput = document.createElement('input');
searchInput.classList.add('search-input');
searchInput.type = 'search';
searchInput.name = 'search';

const searchBtn = document.createElement('button');
searchBtn.classList.add('search-submit');
searchBtn.type = 'submit';
searchBtn.innerHTML = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.0995 16.1287L19.7849 18.8127C19.9101 18.9424 19.9794 19.1161 19.9778 19.2963C19.9763 19.4766 19.904 19.649 19.7765 19.7765C19.649 19.904 19.4766 19.9763 19.2963 19.9778C19.1161 19.9794 18.9424 19.9101 18.8127 19.7849L16.1274 17.0995C14.3725 18.603 12.1036 19.3683 9.79661 19.235C7.48964 19.1016 5.32399 18.0799 3.75408 16.3843C2.18418 14.6886 1.33206 12.4508 1.37654 10.1404C1.42101 7.82998 2.35862 5.62661 3.99261 3.99261C5.62661 2.35862 7.82998 1.42101 10.1404 1.37654C12.4508 1.33206 14.6886 2.18418 16.3843 3.75408C18.0799 5.32399 19.1016 7.48964 19.235 9.79661C19.3683 12.1036 18.603 14.3725 17.0995 16.1274V16.1287ZM10.3125 17.875C12.3182 17.875 14.2417 17.0782 15.66 15.66C17.0782 14.2417 17.875 12.3182 17.875 10.3125C17.875 8.30679 17.0782 6.38324 15.66 4.96499C14.2417 3.54675 12.3182 2.74999 10.3125 2.74999C8.30679 2.74999 6.38324 3.54675 4.96499 4.96499C3.54675 6.38324 2.74999 8.30679 2.74999 10.3125C2.74999 12.3182 3.54675 14.2417 4.96499 15.66C6.38324 17.0782 8.30679 17.875 10.3125 17.875Z" fill="#212121" />
</svg>`

searchLabel.append(searchInput, searchBtn);

const countryChoice = document.createElement('select');
countryChoice.classList.add('js-choice');
countryChoice.name = 'country';

const option = document.createElement('option');
option.value = '';
option.textContent = 'Выберите страну';
countryChoice.append(option);

const countries = {
    'ru': 'Россия',
    'ua': 'Украина',
    'us': 'США',
    'de': 'Германия',
    'cz': 'Чехия',
    'pl': 'Польша',
    'cz': 'Чехия',
    'lv': 'Латвия',
    'lt': 'Литва',
};

for (const [key, value] of Object.entries(countries)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = value;
    countryChoice.append(option);
}

formSearch.append(searchLabel, countryChoice);

headerContainer.append(logo, formSearch);
header.append(headerContainer);

//* Main
const main = document.createElement('main');
const titleWrapper = document.createElement('div');
titleWrapper.classList.add('title-wrapper');

const titleContainer = document.createElement('div');
titleContainer.classList.add('container');

const hiddenTitle = document.createElement('h1');
hiddenTitle.classList.add('visually-hidden');
hiddenTitle.textContent = 'Агрегатор новостей';
const title = document.createElement('h2');
title.classList.add('title');
title.textContent = 'По вашему запросу “Россия” найдено 8 результатов';

titleContainer.append(hiddenTitle, title);
titleWrapper.append(titleContainer);

const newsSection = document.createElement('section');

main.append(titleWrapper, newsSection);

//* footer
const footer = document.createElement('footer');
footer.classList.add('footer');

//* assemble everythin
document.body.append(header);
document.body.append(main);
document.body.append(footer);