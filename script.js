let posts = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function (response) {
		return response.json();
	})
	.then((data) => {
		useData(data);
	});

function useData(data) {
	let filteredDatas = data.filter((filteredData) => {
		return filteredData.userId === 1;
	});

	filteredDatas.forEach(({ title, body }) => {
		posts.innerHTML += `
            <h3>${title}</h3>
            <p>${body}</p>
        `;
	});
}
