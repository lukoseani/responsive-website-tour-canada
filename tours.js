
const readElement = document.querySelector('.js-read-more');
console.log(readElement);
const newDataElement = document.querySelector('.js-yukon-body');
console.log(newDataElement);
let isClicked = true;

readElement.addEventListener('click',()=>

{
  if(isClicked){
  newDataElement.innerHTML = `The Yukon, a territory in northwest Canada, is wild, mountainous and sparsely populated. Kluane National Park and Reserve includes Mount Logan, Canada’s highest peak, as well as glaciers, trails and the Alsek River. In the far north is Ivvavik National Park, with protected calving grounds for Porcupine caribou.`
  isClicked = false;
  }
  else{
    newDataElement.textContent = `
                Breathtaking Landscapes,
                Rich Indigenous Culture,
                Outdoor Adventures etc.`
  isClicked = true;
  }
});

const peggyElement = document.querySelector('.js-read-more-peggy');
const newPeggyDataElement = document.querySelector('.js-peggy-body');
console.log(newPeggyDataElement);
isClicked = true;

peggyElement.addEventListener('click',()=>

{
  if(isClicked){
    newPeggyDataElement.innerHTML = `Peggy's Cove is a small rural community located on the eastern shore of St. Margarets Bay in the Halifax Regional Municipality, which is the site of Peggys Cove Lighthouse.Peggy's Cove comprises one of the numerous small fishing communities located around the perimeter of the Chebucto Peninsula.`
    isClicked = false;
  }
  else{
    newPeggyDataElement.textContent = `
    Scenic Coastal Setting,
    Iconic Lighthouse,
    Cultural Experiences etc.`
  isClicked = true;
  }
});


const banffElement = document.querySelector('.js-read-more-banff');
const newBanffDataElement = document.querySelector('.js-banff-body');
console.log(newBanffDataElement);
isClicked = true;

banffElement.addEventListener('click',()=>

{
  if(isClicked){
    newBanffDataElement.innerHTML = `Banff's natural beauty, outdoor adventures, and cultural offerings make it a must-visit destination for travelers seeking a pristine mountain escape. Whether you're exploring immersing yourself in the town's vibrant culture, Banff promises a memorable experience in the heart of the Canadian Rockies.`
    isClicked = false;
  }
  else{
    newBanffDataElement.textContent = `
    Photography Paradise,
    Star Gazing, Winter Wonderland etc.`
  isClicked = true;
  }
});


