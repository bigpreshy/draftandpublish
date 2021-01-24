//Services

fetch('http://localhost:1337/articles').then((response) => {
		return response.json();
	})
	.then((data)=>{
		let title= "";
		let body = "";
		
	
			data.forEach(elem => {

				const MasterDiv = document.getElementById('published');
				console.log('foreach', elem.title);
				const DivElement = document.createElement('div')
				DivElement.classList.add('w3-quarter');
				let img = document.createElement('img'); 
				 img.src =  "https://images.unsplash.com/photo-1609793507849-2e6b61836e44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"; 
				 img.style.width = '100%';
				 img.alt = 'Jcole';
				 let bigtitle = document.createElement('h3')
				 bigtitle.innerText = `${elem.title}`;
				 let bigbody = document.createElement('p')
				 bigbody.innerText = `${elem.body}`;
                 DivElement.append(img, bigtitle, bigbody);
				 MasterDiv.append(DivElement);


		
		});

		
	})


	// Unpublished stuff will be here

	fetch('http://localhost:1337/articleunpublisheds').then((response) => {
		return response.json();
	})
	.then((data)=>{
		let title= "";
		let body = "";
		

	
	data.forEach(elem => {

		const MasterDiv = document.getElementById('unpublished');
		console.log('foreach', elem.title);
		const DivElement = document.createElement('div')
		DivElement.classList.add('w3-quarter');
		let img = document.createElement('img'); 
		 img.src =  "https://images.unsplash.com/photo-1609793507849-2e6b61836e44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"; 
		 img.style.width = '100%';
		 img.alt = 'Jcole';
		 let bigtitle = document.createElement('h3')
		 bigtitle.innerText = `${elem.title}`;
		 let bigbody = document.createElement('p')
		 bigbody.innerText = `${elem.body}`;
		 DivElement.append(img, bigtitle, bigbody);
		 MasterDiv.append(DivElement);


	

});
})   
