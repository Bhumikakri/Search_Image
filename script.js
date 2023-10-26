let input = document.querySelector(".searchInput");
let btnn = document.querySelector(".ser_btn")
let showImage = document.querySelector(".imgContainer");
let shobtn = document.querySelector(".sho");
shobtn.style.display = "none";

// let val = searching.children[1].value;
// console.log(val)
// let val = input.value;
btnn.addEventListener("click",(e)=>{
// console.log(val);
showImage.innerHTML ='';
    let val = input.value;
    e.preventDefault();
    // let data = await fetch('https://api.unsplash.com/photos/?client_id=qrwMD0m7vvD9Az05YJ9EHH2OPndIKLZdVQuQ7TIfZKc');
    //     let res = await data.json();
    fetchdata(val,1);
    shobtn.style.display = "block";
})

let page = 1;

async function fetchdata(val,pg){
    let data = await fetch(`https://api.unsplash.com/search/photos/?page=${pg}&query=${val}&client_id=qrwMD0m7vvD9Az05YJ9EHH2OPndIKLZdVQuQ7TIfZKc`);
    let res = await data.json();
    console.log(data);
    showdata(res.results);
}




function showdata(result){
    result.forEach((item)=>{
        let image = document.createElement("div");
        image.classList.add("image");

        let imgg = document.createElement("div");
        imgg.classList.add("imgg");

        let ele = document.createElement("img");
        ele.src = item.urls.small;
        
        let img_name = document.createElement("div");
        img_name.classList.add("imgName");
        img_name.innerText = `${item.alt_description}`;
        
    imgg.appendChild(ele);
    image.appendChild(imgg);
    image.appendChild(img_name);
    showImage.appendChild(image);

    })
}

shobtn.addEventListener("click", ()=>{
    page++;
    fetchdata(input.value,page);
})





















// https://api.unsplash.com/photos/?client_id=
//qrwMD0m7vvD9Az05YJ9EHH2OPndIKLZdVQuQ7TIfZKc