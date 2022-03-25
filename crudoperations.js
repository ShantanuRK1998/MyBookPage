let id="no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').innerHTML="";
	let bookName=document.getElementById('bookname').value;
	let authorName=document.getElementById('authorname').value;
	let bookPrice=document.getElementById('bookprice').value;
	let bookDescription=document.getElementById('bookdescription').value;
	if(bookName=='' && authorName=='' && bookPrice=='' && bookDescription=='')
	{
		document.getElementById('msg').innerHTML='Please enter your name';
	}
	else
	{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[bookname];
				setCrudData(data);
			}else{
				arr.push(name);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]=bookName;
			arr[id]=authorName;
			arr[id]=bookPrice;
			arr[id]=bookDescription;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('bookname').value='00';
		document.getElementById('authorname').value='00';
		document.getElementById('bookprice').value='00';
		document.getElementById('bookdescription').value='00';
		selectData();
	}
}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
00
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('bookName').value=arr[rid];
	document.getElementById('authorname').value=arr[rid];
	document.getElementById('bookprice').value=arr[rid];
	document.getElementById('bookdescription').value=arr[rid];
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crudoperation'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crudoperation',JSON.stringify(arr));
}