window.onload = () => {
	function fmt(x){return x < 10 ? '0' + x : x;}

	setInterval(() => {
		document.getElementById('a').innerHTML =
		document.getElementById('b').innerHTML =
		document.getElementById('c').innerHTML =
			fmt(new Date().getHours()) + ':' + fmt(new Date()
			.getMinutes()) + ':' + fmt(new Date().getSeconds());
	},1);

	document.getElementById('add-task').onkeydown = e => {
		if(e.keyCode === 13) {
			e.preventDefault();
			const node = document.getElementById('t-task');
			const content = document.importNode(node.content,true);
			content.children[0].children[0].value = document.getElementById('add-task').value;
			content.children[0].children[1].onclick = (e) => {
				document.getElementById('tasks').removeChild(e.target.parentElement);
			};
			document.getElementById('tasks').appendChild(content);
		}
	}
};
