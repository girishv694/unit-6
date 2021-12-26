const container = document.querySelector('.container')

const url = 'http://api.adorable.io/avatars/'

  function getRandNum(){
  	return Math.floor(Math.random()*100);

  }


 function loadImages(numImages = 10){
	let i=0;
	while(i<numImages){
		const img = document.createElement('img')
		img.src = `${url}${getRandNum()}`
		container.appendChild(img);
		i++;
	}
}

loadImages()